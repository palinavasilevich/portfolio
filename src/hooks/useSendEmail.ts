import { ERROR_MESSAGES } from "@/constants/errorMessages";

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  message: string;
}

export const useSendEmail = () => {
  const sendEmail = async (formData: EmailData): Promise<SendEmailResult> => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      return {
        success: res.ok,
        message:
          data?.message ||
          data?.error ||
          ERROR_MESSAGES.submissionError.message,
      };
    } catch (error) {
      console.error("Send email error:", error);
      return {
        success: false,
        message: ERROR_MESSAGES.submissionError.message,
      };
    }
  };

  return { sendEmail };
};
