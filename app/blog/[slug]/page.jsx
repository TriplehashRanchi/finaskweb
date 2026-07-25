import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Footer from "@/components/Footer";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;

      return (
        <div className="my-10 overflow-hidden rounded-md">
          <Image
            src={urlFor(value).width(1200).height(760).url()}
            alt={value.alt || ""}
            width={1200}
            height={760}
            className="h-auto w-full object-cover"
          />
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-lg leading-8 text-[#00394E]/75">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 font-serif text-3xl font-semibold text-[#00394E]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-2xl font-bold text-[#00394E]">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-[#D44659] bg-white px-6 py-5 text-xl leading-8 text-[#00394E]">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="font-semibold text-[#D44659] underline underline-offset-4"
        rel="noreferrer"
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 list-disc space-y-3 pl-6 text-lg leading-8 text-[#00394E]/75">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 list-decimal space-y-3 pl-6 text-lg leading-8 text-[#00394E]/75">
        {children}
      </ol>
    ),
  },
};

export async function generateStaticParams() {
  const posts = await client.fetch(postSlugsQuery);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    return buildMetadata({
      title: "Blog",
      description: "This article could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  const description =
    post.seoDescription || post.excerpt || `${post.title} — FinAsk Value.`;

  return buildMetadata({
    title: post.seoTitle || post.title,
    description,
    path: `/blog/${slug}`,
    ...(post.coverImage
      ? {
          image: {
            url: urlFor(post.coverImage).width(1200).height(630).url(),
            width: 1200,
            height: 630,
            alt: post.title,
          },
        }
      : {}),
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) notFound();

  const coverImage = post.coverImage
    ? urlFor(post.coverImage).width(1600).height(900).url()
    : null;

  return (
    <>
      <main className="min-h-screen bg-[#FDF9FB] text-[#00394E]">
        <section className="relative min-h-[480px] py-10 sm:h-[70vh] sm:min-h-0 sm:py-0 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#00394E] to-[#0b1218] sm:bg-[#0b1218]">
          <div
            className="absolute inset-0 z-0 hidden sm:block"
            style={{
              backgroundImage: `url("${coverImage || "/servicespage.png"}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 z-0 hidden bg-gradient-to-t from-[#00394E]/90 via-[#00394E]/30 to-[#00394E]/40 sm:block" />

          <header className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-24 sm:pt-0">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white my-6 drop-shadow-lg">
              {post.title}
            </h1>
            {post.excerpt ? (
              <p className="text-gray-200 text-lg font-light leading-[1.2] max-w-2xl mx-auto">
                {post.excerpt}
              </p>
            ) : null}
          </header>
        </section>

        {coverImage ? (
          <div className="mx-auto w-[90%] max-w-4xl pt-8 sm:hidden">
            <div className="overflow-hidden rounded-md">
              <Image
                src={coverImage}
                alt={post.title}
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        ) : null}

        <article className="mx-auto w-[90%] max-w-4xl py-12">
          {/* <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="mb-8 inline-flex rounded-full border border-[#D44659]/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#D44659] transition-colors hover:border-[#00394E]/25 hover:text-[#00394E]"
            >
              Back to blog
            </Link>
          </div> */}
          <div className="mx-auto max-w-3xl text-justify rounded-md bg-[#FDF9FB]">
            {post.body?.length ? (
              <PortableText value={post.body} components={portableTextComponents} />
            ) : (
              <p className="text-lg text-[#00394E]/70">
                This post does not have content yet.
              </p>
            )}
          </div>
        </article>

        <NewsletterSubscribe
          heading="Found This Insight Helpful?"
          subheading="Get More Like This Delivered to Your Inbox."
        />
      </main>
      <Footer />
    </>
  );
}
