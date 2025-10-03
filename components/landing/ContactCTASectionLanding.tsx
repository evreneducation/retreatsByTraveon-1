"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  Calendar,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Send,
  ArrowRight,
} from "lucide-react";

const ContactCTASectionLanding = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Validate form
    if (!formData.firstName || !formData.email) {
      alert("Please fill in at least your name and email");
      return;
    }

    // Format WhatsApp message
    const whatsappMessage = `
*New Retreat Inquiry*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
${formData.interest ? `*Interested In:* ${formData.interest}` : ""}

*Message:*
${formData.message || "No message provided"}

---
_Sent from Retreat Contact Form_
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp API URL (use country code without + or 00)
    const whatsappURL = `https://wa.me/919540111307?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    // Optionally reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      interest: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-[#323832] via-[#407842] to-[#49a14d] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dotted Pattern Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #fff 2px, transparent 2px), radial-gradient(circle at 75% 75%, #fff 2px, transparent 2px)",
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 30px 30px",
        }}
      ></div>

      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-teal-400/10 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Contact Info */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Phone className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm font-semibold uppercase tracking-wide">
                GET IN TOUCH
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #a8e063, #56ab2f)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Wellness Journey
              </span>{" "}
              Today
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Ready to transform your life through holistic healing? We&apos;re
              here to guide you every step of the way. Get in touch to learn
              more about our retreat programs and find the perfect experience
              for your wellness goals.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-300 text-sm">
                    info@retreatbyrewoot.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-300 text-sm">+91 9540111307</p>
                </div>
              </div>

              {/* Consultation */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Free Consultation
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Schedule a 15-minute wellness call
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/retreatsbytraveon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 cursor-pointer">
                  <Instagram className="w-5 h-5 text-white" />
                </button>
              </a>

              {/* <a
                href="https://www.facebook.com/retreatsbytraveon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 cursor-pointer">
                  <Facebook className="w-5 h-5 text-white" />
                </button>
              </a> */}

              <a
                href="https://www.youtube.com/@TraveonVentures"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 cursor-pointer">
                  <Youtube className="w-5 h-5 text-white" />
                </button>
              </a>

              <a
                href="https://www.linkedin.com/company/traveon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 cursor-pointer">
                  <Linkedin className="w-5 h-5 text-white" />
                </button>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-300 text-sm">
                We&apos;ll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Program Interest */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Interested In
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-gray-800 text-white">
                    Select a program
                  </option>
                  <option
                    value="Sound Healing Retreat"
                    className="bg-gray-800 text-white"
                  >
                    Sound Healing Retreat
                  </option>
                  <option
                    value="Meditation Intensive"
                    className="bg-gray-800 text-white"
                  >
                    Meditation Intensive
                  </option>
                  <option
                    value="Yoga & Wellness"
                    className="bg-gray-800 text-white"
                  >
                    Yoga & Wellness
                  </option>
                  <option
                    value="Holistic Wellness Package"
                    className="bg-gray-800 text-white"
                  >
                    Holistic Wellness Package
                  </option>
                  <option
                    value="Custom Program"
                    className="bg-gray-800 text-white"
                  >
                    Custom Program
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your wellness goals and any questions you have..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white font-semibold py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
                style={{
                  background:
                    "linear-gradient(to right, #4aaf52, #25b593, #16b8ad)",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(to right, #a8e063, #56ab2f)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(to right, #4aaf52, #25b593, #16b8ad)";
                }}
              >
                <Send className="w-5 h-5" />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 text-center border border-white/20">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Transformation?
          </h3>
          <p className="text-gray-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Don&apos;t wait to start your wellness journey. Book your retreat
            today and take the first step toward a more balanced, peaceful, and
            fulfilling life.
          </p>
          <button className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
            Book Your Retreat Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASectionLanding;
