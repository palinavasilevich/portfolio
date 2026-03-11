import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/validate/contactSchema";
import { sendContactEmail } from "@/lib/email/sendContactEmail";
import { MESSAGES } from "@/constants/messages";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: MESSAGES.contactForm.invalid },
        { status: 400 },
      );
    }

    const { name, email, message } = result.data;

    await sendContactEmail({ name, email, message });

    return NextResponse.json({
      success: true,
      message: MESSAGES.contactForm.success,
    });
  } catch (error) {
    console.error("Email send error:", error);

    return NextResponse.json(
      { error: MESSAGES.contactForm.error },
      { status: 500 },
    );
  }
}
