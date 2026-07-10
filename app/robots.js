import { SITE_URL } from "@/lib/seo";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Insurance is on hold pending a license (see data/featureFlags.js)
        // and isn't linked anywhere, but block it explicitly too.
        disallow: ["/insurances", "/studio"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
