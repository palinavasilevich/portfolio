import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "../formInput/FormInput";
import { SubmitButton } from "../submitButton";
import { ContactFormValues, contactSchema } from "@/validate/contactSchema";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (data) =>
    console.log(JSON.stringify(data));

  return (
    <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-zinc-700">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
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
        <SubmitButton isLoading={false} />
      </form>
    </div>
  );
}
