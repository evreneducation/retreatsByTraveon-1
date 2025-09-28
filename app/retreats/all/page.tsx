import Link from "next/link";
import Image from "next/image";

const retreatCategories = [
  {
    name: "Wellness Retreats",
    href: "/retreats/wellness",
    image: "/wellness-retreats/13.jpg",
    backImage: "/wellness-retreats/13.jpg", // Add different image for back side
  },
  {
    name: "Corporate Retreats",
    href: "/retreats/corporate",
    image: "/corporate-retreats/10.jpg",
    backImage: "/corporate-retreats/10.jpg", // Add different image for back side
  },
  {
    name: "Community Tours",
    href: "/tours/community",
    image: "/community-tours/26.jpg",
    backImage: "/community-tours/26.jpg", // Add different image for back side
  },
  {
    name: "MICE Tours",
    href: "/tours/mice",
    image: "/mice-tours/1.jpg",
    backImage: "/mice-tours/1.jpg", // Add different image for back side
  },
];

export default function AllRetreatsPage() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div className="w-full py-20 bg-gradient-to-r from-[hsl(182_45%_48%_/_0.9)] to-[hsl(130_45%_58%_/_0.9)]">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-white mb-4">
            Explore All Retreats
          </h1>
          <p className="text-xl text-center text-white/90 max-w-2xl mx-auto">
            Discover transformative experiences tailored for wellness,
            corporate, community, and special events
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-16 mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {retreatCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group block perspective-1000"
            >
              <div className="relative h-80 transform-style-3d transition-all duration-700 ease-in-out group-hover:rotate-y-180 animate-fade-up">
                {/* Front of the card */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl backface-visibility-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                    {/* Content on front */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-2xl font-bold mb-2 font-heading">
                        {category.name}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mb-3"></div>
                      <p className="text-sm opacity-90 font-body">
                        Hover to explore
                      </p>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                  </div>
                </div>

                {/* Back of the card */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl backface-visibility-hidden rotate-y-180">
                  <div className="relative w-full h-full">
                    <Image
                      src={category.backImage || category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-60" />

                    {/* Content on back */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center text-white z-10 opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg backdrop-blur-sm animate-fade-in">
                        <div className="relative w-10 h-10">
                          <Image
                            src="/logo/logobg.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-heading">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/90 mb-4 font-body">
                        Click to discover amazing {category.name.toLowerCase()}{" "}
                        experiences
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-green-400 text-white rounded-full backdrop-blur-sm border border-white/30 font-body shadow-md hover:shadow-lg transition-shadow animate-fade-in">
                        <span className="text-sm font-medium">Explore Now</span>
                        <span className="text-lg font-bold">→</span>
                      </div>
                    </div>

                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
