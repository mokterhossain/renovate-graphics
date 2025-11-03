import { Resend } from "resend";

 

export async function POST(req: Request) {
  try {

      if (!process.env.RESEND_API_KEY) {
          console.error("❌ RESEND_API_KEY is missing");
      }

      const resend = new Resend(process.env.RESEND_API_KEY);
   
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const file = formData.get("file") as File | null;

    // --- Build HTML Templates ---
    const adminHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;background-color:#f8fafc;padding:20px;">
      <div style="max-width:600px;margin:auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
        <div style="background:#0f172a;color:white;padding:16px 24px;">
          <h2 style="margin:0;font-size:20px;">New Inquiry from Renovate Graphics Website</h2>
        </div>
        <div style="padding:24px;">
          <p style="font-size:15px;color:#111827;">You received a new message from your contact form:</p>
          <table style="width:100%;border-collapse:collapse;margin-top:16px;">
            <tr><td style="padding:8px 0;font-weight:bold;">Name:</td><td>${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Email:</td><td>${email}</td></tr>
          </table>
          <div style="margin-top:16px;padding:12px;background:#f3f4f6;border-radius:8px;color:#111827;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
        <div style="background:#0f172a;padding:12px;text-align:center;color:#9ca3af;font-size:13px;">
          © ${new Date().getFullYear()} Renovate Graphics
        </div>
      </div>
    </div>`;

    const userHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;background-color:#f8fafc;padding:20px;">
      <div style="max-width:600px;margin:auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
        <div style="background:#0f172a;color:white;padding:16px 24px;text-align:center;">
          <h2 style="margin:0;font-size:20px;">Thank You for Contacting Renovate Graphics</h2>
        </div>
        <div style="padding:24px;">
          <p style="font-size:15px;color:#111827;">Hi <strong>${name}</strong>,</p>
          <p style="font-size:15px;color:#374151;line-height:1.6;">
            We’ve received your message and our team will get back to you within 24 hours.
            Thank you for reaching out to <strong>Renovate Graphics</strong> — we’re excited to assist with your photo editing needs!
          </p>
          <div style="margin-top:20px;padding:16px;background:#f3f4f6;border-radius:8px;">
            <p style="margin:0;font-size:14px;color:#111827;"><strong>Your Message:</strong></p>
            <p style="margin-top:8px;color:#374151;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top:30px;color:#6b7280;font-size:13px;">
            Best regards,<br>
            <strong>Renovate Graphics Team</strong><br>
            <a href="https://renovate-graphics-3lox.vercel.app/" style="color:#0f172a;text-decoration:none;">www.renovategraphics.com</a>
          </p>
        </div>
        <div style="background:#0f172a;padding:12px;text-align:center;color:#9ca3af;font-size:13px;">
          © ${new Date().getFullYear()} Renovate Graphics. All rights reserved.
        </div>
      </div>
    </div>`;

    // --- Handle optional file attachment ---
    const attachments = file
      ? [
          {
            filename: file.name,
            content: Buffer.from(await file.arrayBuffer()).toString("base64"),
          },
        ]
      : [];

    // --- Send to admin (yourself) ---
    await resend.emails.send({
      from: "Renovate Graphics <noreply@renovategraphics.com>",
      to: process.env.SMTP_USER!,
      subject: `New message from ${name}`,
      html: adminHtml,
      attachments,
    });

    // --- Send confirmation to user ---
    await resend.emails.send({
      from: "Renovate Graphics <noreply@renovategraphics.com>",
      to: email,
      subject: "Thank you for contacting Renovate Graphics",
      html: userHtml,
    });

    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email send error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
