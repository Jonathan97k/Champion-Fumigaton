'use client';

import Link from 'next/link';
import { MessageCircle, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const serviceLinks: { name: string; href: string }[] = [
    { name: 'Termite Proofing', href: '/services/termite-proofing' },
    { name: 'Rodent Control', href: '/services/rodent-control' },
    { name: 'Agricultural Fumigation', href: '/services/agricultural-fumigation' },
    { name: 'Indoor Residual Spraying', href: '/services/indoor-residual-spraying' },
    { name: 'Herbicide Spraying', href: '/services/herbicide-spraying' },
    { name: 'Industrial Spraying', href: '/services/industrial-spraying' },
    { name: 'Hygiene Solutions', href: '/services/hygiene-solutions' },
    { name: 'Bee Removal Services', href: '/services/bee-removal' },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-[rgba(255,255,255,0.07)] relative z-[0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/logo.jpg"
                alt="Champion Fumigation"
                className="h-14 w-auto rounded-xl object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">
                  Champion <span className="text-[#c9a84c]">Fumigation</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm">
              Industry-leading fumigation and pest control solutions across Malawi. Certified experts delivering uncompromising protection.
            </p>
            <a
              href="https://wa.me/265991380581"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] px-4 py-2.5 rounded-lg hover:bg-[#25D366] hover:text-white transition-all duration-300 text-sm font-semibold"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.2em] mb-6">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.name}>
                  <a href={s.href} className="text-gray-500 hover:text-[#c9a84c] transition-colors text-sm">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.2em] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-500 hover:text-[#c9a84c] transition-colors text-sm">Home</Link>
              </li>
              <li>
                <a href="/about" className="text-gray-500 hover:text-[#c9a84c] transition-colors text-sm">About Us</a>
              </li>
              <li>
                <a href="/services" className="text-gray-500 hover:text-[#c9a84c] transition-colors text-sm">Services</a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-500 hover:text-[#c9a84c] transition-colors text-sm">Gallery</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-500 hover:text-[#c9a84c] transition-colors text-sm">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.2em] mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="text-[#c9a84c] mt-0.5" size={16} />
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Phone</p>
                  <a href="tel:+265991380581" className="text-gray-300 hover:text-[#c9a84c] transition-colors text-sm">
                    +265 991 380 581
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[#c9a84c] mt-0.5" size={16} />
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Locations</p>
                  <p className="text-gray-300 text-sm">Lilongwe · Kanengo</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-[#c9a84c] mt-0.5" size={16} />
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Hours</p>
                  <p className="text-gray-300 text-sm">Mon - Sat: 7am - 6pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.07)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; 2026 Champion Fumigation Services. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-gray-600 hover:text-[#c9a84c] transition-colors text-xs">Privacy Policy</a>
            <a href="/terms" className="text-gray-600 hover:text-[#c9a84c] transition-colors text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}