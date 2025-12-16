export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <span className="text-lg font-semibold text-foreground">News</span>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6">{children}</main>
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-center px-6">
          <span className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Your App
          </span>
        </div>
      </footer>
    </div>
  );
}

