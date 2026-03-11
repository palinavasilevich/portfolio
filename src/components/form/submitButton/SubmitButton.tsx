import { Send } from "lucide-react";
import { FaSpinner } from "react-icons/fa";
import { RocketLoader } from "@/components/ui/loader/rocket";

interface SubmitButtonProps {
  isLoading: boolean;
}

export function SubmitButton({ isLoading }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      aria-busy={isLoading}
      aria-live="polite"
      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3
        rounded-lg text-white font-medium transition-colors
        cursor-pointer disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-600
        ${
          isLoading
            ? "opacity-75 bg-zinc-500 dark:bg-zinc-600"
            : "bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600"
        }`}
    >
      {isLoading ? (
        <span className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200">
          Sending
          <RocketLoader />
          {/* <FaSpinner className="w-5 h-5 animate-spin" /> */}
        </span>
      ) : (
        <>
          <Send className="w-4 h-4" />
          Send Message
        </>
      )}
    </button>
  );
}
