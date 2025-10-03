import React from "react";
import { Music, Leaf } from "lucide-react";
import Image from "next/image";

const WellnessProgramsLanding = () => {
  const programs = [
    {
      id: 1,
      title: "Sound Healing",
      description:
        "Experience the therapeutic power of vibrations through Tibetan singing bowls, gongs, and crystal bowls to harmonize your energy.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 64 64">
          <g fillRule="evenodd">
            <path d="M57.244 29.604c-1.867-3.078-5.027-6.358-9.898-6.325c-6.857.046-9.533 5.497-11.82 10.063c-.713 1.422-1.854 3.618-3.461 3.93c-1.908.37-2.973-.726-4.229-1.246c2.625-2.122 4.979-4.6 5.383-8.53c.65-6.333-3.262-10.315-8.457-10.734c-5.027-.406-9.073.971-12.302 2.779c-.87.487-2.634 1.55-2.691 2.396c-.041.611 2.172 3.588 3.941 7.763c2.293-1.473 5.539-4.166 9.226-4.504c6.402-.587 6.908 5.634.576 6.805c-2.625.484-4.949-.195-7.112-.575c1.216 2.799-.63 8.066 1.538 9.968c2.037 1.787 4.892-.36 7.207-.287c3.369.106 5.744 3.811 4.133 7.477c-2.072 4.713-10.082 5.896-14.895 2.875c-9.199-5.774-7.544-16.678-9.227-16.678C2.935 34.779 1.898 62 21.686 62c7.92 0 14.586-5.953 13.936-14.377c-.189-2.451-1.123-4.625-1.73-6.518c1.629.176 3.229.034 4.709-.191c-2.031 3.484-.703 10.032 1.057 12.651c2.641 3.928 8.939 5.281 13.551 2.205c3.828-2.553 6.369-6.749 6.729-12.652c.328-5.43-.62-10.096-2.694-13.514M46.961 48.007c-4.555.483-7.445-1.905-7.783-7.188c3.814-1.569 5.074-8.202 9.705-10.927c4.008-2.358 6.271 2.432 6.535 5.847c.496 6.415-2.992 11.687-8.457 12.268" />
            <path d="M39.225 13.502s5.533-3.808 5.525-5.799C44.742 5.729 39.225 2 39.225 2S33.707 5.712 33.7 7.703c-.009 2.008 5.525 5.799 5.525 5.799" />
            <path d="M37.832 21.457c7.871 1.771 17.875-4.362 17.875-6.422c0-2.626-4.729-5.121-5.574-6.229c-2.537 3.265-7.109 7.418-12.975 5.846c-5.861-1.57-8.264-9.297-8.264-9.297c-.791 2.497-.781 5.519.096 7.859c1.315 3.508 5.092 7.399 8.842 8.243" />
          </g>
        </svg>
      ),
      iconBg: "bg-green-500",
      image: "/holistic1.avif",
      link: "#",
    },
    {
      id: 2,
      title: "Meditation",
      description:
        "Dive deep into mindfulness practices with guided meditations designed to calm the mind and cultivate inner awareness.",
      icon: <Leaf className="w-6 h-6" />,
      iconBg: "bg-green-400",
      image: "/holistic2.avif",
      link: "#",
    },
    {
      id: 3,
      title: "Yoga Sessions",
      description:
        "Flow through gentle yoga practices in serene natural settings to enhance flexibility, strength, and mental clarity.",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M482.752,435.574c-6.928-8.1-23.127-40.492-23.127-40.492s2.676-3.448,0-15.051c-3.48-15.035-18.514-13.886-21.978-17.349c-3.479-3.472-33.549-58.424-35.863-64.792c-2.314-6.369-27.772-78.662-27.772-78.662c-8.549-37.604-24.308-53.221-45.121-57.85c-20.64-4.581-31.817-3.471-41.075-11.571c-5.778-5.054-5.573-8.809-5.573-24.056c0,0,6.235-5.927,10.784-14.122c5.195-9.375,7.746-22.907,7.746-22.907c5.211-2.086,5.274-4.684,7.525-12.965c3.118-11.461,2.897-19.317-5.431-19.317C304.836,19.066,286.085,0,256,0c-30.07,0-48.821,19.066-46.853,56.441c-8.328,0-8.564,7.856-5.432,19.317c2.251,8.281,2.314,10.879,7.51,12.965c0,0,2.55,13.532,7.762,22.907c4.55,8.194,10.784,14.122,10.784,14.122c0,15.247,0.189,19.002-5.589,24.056c-9.242,8.1-20.435,6.99-41.059,11.571c-20.828,4.628-36.572,20.246-45.12,57.85c0,0-25.457,72.294-27.771,78.662c-2.314,6.368-32.401,61.32-35.864,64.792c-3.464,3.463-18.514,2.314-21.978,17.349c-2.676,11.603,0,15.051,0,15.051s-16.2,32.392-23.143,40.492c-6.942,8.092,5.794,13.878,13.886,3.464c0.944,1.409,4.156,2.424,7.793,2.912c-28.228,31.251-12.138,71.964,31.55,69.98C118.291,510.3,256,485.316,256,485.316S393.707,510.3,429.54,511.93c43.688,1.984,59.778-38.729,31.534-69.98c3.652-0.488,6.864-1.503,7.808-2.912C476.974,449.452,489.695,443.666,482.752,435.574z M183.123,383.849c0,0-59.274,17.626-96.192,34.234c7.604-14.154,16.357-33.423,16.357-33.423l37.029-53.212l29.504-64.218c0,0,9.257,34.714,12.138,39.917C184.855,312.35,183.123,383.849,183.123,383.849z M328.891,383.849c0,0-1.732-71.498,1.149-76.702c2.897-5.203,12.154-39.917,12.154-39.917l29.504,64.218l37.013,53.212c0,0,8.769,19.27,16.373,33.423C388.165,401.474,328.891,383.849,328.891,383.849z" />
        </svg>
      ),
      iconBg: "bg-orange-500",
      image: "/holistic3.avif",
      link: "#",
    },
    {
      id: 4,
      title: "Live Music",
      description:
        "Immerse yourself in healing frequencies with live acoustic performances that complement your wellness journey.",
      icon: <Music className="w-6 h-6" />,
      iconBg: "bg-cyan-500",
      image: "/holistic4.avif",
      link: "#",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm mb-4">
            <span className="text-green-600 text-2xl">
              <svg fill="#4aaf52" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.063,8.226a7.976,7.976,0,0,0-5.521.63,10.063,10.063,0,0,0-3.986-5.687,1,1,0,0,0-1.112,0A10.072,10.072,0,0,0,7.457,8.858a7.964,7.964,0,0,0-5.521-.632,1,1,0,0,0-.732.769,10.771,10.771,0,0,0,2.481,9.149C6.036,20.781,8.873,21,11.816,21h.356c2.947,0,5.786-.219,8.14-2.855A10.764,10.764,0,0,0,22.8,8.994,1,1,0,0,0,22.063,8.226ZM12,5.245a8.36,8.36,0,0,1,2.772,4.73,9.256,9.256,0,0,0-1.089,1.017A10.3,10.3,0,0,0,12,13.515a10.345,10.345,0,0,0-1.687-2.523A9.314,9.314,0,0,0,9.227,9.98,8.362,8.362,0,0,1,12,5.245ZM10.958,18.992c-2.272-.05-4.173-.376-5.78-2.179A8.762,8.762,0,0,1,3.06,10.04a6.63,6.63,0,0,1,5.762,2.341A8.768,8.768,0,0,1,10.958,18.992Zm7.861-2.179c-1.61,1.8-3.513,2.129-5.789,2.179a8.759,8.759,0,0,1,2.138-6.61,6.808,6.808,0,0,1,5.011-2.393,5.528,5.528,0,0,1,.761.052A8.755,8.755,0,0,1,18.819,16.813Z"/></svg>
            </span>
            <span className="text-green-600 font-extrabold text-sm uppercase tracking-wide">
              OUR PROGRAMS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Holistic Wellness{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #4aaf52, #25b593, #16b8ad)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experiences
            </span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Discover our carefully curated programs designed to restore balance,
            reduce stress, and awaken your inner peace through ancient healing
            practices and modern wellness techniques.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Icon Badge */}
                <div
                  className={`absolute top-4 right-4 ${program.iconBg} rounded-full p-3 text-white shadow-lg`}
                >
                  {program.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-500 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <a
                  href={program.link}
                  className="inline-flex items-center gap-2 text-green-600 font-medium text-sm hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <svg
                    className="w-4 h-4"
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
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Programs Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-green-600 text-white font-medium px-8 py-3 rounded-full hover:bg-green-700 hover:scale-110 hover:gap-3 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
            View All Programs
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
    </section>
  );
};

export default WellnessProgramsLanding;
