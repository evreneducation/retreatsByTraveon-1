"use client";
import React, { useState } from "react";
import {
  Home,
  Users,
  Calendar,
  Star,
  Mail,
  MessageSquare,
  HelpCircle,
  Clock,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FooterLanding = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          source: 'landing' // Identify this is from landing page
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Thank you for subscribing! We'll keep you updated with our latest retreats.");
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Failed to subscribe. Please check your connection and try again.");
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsLoading(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <footer className="relative bg-[#3a3a3a] text-white overflow-hidden">
      {/* Wave Pattern at Top */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C200,20 400,80 600,50 C800,20 1000,80 1200,50 L1200,0 L0,0 Z"
            fill="#4a6b56"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-2 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <div className="mb-6 cursor-pointer">
              <Link href="/">
                <Image
                  src="/fl.avif"
                  alt="Retreats by Traveon Logo"
                  width={104}
                  height={96}
                  className="mb-4"
                />
              </Link>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Transform your mind, body, and soul through our holistic wellness
              retreats featuring sound healing, meditation, <br/> yoga, and live music
              sessions.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/retreatsbytraveon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#4a9f4d] hover:bg-[#8bc34a] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* <a
                href="https://www.facebook.com/retreatsbytraveon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#4a9f4d] hover:bg-[#8bc34a] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a> */}
              <a
                href="https://www.youtube.com/@TraveonVentures"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#4a9f4d] hover:bg-[#8bc34a] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/traveon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#4a9f4d] hover:bg-[#8bc34a] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-[#8bc34a] inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition-colors duration-300 group"
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition-colors duration-300 group"
                >
                  <Users className="w-4 h-4" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition-colors duration-300 group"
                >
                  <svg fill="#e2e8f0" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.063,8.226a7.976,7.976,0,0,0-5.521.63,10.063,10.063,0,0,0-3.986-5.687,1,1,0,0,0-1.112,0A10.072,10.072,0,0,0,7.457,8.858a7.964,7.964,0,0,0-5.521-.632,1,1,0,0,0-.732.769,10.771,10.771,0,0,0,2.481,9.149C6.036,20.781,8.873,21,11.816,21h.356c2.947,0,5.786-.219,8.14-2.855A10.764,10.764,0,0,0,22.8,8.994,1,1,0,0,0,22.063,8.226ZM12,5.245a8.36,8.36,0,0,1,2.772,4.73,9.256,9.256,0,0,0-1.089,1.017A10.3,10.3,0,0,0,12,13.515a10.345,10.345,0,0,0-1.687-2.523A9.314,9.314,0,0,0,9.227,9.98,8.362,8.362,0,0,1,12,5.245ZM10.958,18.992c-2.272-.05-4.173-.376-5.78-2.179A8.762,8.762,0,0,1,3.06,10.04a6.63,6.63,0,0,1,5.762,2.341A8.768,8.768,0,0,1,10.958,18.992Zm7.861-2.179c-1.61,1.8-3.513,2.129-5.789,2.179a8.759,8.759,0,0,1,2.138-6.61,6.808,6.808,0,0,1,5.011-2.393,5.528,5.528,0,0,1,.761.052A8.755,8.755,0,0,1,18.819,16.813Z"/></svg>
                  <span>Retreat Programs</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition-colors duration-300 group"
                >
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Gallery</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition-colors duration-300 group"
                >
                  <Star className="w-4 h-4" />
                  <span>Testimonials</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-[#ff9800] inline-block">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition-colors duration-300 group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Booking</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition-colors duration-300 group"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition-colors duration-300 group"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition-colors duration-300 group"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>FAQ</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-[#00bcd4] inline-block">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold mb-1">Email</p>
                  <a
                    href="mailto:info@traveon.in"
                    className="text-gray-300 text-sm hover:text-green-500 transition-colors"
                  >
                    info@traveon.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold mb-1">Phone</p>
                  <a
                    href="tel:+919540111307"
                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                  >
                    +1 (555) 123-RETREAT
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold mb-1">Hours</p>
                  <p className="text-gray-300 text-sm">Mon-Fri: 9AM-6PM</p>
                  <p className="text-gray-300 text-sm">Sat-Sun: 10AM-4PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border border-white rounded-2xl p-4 sm:p-6 md:p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Side - Heading and Description */}
            <div className="text-center lg:text-left flex-shrink-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Stay Connected
              </h3>
              <p className="text-gray-300 text-sm max-w-md">
                Get wellness tips, retreat updates, and exclusive offers
                delivered to your inbox.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-auto lg:min-w-[400px]">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50 text-base"
                />
                <button
                  onClick={handleSubscribe}
                  disabled={isLoading}
                  className="px-6 py-3 bg-[#8bc34a] hover:bg-[#4caf50] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isLoading ? "..." : "Subscribe"}
                </button>
              </div>
              {message && (
                <p
                  className={`text-sm mt-2 text-center sm:text-left ${
                    message.includes("Thank you")
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Retreats by Traveon. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLanding;