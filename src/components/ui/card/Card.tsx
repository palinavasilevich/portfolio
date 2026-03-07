export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-zinc-700">
      {children}
    </div>
  );
}
