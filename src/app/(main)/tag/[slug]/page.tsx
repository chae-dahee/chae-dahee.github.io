import { notFound } from "next/navigation";
import { getAllTags, getAllPosts } from "@/lib/markdown/posts";
import { buildMetadata } from "@/lib/metadata";
import { slugify } from "@/lib/slug";
import TaxonomyPostList from "@/components/blog/TaxonomyPostList";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllTags().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tag = getAllTags().find((t) => t.slug === slug);
  if (!tag) return buildMetadata();
  return buildMetadata({
    title: `Tag: ${tag.name}`,
    url: `/tag/${slug}`,
  });
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tag = getAllTags().find((t) => t.slug === slug);
  if (!tag) notFound();

  const filteredPosts = getAllPosts().filter((p) =>
    p.tags.map(slugify).includes(slug)
  );

  return <TaxonomyPostList title={`Tag: ${tag.name}`} posts={filteredPosts} />;
}
