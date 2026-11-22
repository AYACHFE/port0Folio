import { NextResponse } from "next/server";
import { sharedProfile } from "@/lib/data";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  // Honeypot check for automated spam bots
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > 120) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid name." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (!message || message.length > 4000) {
    return NextResponse.json(
      { ok: false, error: "Please provide a message under 4000 characters." },
      { status: 400 },
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || sharedProfile.email;
  const resendKey = process.env.RESEND_API_KEY;
  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

  if (resendKey) {
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Portfolio contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, code: "DELIVERY_FAILED" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  }

  if (formspreeEndpoint) {
    const res = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, code: "DELIVERY_FAILED" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { ok: false, code: "NOT_CONFIGURED" },
    { status: 503 },
  );
}
