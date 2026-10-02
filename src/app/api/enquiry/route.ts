type Enquiry = {
  type: "bulk" | "waitlist";
  name?: string;
  company?: string;
  email: string;
  phone?: string;
  country?: string;
  grade?: string;
  quantity?: string;
  packing?: string;
  message?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max = 500) {
  return typeof v === "string" ? v.trim().slice(0, max) : undefined;
}

/**
 * Receives bulk enquiries and snack-waitlist sign-ups.
 * Set ENQUIRY_WEBHOOK_URL (Zapier, Make, Slack, Google Apps Script…) to forward submissions.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (clean(body.website)) return Response.json({ ok: true });

  const enquiry: Enquiry = {
    type: body.type === "waitlist" ? "waitlist" : "bulk",
    name: clean(body.name, 120),
    company: clean(body.company, 160),
    email: clean(body.email, 200) ?? "",
    phone: clean(body.phone, 40),
    country: clean(body.country, 80),
    grade: clean(body.grade, 80),
    quantity: clean(body.quantity, 80),
    packing: clean(body.packing, 80),
    message: clean(body.message, 2000),
  };

  if (!EMAIL.test(enquiry.email)) {
    return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 422 });
  }
  if (enquiry.type === "bulk" && !enquiry.name) {
    return Response.json({ ok: false, error: "Please tell us your name." }, { status: 422 });
  }

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...enquiry, receivedAt: new Date().toISOString() }),
    }).catch(() => null);
    if (!res?.ok) {
      return Response.json({ ok: false, error: "We couldn't send that right now. Please email or WhatsApp us." }, { status: 502 });
    }
  } else {
    console.info("[enquiry]", enquiry);
  }

  return Response.json({ ok: true });
}
