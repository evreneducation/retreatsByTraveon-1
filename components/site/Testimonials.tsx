// components/site/Testimonials.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";



type Media = {
  type: "video" | "image" | "youtube";
  src: string; // /testimonials/1.mp4 OR /assets/...jpg OR YouTube embed URL
  poster?: string; // optional poster for video (or image fallback)
  format?: "portrait" | "landscape"; // portrait = 9:16, landscape = 16:9
  autoplayOnView?: boolean; // 
  loop?: boolean; // optional: loop video (default true)
  youtubeId?: string; // YouTube video ID for embedded videos
};

type Testimonial = {
  content: string;
  author: string;
  role: string;
  company?: string;
  rating: number;
  avatar: string;
  media?: Media;
  trip?: string;
};

/* ---------------- YouTube Embed Component ---------------- */
function YouTubeEmbed({
  youtubeId,
  title,
  format = "landscape",
}: {
  youtubeId: string;
  title: string;
  format?: "portrait" | "landscape";
}) {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const pad =
    format === "portrait"
      ? "pt-[177.78%]" /* 9:16 */
      : "pt-[56.25%]"; /* 16:9 */

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Observe visibility for autoplay
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio >= 0.3) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }
      },
      { threshold: [0, 0.3, 0.7] }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Handle mute toggle by sending postMessage to iframe
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      const command = isMuted ? "unMute" : "mute";
      iframe.contentWindow.postMessage(
        `{"event":"command","func":"${command}","args":""}`,
        "*"
      );
    }
    setIsMuted(!isMuted);
  };

  // YouTube embed URL with parameters for clean autoplay
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?${new URLSearchParams(
    {
      autoplay: isVisible ? "1" : "0",
      mute: "1",
      controls: "0",
      showinfo: "0",
      rel: "0",
      modestbranding: "1",
      iv_load_policy: "3",
      cc_load_policy: "0",
      disablekb: "1",
      fs: "0",
      loop: "1",
      playlist: youtubeId, // Required for loop to work
      enablejsapi: "1",
      origin:
        isClient && typeof window !== "undefined" ? window.location.origin : "",
    }
  ).toString()}`;

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full ${pad} rounded-xl overflow-hidden shadow-card bg-background group`}
    >
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title={title}
        className="absolute inset-0 h-full w-full pointer-events-auto"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={false}
      />

      {/* Custom Mute/Unmute Toggle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.63 3.63a.996.996 0 0 0-1.41 1.41L7.29 10.1 7 10.38V20c0 .55.45 1 1 1h.01c.2 0 .39-.08.54-.22L12 17.32V21c0 .55.45 1 1 1s1-.45 1-1v-8.68l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.56-.77 2.24-1.31l1.58 1.58a.996.996 0 1 0 1.41-1.41L3.63 3.63zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29L10.05 6l-.01.01L8.59 7.46c-.31.31-.76.45-1.16.32C7.08 7.66 6.75 7.34 6.75 7V5c0-.55.45-1 1-1 .2 0 .39.08.54.22z" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.22-1.21.22-1.21.85z" />
          </svg>
        )}
      </button>

      {/* Overlay to hide YouTube controls on hover */}
      <div className="absolute inset-0 pointer-events-none bg-transparent" />
    </div>
  );
}

