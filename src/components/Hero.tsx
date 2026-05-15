'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-[#0a0a0a] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://loremflickr.com/1920/1080/pest,control,exterminator"
          alt="Professional pest control"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#1a1a1a]/85 to-[#0a0a0a]/90"></div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D62828] rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F4B400] rounded-full blur-[200px] opacity-10"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(214, 40, 40, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214, 40, 40, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full"
            >
              <Sparkles className="text-[#F4B400]" size={16} />
              <span className="text-white/90 text-sm font-semibold tracking-wide">
                Premium Pest Control Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Protect What{' '}
              <span className="gradient-text">Matters</span>
              <br />
              Most
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-xl leading-relaxed font-light"
            >
              Industry-leading fumigation and pest control solutions across Malawi. Certified experts delivering uncompromising protection for homes, businesses, and agricultural assets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D62828] to-[#a31e1e] text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#D62828]/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="tel:+265991380581"
                className="group inline-flex items-center justify-center gap-3 glass text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} />
                Call +265 991 380 581
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-8 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5000+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Premium Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#D62828] to-[#a31e1e] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-[#F4B400] to-[#d4a000] rounded-full blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Main Card */}
              <motion.div
                initial={{ rotateY: 45, rotateX: 15 }}
                animate={{ rotateY: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative glass rounded-3xl p-10 shadow-2xl"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D62828]/10 to-[#F4B400]/10"></div>

                  <motion.img
                    src="/logo.jpg"
                    alt="Champion Fumigation"
                    className="relative z-10 max-h-48 w-auto object-contain rounded-2xl"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-[#F4B400] to-[#D62828] rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
