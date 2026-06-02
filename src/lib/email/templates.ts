const escapeHtml = (str: string): string =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const personalInboxTemplate = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}): string => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  return `
  <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; font-size: 16px; padding: 20px; border-radius: 8px; border: 1px solid #eee;">
    <h2 style="color: #007BFF;">📨 New message from your Portfolio</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #007BFF; text-decoration: none;">${safeEmail}</a></p>
    <hr style="border: none; border-top: 1px solid #ddd;" />
    <p><strong>Message:</strong></p>
    <blockquote style="font-style: italic; color: #555; border-left: 4px solid #007BFF; padding-left: 12px;">${safeMessage}</blockquote>
    <p style="color: #666; font-size: 14px; margin-top: 20px;">
      This message was sent through the contact form on your portfolio website.
    </p>
  </div>
`;
};
