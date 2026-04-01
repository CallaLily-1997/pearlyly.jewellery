/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Menu, 
  Search, 
  ShoppingBag, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Globe,
  Sparkles,
  Heart,
  ShieldCheck,
  Gem
} from "lucide-react";
import { BRAND_ASSETS } from "./constants";

const Navbar = () => (
  <header className="fixed top-0 w-full z-50 glass-nav transition-colors duration-500">
    <nav className="flex justify-between items-center px-8 md:px-12 py-6 w-full">
      <div className="flex items-center gap-8">
        <Menu className="text-primary cursor-pointer hover:scale-95 duration-200 w-5 h-5" />
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-headline tracking-tight text-[0.9rem] uppercase text-primary border-b border-primary/20 transition-all duration-300" href="#">Collections</a>
          <a className="font-headline tracking-tight text-[0.9rem] uppercase text-on-surface hover:text-primary transition-all duration-300" href="#">Bespoke</a>
        </div>
      </div>
      
      <h1 className="font-headline text-xl tracking-[0.2em] font-light text-on-surface">{BRAND_ASSETS.logo}</h1>
      
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-headline tracking-tight text-[0.9rem] uppercase text-on-surface hover:text-primary transition-all duration-300" href="#">Journal</a>
          <Search className="text-on-surface cursor-pointer hover:scale-95 duration-200 w-5 h-5" />
        </div>
        <ShoppingBag className="text-primary cursor-pointer hover:scale-95 duration-200 w-5 h-5" />
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="relative h-[90vh] w-full flex items-center px-8 md:px-24 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        alt="Pearlyly Jewelry" 
        className="w-full h-full object-cover brightness-90" 
        src={BRAND_ASSETS.hero.image}
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
    <div className="relative z-10 max-w-3xl text-white">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-label text-sm tracking-[0.3em] uppercase mb-6"
      >
        Welcome to {BRAND_ASSETS.logo}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-headline text-5xl md:text-7xl leading-tight mb-8"
      >
        {BRAND_ASSETS.hero.title} <br/><span className="italic font-light">{BRAND_ASSETS.hero.subtitle}</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-light"
      >
        {BRAND_ASSETS.hero.description}
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap gap-6 items-center"
      >
        <button className="bg-primary text-on-primary px-10 py-4 font-label uppercase text-sm tracking-widest hover:bg-primary-container transition-all duration-500 shadow-xl">
          {BRAND_ASSETS.hero.cta}
        </button>
      </motion.div>
    </div>
  </section>
);

