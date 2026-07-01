import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { postsQuery } from "@/sanity/lib/queries";

export const metadata = {
  title: "Blog | Finask",
  description: "Insights from Finask on wealth, insurance, tax, and planning.",
};

export const dynamic = "force-dynamic";

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

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery);

  return (
    <>
      <main className="min-h-screen bg-[#FDF9FB] text-[#00394E]">
        <section className="relative flex h-[70vh] min-h-[520px] flex-col items-center justify-center overflow-hidden">
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
          <div className="relative z-20 mx-auto mt-12 max-w-4xl px-4 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#DAA434]">
              Insights
            </p>
            <h1 className="font-serif text-5xl font-bold leading-tight text-white drop-shadow-lg md:text-6xl">
              Financial clarity, written for real decisions.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-light leading-8 text-gray-200 md:text-xl">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
