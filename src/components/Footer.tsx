'use client';

import { MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const services = [
    'Termite Proofing',
    'Rodent Control',
    'Agricultural Fumigation',
    'Indoor Residual Spraying',
    'Herbicide Spraying',
    'Industrial Spraying',
    'Hygiene Solutions',
    'Bee Removal Services',
  ];

  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D62828] rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F4B400] rounded-full blur-[200px] opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img
                src="/logo.jpg"
                alt="Champion Fumigation"
                className="h-16 w-auto rounded-xl object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">
                  Champion <span className="gradient-text">Fumigation</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed font-light">
              Industry-leading fumigation and pest control solutions across Malawi. Certified experts delivering uncompromising protection.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/265991380581" className="group w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 hover:scale-110">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-[#F4B400] uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a href="/services" className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D62828] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-[#F4B400] uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D62828] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D62828] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D62828] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D62828] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D62828] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-[#F4B400] uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D62828]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#D62828]" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a href="tel:+265991380581" className="text-white font-semibold hover:text-[#D62828] transition-colors">
                    +265 991 380 581
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D62828]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#D62828]" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Locations</p>
                  <p className="text-white font-semibold">Lilongwe · Mzuzu · Blantyre</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D62828]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#D62828]" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Hours</p>
                  <p className="text-white font-semibold">Mon - Sat: 7am - 6pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 md:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 Champion Fumigation Services. All Rights Reserved.
          </p>
          <p className="gradient-text font-semibold text-sm uppercase tracking-wider">
            Excellence in Pest Control
          </p>
        </div>
      </div>
    </footer>
  );
}
