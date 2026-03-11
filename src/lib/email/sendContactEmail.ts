import { resend } from "./resend";
import { personalInboxTemplate } from "./templates";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

const CONTACT_EMAIL = process.env.CONTACT_EMAIL!;
const EMAIL_FROM =
  process.env.EMAIL_FROM || "Portfolio <onboarding@resend.dev>";

export async function sendContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: CONTACT_EMAIL,
    subject: "New contact form message",
    html: personalInboxTemplate({ name, email, message }),
    replyTo: email,
  });

  if (error) {
    throw new Error(error.message);
  }
}
