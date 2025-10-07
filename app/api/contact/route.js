import nodemailer from "nodemailer";

const rateMap = new Map();
function tooFrequent(ip) {
  const now = Date.now();
  const window = 60000; // 1 minute
  const maxRequests = 3; // max 3 per minute
  const entry = rateMap.get(ip) || { count: 0, time: now };

  if (now - entry.time > window) {
    // reset the counter when time window passes
    rateMap.set(ip, { count: 1, time: now });
    return false;
  }

  entry.count += 1;
  rateMap.set(ip, entry);

  return entry.count > maxRequests;
}

// --- Small input sanitizer to remove HTML or script tags ---
function clean(str = "") {
  return str.replace(/<\/?[^>]+(>|$)/g, "").trim();
}

export async function POST(req) {
  try {
    const raw = await req.text();
    if (!raw) {
      return new Response(JSON.stringify({ error: "Empty body" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = JSON.parse(raw);
    const { name, email, phone, subject, message, website = "", t0 = 0 } = data;

    // --- Rate limit check ---
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (tooFrequent(ip)) {
      console.warn("Rate limit hit for:", ip);
      return new Response(JSON.stringify({ ok: true }), {
        status: 429,
        headers: { "Content-Type": "application/json" },
      });
    }

    // --- Spam checks ---
    if (website.trim() !== "")
      return new Response(JSON.stringify({ ok: true }));
    if (Date.now() - Number(t0) < 3000)
      return new Response(JSON.stringify({ ok: true }));

    // --- Clean input values ---
    const safeName = clean(name);
    const safeEmail = clean(email);
    const safePhone = clean(phone);
    const safeSubject = clean(subject);
    const safeMessage = clean(message);

    // --- SMTP transport ---
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT || 587),
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // tolerate some hosts' certs
      },
    });

    const from = process.env.MAIL_FROM || "no-reply@your-domain.com";
    const to = process.env.MAIL_TO || "test@your-domain.com";

    const text = [
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      `Phone: ${safePhone}`,
      `Subject: ${safeSubject}`,
      "",
      safeMessage,
    ].join("\n");

    await transporter.sendMail({
      from,
      to,
      replyTo: safeEmail,
      subject: `Website Contact: ${safeSubject}`,
      text,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Mailer error:", err);
    return new Response(JSON.stringify({ error: "Send failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: { "Access-Control-Allow-Methods": "POST, OPTIONS" },
  });
}
