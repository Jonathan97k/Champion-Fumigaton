'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Clock, MapPin, Award, Users, Heart, Star, Sparkles, Search, Target, SprayCan, ShieldCheck, Phone, MessageCircle } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: 'Termite Proofing',
      description: 'Protect buildings and structures from termite damage with our advanced treatment methods.',
      image: '/images/IMG-20260520-WA0003.jpg',
    },
    {
      icon: Users,
      title: 'Rodent Control',
      description: 'Safe elimination and prevention solutions for mice, rats, and other rodents.',
      image: '/images/IMG-20260520-WA0004.jpg',
    },
    {
      icon: Heart,
      title: 'Agricultural Product Fumigation',
      description: 'Protect stored crops from infestation and spoilage with specialized treatments.',
      image: '/images/IMG-20260520-WA0005.jpg',
    },
    {
      icon: Shield,
      title: 'Indoor Residual Spraying (IRS)',
      description: 'Long-lasting indoor pest prevention for mosquitoes and other flying insects.',
      image: '/images/IMG-20260520-WA0006.jpg',
    },
    {
      icon: CheckCircle,
      title: 'Herbicide Spraying',
      description: 'Effective weed control solutions for agricultural and residential properties.',
      image: '/images/IMG-20260520-WA0007.jpg',
    },
    {
      icon: Award,
      title: 'Industrial Spraying',
      description: 'Large-scale industrial pest treatment for warehouses and factories.',
      image: '/images/IMG-20260520-WA0008.jpg',
    },
    {
      icon: Star,
      title: 'Hygiene Solutions',
      description: 'Commercial sanitation treatments to maintain clean and pest-free environments.',
      image: '/images/IMG-20260520-WA0009.jpg',
    },
    {
      icon: Heart,
      title: 'Bee Removal Services',
      description: 'Safe bee relocation and treatment to keep your premises sting-free.',
      image: '/images/IMG-20260520-WA0010.jpg',
    },
  ];

  const whyChooseUs = [
    { icon: Award, title: 'Professional Experts', description: 'Certified and trained technicians' },
    { icon: Shield, title: 'Safe Approved Chemicals', description: 'EPA-approved products' },
    { icon: Clock, title: 'Fast Response', description: '24/7 emergency service' },
    { icon: CheckCircle, title: 'Affordable Prices', description: 'Competitive rates' },
    { icon: MapPin, title: 'Reliable Results', description: '100% satisfaction guaranteed' },
    { icon: Users, title: 'Nationwide Service', description: 'Serving all major cities' },
  ];

  const testimonials = [
    {
      name: 'John Banda',
      location: 'Lilongwe',
      text: 'Excellent fumigation service. Professional and fast response. Highly recommend!',
    },
    {
      name: 'Mary Phiri',
      location: 'Lilongwe',
      text: 'Champion Fumigation saved our warehouse from termite damage. Amazing work!',
    },
    {
      name: 'Peter Mwale',
      location: 'Kanengo',
      text: 'Very reliable team for agricultural fumigation. Our crops are now protected.',
    },
  ];

  const processSteps = [
    {
      icon: Search,
      title: 'Inspection',
      description: 'Thorough assessment of your property to identify pest problems and risk areas.',
    },
    {
      icon: Target,
      title: 'Assessment',
      description: 'Customized treatment plan based on inspection findings and your specific needs.',
    },
    {
      icon: SprayCan,
      title: 'Treatment',
      description: 'Safe and effective application of approved fumigation methods by certified technicians.',
    },
    {
      icon: ShieldCheck,
      title: 'Protection Guarantee',
      description: 'Follow-up visits and ongoing support to ensure lasting protection.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Trust Bar */}
      <section className="bg-[#0a0a0a] border-y border-white/10 py-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-green-400 text-lg">✅</span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">EPA-Approved Chemicals</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-[#F4B400] text-lg">🏅</span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">Certified Technicians</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-[#c9a84c] text-lg">⚡</span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">24/7 Emergency Response</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-blue-400 text-lg">🛡️</span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">100% Satisfaction Guarantee</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-green-400 text-lg">🌍</span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">Nationwide Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Pattern */}
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
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-[#1e2530] px-6 py-3 rounded-full shadow-lg border border-white/10"
            >
              <Sparkles className="text-[#c9a84c]" size={16} />
              <span className="text-white text-sm font-semibold tracking-wide uppercase">
                Our Services
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-8 mb-6 font-serif">
              Premium <span className="text-[#c9a84c]">Fumigation</span> Solutions
            </h2>
            <p className="text-xl text-[#8b9098] max-w-3xl mx-auto font-light">
              Comprehensive pest control services tailored for homes, businesses, and industrial facilities across Malawi.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a84c] rounded-full blur-[200px] opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F4B400] rounded-full blur-[200px] opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
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
                <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">
                  Why Champion
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mt-8 mb-6 font-serif">
                The <span className="gradient-text">Trusted</span> Choice
              </h2>
              <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
                We don't just spray — we solve. Our expert technicians use proven, safe methods to deliver uncompromising protection that lasts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#c9a84c] to-[#b8973f] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 md:mb-2 text-base md:text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm font-light">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="glass rounded-3xl p-10 relative">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { src: '/images/IMG-20260520-WA0011.jpg', alt: 'Termite control' },
                    { src: '/images/IMG-20260520-WA0014.jpg', alt: 'Bee removal' },
                    { src: '/images/IMG-20260520-WA0015.jpg', alt: 'Rodent control' },
                    { src: '/images/IMG-20260520-WA0016.jpg', alt: 'Mosquito control' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl aspect-square overflow-hidden border border-gray-800"
                    >
                      <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 glass bg-gradient-to-br from-[#F4B400] to-[#d4a000] px-10 py-6 rounded-2xl shadow-2xl shadow-[#F4B400]/30"
              >
                <div className="text-5xl font-bold text-[#0a0a0a]">100%</div>
                <div className="text-[#0a0a0a]/80 text-xs font-semibold uppercase tracking-wider mt-1">Satisfaction Guaranteed</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a84c] rounded-full blur-[200px] opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F4B400] rounded-full blur-[200px] opacity-10"></div>
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
              className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full"
            >
              <Sparkles className="text-[#F4B400]" size={16} />
              <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">
                Our Process
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-8 mb-6 font-serif">
              How We <span className="gradient-text">Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group relative"
              >
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#c9a84c] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#c9a84c] to-[#b8973f] rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-2xl group-hover:shadow-[#c9a84c]/30 transition-all"
                >
                  <step.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif">{step.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#c9a84c] text-sm font-semibold tracking-[0.2em] uppercase"
            >
              Testimonials
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-6 mb-4 font-serif">
              What Our <span className="text-[#c9a84c]">Clients</span> Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const initials = testimonial.name.split(' ').map(n => n[0]).join('');
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -4 }}
                  className="bg-[#161b22] border border-[rgba(255,255,255,0.07)] rounded-xl p-8 hover:border-[#c9a84c]/40 hover:shadow-lg hover:shadow-[#c9a84c]/5 transition-all duration-300 relative"
                >
                  <div className="text-[#c9a84c] text-6xl font-serif leading-none mb-2 opacity-40">&quot;</div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#c9a84c] text-[#c9a84c]" />
                    ))}
                  </div>
                  <p className="text-[#d8d3ca] mb-8 text-base font-light italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-10 h-10 bg-[#c9a84c]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c9a84c] font-bold text-sm">{initials}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{testimonial.name}</h4>
                      <p className="text-[#c9a84c] text-xs uppercase tracking-wider">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#111418] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a84c] rounded-full blur-[200px] opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
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
                Get In Touch
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-bold text-white mt-6 mb-4 font-serif">
                Request a <span className="text-[#c9a84c]">Free</span> Quote
              </h2>
              <p className="text-lg text-gray-400 mb-10 font-light leading-relaxed">
                Contact us today and our team will assess your pest problem and provide an affordable solution fast.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-[#1e2530] rounded-xl p-5 flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#c9a84c]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Call Us</h4>
                    <a href="tel:+265991380581" className="text-gray-400 hover:text-[#c9a84c] transition-colors text-base">
                      +265 991 380 581
                    </a>
                  </div>
                </div>
                <div className="bg-[#1e2530] rounded-xl p-5 flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#c9a84c]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Locations</h4>
                    <p className="text-gray-400 text-base">Lilongwe · Kanengo</p>
                  </div>
                </div>
                <div className="bg-[#1e2530] rounded-xl p-5 flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#c9a84c]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Hours</h4>
                    <p className="text-gray-400 text-base">Mon – Sat: 7am – 6pm</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/265991380581"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/25 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </motion.div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
