import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "../formInput";
import { SubmitButton } from "../submitButton";
import { ContactFormValues, contactSchema } from "@/validate/contactSchema";
import { Card } from "@/components/ui/card";
import { sendEmail } from "@/lib/api/sendEmail";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    const result = await sendEmail(data);

    if (result.success) {
      reset();
    }

    alert(result.message);
  };

  return (
    <Card>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-7">
        <FormInput
          id="name"
          label="Name"
          register={register}
          placeholder="Your name"
          className={errors.name ? "border-red-500" : ""}
          errorMessage={errors?.name?.message}
        />

        <FormInput
          id="email"
          label="Email"
          type="email"
          register={register}
          placeholder="your@email.com"
          className={errors.email ? "border-red-500" : ""}
          errorMessage={errors?.email?.message}
        />
        <FormInput
          id="message"
          label="Message"
          rows={4}
          register={register}
          placeholder="Your message..."
          className={errors.message ? "border-red-500" : ""}
          errorMessage={errors?.message?.message}
        />
        <SubmitButton isLoading={isSubmitting} />
      </form>
    </Card>
  );
}
