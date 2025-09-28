"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { useState, useRef, useEffect } from "react";

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      setVideoLoaded(true);
    };

    const handleError = () => {
      setVideoError(true);
    };

    iframe.addEventListener("load", handleLoad);
    iframe.addEventListener("error", handleError);

    const loadTimeout = setTimeout(() => {
      setVideoLoaded(true);
    }, 2000);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      iframe.removeEventListener("error", handleError);
      clearTimeout(loadTimeout);
    };
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {!videoError && (
          <div className="absolute inset-0 w-full h-full">
            <iframe
              ref={iframeRef}
              src="https://www.youtube.com/embed/2IIWjCN-LZs?autoplay=1&mute=1&loop=1&playlist=2IIWjCN-LZs&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1"
              title="Complete Solution for Corporate Offsites, MICE, Wellness & Community Retreats| Retreats by Traveon"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                videoLoaded ? "opacity-100" : "opacity-0"
              }`}
              style={{
                border: "none",
                width: "177.77vh", // 16:9 aspect ratio: 100vh * (16/9)
                height: "56.25vw", // 16:9 aspect ratio: 100vw * (9/16)
                minWidth: "100%",
                minHeight: "100%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              onLoad={() => setVideoLoaded(true)}
              onError={() => setVideoError(true)}
            />
          </div>
        )}

        {/* Fallback background image if video fails */}
        {videoError && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/hero-fallback.jpg')",
            }}
          />
        )}

        {/* Loading overlay */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}

        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white/15 backdrop-blur-md text-sm font-medium text-white mb-4 lg:mb-6 shadow-lg">
            <span className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></span>
            <span className="whitespace-nowrap">
              <span className="hidden sm:inline">
                Transformative Experiences Since 2020
              </span>
              <span className="sm:hidden">Since 2020</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-tight tracking-tight text-white mb-4 lg:mb-6 drop-shadow-2xl">
            <span className="block">
              Retreats that{" "}
              <span className="text-accent font-accent italic">Renew</span>,
            </span>
            <span className="block mt-2">
              Teams that <span className="text-[#37b4ba]">Thrive</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto opacity-95 text-white mb-6 lg:mb-8 drop-shadow-md">
            <span className="block sm:hidden">
              Immersive wellness & inspiring corporate retreats crafted by
              Traveon.
            </span>
            <span className="hidden sm:block">
              Immersive wellness, inspiring corporate offsites, community
              journeys, and MICE experiences—crafted by Retreats by Traveon.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 lg:mb-10 max-w-md sm:max-w-none mx-auto">
            <Button
              variant="cta"
              size="lg"
              asChild
              className="group w-full sm:w-auto sm:min-w-[200px] lg:min-w-[220px] shadow-xl"
            >
              <a
                href="#pillar-grid"
                className="flex items-center justify-center text-base font-medium py-3"
              >
                <span>Explore Retreats</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              variant="transparent"
              size="lg"
              asChild
              className="group w-full sm:w-auto sm:min-w-[200px] lg:min-w-[220px] backdrop-blur-md shadow-lg"
            >
              <Link
                href="/retreats/corporate"
                className="flex items-center justify-center text-base font-medium py-3"
              >
                <Play className="mr-2 h-4 w-4" />
                <span>Corporate Plans</span>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 opacity-95 text-white max-w-sm sm:max-w-2xl md:max-w-4xl mx-auto">
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-3 sm:p-4 lg:p-5">
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-heading mb-1 drop-shadow-md">
                50+
              </div>
              <div className="text-xs sm:text-sm lg:text-base uppercase tracking-wide leading-tight opacity-90">
                <span className="sm:hidden">Retreats</span>
                <span className="hidden sm:inline">Retreats Hosted</span>
              </div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-3 sm:p-4 lg:p-5">
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-heading mb-1 drop-shadow-md">
                1K+
              </div>
              <div className="text-xs sm:text-sm lg:text-base uppercase tracking-wide leading-tight opacity-90">
                <span className="sm:hidden">Lives</span>
                <span className="hidden sm:inline">Lives Transformed</span>
              </div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-3 sm:p-4 lg:p-5">
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-heading mb-1 drop-shadow-md">
                20+
              </div>
              <div className="text-xs sm:text-sm lg:text-base uppercase tracking-wide leading-tight opacity-90">
                <span className="sm:hidden">Clients</span>
                <span className="hidden sm:inline">Corporate Clients</span>
              </div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-3 sm:p-4 lg:p-5">
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-heading mb-1 drop-shadow-md">
                4.9★
              </div>
              <div className="text-xs sm:text-sm lg:text-base uppercase tracking-wide leading-tight opacity-90">
                <span className="sm:hidden">Rating</span>
                <span className="hidden sm:inline">Guest Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce z-10">
        <div className="w-5 h-8 border border-white/40 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-white/60 rounded-full mt-1.5"></div>
        </div>
      </div>
    </section>
  );
}
