import { Hero } from "@/components/site/Hero";
import { PillarsGrid } from "@/components/site/PillarsGrid";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { listPackages } from "@/lib/seed";
import { PackageCard } from "@/components/site/PackageCard";
import Link from "next/link";
import { Testimonials } from "@/components/site/Testimonials";
import ClientsSection from "@/components/site/ClientsSection";

export default function HomePage() {
  const featured = listPackages().slice(0, 3);

  return (
    <main>
      <Hero />

      <ClientsSection />

      {/* Pillars */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container">
          <PillarsGrid />
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="container py-12">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-6">
          <h2
            className="
      text-3xl sm:text-4xl md:text-5xl font-bold 
      text-center sm:text-left 
      bg-gradient-to-r 
      from-[hsl(182_45%_48%_/_0.9)] 
      to-[hsl(130_45%_58%_/_0.9)] 
      bg-clip-text text-transparent
      mb-4 sm:mb-0
    "
          >
            Featured Experiences
          </h2>

          <Link
            href="/retreats/all"
            className="
      text-primary underline 
      text-lg sm:text-base
      hover:opacity-80 transition
    "
          >
            Explore all
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <PackageCard key={p.slug} pkg={p} />
          ))}
        </div>
      </section>

      <WhyChooseUs />

      <Testimonials />
    </main>
  );
}
