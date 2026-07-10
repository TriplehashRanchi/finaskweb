import { getAllServices } from "@/data/services";
import { ROADSIDE_ASSISTANCE_LIVE } from "@/data/featureFlags";
import { client } from "@/sanity/lib/client";
import { SITE_URL } from "@/lib/seo";

// Insurance is on hold pending a license (see data/featureFlags.js) and is
// kept out of the sitemap so search engines don't index it while unlisted.
const ON_HOLD_CATEGORIES = new Set(["Insurance", "Corporate Insurance", "Pet Insurance"]);

const STATIC_ROUTES = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.8 },
  { path: "/investments", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
  { path: "/careers", priority: 0.5 },
  { path: "/blog", priority: 0.7 },
  { path: "/level", priority: 0.3 },
  { path: "/disclaimer", priority: 0.2 },
  { path: "/privacy-policy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default async function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    priority,
  }));

  const serviceEntries = getAllServices()
    .filter((service) => {
      if (ON_HOLD_CATEGORIES.has(service.category)) return false;
      if (service.slug === "roadside-assistance" && !ROADSIDE_ASSISTANCE_LIVE) {
        return false;
      }
      return true;
    })
    .map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified: now,
      priority: 0.6,
    }));

  let blogEntries = [];
  try {
    const posts = await client.fetch(
      `*[_type == "post" && defined(slug.current)] { "slug": slug.current, "updatedAt": coalesce(publishedAt, _updatedAt) }`
    );
    blogEntries = posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : now,
      priority: 0.5,
    }));
  } catch {
    // Sanity unreachable at build time — ship the sitemap without blog posts
    // rather than failing the whole build.
  }

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
