export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  description: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId?: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
}

export const siteConfig: SiteConfig = {
  name: "Le Guide Martinique — Communes, Anses, Patrimoine & Distilleries AOC",
  domain: "leguidemartinique.com",
  url: "https://leguidemartinique.com",
  description: "Le guide indépendant de référence de la Martinique : 34 communes explorées, plages du Sud, randonnées de la Montagne Pelée, distilleries de rhum agricole et adresses créoles.",
  repo: "jc842/leguidemartinique",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-trendspotter",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    colorScheme: "amber-terracotta",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "108",
    containerId: "YYjvMVvd",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 623, format: "mobileBanner" },
      inContent: { zoneId: 627, format: "mediumRectangle" },
      header: { zoneId: 626, format: "leaderboard" },
    },
  },

  legal: {
    editor: "Éditeur indépendant",
    address: "Guadeloupe / France",
    contactEmail: "contact@leguidemartinique.com",
    hostName: "Cloudflare Pages & Hetzner",
    hostAddress: "Union Européenne",
  },
};
