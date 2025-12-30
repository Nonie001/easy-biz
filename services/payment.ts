// Payment Service - Connect to Stripe, Omise, or PromptPay
// Configure based on your preferred payment provider

interface PaymentIntent {
  amount: number;
  currency?: string;
  description?: string;
  metadata?: Record<string, string>;
  customerEmail?: string;
}

interface PaymentResult {
  success: boolean;
  paymentId?: string;
  clientSecret?: string;
  qrCode?: string; // For PromptPay
  error?: string;
}

// Stripe Integration
async function createStripePayment(intent: PaymentIntent): Promise<PaymentResult> {
  const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

  if (!STRIPE_SECRET_KEY) {
    return { success: false, error: "Stripe not configured" };
  }

  try {
    const response = await fetch("https://api.stripe.com/v1/payment_intents", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        amount: String(intent.amount * 100), // Convert to satang/cents
        currency: intent.currency || "thb",
        description: intent.description || "",
        "metadata[source]": "easybiz",
        ...(intent.customerEmail && { receipt_email: intent.customerEmail }),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Failed to create payment");
    }

    return {
      success: true,
      paymentId: data.id,
      clientSecret: data.client_secret,
    };
  } catch (error) {
    console.error("Stripe error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Omise Integration (Thai payment gateway)
async function createOmisePayment(intent: PaymentIntent): Promise<PaymentResult> {
  const OMISE_SECRET_KEY = process.env.OMISE_SECRET_KEY;

  if (!OMISE_SECRET_KEY) {
    return { success: false, error: "Omise not configured" };
  }

  try {
    const response = await fetch("https://api.omise.co/charges", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(OMISE_SECRET_KEY + ":").toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        amount: String(intent.amount * 100),
        currency: intent.currency || "thb",
        description: intent.description || "",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create charge");
    }

    return {
      success: true,
      paymentId: data.id,
    };
  } catch (error) {
    console.error("Omise error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// PromptPay QR Code (using external service)
async function createPromptPayQR(intent: PaymentIntent): Promise<PaymentResult> {
  const PROMPTPAY_ID = process.env.PROMPTPAY_ID; // Phone number or national ID

  if (!PROMPTPAY_ID) {
    return { success: false, error: "PromptPay ID not configured" };
  }

  try {
    // Generate PromptPay QR code using external API
    // You can use services like promptpay.io or generate locally
    const qrApiUrl = `https://promptpay.io/${PROMPTPAY_ID}/${intent.amount}.png`;

    return {
      success: true,
      paymentId: `PP-${Date.now()}`,
      qrCode: qrApiUrl,
    };
  } catch (error) {
    console.error("PromptPay error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Main payment interface
export const payment = {
  createPayment: async (intent: PaymentIntent): Promise<PaymentResult> => {
    const provider = process.env.PAYMENT_PROVIDER || "promptpay";

    switch (provider) {
      case "stripe":
        return createStripePayment(intent);
      case "omise":
        return createOmisePayment(intent);
      case "promptpay":
        return createPromptPayQR(intent);
      default:
        return { success: false, error: "Payment provider not configured" };
    }
  },

  verifyPayment: async (paymentId: string): Promise<{ success: boolean; status: string }> => {
    // TODO: Implement verification based on provider
    console.log("Verify payment:", paymentId);
    return { success: true, status: "pending" };
  },

  getPaymentMethods: () => {
    const methods = [];
    if (process.env.STRIPE_SECRET_KEY) methods.push("credit_card");
    if (process.env.OMISE_SECRET_KEY) methods.push("credit_card", "internet_banking");
    if (process.env.PROMPTPAY_ID) methods.push("promptpay");
    methods.push("bank_transfer"); // Always available
    return methods;
  },
};
