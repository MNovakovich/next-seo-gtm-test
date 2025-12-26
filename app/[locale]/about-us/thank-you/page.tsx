import { Link } from "@/i18n/routing";

export default function ThankYouPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-16">
      <div className="max-w-lg text-center">
        {/* Success Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/30">
          <svg
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Thank You!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Your message has been successfully sent. We appreciate you reaching
          out to us.
        </p>

        {/* Details Card */}
        <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-semibold text-foreground">
            What happens next?
          </h2>
          <ul className="mt-4 space-y-3 text-left text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                1
              </span>
              <span>
                Our team will review your message within the next few hours.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                2
              </span>
              <span>
                A dedicated support specialist will be assigned to your inquiry.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                3
              </span>
              <span>
                You'll receive a response via email within 24 hours.
              </span>
            </li>
          </ul>
        </div>

        {/* Reference Number */}
        <div className="mt-6 rounded-lg bg-zinc-100 px-4 py-3 dark:bg-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Reference Number
          </p>
          <p className="font-mono text-sm font-medium text-foreground">
            CM-{Date.now().toString(36).toUpperCase()}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/about-us"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Back to About Us
          </Link>
          <Link
            href="/home"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            Go to Home
          </Link>
        </div>

        {/* Additional Help */}
        <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-500">
          Need immediate assistance?{" "}
          <a
            href="tel:+31201234567"
            className="font-medium text-emerald-600 hover:underline dark:text-emerald-400"
          >
            Call us at +31 20 123 4567
          </a>
        </p>
      </div>
    </div>
  );
}

