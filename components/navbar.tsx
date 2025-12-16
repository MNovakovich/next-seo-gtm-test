import { Link } from "@/i18n/routing";

export default function Navbar() {
  return (
    <header className="w-full border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <Link
          href="/home"
          className="text-sm font-semibold text-zinc-950 dark:text-zinc-50"
        >
          Coinmerce
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/news"
            className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            News
          </Link>
        </nav>
      </div>
    </header>
  );
}


