"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  packageTitle: string;
  travelDate: string;
  verified: boolean;
  videoUrl?: string;
  type?: "text" | "video";
  company?: string;
  role?: string;
  employees?: string;
  packageIds?: string[]; // Add packageIds to specify which packages this testimonial belongs to
}

interface LightVideoProps {
  src: string;
  autoplayOnView?: boolean;
  className?: string;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  poster?: string;
}

// LightVideo Component
function LightVideo({
  src,
  autoplayOnView = false,
  className = "",
  controls = true,
  muted = true,
  loop = false,
  poster,
}: LightVideoProps) {
  const [playing, setPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (autoplayOnView && entry.isIntersecting) {
          setPlaying(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [autoplayOnView]);

  useEffect(() => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.play().catch(console.error);
      } else {
        videoRef.current.pause();
      }
    }
  }, [playing]);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* For click-to-play case, mount only when playing to avoid initial buffering. */}
      {(autoplayOnView || playing || isInView) && (
        <video
          ref={videoRef}
          src={src}
          className="absolute inset-0 h-full w-full object-cover rounded-lg"
          controls={controls}
          muted={muted}
          loop={loop}
          poster={poster}
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={(e) => console.error("Video error:", e)}
        />
      )}

      {/* Play/Pause Overlay */}
      {!controls && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all"
        >
          {playing ? (
            <Pause className="h-12 w-12 text-white" />
          ) : (
            <Play className="h-12 w-12 text-white" />
          )}
        </button>
      )}

      {/* Fallback for when video is not loaded */}
      {!playing && !autoplayOnView && poster && (
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}
    </div>
  );
}

