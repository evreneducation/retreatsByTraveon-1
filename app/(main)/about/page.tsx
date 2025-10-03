"use client";
import React from "react";
import { PageHeader } from "@/components/site/PageHeader";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Full-width Video Banner - No Black Borders */}
      <div className="relative w-full h-[60vh] min-h-[500px] max-h-[800px] overflow-hidden">
        {/* Video Container - Full Width with No Borders */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full relative">
            <iframe
              src="https://www.youtube.com/embed/2IIWjCN-LZs?autoplay=1&mute=1&loop=1&playlist=2IIWjCN-LZs&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1"
              className="absolute top-1/2 left-1/2 w-[178%] h-[178%] transform -translate-x-1/2 -translate-y-1/2 min-w-[100vw] min-h-[100vh]"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Traveon Retreats Experience"
              style={{
                aspectRatio: "16/9",
              }}
            />
          </div>
        </div>

        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="text-white max-w-4xl mx-auto px-6">
            <div className="inline-block mb-4">
              <span className="text-white font-semibold text-lg sm:text-xl lg:text-3xl tracking-wide">
                THE EXPERIENCES ARM OF TRAVEON VENTURES
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight relative">
              <span className="relative bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
                Relax
                <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-r from-blue-300 to-green-300 rounded-full mx-3 sm:mx-4 lg:mx-5 xl:mx-6 align-middle"></span>
                Reconnect
                <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-r from-blue-300 to-green-300 rounded-full mx-3 sm:mx-4 lg:mx-5 xl:mx-6 align-middle"></span>
                Reset
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Mission Statement Section with GIF */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* GIF Image */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-lg">
                <Image
                  src="/about/about.gif"
                  alt="Traveon Retreats Experience"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-lg"
                  unoptimized
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                We exist to help people{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  connect
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                Within themselves, within teams, and within communities through
                thoughtfully curated experiences that blend local culture,
                nature, and premium hospitality.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <span className="text-blue-600 text-xl">🌍</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    Global Reach
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <span className="text-green-600 text-xl">✨</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    Premium Quality
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 rounded-full p-2">
                    <span className="text-purple-600 text-xl">🤝</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    Local Partnerships
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 rounded-full p-2">
                    <span className="text-orange-600 text-xl">🎯</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    Purpose-Driven
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {[
            {
              title: "Community Tours",
              icon: "🌍",
              desc: "Immersive cultural journeys that connect you with local communities",
            },
            {
              title: "Wellness Retreats",
              icon: "🧘",
              desc: "Transformative experiences focused on mindfulness and wellbeing",
            },
            {
              title: "Corporate Offsites",
              icon: "💼",
              desc: "Strategic retreats that strengthen teams and drive results",
            },
            {
              title: "MICE Programs",
              icon: "🎯",
              desc: "Large-format meetings and events delivered with precision",
            },
          ].map((item, index) => (
            <div key={index} className="group h-full">
              <div className="flex flex-col h-full bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Philosophy */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-green-900 rounded-3xl p-6 sm:p-10 lg:p-16 mb-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our Philosophy
            </h2>

            <div className="grid gap-8 sm:gap-10 md:grid-cols-2 text-left">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      Thoughtful Curation
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                      Every detail is carefully selected to create meaningful
                      connections and lasting memories.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      Seamless Operations
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                      Professional execution with transparent budgets and no
                      surprises.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      Local Integration
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                      Authentic experiences that honor local culture, nature,
                      and hospitality traditions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      Purpose-Driven
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                      Every itinerary is built around your specific goals for
                      connection, wellbeing, and results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Journey Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Journey with Traveon
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From initial planning to unforgettable memories, we guide you
              through every step
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 mb-6 transform group-hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-xl font-bold text-gray-900">Plan</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Collaborative planning with our experts to design your perfect
                experience
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-8 mb-6 transform group-hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">✈️</div>
                <h3 className="text-xl font-bold text-gray-900">Experience</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Immerse yourself in carefully curated activities and local
                culture
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 mb-6 transform group-hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-gray-900">Transform</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Return with renewed energy, deeper connections, and lasting
                memories
              </p>
            </div>
          </div>
        </div>

        {/* Trust & Quality */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl lg:rounded-3xl p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
                Built on Trust
              </h2>
              <p className="text-base lg:text-xl text-gray-600 px-4">
                Our commitment to excellence is reflected in every aspect of our
                service delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center">
              <div className="space-y-3 lg:space-y-4">
                <div className="bg-blue-600 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto">
                  <span className="text-white text-lg lg:text-2xl">🤝</span>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900">
                  Partner Network
                </h3>
                <p className="text-sm lg:text-base text-gray-600 px-2">
                  Trusted on-ground partners who share our commitment to quality
                  and authenticity
                </p>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <div className="bg-green-600 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto">
                  <span className="text-white text-lg lg:text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900">
                  Safety Standards
                </h3>
                <p className="text-sm lg:text-base text-gray-600 px-2">
                  Rigorous safety protocols ensuring peace of mind throughout
                  your journey
                </p>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <div className="bg-purple-600 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto">
                  <span className="text-white text-lg lg:text-2xl">💎</span>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900">
                  Transparent Pricing
                </h3>
                <p className="text-sm lg:text-base text-gray-600 px-2">
                  Clear budgets with no hidden costs—just beautifully run
                  experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
