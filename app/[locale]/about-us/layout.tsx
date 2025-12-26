export default function AboutUsLayout({
  children,
  contact,
}: {
  children: React.ReactNode;
  contact: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <span className="text-lg font-semibold text-foreground">About Us</span>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        {children}
        <section className="py-16">{contact}</section>
      </main>
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

