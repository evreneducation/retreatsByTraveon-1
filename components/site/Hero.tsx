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

    iframe.addEventListener('load', handleLoad);
    iframe.addEventListener('error', handleError);

    // Set a timeout to show the video after a reasonable loading time
    const loadTimeout = setTimeout(() => {
      setVideoLoaded(true);
    }, 2000);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      iframe.removeEventListener('error', handleError);
      clearTimeout(loadTimeout);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
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
              className={`absolute transition-opacity duration-500 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                border: 'none',
                top: '50%',
                left: '50%',
                width: '100vw',
                height: '56.25vw', // 16:9 aspect ratio
                minHeight: '100vh',
                minWidth: '177.78vh', // 16:9 aspect ratio
                transform: 'translate(-50%, -50%)'
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
              backgroundImage: "url('/assets/hero-fallback.jpg')"
            }}
          />
        )}
        
        {/* Loading overlay - Only shown while loading */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}
        
        {/* Light overlay for text readability - Very subtle */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto text-center w-full">
          
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-xs sm:text-sm font-medium text-white mb-4 sm:mb-6 shadow-lg">
            <span className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></span>
            <span className="whitespace-nowrap">
              <span className="hidden sm:inline">Transformative Experiences Since 2020</span>
              <span className="sm:hidden">Since 2020</span>
            </span>
          </div>

          {/* Main Heading - Improved responsive sizing */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-bold leading-tight sm:leading-[1.05] tracking-tight text-white mb-4 sm:mb-6 px-2 drop-shadow-lg">
            <span className="block sm:inline">Retreats that{" "}</span>
            <span className="text-accent font-accent italic">Renew</span>
            <span className="block sm:inline">,</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">Teams that </span>
            <span className="text-[#37b4ba]">Thrive</span>
          </h1>

          {/* Description - Better responsive text sizing */}
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto opacity-95 text-white mb-6 sm:mb-8 px-2 drop-shadow-md">
            <span className="block sm:hidden">
              Immersive wellness & inspiring corporate retreats crafted by Traveon.
            </span>
            <span className="hidden sm:block">
              Immersive wellness, inspiring corporate offsites, community journeys, and MICE experiences—crafted by Retreats by Traveon.
            </span>
          </p>

          {/* CTA Buttons - Enhanced styling */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Button variant="cta" size="lg" asChild className="group w-full sm:w-auto sm:min-w-[220px] max-w-xs sm:max-w-none shadow-xl">
              <Link href="/retreats/wellness" className="flex items-center justify-center text-sm sm:text-base lg:text-lg font-medium">
                <span>Explore Retreats</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button variant="transparent" size="lg" asChild className="group w-full sm:w-auto sm:min-w-[220px] max-w-xs sm:max-w-none backdrop-blur-md shadow-lg">
              <Link href="/retreats/corporate" className="flex items-center justify-center text-sm sm:text-base lg:text-lg font-medium">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span>Corporate Plans</span>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators - Better responsive grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6 lg:gap-8 xl:gap-12 opacity-95 text-white max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-2">
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading mb-1 drop-shadow-md">
                50+
              </div>
              <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide leading-tight opacity-90">
                <span className="block sm:hidden">Retreats</span>
                <span className="hidden sm:block">Retreats Hosted</span>
              </div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading mb-1 drop-shadow-md">
                1K+
              </div>
              <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide leading-tight opacity-90">
                <span className="block sm:hidden">Lives</span>
                <span className="hidden sm:block">Lives Transformed</span>
              </div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading mb-1 drop-shadow-md">
                20+
              </div>
              <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide leading-tight opacity-90">
                <span className="block sm:hidden">Clients</span>
                <span className="hidden sm:block">Corporate Clients</span>
              </div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading mb-1 drop-shadow-md">
                4.9★
              </div>
              <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide leading-tight opacity-90">
                <span className="block sm:hidden">Rating</span>
                <span className="hidden sm:block">Guest Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile for better space usage */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce z-10 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}