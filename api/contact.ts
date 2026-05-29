import dotenv from "dotenv";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

dotenv.config({ path: ".env.local" });

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  countryInterest: string;
  visaType: string;
  bestTimeToCall: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

// ─── Validation ───────────────────────────────────────────────────────────────

function validatePayload(body: Partial<ContactFormPayload>): string | null {
  if (!body.name?.trim()) return "Name is required";
  if (!body.email?.trim()) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
    return "Invalid email address";
  if (!body.phone?.trim()) return "Phone is required";
  if (!body.countryInterest?.trim()) return "Country interest is required";
  if (!body.visaType?.trim()) return "Visa type is required";
  if (!body.message?.trim()) return "Message is required";
  return null;
}

// ─── Email Templates ──────────────────────────────────────────────────────────

// ─── Premium Owner Email Template ─────────────────────────────────────────────

// ─── ULTRA PREMIUM OWNER EMAIL TEMPLATE ──────────────────────────────────────

function buildOwnerEmail(data: ContactFormPayload): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body style="
    margin:0;
    padding:0;
    background:#eef2ff;
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
  ">

    <div style="padding:40px 16px;">

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center">

            <table width="680" cellpadding="0" cellspacing="0" style="
              width:100%;
              max-width:680px;
              background:#ffffff;
              border-radius:28px;
              overflow:hidden;
              box-shadow:
                0 20px 60px rgba(15,23,42,0.10),
                0 8px 24px rgba(15,23,42,0.06);
            ">

              <!-- TOP BAR -->
              <tr>
                <td style="
                  background:
                    radial-gradient(circle at top left,#4f46e5 0%,transparent 35%),
                    radial-gradient(circle at top right,#06b6d4 0%,transparent 30%),
                    linear-gradient(135deg,#0f172a 0%,#111827 45%,#1e3a8a 100%);
                  padding:44px 42px;
                ">

                  <table width="100%">
                    <tr>

                      <td align="left">

                        <div style="
                          display:inline-block;
                          background:rgba(255,255,255,0.12);
                          border:1px solid rgba(255,255,255,0.12);
                          color:#ffffff;
                          padding:10px 18px;
                          border-radius:999px;
                          font-size:12px;
                          letter-spacing:1.5px;
                          font-weight:700;
                          text-transform:uppercase;
                        ">
                          Priority Visa Consultants
                        </div>

                        <h1 style="
                          margin:24px 0 10px;
                          color:#ffffff;
                          font-size:36px;
                          line-height:1.15;
                          font-weight:800;
                          letter-spacing:-1px;
                        ">
                          New Visa Inquiry
                        </h1>

                        <p style="
                          margin:0;
                          color:rgba(255,255,255,0.78);
                          font-size:16px;
                          line-height:1.7;
                          max-width:480px;
                        ">
                          A new visa consultation request has been submitted through your website.
                        </p>

                      </td>

                    </tr>
                  </table>

                </td>
              </tr>

              <!-- CONTENT -->
              <tr>
                <td style="padding:40px;">

                  <!-- CLIENT CARD -->
                  <div style="
                    border:1px solid #e2e8f0;
                    border-radius:24px;
                    overflow:hidden;
                    background:#ffffff;
                  ">

                    <!-- CARD HEADER -->
                    <div style="
                      background:#f8fafc;
                      padding:22px 28px;
                      border-bottom:1px solid #e2e8f0;
                    ">

                      <table width="100%">
                        <tr>

                          <td width="58">

                            <div style="
                              width:58px;
                              height:58px;
                              border-radius:18px;
                              background:linear-gradient(135deg,#2563eb,#06b6d4);
                              text-align:center;
                              line-height:58px;
                              color:#ffffff;
                              font-size:22px;
                              font-weight:700;
                            ">
                              ${data.name.charAt(0).toUpperCase()}
                            </div>

                          </td>

                          <td style="padding-left:16px;">

                            <p style="
                              margin:0;
                              color:#64748b;
                              font-size:13px;
                              font-weight:600;
                              letter-spacing:1px;
                              text-transform:uppercase;
                            ">
                              Client Details
                            </p>

                            <h2 style="
                              margin:6px 0 0;
                              color:#0f172a;
                              font-size:24px;
                              line-height:1.2;
                            ">
                              ${data.name}
                            </h2>

                          </td>

                        </tr>
                      </table>

                    </div>

                    <!-- INFO -->
                    <div style="padding:10px 28px 24px;">

                      ${buildRow(
                        "Email Address",
                        `
                        <a href="mailto:${data.email}" style="
                          color:#2563eb;
                          text-decoration:none;
                          font-weight:600;
                        ">
                          ${data.email}
                        </a>
                      `
                      )}

                      ${buildRow(
                        "Phone Number",
                        `
                        <a href="tel:${data.phone}" style="
                          color:#2563eb;
                          text-decoration:none;
                          font-weight:600;
                        ">
                          ${data.phone}
                        </a>
                      `
                      )}

                      ${buildRow(
                        "Country Interest",
                        `
                        <span style="font-weight:600;color:#0f172a;">
                          ${data.countryInterest}
                        </span>
                      `
                      )}

                      ${buildRow(
                        "Visa Type",
                        `
                        <span style="
                          display:inline-block;
                          background:linear-gradient(135deg,#2563eb,#06b6d4);
                          color:#ffffff;
                          padding:10px 16px;
                          border-radius:999px;
                          font-size:13px;
                          font-weight:700;
                          letter-spacing:.3px;
                        ">
                          ${data.visaType}
                        </span>
                      `
                      )}

                      ${buildRow(
                        "Preferred Call Time",
                        `
                        <span style="font-weight:600;color:#0f172a;">
                          ${data.bestTimeToCall || "Not specified"}
                        </span>
                      `
                      )}

                    </div>

                  </div>

                  <!-- MESSAGE -->
                  <div style="
                    margin-top:28px;
                    border-radius:24px;
                    background:#f8fafc;
                    border:1px solid #e2e8f0;
                    padding:30px;
                  ">

                    <p style="
                      margin:0 0 18px;
                      color:#0f172a;
                      font-size:18px;
                      font-weight:700;
                    ">
                      Client Message
                    </p>

                    <p style="
                      margin:0;
                      color:#475569;
                      font-size:15px;
                      line-height:1.9;
                      white-space:pre-line;
                    ">
                      ${data.message}
                    </p>

                  </div>

                  <!-- CTA -->
                  <div style="text-align:center;margin-top:34px;">

                    <a href="mailto:${data.email}" style="
                      display:inline-block;
                      background:linear-gradient(135deg,#2563eb,#06b6d4);
                      color:#ffffff;
                      text-decoration:none;
                      padding:18px 34px;
                      border-radius:16px;
                      font-size:15px;
                      font-weight:700;
                      box-shadow:0 10px 25px rgba(37,99,235,0.25);
                    ">
                      Reply To Client
                    </a>

                  </div>

                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td style="
                  padding:28px 40px;
                  background:#f8fafc;
                  border-top:1px solid #e2e8f0;
                ">

                  <table width="100%">
                    <tr>

                      <td align="left">
                        <p style="
                          margin:0;
                          color:#64748b;
                          font-size:13px;
                          line-height:1.7;
                        ">
                          Sent from your website contact form
                        </p>
                      </td>

                      <td align="right">
                        <p style="
                          margin:0;
                          color:#94a3b8;
                          font-size:12px;
                          font-weight:600;
                        ">
                          PRIORITY VISA CONSULTANTS
                        </p>
                      </td>

                    </tr>
                  </table>

                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>

    </div>

  </body>
  </html>
  `;
}

// ─── ULTRA PREMIUM USER CONFIRMATION EMAIL ───────────────────────────────────

function buildUserConfirmationEmail(name: string): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body style="
    margin:0;
    padding:0;
    background:#eef2ff;
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
  ">

    <div style="padding:40px 16px;">

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center">

            <table width="680" cellpadding="0" cellspacing="0" style="
              width:100%;
              max-width:680px;
              background:#ffffff;
              border-radius:28px;
              overflow:hidden;
              box-shadow:
                0 20px 60px rgba(15,23,42,0.10),
                0 8px 24px rgba(15,23,42,0.06);
            ">

              <!-- HERO -->
              <tr>
                <td style="
                  background:
                    radial-gradient(circle at top left,#4f46e5 0%,transparent 35%),
                    radial-gradient(circle at top right,#06b6d4 0%,transparent 30%),
                    linear-gradient(135deg,#0f172a 0%,#111827 45%,#1e3a8a 100%);
                  text-align:center;
                  padding:60px 40px;
                ">

                  <div style="
                    width:88px;
                    height:88px;
                    margin:0 auto 28px;
                    border-radius:24px;
                    background:rgba(255,255,255,0.10);
                    border:1px solid rgba(255,255,255,0.12);
                    text-align:center;
                    line-height:88px;
                    font-size:42px;
                    color:#ffffff;
                  ">
                    ✓
                  </div>

                  <h1 style="
                    margin:0;
                    color:#ffffff;
                    font-size:38px;
                    line-height:1.15;
                    font-weight:800;
                    letter-spacing:-1px;
                  ">
                    Thank You, ${name}
                  </h1>

                  <p style="
                    margin:20px auto 0;
                    max-width:500px;
                    color:rgba(255,255,255,0.82);
                    font-size:16px;
                    line-height:1.8;
                  ">
                    We’ve successfully received your visa inquiry.
                    Our team will carefully review your request and connect with you shortly.
                  </p>

                </td>
              </tr>

              <!-- CONTENT -->
              <tr>
                <td style="padding:42px;">

                  <div style="
                    background:#f8fafc;
                    border:1px solid #e2e8f0;
                    border-radius:24px;
                    padding:34px;
                  ">

                    <h2 style="
                      margin:0 0 24px;
                      color:#0f172a;
                      font-size:24px;
                    ">
                      What Happens Next?
                    </h2>

                    ${stepItem(
                      "1",
                      "Application Review",
                      "Our experts will evaluate your inquiry and visa requirements carefully."
                    )}

                    ${stepItem(
                      "2",
                      "Consultation Call",
                      "A member of our team will contact you within 24–48 hours."
                    )}

                    ${stepItem(
                      "3",
                      "Guided Assistance",
                      "We’ll help you understand the best visa pathway and required documentation."
                    )}

                  </div>

                  <!-- CTA -->
                  <div style="text-align:center;margin-top:36px;">

                    <a href="https://priorityvisaconsultants.com" style="
                      display:inline-block;
                      background:linear-gradient(135deg,#2563eb,#06b6d4);
                      color:#ffffff;
                      text-decoration:none;
                      padding:18px 36px;
                      border-radius:16px;
                      font-size:15px;
                      font-weight:700;
                      box-shadow:0 10px 25px rgba(37,99,235,0.25);
                    ">
                      Visit Our Website
                    </a>

                  </div>

                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td style="
                  padding:30px 40px;
                  background:#f8fafc;
                  border-top:1px solid #e2e8f0;
                  text-align:center;
                ">

                  <p style="
                    margin:0;
                    color:#0f172a;
                    font-size:15px;
                    font-weight:700;
                  ">
                    Priority Visa Consultants
                  </p>

                  <p style="
                    margin:10px 0 0;
                    color:#64748b;
                    font-size:13px;
                    line-height:1.8;
                  ">
                    Helping individuals and families achieve their global dreams.
                  </p>

                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>

    </div>

  </body>
  </html>
  `;
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function buildRow(label: string, value: string) {
  return `
    <table width="100%" style="border-bottom:1px solid #e2e8f0;">
      <tr>
        <td style="
          padding:18px 0;
          width:210px;
          color:#64748b;
          font-size:14px;
          font-weight:600;
        ">
          ${label}
        </td>

        <td style="
          padding:18px 0;
          color:#0f172a;
          font-size:15px;
        ">
          ${value}
        </td>
      </tr>
    </table>
  `;
}

function stepItem(number: string, title: string, desc: string) {
  return `
    <table width="100%" style="margin-bottom:22px;">
      <tr>

        <td width="56" valign="top">

          <div style="
            width:44px;
            height:44px;
            border-radius:14px;
            background:linear-gradient(135deg,#2563eb,#06b6d4);
            color:#ffffff;
            text-align:center;
            line-height:44px;
            font-size:16px;
            font-weight:700;
          ">
            ${number}
          </div>

        </td>

        <td valign="top">

          <p style="
            margin:0;
            color:#0f172a;
            font-size:16px;
            font-weight:700;
          ">
            ${title}
          </p>

          <p style="
            margin:8px 0 0;
            color:#64748b;
            font-size:14px;
            line-height:1.8;
          ">
            ${desc}
          </p>

        </td>

      </tr>
    </table>
  `;
}

// ─── Transporter ──────────────────────────────────────────────────────────────

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// ─── Handler ──────────────────────────────────────────────────────────────────

export default async function handler(
  req: VercelRequest,
  res: VercelResponse<ContactResponse>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const validationError = validatePayload(req.body);
  if (validationError) {
    return res.status(400).json({ success: false, message: validationError });
  }

  const data = req.body as ContactFormPayload;

  console.log("data:", process.env.GMAIL_USER, process.env.GMAIL_APP_PASSWORD);

  try {
    await Promise.all([
      // 1. Notify owner
      transporter.sendMail({
        from: `"Priority Visa Consultants" <${process.env.GMAIL_USER}>`,
        to: process.env.CONTACT_EMAIL,
        replyTo: data.email,
        subject: `New Inquiry from ${data.name} — ${data.visaType} (${data.countryInterest})`,
        html: buildOwnerEmail(data),
      }),

      // 2. Confirmation to user
      transporter.sendMail({
        from: `"Priority Visa Consultants" <${process.env.GMAIL_USER}>`,
        to: data.email,
        subject: "We received your inquiry!",
        html: buildUserConfirmationEmail(data.name),
      }),
    ]);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[contact] Failed to send email:", message);
    return res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again.",
    });
  }
}
