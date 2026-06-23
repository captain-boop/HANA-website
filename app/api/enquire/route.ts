import { NextResponse } from "next/server";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export async function POST(req: Request) {
  const key = process.env.WEB3FORMS_KEY;
  if (!key) {
    return NextResponse.json(
      { ok: false, error: "Enquiry service is not configured." },
      { status: 500 }
    );
  }

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields; humans leave them empty.
  if (typeof data.company === "string" && data.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const dates = String(data.dates ?? "").trim();
  const party = String(data.party ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !isEmail(email) || !dates || !party) {
    return NextResponse.json(
      { ok: false, error: "Please complete the required fields." },
      { status: 422 }
    );
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      subject: `HANA Charter Enquiry — ${name}`,
      from_name: "HANA Website",
      name,
      email,
      "Preferred dates": dates,
      "Party size": party,
      message: message || "(no additional message)",
    }),
  });

  const out = await res.json().catch(() => ({}));
  if (!res.ok || !out?.success) {
    return NextResponse.json(
      { ok: false, error: "We couldn't send your enquiry. Please email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
