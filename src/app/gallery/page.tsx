'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Warehouse Fumigation',
      category: 'Industrial',
      image: '/images/IMG-20260520-WA0011.jpg',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Agricultural Fumigation',
      category: 'Agricultural',
      image: '/images/IMG-20260520-WA0014.jpg',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      title: 'Termite Treatment',
      category: 'Residential',
      image: '/images/IMG-20260520-WA0015.jpg',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 4,
      title: 'Pest Control Spraying',
      category: 'Commercial',
      image: '/images/IMG-20260520-WA0016.jpg',
      color: 'from-red-500 to-red-600',
    },
    {
      id: 5,
      title: 'Protective Team',
      category: 'Team',
      image: '/images/IMG-20260520-WA0017.jpg',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 6,
      title: 'Equipment Setup',
      category: 'Equipment',
      image: '/images/IMG-20260520-WA0018.jpg',
      color: 'from-gray-500 to-gray-600',
    },
    {
      id: 7,
      title: 'Safety Protocols',
      category: 'Safety',
      image: '/images/IMG-20260520-WA0019.jpg',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 8,
      title: 'After Treatment',
      category: 'Results',
      image: '/images/IMG-20260520-WA0021.jpg',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-[#0a0a0a] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/IMG-20260520-WA0022.jpg"
            alt="Fumigation work gallery"
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
                Gallery
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-8 mb-6 font-serif">
              Our <span className="gradient-text">Work</span> in Action
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Browse through our portfolio of successful fumigation projects across Malawi. See how we protect homes, businesses, and agricultural facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500"
                onClick={() => setSelectedImage(item.id)}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#F4B400] text-xs font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-xl mt-2 font-serif">{item.title}</h3>
                </div>

                <div className="absolute top-6 right-6 w-14 h-14 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110">
                  <ZoomIn className="text-white" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="text-white" size={28} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-5xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryItems.find((item) => item.id === selectedImage) && (
                <div className="glass rounded-3xl overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={galleryItems.find((item) => item.id === selectedImage)?.image}
                      alt={galleryItems.find((item) => item.id === selectedImage)?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-10">
                    <span className="text-[#D62828] text-xs md:text-sm font-bold uppercase tracking-wider">
                      {galleryItems.find((item) => item.id === selectedImage)?.category}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mt-3 mb-4 md:mb-6 font-serif">
                      {galleryItems.find((item) => item.id === selectedImage)?.title}
                    </h3>
                    <p className="text-base md:text-xl text-gray-600 font-light leading-relaxed">
                      Professional fumigation services delivered with precision and care. Our team follows strict safety protocols to ensure effective pest control while protecting your property and the environment.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
