import { MESSAGES } from "@/constants/messages";

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  message: string;
}

export async function sendEmail(formData: EmailData): Promise<SendEmailResult> {
  try {
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    return {
      success: res.ok,
      message: data?.message || data?.error || MESSAGES.contactForm.error,
    };
  } catch (error) {
    console.error("Send email error:", error);

    return {
      success: false,
      message: MESSAGES.contactForm.error,
    };
  }
}
