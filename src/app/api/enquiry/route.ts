const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[\d\s-]{10,15}$/;

function clean(v: unknown, max = 500) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

/**
 * Receives Contact Us form submissions.
 * Set ENQUIRY_WEBHOOK_URL (Zapier, Make, Slack, Google Apps Script…) to forward them.
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

  const message = {
    name: clean(body.name, 120),
    contact: clean(body.contact, 200),
    message: clean(body.message, 2000),
  };

  if (!message.name) return Response.json({ ok: false, error: "Please tell us your name." }, { status: 422 });
  if (!EMAIL.test(message.contact) && !PHONE.test(message.contact)) {
    return Response.json({ ok: false, error: "Please enter a valid mobile number or email." }, { status: 422 });
  }
  if (!message.message) return Response.json({ ok: false, error: "Please write a message." }, { status: 422 });

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...message, source: "swadupfoods.com/contact", receivedAt: new Date().toISOString() }),
    }).catch(() => null);
    if (!res?.ok) {
      return Response.json({ ok: false, error: "We couldn't send that right now. Please call or email us." }, { status: 502 });
    }
  } else {
    console.info("[contact]", message);
  }

  return Response.json({ ok: true });
}
