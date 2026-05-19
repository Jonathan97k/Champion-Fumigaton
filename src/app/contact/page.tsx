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
    { name: 'Mzuzu', description: 'Northern Region' },
    { name: 'Blantyre', description: 'Southern Region' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-[#0a0a0a] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Contact us for pest control"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#1a1a1a]/85 to-[#0a0a0a]/90"></div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D62828] rounded-full blur-[200px] opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F4B400] rounded-full blur-[200px] opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full"
            >
              <Sparkles className="text-[#F4B400]" size={16} />
              <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">
                Contact Us
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-8 mb-6 font-serif">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Ready to protect your property from pests? Contact us today for a free consultation and quote. Our team is ready to help you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D62828]/10 to-[#F4B400]/10 rounded-full blur-3xl opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full"
              >
                <Sparkles className="text-[#F4B400]" size={16} />
                <span className="text-gray-900 text-sm font-semibold tracking-wide uppercase">
                  Contact Information
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-8 mb-6 font-serif">
                Let's <span className="gradient-text">Connect</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
                Have questions or need a quote? Reach out to us through any of the channels below. Our team responds promptly to all inquiries.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#D62828] to-[#a31e1e] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#D62828]/30 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg md:text-xl mb-1 md:mb-2">Phone / WhatsApp</h4>
                    <a href="tel:+265991380581" className="text-gray-600 hover:text-[#D62828] transition-colors text-base md:text-lg">
                      +265 991 380 581
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#D62828] to-[#a31e1e] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#D62828]/30 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg md:text-xl mb-1 md:mb-2">Email</h4>
                    <a href="mailto:info@championfumigation.com" className="text-gray-600 hover:text-[#D62828] transition-colors text-base md:text-lg">
                      info@championfumigation.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#D62828] to-[#a31e1e] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#D62828]/30 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg md:text-xl mb-1 md:mb-2">Business Hours</h4>
                    <p className="text-gray-600 text-base md:text-lg">Monday - Saturday: 7:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-base md:text-lg">Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">Service Locations</h3>
                <div className="space-y-6">
                  {locations.map((location, index) => (
                    <motion.div
                      key={location.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-6 glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#D62828] to-[#a31e1e] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#D62828]/30 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="text-white" size={22} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg md:text-xl">{location.name}</h4>
                        <p className="text-gray-600 font-light text-sm md:text-base">{location.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/265991380581"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-xl flex items-center justify-center hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all duration-300 hover:scale-110"
                  >
                    <MessageCircle className="text-white" size={22} />
                  </a>
                </div>
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
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(214, 40, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(214, 40, 40, 0.1) 1px, transparent 1px)
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
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100"
            >
              <Sparkles className="text-[#F4B400]" size={16} />
              <span className="text-gray-900 text-sm font-semibold tracking-wide uppercase">
                Service Area
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-8 mb-6 font-serif">
              Serving <span className="gradient-text">Malawi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              We provide professional fumigation services across Malawi's major cities and surrounding areas.
            </p>
          </motion.div>

          <div className="glass rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D62828]/5 to-[#F4B400]/5"></div>
            <div className="relative grid md:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#D62828] to-[#a31e1e] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#D62828]/30"
                  >
                    <MapPin className="text-white" size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">{location.name}</h3>
                  <p className="text-gray-600 font-light">{location.description}</p>
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
