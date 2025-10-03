/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Users, Heart, Sprout, Brain } from "lucide-react";

const HolisticHealingSectionLanding = () => {
  const benefits = [
    {
      id: 1,
      title: "Stress & Anxiety Relief",
      description:
        "Our scientifically-backed techniques help reduce cortisol levels and activate your parasympathetic nervous system for deep relaxation and mental clarity.",
      icon: <Brain className="w-5 h-5" />,
      iconBg: "bg-green-500",
    },
    {
      id: 2,
      title: "Mental & Physical Balance",
      description:
        "Achieve harmony between mind and body through integrated practices that strengthen your core stability and emotional resilience.",
      icon: <Heart className="w-5 h-5" />,
      iconBg: "bg-yellow-500",
    },
    {
      id: 3,
      title: "Holistic Transformation",
      description:
        "Experience lasting change through our comprehensive approach that nurtures your spiritual, emotional, and physical well-being simultaneously.",
      icon: <Sprout className="w-5 h-5" />,
      iconBg: "bg-teal-500",
    },
    {
      id: 4,
      title: "Supportive Community",
      description:
        "Connect with like-minded individuals on similar wellness journeys and build lasting relationships in our nurturing retreat environment.",
      icon: <Users className="w-5 h-5" />,
      iconBg: "bg-green-500",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-100 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-100 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-100 rounded-full opacity-20 blur-xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm mb-4 border border-green-100">
            <span className="text-green-600 text-xl">
              <svg
                fill="#4caf50"
                width="25px"
                height="20px"
                viewBox="0 0 15 15"
                version="1.1"
                id="heart"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#xA;&#x9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"
                />
              </svg>
            </span>
            <span className="text-[#4caf50] font-extrabold text-sm uppercase tracking-wide">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Your Life Through{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #4aaf52, #25b593, #16b8ad)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Holistic Healing
            </span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Experience the profound benefits of our integrated approach to
            wellness, combining <br /> ancient wisdom with modern understanding
            to create lasting positive change.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            {/* Image Card - Only this rotates on hover */}
            <div className="relative transform rotate-3 group hover:rotate-0 transition-transform duration-500 ease-out">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/board.avif"
                  alt="Mind Body Spirit Board"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Stats Badges - These stay fixed */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border-4 border-white z-10 w-44 h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">100%</div>
                <div className="text-sm text-gray-600 font-medium">
                  Natural Healing
                </div>
              </div>
            </div>

            <div className="absolute top-0 -right-6 bg-white rounded-2xl shadow-xl p-6 border-4 border-white z-10 w-44 h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Happy Participants
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex gap-4 group cursor-pointer">
                {/* Icon */}
                <div
                  className={`${benefit.iconBg} rounded-2xl p-6 h-12 py-2 px-4 text-white flex-shrink-0 transition-all duration-300 group-hover:scale-110 shadow-lg`}
                >
                  {benefit.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-green-600">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-6">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 via-green-600 to-teal-600 text-white font-semibold px-8 py-4 rounded-full hover:scale-110 hover:gap-3 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
                Start Your Journey
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisticHealingSectionLanding;
