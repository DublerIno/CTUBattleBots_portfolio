import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TransitionLink } from "@/components/page-transition";
import { RobotSection } from "@/components/robot-section";
import { robots } from "@/lib/robots";

export function generateStaticParams() {
  return robots.map((robot) => ({ slug: robot.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const robot = robots.find((entry) => entry.slug === slug);
  return { title: robot?.name ?? "Battlebots" };
}

export default async function RobotDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const robot = robots.find((entry) => entry.slug === slug);
  if (!robot) notFound();

  return (
    <main id="main-content" className="robot-detail-page">
      <TransitionLink href="/battlebots" className="robot-back-link">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 12H4m7 7-7-7 7-7" stroke="currentColor" strokeWidth="1.2" /></svg>
        ZPĚT NA BATTLEBOTS
      </TransitionLink>
      <RobotSection robot={robot} index={0} standalone />
    </main>
  );
}