/* ---------------- Light HTML5 Video ----------------
   - Shows poster by default.
   - If autoplayOnView=true, it autoplays muted once the card is ~50% visible.
   - Pauses when scrolled away; resumes when visible again.
---------------------------------------------------- */
function LightVideo({
  src,
  title,
  poster,
  format = "landscape",
  autoplayOnView = false,
  loop = true,
}: {
  src: string;
  title: string;
  poster?: string;
  format?: "portrait" | "landscape";
  autoplayOnView?: boolean;
  loop?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const pad =
    format === "portrait"
      ? "pt-[177.78%]" /* 9:16 */
      : "pt-[56.25%]"; /* 16:9 */

  // Observe visibility to start/stop video
  useEffect(() => {
    if (!autoplayOnView) return;
    const el = wrapperRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio >= 0.5) {
            setPlaying(true);
          } else {
            setPlaying(false);
          }
        }
      },
      { threshold: [0, 0.5, 1] }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [autoplayOnView]);

  // Keep the <video> element in control when visibility toggles
  useEffect(() => {
    const v = videoRef.current;
    if (!v || videoError) return;

    // Always sync the muted state
    v.muted = isMuted;

    if (playing) {
      // ensure muted is set before play (iOS/Safari)
      const playPromise = v.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch((error) => {
          console.warn("Video autoplay failed:", error);
          // Don't set error state for autoplay failures, just log them
        });
      }
    } else {
      try {
        v.pause();
      } catch (error) {
        console.warn("Video pause failed:", error);
      }
    }
  }, [playing, videoError, isMuted]);

  // Handle mute toggle
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  // Handle video errors
  const handleVideoError = () => {
    console.warn("Video failed to load:", src);
    setVideoError(true);
    setPlaying(false);
  };

  // If video failed to load, show poster or placeholder
  if (videoError) {
    return (
      <div
        className={`relative w-full ${pad} rounded-xl overflow-hidden shadow-card bg-background`}
      >
        {poster ? (
          <Image
            src={poster}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
            <div className="text-muted-foreground text-sm">
              Video unavailable
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full ${pad} rounded-xl overflow-hidden shadow-card bg-background`}
    >
      {/* Render poster layer if not playing and not in autoplay-on-view mode */}
      {!playing && !autoplayOnView && (
        <button
          type="button"
          aria-label="Play testimonial video"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full"
        >
          {poster ? (
            <Image
              src={poster}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 bg-muted/10" />
          )}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-smooth" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-14 w-14 rounded-full bg-white/95 text-primary grid place-items-center shadow-card group-hover:scale-105 transition-spring">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fill="currentColor" d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}

      {/* Always mount the <video> when autoplayOnView is true so it can start instantly when visible.
          For click-to-play case, mount only when playing to avoid initial buffering. */}
      {(autoplayOnView || playing) && (
        <video
          ref={videoRef}
          src={src}
          className="absolute inset-0 h-full w-full object-cover"
          muted={isMuted}
          playsInline
          loop={loop}
          preload={autoplayOnView ? "metadata" : "none"}
          onError={handleVideoError}
          onLoadStart={() => setVideoError(false)}
        >
          <source src={src} type="video/mp4" />
          <source src={src} type="video/mov" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Mute/Unmute Toggle - Show when video is playing or autoplayOnView is enabled */}
      {(playing || autoplayOnView) && !videoError && (
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.63 3.63a.996.996 0 0 0-1.41 1.41L7.29 10.1 7 10.38V20c0 .55.45 1 1 1h.01c.2 0 .39-.08.54-.22L12 17.32V21c0 .55.45 1 1 1s1-.45 1-1v-8.68l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.56-.77 2.24-1.31l1.58 1.58a.996.996 0 1 0 1.41-1.41L3.63 3.63zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29L10.05 6l-.01.01L8.59 7.46c-.31.31-.76.45-1.16.32C7.08 7.66 6.75 7.34 6.75 7V5c0-.55.45-1 1-1 .2 0 .39.08.54.22z" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.22-1.21.22-1.21.85z" />
            </svg>
          )}
        </button>
      )}

      {/* If autoplayOnView and not yet playing (not visible enough), show the poster behind the future video mount */}
      {autoplayOnView && !playing && poster && (
        <Image
          src={poster}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
    </div>
  );
}

/* ---------------- Media Frame ----------------
   Renders either an image, a (light) local video, or a YouTube embed with correct aspect.
------------------------------------------------ */
function MediaFrame({ media, title }: { media?: Media; title: string }) {
  if (!media) return null;
  const format = media.format ?? "landscape";
  const pad = format === "portrait" ? "pt-[177.78%]" : "pt-[56.25%]";

  if (media.type === "image") {
    return (
      <div
        className={`relative w-full ${pad} rounded-xl overflow-hidden shadow-card bg-background`}
      >
        <Image
          src={media.src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  if (media.type === "youtube" && media.youtubeId) {
    return (
      <YouTubeEmbed youtubeId={media.youtubeId} title={title} format={format} />
    );
  }

  return (
    <LightVideo
      src={media.src}
      poster={media.poster}
      title={title}
      format={format}
      autoplayOnView={media.autoplayOnView}
      loop={media.loop ?? true}
    />
  );
}

/* ---------------- Data ---------------- */

const testimonials: Testimonial[] = [
  {
    content:
      "Our group of five friends travelled to Pattaya and Bangkok—proof that adventure has no age! Traveon handled every detail with care: smooth transfers, clean and central hotels, and thoughtfully paced days. It was joyful, comfortable, and truly memorable.",
    author: "Mahendra Pratap Singh",
    role: "Retired Bank Manager",
    company: "(Lucknow)",
    rating: 5,
    avatar: "MS",
    trip: "Pattaya & Bangkok, Thailand",
    media: {
      type: "youtube",
      youtubeId: "PYR3zh_TFiY",
      format: "portrait",
      src: "",
    },
  },
  {
    content:
      "The community tour through Oman opened our eyes to authentic Arabia. Every interaction felt genuine, and the local connections we made were priceless.",
    author: "Vishal Vashisht",
    role: "Last Resort Estate",
    company: "",
    rating: 5,
    avatar: "VV",
    media: {
      type: "image",
      src: "/testimonials/oman.jpg",
      format: "landscape",
    },
  },
  {
    content:
      "As a food lover, the wellness retreat helped me realize that it's not just about eating, but about choosing the right food for a healthier and mindful life. I discovered that Satvik food is all we truly need to stay energetic and balanced.",
    author: "Ankit Garg",
    role: "Operations Manager",
    company: "GMR Infrastructure",
    rating: 5,
    avatar: "AG",
    media: {
      type: "image",
      src: "/testimonials/4.jpg",
      format: "landscape",
    },
  },
  {
    content:
      "Our corporate team came back energized and more collaborative than ever. The leadership workshops and team-building activities were perfectly designed for our goals.",
    author: "Jigyasa Saxena",
    role: "VP Operations",
    company: "Google",
    rating: 5,
    avatar: "/testimonials/6.jpg",
  },
  {
    author: "Anil Grag",
    role: "Mumbai, India",
    rating: 5,
    avatar: "AG",
    trip: "Kazakhstan",
    content:
      "Exploring Kazakhstan with Traveon was an unforgettable experience. From the bustling markets of Almaty to the futuristic skyline of Astana, every moment was filled with wonder and discovery. The local guides were incredibly knowledgeable and made us feel at home.",
    media: {
      type: "image",
      src: "/testimonials/ag.jpg",
      format: "landscape",
    },
  },
  {
    content:
      "The session was absolutely amazing. I had a great time experiencing the vibrations. I felt it all over my body. Even though it was midday on a workday, this helped me unwind for thirty minutes. I'm really grateful!",
    author: "Lokesh",
    role: "Google",
    company: "Gurugram",
    rating: 5,
    avatar: "L",
    media: {
      type: "youtube",
      youtubeId: "oyBmIPONT-0",
      format: "portrait",
      src: "",
    },
  },
];

/* ---------------- UI bits ---------------- */

function Rating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex space-x-1" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
      ))}
    </div>
  );
}

/* ---------------- Main ---------------- */

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 fill-current flex-shrink-0" />
            <span>Guest Stories</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
            <span className="block sm:inline">Voices of </span>
            <span className="text-gradient">Transformation</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
            <span className="block sm:hidden">
              Real stories from guests who found renewal and teams that
              discovered synergy.
            </span>
            <span className="hidden sm:block md:hidden">
              Real experiences from guests who found renewal and teams that
              discovered synergy.
            </span>
            <span className="hidden md:block">
              Real experiences from guests who found renewal, teams that
              discovered synergy, and travelers who connected with purpose.
            </span>
          </p>
        </div>

        {/* Masonry columns: no stretched rows, neat balancing */}
        <div className="space-y-8 md:columns-2 lg:columns-3 md:gap-8">
          {testimonials.map((t, index) => {
            const hasMedia = !!t.media;
            return (
              <Card
                key={`testimonial-${index}-${t.author.replace(/\s+/g, "-").toLowerCase()}`}
                className="relative p-8 shadow-card hover:shadow-floating transition-spring bg-gradient-to-br from-background to-primary/5 border-0 mb-8 break-inside-avoid"
              >
                {/* Hide quote if media exists to avoid overlay */}
                {!hasMedia && (
                  <div className="absolute top-6 right-6 opacity-20 pointer-events-none z-0">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>
                )}

                <CardContent className="p-0 space-y-6 relative z-10">
                  {/* Media */}
                  {hasMedia && (
                    <div>
                      <MediaFrame
                        media={t.media}
                        title={`${t.author} — Testimonial`}
                      />
                      {t.trip && (
                        <div className="mt-2 text-xs uppercase tracking-wide text-muted">
                          {t.trip}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Rating */}
                  <Rating count={t.rating} />

                  {/* Content */}
                  <blockquote className="text-lg leading-relaxed font-light italic">
                    "{t.content}"
                  </blockquote>

                  {/* Author */}
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {t.avatar.includes("/") ? (
                      // If avatar is an image path
                      <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                        <Image
                          src={t.avatar}
                          alt={t.author}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      // If avatar is initials
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-semibold">
                        {t.avatar}
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-foreground">
                        {t.author}
                      </div>
                      <div className="text-sm text-muted">
                        {t.role}
                        {t.company ? `, ${t.company}` : ""}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-8 rounded-2xl gradient-primary text-white">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
              4.9★
            </div>
            <div className="text-sm opacity-90 uppercase tracking-wide">
              Average Rating
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
              95%
            </div>
            <div className="text-sm opacity-90 uppercase tracking-wide">
              Would Recommend
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
              100+
            </div>
            <div className="text-sm opacity-90 uppercase tracking-wide">
              5-Star Reviews
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
              57%
            </div>
            <div className="text-sm opacity-90 uppercase tracking-wide">
              Return Guests
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
