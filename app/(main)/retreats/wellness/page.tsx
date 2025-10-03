"use client";

import { useState } from "react";
import { PackageCard } from "@/components/site/PackageCard";
import { listPackages } from "@/lib/seed";
import { CrossfadeCarousel } from "@/components/shared/CrossfadeCarousel";
import type { MediaItem } from "@/components/shared/CrossfadeCarousel";

export default function WellnessPage() {
  const items = listPackages().filter((p) => p.category === "Wellness");

  // Banner images
  const bannerMedia: MediaItem[] = [
  { type: "image", src: "/wellness-retreats/13.jpg"},
  { type: "image", src: "/wellness-retreats/18.jpg"},
  { type: "image", src: "/wellness-retreats/14.jpg"},
  { type: "image", src: "/wellness-retreats/40.webp"},
];

  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full">
      {/* Full-width Crossfade Carousel */}
      <div
        className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CrossfadeCarousel
          media={bannerMedia}
          alt="Wellness Retreats"
          interval={2500}
          showDots
          priority
          className={hovered ? "pointer-events-none" : ""}
        />

        {/* Overlay Heading */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold drop-shadow-soft tracking-wide">
            <span className="text-white">Wellness</span> <span className="text-[#F6B93B]">Retreats</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-white/90 font-body drop-shadow">
            Recharge your mind and body with curated wellness experiences focused on relaxation, yoga, meditation, and holistic healing.
          </p>
        </div>
      </div>

      {/* Page Content */}
      <div className="container py-12">
        {/* <PageHeader
          title="Wellness Retreats"
          subtitle="Mind-body reset journeys"
        /> */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <PackageCard key={p.slug} pkg={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
