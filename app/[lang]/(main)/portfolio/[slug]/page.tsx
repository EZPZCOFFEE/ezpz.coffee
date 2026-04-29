import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PORTFOLIO_CLIENTS, getClientBySlug } from "../data";
import CaseStudyPage from "./CaseStudyPage";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_CLIENTS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client = getClientBySlug(slug);
  if (!client) return {};

  return {
    title: `${client.name} Case Study | EZPZ Coffee`,
    description: `How EZPZ Coffee helped ${client.name} launch their own custom coffee brand. ${client.description}.`,
    alternates: { canonical: `/en/portfolio/${slug}` },
    openGraph: {
      title: `${client.name} | An EZPZ Coffee Case Study`,
      description: client.description,
      type: "website",
      url: `https://www.ezpz.coffee/en/portfolio/${slug}`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: `${client.name} | EZPZ Coffee Case Study` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${client.name} | An EZPZ Coffee Case Study`,
      description: client.description,
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  const client = getClientBySlug(slug);
  if (!client) notFound();

  return <CaseStudyPage client={client} />;
};

export default Page;
