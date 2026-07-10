export const SITE_URL = "https://www.finaskvalue.com";
export const SITE_NAME = "FinAsk Value";

const DEFAULT_OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: SITE_NAME,
};

// Next.js metadata objects don't deep-merge across layout/page boundaries —
// a page-level `openGraph` replaces the layout's entirely. This helper keeps
// every page's openGraph/twitter blocks complete (siteName, image, type)
// so per-page titles/descriptions never silently drop the shared image.
export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
  image = DEFAULT_OG_IMAGE,
}) {
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: `${SITE_URL}${path}`,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