// Updated testimonials with packageIds
const sampleTestimonials: Testimonial[] = [
  // Phool Chatti - Arunanand - Only Meenakshi Bansal
  {
    id: "phool-chatti-1",
    name: "Meenakshi Bansal",
    location: "Mumbai, India",
    avatar: "/testimonials/5.jpg",
    rating: 5,
    review:
      "The Nirvana wellness retreat was absolutely transformative. Arunanand's guidance through meditation and sound healing helped me find inner peace I didn't know I was looking for.",
    packageTitle: "Nirvana — Anantam a Holistic Wellness Retreat",
    travelDate: "",
    verified: true,
    type: "text",
    packageIds: ["nirvana-arunanand-4d"] // Only for Phool Chatti package
  },
  // Naad Wellness - Anant - Only Arun Jain
  {
    id: "naad-wellness-1",
    name: "Arun Jain",
    location: "Pune, India",
    avatar: "/testimonials/2.jpg",
    rating: 4,
    review:
      "During the wellness retreat, I discovered a new sense of energy and positivity all around me. By practicing mindfulness daily, I now feel calmer, healthier, and more balanced in life.",
    packageTitle: "Nirvana — Inner Journey Meditation & Healing",
    travelDate: "",
    verified: true,
    type: "text",
    packageIds: ["nirvana-naad-wellness-4d"] // Only for Naad Wellness package
  },
  // Tapovan Rishikesh - Anant - Only Arun Jain (different testimonial)
  {
    id: "tapovan-1",
    name: "Arun Jain",
    location: "Pune, India",
    avatar: "/testimonials/2.jpg",
    rating: 5,
    review:
      "The Himalayan retreat experience was incredible. The combination of yoga, meditation, and sound healing in the mountains created a perfect environment for self-discovery and inner peace.",
    packageTitle: "Nirvana — Inner Journey Meditation & Healing",
    travelDate: "",
    verified: true,
    type: "text",
    packageIds: ["nirvana-anant-4d"] // Only for Tapovan Rishikesh package
  },
  // Magical Muscat - Aditya Kumar - Only for Magical Muscat package
  {
    id: "magical-muscat-1",
    name: "Aditya Kumar",
    location: "Delhi, India",
    avatar: "/testimonials/3.jpg",
    rating: 5,
    review:
      "Magical Muscat exceeded all expectations! The desert safari was breathtaking, and dolphin watching was unforgettable. Our guide was knowledgeable and the hotel was luxurious. Perfect family vacation.",
    packageTitle: "Magical Muscat — 5 Days / 4 Nights",
    travelDate: "November 2024",
    verified: true,
    type: "video",
    packageIds: ["magical-muscat-5d", "magical-muscat"] // Multiple IDs for better matching
  },
  // Seychelles - Anil Kumar - Only for Seychelles package
  {
    id: "seychelles-1",
    name: "Anil Kumar",
    location: "Bangalore, India",
    avatar: "/testimonials/1.jpg",
    rating: 5,
    review:
      "Seychelles was like paradise on earth! The group tour was perfectly organized, and La Digue island cycling was so much fun. The beaches were pristine and the local culture fascinating.",
    packageTitle: "Seychelles — Fixed Departure Group Tour",
    travelDate: "October 2024",
    verified: true,
    type: "text",
    packageIds: ["seychelles-group-tour", "seychelles"] // Multiple IDs for better matching
  },
  // Corporate Sound Healing Testimonials
  {
    id: "corp-1",
    name: "Lokesh",
    location: "",
    avatar: "/testimonials/10.png",
    rating: 5,
    review:
      "The session was absolutely amazing. I had a great time experiencing the vibrations. I felt it all over my body. Even though it was midday on a workday, this helped me unwind for thirty minutes. I'm really grateful!",
    packageTitle: "2 Hrs Onsite Sound Healing Workshop for Corporates",
    travelDate: "",
    verified: true,
    type: "text",
    company: "Google",
    role: "Gurgaon",
    employees: "",
    packageIds: ["corporate-sound-healing", "2hrs-onsite-sound-healing", "corporate", "sound-healing"] // Multiple IDs for better matching
  },
  {
    id: "corp-2",
    name: "Jigyasa Saxena",
    location: "",
    avatar: "/testimonials/6.jpg",
    rating: 5,
    review:
      "Our corporate team came back energized and more collaborative than ever. The leadership workshops and team-building activities were perfectly designed for our goals.",
    packageTitle: "2 Hrs Onsite Sound Healing Workshop for Corporates",
    travelDate: "",
    verified: true,
    type: "text",
    company: "Google",
    role: "Gurgaon",
    employees: "",
    packageIds: ["corporate-sound-healing", "2hrs-onsite-sound-healing", "corporate", "sound-healing"] // Multiple IDs for better matching
  },
];

interface TestimonialsSectionProps {
  packageId?: string;
  limit?: number;
  className?: string;
}

