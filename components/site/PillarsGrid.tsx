// components/site/PillarsGrid.tsx
"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Heart, Users, Compass, Briefcase, ArrowRight } from "lucide-react";
import { CrossfadeCarousel } from "@/components/shared/CrossfadeCarousel";

const pillars = [
  {
    title: "Wellness Retreats",
    description:
      "Rejuvenate your mind, body, and spirit with curated wellness experiences",
    features: [
      "Yoga & Meditation",
      "Sound Healing",
      "Nature Therapy",
      "Ayurveda",
    ],
    icon: Heart,
    image: "/wellness-retreats/1.jpg",
    images: [
      "/wellness-retreats/21.jpg",
      "/wellness-retreats/22.jpg",
      "/wellness-retreats/40.webp",
    ],
    href: "/retreats/wellness",
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Corporate Retreats",
    description:
      "Build stronger teams and drive innovation through transformative offsites",
    features: [
      "Leadership Development",
      "Team Building",
      "Strategic Planning",
      "Creativity Workshops",
    ],
    icon: Briefcase,
    image: "/corporate-retreats/33.jpg",
    images: [
      "/corporate-retreats/33.jpg",
      "/corporate-retreats/34.jpg",
      "/corporate-retreats/35.jpg",
      "/corporate-retreats/36.jpg",
      "/corporate-retreats/37.jpg",
    ],
    href: "/retreats/corporate",
    color: "text-secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Community Tours",
    description:
      "Connect with local cultures and communities through meaningful travel",
    features: [
      "Cultural Immersion",
      "Local Experiences",
      "Authentic Connections",
      "Sustainable Tourism",
    ],
    icon: Compass,
    image: "/community-tours/1.jpg",
    images: [
      "/community-tours/32.jpg",
      "/community-tours/19.jpg",
      "/community-tours/29.jpg",
      "/community-tours/28.jpg",
    ],
    href: "/tours/community",
    color: "text-accent",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "MICE Tours",
    description:
      "Elevate business events with luxury venues and seamless logistics",
    features: [
      "Conference Management",
      "Incentive Programs",
      "Luxury Venues",
      "Event Coordination",
    ],
    icon: Users,
    image: "/mice-tours/1.jpg",
    images: [
      "/mice-tours/1.jpg",
      "/mice-tours/2.jpg",
      "/mice-tours/3.jpg",
      "/mice-tours/4.jpg",
    ],
    href: "/tours/mice",
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5",
  },
] as const;

function PillarCard({ pillar }: { pillar: (typeof pillars)[number] }) {
  const media = pillar.images?.length
    ? pillar.images.map((src) => ({ type: "image" as const, src }))
    : [{ type: "image" as const, src: pillar.image }];

  return (
    <Card
      key={pillar.title}
      className={`group hover:shadow-floating transition-spring overflow-hidden bg-gradient-to-br ${pillar.gradient} border-0`}
    >
      {/* Carousel */}
      <div className="relative">
        <CrossfadeCarousel
          media={media}
          alt={pillar.title}
          interval={2400}
          className="aspect-[4/3]"
          priority
        />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Icon Badge */}
        <div className="absolute top-4 left-4">
          <div className="p-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-soft">
            {(() => {
              const Icon = pillar.icon;
              return <Icon className={`h-6 w-6 ${pillar.color}`} />;
            })()}
          </div>
        </div>
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-heading group-hover:text-primary transition-smooth">
          {pillar.title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {pillar.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Features */}
        <div className="grid grid-cols-2 gap-2">
          {pillar.features.map((feature) => (
            <div key={feature} className="flex items-center text-sm text-muted">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
              {feature}
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button
          variant="outline"
          size="lg"
          className="w-full px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-smooth shadow-md hover:shadow-lg"
          asChild
        >
          <Link href={pillar.href} className="flex items-center justify-center">
            <span className="block sm:hidden">Explore</span>
            <span className="hidden sm:block md:hidden">
              Explore {pillar.title.split(" ")[0]}
            </span>
            <span className="hidden md:block">Explore {pillar.title}</span>
            <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export function PillarsGrid() {
  return (
    <div id="pillar-grid">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Four Paths to <span className="text-gradient">Rejuvenation</span>
        </h2>
        <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          Whether seeking personal renewal, team growth, cultural connection, or
          business excellence, we create experiences that leave lasting impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar) => (
          <PillarCard key={pillar.title} pillar={pillar} />
        ))}

        {/* Bottom CTA */}
        <div className="md:col-span-2 text-center mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6">
          <Button
            variant="hero"
            size="lg"
            asChild
            className="w-full sm:w-auto sm:min-w-[280px] md:min-w-[320px] lg:min-w-[360px] px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Link href="/contact" className="flex items-center justify-center">
              <span className="block sm:hidden">Start Planning</span>
              <span className="hidden sm:block md:hidden">
                Plan Your Experience
              </span>
              <span className="hidden md:block">
                Start Planning Your Experience
              </span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