const Collections = () => (
  <section className="py-32 bg-surface">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-lg">
          <h3 className="font-headline text-4xl mb-6 text-on-surface">Explore Our Jewelry</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Curated collections designed for every style and occasion.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {BRAND_ASSETS.collections.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden bg-surface-variant rounded-lg mb-6">
              <img 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={item.image}
                referrerPolicy="no-referrer"
              />
            </div>
            <h4 className="font-headline text-lg text-on-surface mb-2">{item.title}</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Story = () => (
  <section className="py-32 bg-surface-container-low overflow-hidden">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
      <div className="md:col-span-7 relative">
        <div className="absolute -top-12 -left-12 w-64 h-64 border border-primary/10 -z-10"></div>
        <img 
          alt="Our Story" 
          className="w-full aspect-video object-cover rounded-lg editorial-shadow" 
          src={BRAND_ASSETS.story.image}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="md:col-span-5 md:pl-12">
        <p className="font-label text-xs tracking-[0.4em] uppercase text-primary mb-6">About Us</p>
        <h3 className="font-headline text-5xl mb-8 leading-tight">{BRAND_ASSETS.story.title}</h3>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
          {BRAND_ASSETS.story.description}
        </p>
        <a className="inline-flex items-center gap-4 group" href="#">
          <span className="font-label text-sm uppercase tracking-widest border-b border-on-surface pb-1">Read More</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
        </a>
      </div>
    </div>
  </section>
);

const PromiseSection = () => (
  <section className="py-32 bg-surface">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-20">
        <h3 className="font-headline text-4xl mb-6">Our Promise</h3>
        <div className="w-24 h-px bg-primary mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {[
          { icon: Gem, title: "Quality Materials", desc: "Only ethically sourced metals and gemstones." },
          { icon: Sparkles, title: "Handcrafted Excellence", desc: "Each piece is crafted with precision and care." },
          { icon: ShieldCheck, title: "Timeless Design", desc: "Modern elegance that lasts beyond trends." }
        ].map((item, idx) => (
          <div key={idx} className="text-center group">
            <div className="w-16 h-16 bg-primary-container/20 rounded-full flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110">
              <item.icon className="text-primary w-8 h-8" />
            </div>
            <h4 className="font-headline text-xl mb-4">{item.title}</h4>
            <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhySection = () => (
  <section className="py-32 bg-on-surface text-surface">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
      <div>
        <h3 className="font-headline text-5xl mb-12">{BRAND_ASSETS.whyPearlyly.title}</h3>
        <ul className="space-y-8">
          {BRAND_ASSETS.whyPearlyly.points.map((item, idx) => (
            <li key={idx} className="flex items-center gap-6 group">
              <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
              <span className="text-xl font-light opacity-90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <div className="aspect-square rounded-full overflow-hidden border-8 border-surface/10">
          <img 
            alt="Jewelry Detail" 
            className="w-full h-full object-cover" 
            src={BRAND_ASSETS.whyPearlyly.image}
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-8 -left-8 bg-primary p-8 editorial-shadow">
          <Heart className="text-on-primary w-12 h-12" />
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-40 bg-surface text-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-3xl"></div>
    </div>
    <div className="max-w-3xl mx-auto px-8 relative z-10">
      <h3 className="font-headline text-5xl mb-8">{BRAND_ASSETS.cta.title}</h3>
      <p className="text-on-surface-variant text-xl mb-12 font-light">
        {BRAND_ASSETS.cta.description}
      </p>
      <button className="bg-primary text-on-primary px-16 py-5 font-label uppercase text-sm tracking-widest hover:bg-on-primary-container transition-all shadow-2xl">
        {BRAND_ASSETS.cta.buttonText}
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container-low w-full pt-24 pb-12 transition-all duration-300">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="space-y-8">
        <h2 className="font-headline text-lg tracking-widest uppercase text-on-surface">{BRAND_ASSETS.logo}</h2>
        <p className="font-body text-sm tracking-wide leading-relaxed text-on-surface/60 max-w-xs">
          Crafting jewelry that celebrates your individuality and adds a touch of sparkle to every moment.
        </p>
        <div className="flex gap-6">
          <Globe className="text-primary cursor-pointer hover:scale-110 transition-transform w-5 h-5" />
          <Sparkles className="text-primary cursor-pointer hover:scale-110 transition-transform w-5 h-5" />
          <Heart className="text-primary cursor-pointer hover:scale-110 transition-transform w-5 h-5" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <span className="font-body text-sm tracking-widest uppercase text-primary mb-2">Shop</span>
          <a className="font-body text-sm tracking-wide text-on-surface/60 hover:text-primary transition-all" href="#">Collections</a>
          <a className="font-body text-sm tracking-wide text-on-surface/60 hover:text-primary transition-all" href="#">Bespoke</a>
          <a className="font-body text-sm tracking-wide text-on-surface/60 hover:text-primary transition-all" href="#">Journal</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-body text-sm tracking-widest uppercase text-primary mb-2">{BRAND_ASSETS.logo}</span>
          <a className="font-body text-sm tracking-wide text-on-surface/60 hover:text-primary transition-all" href="#">Our Story</a>
          <a className="font-body text-sm tracking-wide text-on-surface/60 hover:text-primary transition-all" href="#">Promise</a>
          <a className="font-body text-sm tracking-wide text-on-surface/60 hover:text-primary transition-all" href="#">Contact</a>
        </div>
      </div>
      
      <div className="flex flex-col items-start md:items-end gap-6">
        <span className="font-body text-sm tracking-widest uppercase text-primary">Global Studio</span>
        <p className="font-body text-sm tracking-wide text-on-surface/60 text-left md:text-right">
          Design District, London W1<br/>
          Creative Hub, New York NY 10012
        </p>
        <div className="w-full h-px bg-outline-variant/20 mt-4"></div>
        <p className="font-body text-[10px] tracking-widest uppercase text-on-surface/40">© 2024 {BRAND_ASSETS.logo}. HANDCRAFTED WITH LOVE.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Story />
        <PromiseSection />
        <WhySection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