export function TestimonialsSection({
  packageId,
  limit = 3,
  className = "",
}: TestimonialsSectionProps) {
  // Filter testimonials by package if specified
  const filteredTestimonials = packageId
    ? sampleTestimonials.filter((t) => {
        // First check if testimonial has specific packageIds
        if (t.packageIds && t.packageIds.length > 0) {
          return t.packageIds.some(pid => 
            packageId.toLowerCase().includes(pid.toLowerCase()) || 
            pid.toLowerCase().includes(packageId.toLowerCase())
          );
        }
        
        // Fallback to package title matching for packages without specific IDs
        const packageIdLower = packageId.toLowerCase();
        return (
          t.packageTitle.toLowerCase().includes(packageIdLower) ||
          (packageIdLower.includes("2hr") && t.id.startsWith("corp-")) ||
          (packageIdLower.includes("corporate") && t.id.startsWith("corp-")) ||
          (packageIdLower.includes("sound") && t.id.startsWith("corp-")) ||
          (packageIdLower.includes("seychelles") && t.id === "seychelles-1") ||
          (packageIdLower.includes("muscat") && t.id === "magical-muscat-1")
        );
      })
    : sampleTestimonials;

  const displayTestimonials = filteredTestimonials.slice(0, limit);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  // Check if we're showing corporate testimonials
  const isCorporatePackage =
    packageId &&
    (packageId.toLowerCase().includes("2hr") ||
      packageId.toLowerCase().includes("corporate") ||
      packageId.toLowerCase().includes("sound") ||
      packageId.toLowerCase().includes("workshop"));

  // Debug: Log filtered testimonials (remove in production)
  useEffect(() => {
    if (packageId) {
      console.log(`Package ID: ${packageId}`);
      console.log(`Filtered testimonials:`, filteredTestimonials);
    }
  }, [packageId, filteredTestimonials]);

  return (
    <div className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          {isCorporatePackage
            ? "What Our Corporate Clients Say"
            : "What Our Travelers Say"}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {isCorporatePackage
            ? "Real experiences from companies that have transformed their workplace wellness"
            : "Real experiences from real people who have traveled with us"}
        </p>
      </div>

      {displayTestimonials.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No testimonials found for this package.</p>
          <p className="text-sm text-muted-foreground mt-2">Package ID: {packageId}</p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    {/* Video Testimonial */}
                    {testimonial.type === "video" && testimonial.videoUrl && (
                      <div className="mb-4 h-48 relative rounded-lg overflow-hidden">
                        <LightVideo
                          src={testimonial.videoUrl}
                          autoplayOnView={false}
                          className="h-full w-full"
                          controls={true}
                          muted={true}
                          poster={testimonial.avatar}
                        />
                      </div>
                    )}

                    {/* Quote Icon for text testimonials */}
                    {testimonial.type !== "video" && (
                      <div className="mb-4">
                        <Quote className="h-8 w-8 text-blue-500 opacity-60" />
                      </div>
                    )}

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Review Text */}
                    <p className="text-muted-foreground mb-6 line-clamp-4 leading-relaxed">
                      "{testimonial.review}"
                    </p>

                    {/* Package Info */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium text-blue-600 line-clamp-1">
                        {testimonial.packageTitle}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {testimonial.travelDate}
                      </div>
                      {testimonial.employees && (
                        <div className="text-xs text-green-600 font-medium mt-1">
                          {testimonial.employees}
                        </div>
                      )}
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            // Fallback for broken images
                            const target = e.target as HTMLImageElement;
                            target.src = "/fallback-avatar.png";
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-sm">
                            {testimonial.name}
                          </div>
                          {testimonial.verified && (
                            <Badge
                              variant="secondary"
                              className="text-xs px-2 py-0"
                            >
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.location}
                        </div>
                        {testimonial.company && testimonial.role && (
                          <div className="text-xs text-blue-600 font-medium">
                            {testimonial.role}, {testimonial.company}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Reviews Link */}
          {filteredTestimonials.length > limit && (
            <div className="text-center mt-8">
              <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                View All Reviews ({filteredTestimonials.length - limit} more)
              </button>
            </div>
          )}
        </>
      )}

      {/* Trust Indicators */}
      <div className="mt-12 text-center">
        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>
              {isCorporatePackage
                ? "50+ Companies Served"
                : "500+ Happy Travelers"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>4.8/5 Average Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>100% Verified Reviews</span>
          </div>
          {isCorporatePackage && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>2,000+ Employees Impacted</span>
            </div>
          )}
        </div>
      </div>

      {/* Corporate Stats Section */}
      {isCorporatePackage && (
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">95%</div>
            <div className="text-sm text-gray-600 mt-2">
              Employee Satisfaction
            </div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="text-2xl font-bold text-green-600">50+</div>
            <div className="text-sm text-gray-600 mt-2">Companies Served</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <div className="text-sm text-gray-600 mt-2">Repeat Clients</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">2K+</div>
            <div className="text-sm text-gray-600 mt-2">Employees Impacted</div>
          </div>
        </div>
      )}
    </div>
  );
}