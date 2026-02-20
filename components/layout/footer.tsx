import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-black/[.08] bg-white dark:border-white/[.145] dark:bg-black">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Dokumentacja
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
