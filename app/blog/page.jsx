import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { paginatedPostsQuery, postsCountQuery } from "@/sanity/lib/queries";

export const metadata = {
  title: "Blog | Finask",
  description: "Insights from Finask on wealth, insurance, tax, and planning.",
};

export const dynamic = "force-dynamic";

const POSTS_PER_PAGE = 9;

function formatDate(value) {
  if (!value) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function BlogMeta({ category, publishedAt }) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]">
      {category ? (
        <span className="rounded-full bg-[#00394E]/10 px-3 py-1 text-[#00394E]">
          {category}
        </span>
      ) : null}
      {publishedAt ? (
        <time className="text-[#00394E]/45" dateTime={publishedAt}>
          {formatDate(publishedAt)}
        </time>
      ) : null}
    </div>
  );
}

function Pagination({ currentPage, totalPages }) {
  if (totalPages <= 1) return null;

  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const pageHref = (page) => (page === 1 ? "/blog" : `/blog?page=${page}`);

  return (
    <nav className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#00394E]/10 pt-8 sm:flex-row">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#00394E]/55">
        Page {currentPage} of {totalPages}
      </p>
      <div className="flex items-center gap-3">
        {currentPage > 1 ? (
          <Link
            href={pageHref(previousPage)}
            className="rounded-full border border-[#00394E]/20 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#00394E] transition hover:border-[#D44659] hover:text-[#D44659]"
          >
            Previous
          </Link>
        ) : null}
        {nextPage <= totalPages ? (
          <Link
            href={pageHref(nextPage)}
            className="rounded-full bg-[#D44659] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#D44659]/20 transition hover:bg-[#b03a4b]"
          >
            Next
          </Link>
        ) : null}
      </div>
    </nav>
  );
}

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const requestedPage = Number.parseInt(params?.page || "1", 10);
  const safeRequestedPage = Number.isFinite(requestedPage)
    ? Math.max(requestedPage, 1)
    : 1;
  const totalPosts = await client.fetch(postsCountQuery);
  const totalPages = Math.max(Math.ceil(totalPosts / POSTS_PER_PAGE), 1);
  const currentPage = Math.min(safeRequestedPage, totalPages);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const posts = await client.fetch(paginatedPostsQuery, { start, end });

  return (
    <>
      <main className="min-h-screen bg-[#FDF9FB] text-[#00394E]">
        <section className="relative h-[70vh] flex flex-col justify-center overflow-hidden bg-[#0b1218]">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/servicespage.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00394E]/95 via-[#00394E]/45 to-[#00394E]/45" />
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold text-white my-6 drop-shadow-lg">
              Financial clarity, written for real decisions.
            </h1>
            <p className="text-gray-200 text-lg font-light leading-[1.2] max-w-2xl mx-auto">
              Practical perspectives from Finask on wealth, protection, tax,
              succession, and long-term planning.
            </p>
          </div>
        </section>

        <section className="mx-auto w-[90%] max-w-6xl py-16">
          {posts.length === 0 ? (
            <div className="rounded-md border border-[#00394E]/10 bg-white p-8 text-[#00394E]/70">
              No blog posts are published yet.
            </div>
          ) : (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const imageUrl = post.coverImage
                  ? urlFor(post.coverImage).width(900).height(620).url()
                  : null;

                return (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className="group overflow-hidden rounded-md border border-[#00394E]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[1.45] bg-[#EBF4F7]">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={post.coverImage?.alt || post.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                      ) : null}
                    </div>
                    <div className="p-6">
                      <BlogMeta
                        category={post.category}
                        publishedAt={post.publishedAt}
                      />
                      <h2 className="font-serif text-2xl font-semibold leading-snug text-[#00394E] transition-colors group-hover:text-[#D44659]">
                        {post.title}
                      </h2>
                      {post.excerpt ? (
                        <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-[#00394E]/65">
                          {post.excerpt}
                        </p>
                      ) : null}
                      <span className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.14em] text-[#D44659]">
                        Read article
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </section>
      </main>
      <Footer />
    </>
  );
}
