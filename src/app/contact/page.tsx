'use client';

import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail, MessageCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const locations = [
    { name: 'Lilongwe', description: 'Capital City Coverage' },
    { name: 'Kanengo', description: 'Industrial Hub Coverage' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-[#0a0a0a] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/IMG-20260520-WA0017.jpg"
            alt="Contact us for pest control"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#1a1a1a]/85 to-[#0a0a0a]/90"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a84c] rounded-full blur-[200px] opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c9a84c] rounded-full blur-[200px] opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#c9a84c] text-sm font-semibold tracking-[0.2em] uppercase"
            >
              Contact Us
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-6 mb-4 font-serif">
              Get in <span className="text-[#c9a84c]">Touch</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
              Ready to protect your property from pests? Contact us today for a free consultation and quote. Our team is ready to help you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#111418] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a84c] rounded-full blur-[200px] opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#c9a84c] text-sm font-semibold tracking-[0.2em] uppercase"
              >
                Contact Information
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-bold text-white mt-6 mb-4 font-serif">
                Let's <span className="text-[#c9a84c]">Connect</span>
              </h2>
              <p className="text-lg text-gray-400 mb-10 font-light leading-relaxed">
                Have questions or need a quote? Reach out to us through any of the channels below. Our team responds promptly to all inquiries.
              </p>

              <div className="space-y-4 mb-10">
                <div className="bg-[#1e2530] rounded-xl p-5 flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#c9a84c]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Phone / WhatsApp</h4>
                    <a href="tel:+265991380581" className="text-gray-400 hover:text-[#c9a84c] transition-colors text-base">
                      +265 991 380 581
                    </a>
                  </div>
                </div>

                <div className="bg-[#1e2530] rounded-xl p-5 flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#c9a84c]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Email</h4>
                    <a href="mailto:info@championfumigation.com" className="text-gray-400 hover:text-[#c9a84c] transition-colors text-base">
                      info@championfumigation.com
                    </a>
                  </div>
                </div>

                <div className="bg-[#1e2530] rounded-xl p-5 flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#c9a84c]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Business Hours</h4>
                    <p className="text-gray-400 text-base">Monday - Saturday: 7:00 AM - 6:00 PM</p>
                    <p className="text-gray-500 text-sm">Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="mb-10">
                <h3 className="text-lg font-bold text-white mb-5 font-serif">Service Locations</h3>
                <div className="space-y-3">
                  {locations.map((location, index) => (
                    <motion.div
                      key={location.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 bg-[#1e2530] rounded-xl p-4 hover:border-[#c9a84c]/30 transition-all duration-300 group border border-transparent"
                    >
                      <div className="w-10 h-10 bg-[#c9a84c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-[#c9a84c]" size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{location.name}</h4>
                        <p className="text-gray-500 text-xs">{location.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 font-serif">Follow Us</h3>
                <a
                  href="https://wa.me/265991380581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] px-5 py-3 rounded-lg hover:bg-[#25D366] hover:text-white transition-all duration-300 text-sm font-semibold"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(201, 168, 76, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201, 168, 76, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#c9a84c] text-sm font-semibold tracking-[0.2em] uppercase"
            >
              Service Area
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-6 mb-4 font-serif">
              Serving <span className="text-[#c9a84c]">Malawi</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              We provide professional fumigation services across Malawi's major cities and surrounding areas.
            </p>
          </motion.div>

          <div className="bg-[#161b22] border border-[rgba(255,255,255,0.07)] rounded-xl p-8 md:p-12">
            <div className="relative grid md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1e2530] rounded-xl p-8 text-center hover:border-[#c9a84c]/30 transition-all duration-300 border border-transparent"
                >
                  <div className="w-16 h-16 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-[#c9a84c]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-serif">{location.name}</h3>
                  <p className="text-gray-400 text-sm font-light">{location.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}