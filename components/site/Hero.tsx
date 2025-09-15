"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";

export function Hero() {
  return (
    <section className="w-full overflow-hidden">
      {/* container: allow expansion on small screens, fixed height on md+ */}
      <div className="relative w-full min-h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] overflow-hidden">
        {/* VIDEO: absolute and use min-w/full + min-h/full with object-cover to always fill width/height */}
        <video
          src="/assets/landingPageVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-auto min-w-full h-auto min-h-full object-cover"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>

        {/* content on top */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 text-center z-10">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 py-8">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs sm:text-sm font-medium text-white">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Transformative Experiences Since 2020
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight tracking-tight text-white">
              Retreats that{" "}
              <span className="text-accent font-accent italic">Renew</span>,
              <br className="hidden sm:block" />
              Teams that <span className="text-[#37b4ba]">Thrive</span>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto opacity-90 text-white">
              Immersive wellness, inspiring corporate offsites, community journeys,
              and MICE experiences—crafted by Retreats by Traveon.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button variant="cta" size="lg" asChild className="group">
                <Link href="/retreats/wellness">
                  Explore Retreats
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button variant="transparent" size="lg" asChild className="group">
                <Link href="/retreats/corporate">
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Plan Corporate Getaway
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 opacity-90 text-white">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold font-heading">
                  150+
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">Retreats Hosted</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold font-heading">
                  2,500+
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">Lives Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold font-heading">
                  50+
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">Corporate Clients</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold font-heading">
                  4.9★
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">Guest Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Scroll Cue */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce z-10">
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
