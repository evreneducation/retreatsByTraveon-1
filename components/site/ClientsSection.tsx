"use client";

import Image from "next/image";

const logos = [
  { src: "/clients/1.png", alt: "Client 1" },
  { src: "/clients/2.png", alt: "Client 2" },
  { src: "/clients/3.png", alt: "Client 3" },
  { src: "/clients/4.png", alt: "Client 4" },
  { src: "/clients/5.png", alt: "Client 5" },
  { src: "/clients/6.png", alt: "Client 6" },
  { src: "/clients/7.png", alt: "Client 7" },
  { src: "/clients/8.png", alt: "Client 8" },
  { src: "/clients/9.png", alt: "Client 9" },
  { src: "/clients/10.png", alt: "Client 10" },
  { src: "/clients/11.png", alt: "Client 11" },
  { src: "/clients/12.png", alt: "Client 12" },
  { src: "/clients/13.png", alt: "Client 13" },
  { src: "/clients/14.png", alt: "Client 14" },
  { src: "/clients/15.png", alt: "Client 15" },
];

export default function ClientsSection() {
  return (
    <section className="py-16 bg-background">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[hsl(182_45%_48%_/_0.9)] to-[hsl(130_45%_58%_/_0.9)] bg-clip-text text-transparent">
        Our Clients
      </h2>

      <div className="overflow-hidden relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Slider Wrapper */}
        <div className="flex animate-infinite-scroll">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 lg:mx-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="relative w-28 h-14 sm:w-32 sm:h-16 md:w-36 md:h-18 lg:w-40 lg:h-20">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}