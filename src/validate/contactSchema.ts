import { z } from "zod";

import { validationMessages } from "./validationMessages";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty(validationMessages.name.required)
    .min(2, validationMessages.name.tooShort)
    .max(50, validationMessages.name.tooLong),

  email: z
    .string()
    .trim()
    .nonempty(validationMessages.email.required)
    .email(validationMessages.email.invalid)
    .max(50, validationMessages.email.tooLong),

  message: z
    .string()
    .trim()
    .nonempty(validationMessages.message.required)
    .min(5, validationMessages.message.tooShort)
    .max(100, validationMessages.message.tooLong),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
