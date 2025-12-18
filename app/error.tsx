"use client";

import { useEffect } from "react";

export default function NewsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-foreground">
          Something went wrong! Global
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {error.message || "An unexpected error occurred."}
        </p>
      </div>
      <button
        onClick={reset}
        className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-300"
      >
        Try again
      </button>
    </div>
  );
}

