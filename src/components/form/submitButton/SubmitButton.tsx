import { Send } from "lucide-react";

interface SubmitButtonProps {
  isLoading: boolean;
}

export function SubmitButton({ isLoading }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`relative w-full inline-flex items-center justify-center gap-2 px-6 py-3
              rounded-lg text-white font-medium transition-colors cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-600
              ${
                isLoading
                  ? "opacity-75 cursor-not-allowed bg-zinc-500 dark:bg-zinc-600"
                  : "bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600"
              }`}
    >
      {isLoading ? (
        <>Sending...</>
      ) : (
        <>
          <Send className="w-4 h-4" />
          Send Message
        </>
      )}
    </button>
  );
}
