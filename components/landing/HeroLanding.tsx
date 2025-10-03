import React from "react";

export default function HeroLanding() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.avif')",
        }}
      />

      {/* Overlay - Darker for better text visibility */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Decorative circles - Hidden on mobile */}
      <div className="hidden lg:block absolute top-20 left-20 w-24 h-24 rounded-full bg-green-400/30 blur-2xl" />
      <div className="hidden lg:block absolute top-1/2 right-32 w-20 h-20 rounded-full bg-teal-500/40 blur-xl" />
      <div className="hidden lg:block absolute bottom-32 right-20 w-32 h-32 rounded-full bg-yellow-600/20 blur-2xl" />

      {/* Bottom gradient strip */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#87c24d] via-[#7fc256] via-[#66c16e] via-[#5ec076] via-[#48c08d] to-[#1abebb]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Transform Your Mind,{" "}
          <span className="bg-gradient-to-r from-[#87c24d] via-[#7fc256] via-[#66c16e] to-[#5ec076] bg-clip-text text-transparent">
            Body
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#48c08d] to-[#1abebb] bg-clip-text text-transparent">
            & Soul
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          Join our holistic wellness retreats featuring sound healing,
          meditation, yoga, and live music sessions designed to alleviate stress
          and restore your inner balance.
        </p>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 px-4">
          <div className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#8bc34a] flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 64 64"
            >
              <g fillRule="evenodd">
                <path d="M57.244 29.604c-1.867-3.078-5.027-6.358-9.898-6.325c-6.857.046-9.533 5.497-11.82 10.063c-.713 1.422-1.854 3.618-3.461 3.93c-1.908.37-2.973-.726-4.229-1.246c2.625-2.122 4.979-4.6 5.383-8.53c.65-6.333-3.262-10.315-8.457-10.734c-5.027-.406-9.073.971-12.302 2.779c-.87.487-2.634 1.55-2.691 2.396c-.041.611 2.172 3.588 3.941 7.763c2.293-1.473 5.539-4.166 9.226-4.504c6.402-.587 6.908 5.634.576 6.805c-2.625.484-4.949-.195-7.112-.575c1.216 2.799-.63 8.066 1.538 9.968c2.037 1.787 4.892-.36 7.207-.287c3.369.106 5.744 3.811 4.133 7.477c-2.072 4.713-10.082 5.896-14.895 2.875c-9.199-5.774-7.544-16.678-9.227-16.678C2.935 34.779 1.898 62 21.686 62c7.92 0 14.586-5.953 13.936-14.377c-.189-2.451-1.123-4.625-1.73-6.518c1.629.176 3.229.034 4.709-.191c-2.031 3.484-.703 10.032 1.057 12.651c2.641 3.928 8.939 5.281 13.551 2.205c3.828-2.553 6.369-6.749 6.729-12.652c.328-5.43-.62-10.096-2.694-13.514M46.961 48.007c-4.555.483-7.445-1.905-7.783-7.188c3.814-1.569 5.074-8.202 9.705-10.927c4.008-2.358 6.271 2.432 6.535 5.847c.496 6.415-2.992 11.687-8.457 12.268" />
                <path d="M39.225 13.502s5.533-3.808 5.525-5.799C44.742 5.729 39.225 2 39.225 2S33.707 5.712 33.7 7.703c-.009 2.008 5.525 5.799 5.525 5.799" />
                <path d="M37.832 21.457c7.871 1.771 17.875-4.362 17.875-6.422c0-2.626-4.729-5.121-5.574-6.229c-2.537 3.265-7.109 7.418-12.975 5.846c-5.861-1.57-8.264-9.297-8.264-9.297c-.791 2.497-.781 5.519.096 7.859c1.315 3.508 5.092 7.399 8.842 8.243" />
              </g>
            </svg>
            <span className="whitespace-nowrap">Sound Healing</span>
          </div>
          <div className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#8bc34a] flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 1200 1200"
            >
              <path d="M131.652,839.52c-7.46-17.981-16.747-35.855-19.464-55.253C76.402,534.149,280.466,331.362,465.682,254.339c185.214-77.022,398.471,45.498,524.903-86.019c31.587-35.667,63.736-69.443,111.762-69.694c20.018,0.993,36.688,10.401,45.207,26.999c158.034,323.688-67.753,707.493-322.728,843.865c-161.812,79.98-329.249,97.576-485.976,43.323c-43.582-10.338-78.515-55.918-123.691-56.51c-31.154,17.48-57.029,74.434-78.17,105.797c-24.625,42.738-73.658,54.038-108.937,16.64C-74.847,977.334,138.995,887.333,131.652,839.52z M269.158,798.08c22.099,17.854,53.978,12.793,70.95-5.022C475.799,628.65,659.535,556.522,859.36,561.999c29.444,1.709,50.848-22.136,52.74-47.718c0.592-30.381-22.788-50.927-48.975-52.742c-241.513-13.425-451.044,93.065-598.993,264.964C245.394,749.903,248.796,781.038,269.158,798.08L269.158,798.08z" />
            </svg>
            <span className="whitespace-nowrap">Meditation</span>
          </div>
          <div className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#8bc34a] flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M482.752,435.574c-6.928-8.1-23.127-40.492-23.127-40.492s2.676-3.448,0-15.051c-3.48-15.035-18.514-13.886-21.978-17.349c-3.479-3.472-33.549-58.424-35.863-64.792c-2.314-6.369-27.772-78.662-27.772-78.662c-8.549-37.604-24.308-53.221-45.121-57.85c-20.64-4.581-31.817-3.471-41.075-11.571c-5.778-5.054-5.573-8.809-5.573-24.056c0,0,6.235-5.927,10.784-14.122c5.195-9.375,7.746-22.907,7.746-22.907c5.211-2.086,5.274-4.684,7.525-12.965c3.118-11.461,2.897-19.317-5.431-19.317C304.836,19.066,286.085,0,256,0c-30.07,0-48.821,19.066-46.853,56.441c-8.328,0-8.564,7.856-5.432,19.317c2.251,8.281,2.314,10.879,7.51,12.965c0,0,2.55,13.532,7.762,22.907c4.55,8.194,10.784,14.122,10.784,14.122c0,15.247,0.189,19.002-5.589,24.056c-9.242,8.1-20.435,6.99-41.059,11.571c-20.828,4.628-36.572,20.246-45.12,57.85c0,0-25.457,72.294-27.771,78.662c-2.314,6.368-32.401,61.32-35.864,64.792c-3.464,3.463-18.514,2.314-21.978,17.349c-2.676,11.603,0,15.051,0,15.051s-16.2,32.392-23.143,40.492c-6.942,8.092,5.794,13.878,13.886,3.464c0.944,1.409,4.156,2.424,7.793,2.912c-28.228,31.251-12.138,71.964,31.55,69.98C118.291,510.3,256,485.316,256,485.316S393.707,510.3,429.54,511.93c43.688,1.984,59.778-38.729,31.534-69.98c3.652-0.488,6.864-1.503,7.808-2.912C476.974,449.452,489.695,443.666,482.752,435.574z M183.123,383.849c0,0-59.274,17.626-96.192,34.234c7.604-14.154,16.357-33.423,16.357-33.423l37.029-53.212l29.504-64.218c0,0,9.257,34.714,12.138,39.917C184.855,312.35,183.123,383.849,183.123,383.849z M328.891,383.849c0,0-1.732-71.498,1.149-76.702c2.897-5.203,12.154-39.917,12.154-39.917l29.504,64.218l37.013,53.212c0,0,8.769,19.27,16.373,33.423C388.165,401.474,328.891,383.849,328.891,383.849z" />
            </svg>
            <span className="whitespace-nowrap">Yoga Sessions</span>
          </div>
          <div className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#8bc34a] flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
            </svg>
            <span className="whitespace-nowrap">Live Music</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20 px-4">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#45a030] hover:bg-[#45a049] text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105 cursor-pointer w-full sm:w-auto">
            Book Your Retreat
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full font-semibold text-base sm:text-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Explore Programs
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 text-white/90 mt-4 sm:mt-8 px-4">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-teal-500 border-2 border-white" />
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-yellow-500 border-2 border-white" />
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-green-500 border-2 border-white" />
            </div>
            <span className="text-sm sm:text-base font-medium">
              Join 500+ Happy Participants
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm sm:text-base font-medium">5.0 Average Rating</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:block absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}