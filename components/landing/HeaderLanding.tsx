"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Retreat Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <Link href="/" className="flex-shrink-0 -ml-2">
            <div className="w-60 h-24 relative">
              <Image
                src="/fl.avif"
                alt="Retreats by Traveon Logo"
                width={240}
                height={96}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8 font-semibold">
            {/* Navigation Links */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-base font-normal"
              >
                {item.name}
              </Link>
            ))}

            {/* Book a Retreat Button */}
            <Link
              href="/book"
              className="bg-[#4CAF50] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 text-base ml-4 font-semibold"
            >
              Book a Retreat
            </Link>
          </div>

          {/* Mobile menu button - hidden on desktop */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 font-semibold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Only shown when hamburger is clicked */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition-colors duration-200 py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/book"
                className="bg-[#4CAF50] text-white px-6 py-2.5 rounded-lg hover:bg-green-600 transition-colors duration-200 text-center text-base mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Retreat
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderLanding;