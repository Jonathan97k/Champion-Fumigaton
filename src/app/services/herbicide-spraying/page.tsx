'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { Shield, SprayCan, Search, Target, ShieldCheck, CheckCircle, ArrowRight, Phone, AlertTriangle, Leaf, Crop, Droplets, Award, Heart, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HerbicideSprayingPage() {
  const risks = [
    { icon: Leaf, title: 'Uncontrolled Weeds', description: 'Weeds compete with crops for water, nutrients, and sunlight, drastically reducing your agricultural yields.' },
    { icon: AlertTriangle, title: 'Crop Damage', description: 'Improper manual weeding or untrained chemical application can damage or destroy valuable crops.' },
    { icon: Droplets, title: 'Chemical Waste', description: 'Without precision application, expensive herbicides are wasted, increasing operational costs unnecessarily.' },
  ];

  const process = [
    { icon: Search, title: 'Field Assessment', description: 'Survey the area to identify weed species, growth stage, and determine the optimal herbicide formulation.' },
    { icon: Target, title: 'Calibration', description: 'Calibrate spray equipment for precise application rates ensuring maximum efficacy with minimum chemical use.' },
    { icon: SprayCan, title: 'Application', description: 'Apply herbicides using boom sprayers or spot treatment methods for targeted, efficient weed control.' },
    { icon: ShieldCheck, title: 'Monitoring', description: 'Track treatment effectiveness and schedule follow-up applications as needed for season-long control.' },
  ];

  const benefits = [
    'Precision application reduces chemical costs',
    'Higher crop yields through effective weed control',
    'Environmentally responsible methods',
    'Professional-grade equipment for superior results',
    'Experienced technicians with crop knowledge',
    'Custom treatment plans for your specific crops',
  ];

  const relatedServices = [
    { title: 'Agricultural Fumigation', href: '/services/agricultural-fumigation', icon: Shield, desc: 'Grain and crop pest elimination' },
    { title: 'Industrial Spraying', href: '/services/industrial-spraying', icon: Award, desc: 'Large-scale facility pest management' },
    { title: 'Indoor Residual Spraying', href: '/services/indoor-residual-spraying', icon: Heart, desc: 'IRS for mosquito and vector control' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Navbar />
      <section className="relative min-h-[70vh] bg-[#0a0a0a] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1624982569048-b1cf25bd03e0?w=1920&q=80" alt="Herbicide Spraying" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#1a1a1a]/85 to-[#0a0a0a]/90"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a84c] rounded-full blur-[200px] opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c9a84c] rounded-full blur-[200px] opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-[#c9a84c] transition-colors">Services</Link><span>/</span>
              <span className="text-[#c9a84c]">Herbicide Spraying</span>
            </nav>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif">Herbicide <span className="text-[#c9a84c]">Spraying</span></h1>
            <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">Precision herbicide application for weed control in agricultural fields, plantations, and estates.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-[#c9a84c] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#b8973f] transition-all duration-300">Get Free Quote <ArrowRight size={20} /></Link>
              <a href="tel:+265991380581" className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all duration-300"><Phone size={20} /> Call Us Now</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#111418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-[#c9a84c] text-sm font-semibold tracking-[0.2em] uppercase">What Is It</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 font-serif">What Is <span className="text-[#c9a84c]">Herbicide Spraying</span>?</h2>
              <p className="text-gray-400 font-light leading-relaxed mb-6">Herbicide spraying is the precise application of approved chemical formulations to control unwanted vegetation in agricultural and commercial settings. Our calibrated equipment ensures uniform coverage with minimal waste.</p>
              <p className="text-gray-400 font-light leading-relaxed">We tailor our approach to your crop type, weed pressure, and growth stage, choosing between pre-emergent and post-emergent treatments for optimal results while protecting your crops.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="bg-[#161b22] border border-white/10 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1624982569048-b1cf25bd03e0?w=800&q=80" alt="Herbicide spraying" className="w-full aspect-video object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-sm font-semibold tracking-[0.2em] uppercase">Why You Need It</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 font-serif">The <span className="text-[#c9a84c]">Risks</span> of Not Treating</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {risks.map((risk, i) => (
              <motion.div key={risk.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#161b22] border border-white/10 rounded-xl p-8 hover:border-[#c9a84c]/40 transition-all duration-300">
                <div className="w-14 h-14 bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] rounded-xl flex items-center justify-center mb-6"><risk.icon className="text-[#c9a84c]" size={28} /></div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif">{risk.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{risk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-sm font-semibold tracking-[0.2em] uppercase">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 font-serif">How We <span className="text-[#c9a84c]">Spray</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#161b22] border border-white/10 rounded-xl p-8 relative min-h-[220px]">
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-full flex items-center justify-center text-[#c9a84c] font-bold text-sm">{i + 1}</div>
                <div className="w-14 h-14 bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] rounded-xl flex items-center justify-center mb-5"><step.icon className="text-[#c9a84c]" size={28} /></div>
                <h3 className="text-lg font-bold text-white mb-3 font-serif">{step.title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-sm font-semibold tracking-[0.2em] uppercase">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 font-serif">Why Choose <span className="text-[#c9a84c]">Us</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 bg-[#161b22] border border-white/10 rounded-xl p-6">
                <CheckCircle className="text-[#c9a84c] flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-300 font-light">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111418] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c9a84c] rounded-full blur-[200px] opacity-10"></div>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Get a Free <span className="text-[#c9a84c]">Assessment</span> Today</h2>
          <p className="text-lg text-gray-400 mb-10 font-light">Contact us now for a no-obligation inspection and quote. Improve your crop yields today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/265991380581?text=Hello%20Champion%20Fumigation%2C%20I%20need%20Herbicide%20Spraying%20services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#20bd5a] transition-all duration-300">Chat on WhatsApp</a>
            <a href="tel:+265991380581" className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all duration-300"><Phone size={20} /> +265 991 380 581</a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-sm font-semibold tracking-[0.2em] uppercase">Related Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 font-serif">Explore <span className="text-[#c9a84c]">More</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((s, i) => (
              <Link key={s.title} href={s.href}>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#161b22] border border-white/10 rounded-xl p-8 hover:border-[#c9a84c]/40 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] rounded-xl flex items-center justify-center mb-5"><s.icon className="text-[#c9a84c]" size={28} /></div>
                  <h3 className="text-lg font-bold text-white mb-2 font-serif">{s.title}</h3>
                  <p className="text-gray-400 text-sm font-light mb-4">{s.desc}</p>
                  <span className="text-[#c9a84c] text-sm font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">Learn More <ArrowRight size={16} /></span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}