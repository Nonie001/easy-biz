// Email service configuration
// Supports: Resend, SendGrid, Nodemailer

interface EmailOptions {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  from?: string;
  replyTo?: string;
  attachments?: Array<{
    filename: string;
    content: Buffer | string;
    contentType?: string;
  }>;
}

interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

// Using Resend (recommended)
async function sendWithResend(options: EmailOptions): Promise<EmailResult> {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  
  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not configured");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: options.from || "Easy Biz <noreply@easybiz.co.th>",
        to: Array.isArray(options.to) ? options.to : [options.to],
        subject: options.subject,
        html: options.html,
        text: options.text,
        reply_to: options.replyTo,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send email");
    }

    return { success: true, messageId: data.id };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Email templates
export function getLeadNotificationEmail(lead: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: string;
  message: string;
}) {
  return {
    subject: `[Easy Biz] ลูกค้าใหม่: ${lead.name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #facc15;">🎉 ลูกค้าใหม่ติดต่อเข้ามา!</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>ชื่อ:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${lead.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>อีเมล:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${lead.email}">${lead.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>โทรศัพท์:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${lead.phone}">${lead.phone}</a></td>
          </tr>
          ${lead.company ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>บริษัท:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${lead.company}</td>
          </tr>
          ` : ""}
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>บริการที่สนใจ:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${lead.serviceType}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;">
          <strong>ข้อความ:</strong>
          <p style="white-space: pre-wrap;">${lead.message}</p>
        </div>
        
        <p style="margin-top: 20px; color: #666; font-size: 14px;">
          ส่งจากเว็บไซต์ Easy Biz
        </p>
      </div>
    `,
  };
}

export async function sendEmail(options: EmailOptions): Promise<EmailResult> {
  // Use Resend as default provider
  return sendWithResend(options);
}

export async function sendLeadNotification(lead: Parameters<typeof getLeadNotificationEmail>[0]) {
  const email = getLeadNotificationEmail(lead);
  return sendEmail({
    to: process.env.NOTIFICATION_EMAIL || "contact@easybiz.co.th",
    ...email,
  });
}
