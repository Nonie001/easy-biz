// CRM Service - Connect to HubSpot, Zoho, or Notion
// Configure based on your preferred CRM system

interface Contact {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  properties?: Record<string, string>;
}

interface CRMResult {
  success: boolean;
  contactId?: string;
  error?: string;
}

// HubSpot Integration
async function createHubSpotContact(contact: Contact): Promise<CRMResult> {
  const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;

  if (!HUBSPOT_API_KEY) {
    return { success: false, error: "HubSpot API key not configured" };
  }

  try {
    const response = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: {
            email: contact.email,
            firstname: contact.name.split(" ")[0],
            lastname: contact.name.split(" ").slice(1).join(" "),
            phone: contact.phone,
            company: contact.company,
            ...contact.properties,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create contact");
    }

    return { success: true, contactId: data.id };
  } catch (error) {
    console.error("HubSpot error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Notion Integration (as a simple CRM)
async function createNotionContact(contact: Contact): Promise<CRMResult> {
  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const NOTION_DATABASE_ID = process.env.NOTION_LEADS_DATABASE_ID;

  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
    return { success: false, error: "Notion not configured" };
  }

  try {
    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_API_KEY}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { database_id: NOTION_DATABASE_ID },
        properties: {
          Name: { title: [{ text: { content: contact.name } }] },
          Email: { email: contact.email },
          Phone: { phone_number: contact.phone },
          Company: { rich_text: [{ text: { content: contact.company || "" } }] },
          Status: { select: { name: "New" } },
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create page");
    }

    return { success: true, contactId: data.id };
  } catch (error) {
    console.error("Notion error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Main CRM interface
export const crm = {
  createContact: async (contact: Contact): Promise<CRMResult> => {
    const provider = process.env.CRM_PROVIDER || "none";

    switch (provider) {
      case "hubspot":
        return createHubSpotContact(contact);
      case "notion":
        return createNotionContact(contact);
      default:
        console.log("CRM not configured, skipping contact creation");
        return { success: true, contactId: "local" };
    }
  },

  updateContact: async (contactId: string, data: Partial<Contact>): Promise<CRMResult> => {
    // TODO: Implement update based on provider
    console.log("Update contact:", contactId, data);
    return { success: true };
  },

  addNote: async (contactId: string, note: string): Promise<CRMResult> => {
    // TODO: Implement add note based on provider
    console.log("Add note to contact:", contactId, note);
    return { success: true };
  },
};
