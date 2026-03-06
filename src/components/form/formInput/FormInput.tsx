import { ContactFormValues } from "@/validate/contactSchema";
import cn from "@/utils/class-merge";
import { UseFormRegister } from "react-hook-form";

interface FormInputProps extends React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> {
  id: keyof ContactFormValues;
  register: UseFormRegister<ContactFormValues>;
  label?: string;
  rows?: number;
  className?: string;
  errorMessage?: string;
}

export function FormInput({
  id,
  register,
  label,
  type = "text",
  rows,
  className,
  errorMessage,
  ...props
}: FormInputProps) {
  const baseClasses =
    "w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-700/50 " +
    "border border-zinc-200 dark:border-zinc-700 " +
    "text-primary-dark dark:text-zinc-100 " +
    "focus:outline-none focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-600 transition-colors " +
    "disabled:opacity-50 disabled:cursor-not-allowed " +
    "disabled:bg-gray-100 disabled:dark:bg-zinc-800 disabled:border-gray-300 disabled:dark:border-zinc-600 " +
    "disabled:text-gray-400 disabled:dark:text-zinc-500";

  return (
    <div className="relative">
      {label && <label htmlFor={id}>{label}</label>}
      {rows ? (
        <textarea
          id={id}
          rows={rows}
          className={cn(
            baseClasses,
            className,
            "resize-none",
            errorMessage && "border-red-500",
          )}
          {...register(id)}
          {...props}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={cn(
            baseClasses,
            className,
            errorMessage && "border-red-500",
          )}
          {...register(id)}
          {...props}
        />
      )}
      {errorMessage && (
        <span className="text-red-500 text-sm block absolute">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
