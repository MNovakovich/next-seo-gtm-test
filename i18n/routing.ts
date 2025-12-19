import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export type Locale = "en" | "nl" | "de" | "fr" | "es";
export const localePrefix = "always";

export const LOCALES = ["en", "nl", "de", "fr", "es"] as const;

export const pathnames = {
  '/home': '/home',
  '/about': '/about',
  '/login': '/login',
  '/signup': '/signup',
  '/wallet': '/wallet',
  '/dashboard': '/dashboard',
  '/download': '/download',
  '/prices': '/prices',
  '/buy': '/buy',
  '/app': '/app',
  '/earn': '/earn',
  '/coin': '/coin',
  '/coin/[symbol]': '/coin/[symbol]',
  '/orders': {
    en: '/orders',
    nl: '/bestellingen',
    de: '/bestellungen',
    fr: '/commandes',
    es: '/pedidos',
  },
  '/profile': {
    en: '/profile',
    nl: '/profiel',
    de: '/profil',
    fr: '/profil',
    es: '/perfil',
  },
  '/news': {
    en: '/news',
    nl: '/nieuws',
    de: '/nachrichten',
    fr: '/actualites',
    es: '/noticias',
  },
  '/news/[slug]': {
    en: '/news/[slug]',
    nl: '/nieuws/[slug]',
    de: '/nachrichten/[slug]',
    fr: '/actualites/[slug]',
    es: '/noticias/[slug]',
  },
};

export type PathnameKeys = keyof typeof pathnames;

export const routing = defineRouting({
  defaultLocale: "en",
  locales: LOCALES,
  localePrefix: {
    mode: localePrefix,
  },
  pathnames: pathnames,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
