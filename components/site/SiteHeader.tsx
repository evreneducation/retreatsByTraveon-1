"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Send } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { cn as _cn } from "@/lib/utils";
import Logo from "./Logo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Wellness Retreats", href: "/retreats/wellness" },
  { name: "Corporate Retreats", href: "/retreats/corporate" },
  { name: "Community Tours", href: "/tours/community" },
  { name: "MICE Tours", href: "/tours/mice" },
  { name: "Contact Us", href: "/contact" },
];

const services = ["Wellness", "Corporate Offsites", "Community Tours", "MICE"];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    company: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "919540111307";

    const messageLines = [
      `*New Retreat Inquiry*`,
      `-------------------------`,
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone}`,
      `*Company:* ${formData.company || "Not provided"}`,
      `*Service Interested In:* ${formData.service}`,
      `-------------------------`,
      `*Message:*`,
      `Hello! I'm interested in planning a ${formData.service} retreat. Please contact me to discuss the details.`,
    ];

    const message = messageLines.join("\n");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    // Reset form and close modal
    setFormData({ name: "", phone: "", email: "", service: "", company: "" });
    setIsModalOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full h-[80px] border-b bg-background/30 backdrop-blur supports-[backdrop-filter]:bg-background/30">
        {/* Inner wrapper: full width with padding */}
        <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo height={60} width={60} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={_cn(
                    "text-sm font-medium transition-smooth hover:text-primary relative",
                    "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                    active
                      ? "text-primary after:scale-x-100"
                      : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (Desktop only) */}
          <div className="hidden md:flex">
            <Button
              variant="hero"
              size="lg"
              onClick={() => setIsModalOpen(true)}
            >
              Plan Your Retreat
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background mt-[80px]">
            <nav className="px-4 sm:px-6 py-4 space-y-3">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={_cn(
                      "block py-2 text-sm font-medium transition-smooth",
                      active
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* CTA in mobile menu */}
              <div className="pt-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={() => setIsModalOpen(true)}
                >
                  Plan Your Retreat
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative z-50 bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-95 animate-in fade-in-0 zoom-in-95">
            <div className="p-6">
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Plan Your Retreat
                </h2>
                <p className="text-gray-600 mt-2">
                  Share your details and we'll get back to you!
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone No. *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name (optional)"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  className="w-full mt-6"
                  disabled={
                    !formData.name ||
                    !formData.phone ||
                    !formData.email ||
                    !formData.service
                  }
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send via WhatsApp
                </Button>
              </form>

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
