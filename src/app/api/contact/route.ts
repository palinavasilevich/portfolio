import { ERROR_MESSAGES } from "@/constants/errorMessages";
import { personalInboxTemplate } from "@/lib/email/templates";

import { contactSchema } from "@/validate/contactSchema";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const { name, email, message } = result.data;

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_SERVER_USER || "",
      subject: "New contact form message",
      html: personalInboxTemplate(name, email, message),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(ERROR_MESSAGES.submissionError, error);
    return NextResponse.json(
      { error: ERROR_MESSAGES.submissionError },
      { status: 500 },
    );
  }
}
