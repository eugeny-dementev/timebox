import { basename } from "./options.js";

export const siteUrl = `https://eugeny-dementev.github.io${basename}/`;

export const seoPages = [
  {
    path: "/",
    title: "Free Printable Timeboxing Planner PDFs | Timebox",
    description: "Download free printable daily, weekly and monthly timeboxing planners. Create an A5 PDF or two planners on one A4 sheet to organize your time. No sign-up.",
    image: "timebox-fight-v2.jpg",
  },
  {
    path: "/howto",
    title: "How to Timebox Your Day: A Time Management Guide | Timebox",
    description: "Learn timeboxing step by step: write down tasks, choose your priorities and schedule focused work. Use a free printable PDF planner to manage your time.",
    image: "timebox-planning-v2.jpg",
  },
  {
    path: "/generate",
    title: "Free PDF Planner Generator: Daily, Weekly & Monthly | Timebox",
    description: "Generate and download a free timeboxing planner PDF. Choose daily v1–v3, weekly or monthly layouts, with one A5 planner or two on A4. No account needed.",
    image: "timebox-pdfs-v2.jpg",
  },
];

export function getPageMetadata(url) {
  let pathname = new URL(url, siteUrl).pathname;
  if (pathname === basename) pathname = "/";
  else if (pathname.startsWith(`${basename}/`)) pathname = pathname.slice(basename.length);
  pathname = pathname.replace(/\.html$/, "").replace(/\/+$/, "") || "/";
  if (pathname === "/index") pathname = "/";
  const page = seoPages.find(page => page.path === pathname);
  const metadata = page ?? seoPages[0];
  return {
    ...metadata,
    canonical: new URL(metadata.path.slice(1), siteUrl).href,
    imageUrl: new URL(metadata.image, siteUrl).href,
    robots: page ? "index,follow" : "noindex,follow",
  };
}

const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[character]));

export function renderPageHead(url) {
  const page = getPageMetadata(url);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${siteUrl}#planner`,
        name: "Timebox Planner",
        url: new URL("generate", siteUrl).href,
        description: seoPages[0].description,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript and a modern web browser.",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: [
          "Printable daily, weekly and monthly timeboxing planners",
          "Three daily planner versions",
          "Monthly planners split by 30 days or four weeks",
          "One A5 planner or two full-size A5 planners on portrait A4",
          "Free PDF downloads without an account",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${page.canonical}#page`,
        url: page.canonical,
        name: page.title,
        description: page.description,
        inLanguage: "en",
        about: { "@id": `${siteUrl}#planner` },
      },
    ],
  };
  const meta = (attribute, name, content) =>
    `<meta data-page-meta ${attribute}="${name}" content="${escapeHtml(content)}">`;
  return [
    `<title data-page-meta>${escapeHtml(page.title)}</title>`,
    meta("name", "description", page.description),
    meta("name", "robots", page.robots),
    `<link data-page-meta rel="canonical" href="${escapeHtml(page.canonical)}">`,
    meta("property", "og:type", "website"),
    meta("property", "og:site_name", "Timebox Planner"),
    meta("property", "og:title", page.title),
    meta("property", "og:description", page.description),
    meta("property", "og:url", page.canonical),
    meta("property", "og:image", page.imageUrl),
    meta("property", "og:image:width", "1659"),
    meta("property", "og:image:height", "948"),
    meta("property", "og:image:alt", "A red-gloved alarm clock illustrating timeboxing and planning"),
    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:title", page.title),
    meta("name", "twitter:description", page.description),
    meta("name", "twitter:image", page.imageUrl),
    `<script data-page-meta type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");
}

export function renderSitemap() {
  const urls = seoPages.map(page =>
    `  <url><loc>${escapeHtml(new URL(page.path.slice(1), siteUrl).href)}</loc></url>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}
