'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const brands = [
  { name: 'Samsung', path: '/logos/samsung.png' },
  { name: 'LG', path: '/logos/lg(2).svg' },
  { name: 'IFB', path: '/logos/ifb.png' },
  { name: 'Whirlpool', path: '/logos/whirlpool.png' },
  { name: 'Bosch', path: '/logos/bosch.svg' },
  { name: 'Panasonic', path: '/logos/panasonic.svg' },
  { name: 'Haier', path: '/logos/haier-logo.svg' },
];

const services = [
  {
    title: 'Washing Machine Repair',
    description: 'Complete diagnostics and repair for all mechanical and electrical faults, drum issues, and board repairs.',
    icon: 'local_laundry_service',
    href: 'tel:+919585289293',
  },
  {
    title: 'AC Service & Installation',
    description: 'Expert split and window AC deep cleaning, gas charging, leak fixing, and precision installation.',
    icon: 'ac_unit',
    href: 'tel:+919585289293',
  },
  {
    title: 'Spare Part Replacement',
    description: 'Faulty motors, timers, valves, or sensors? We replace them with brand-certified genuine components.',
    icon: 'hardware',
    href: 'tel:+919585289293',
  },
  {
    title: 'Spare Parts Sales',
    description: 'We retail authentic spare parts for all major washing machine and AC brands at competitive prices.',
    icon: 'shopping_cart',
    href: 'tel:+919585289293',
  },
  {
    title: 'Front Load Service',
    description: 'Specialized drum scaling, bearing replacement, and suspension tuning for premium front-load units.',
    icon: 'kitchen',
    href: 'tel:+919585289293',
  },
  {
    title: 'Top Load Service',
    description: 'Full preventative maintenance, agitator repair, and wash-cycle optimization for all top-loading machines.',
    icon: 'waves',
    href: 'tel:+919585289293',
  },
];

const faqs = [
  {
    question: 'Do you provide a warranty on repairs?',
    answer: 'Yes, we provide a 3-month warranty on our repair service and up to a 6-month warranty on genuine spare parts replaced by our team.',
  },
  {
    question: 'How long does a typical repair take?',
    answer: 'Most minor faults (draining issues, sensor errors, gas refills) are resolved within 1 to 2 hours right at your doorstep. Major overhauls or motherboard/PCB repairs might take 24 to 48 hours.',
  },
  {
    question: 'Do you service high-end imported brands?',
    answer: 'Absolutely. Our technicians are trained to handle premium global brands like Bosch, Siemens, Samsung, LG, IFB, and Whirlpool using manufacturer-approved diagnostic and repair procedures.',
  },
  {
    question: 'Is there a diagnostic or visiting charge?',
    answer: 'We charge a minimal visiting fee for diagnostics. If you proceed with the repair service, the visiting charge is fully waived off from your final service bill.',
  },
];

export default function Home() {
  const [headerShadow, setHeaderShadow] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHeaderShadow(true);
      } else {
        setHeaderShadow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <div className="flex-1 flex flex-col font-sans pb-16 md:pb-0">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 bg-surface/95 backdrop-blur-md border-b border-outline-variant transition-all duration-300 flex items-center px-4 md:px-12 justify-between ${
          headerShadow ? 'shadow-lg border-opacity-50' : ''
        }`}
      >
        <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="JP Service Center Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl text-primary tracking-tight leading-tight">
              JP Service Center
            </span>
            <span className="font-mono text-[10px] text-secondary tracking-widest uppercase font-bold leading-none">
              Expert Repairs
            </span>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          <a
            href="#"
            className="text-primary font-semibold hover:text-primary-container transition-colors py-1.5 px-3 rounded-lg hover:bg-surface-container-low"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-on-surface-variant font-medium hover:text-primary transition-colors py-1.5 px-3 rounded-lg hover:bg-surface-container-low"
          >
            Services
          </a>
          <a
            href="#process"
            className="text-on-surface-variant font-medium hover:text-primary transition-colors py-1.5 px-3 rounded-lg hover:bg-surface-container-low"
          >
            Our Process
          </a>
          <a
            href="#contact"
            className="text-on-surface-variant font-medium hover:text-primary transition-colors py-1.5 px-3 rounded-lg hover:bg-surface-container-low"
          >
            Contact
          </a>
        </nav>

        <div>
          <a
            href="tel:+919585289293"
            className="bg-primary text-on-primary hover:bg-primary-container font-semibold px-6 py-2.5 rounded-full text-sm tracking-wider active:scale-95 duration-150 shadow-md flex items-center gap-2 hover:shadow-lg transition-all"
          >
            <span className="material-symbols-outlined text-base">phone</span>
            CALL NOW
          </a>
        </div>
      </header>

      <main className="mt-20">
        {/* Hero Section */}
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Technician repairing a washing machine"
              fill
              className="object-cover brightness-[0.35] scale-105 transition-transform duration-1000"
              priority
            />
          </div>
          <div className="relative z-10 w-full px-4 md:px-12 max-w-[1280px] mx-auto text-white py-16 md:py-24">
            <div className="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md w-fit px-4 py-1.5 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">
                verified
              </span>
              <span className="font-mono text-xs tracking-wider uppercase font-semibold">
                LICENSED &amp; INSURED EXPERTS
              </span>
            </div>
            <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-tight text-white tracking-tight">
              Expert Washing Machine <span className="text-secondary-container">&amp;</span> AC Service Near You
            </h1>
            <p className="text-base md:text-xl mb-10 max-w-2xl text-slate-200 leading-relaxed font-light">
              Same Day Doorstep Service for All Major Brands. Proudly serving Gummidipoondi, Redhills, Periyapalayam, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
              <a
                className="bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg hover:shadow-xl"
                href="tel:+919585289293"
              >
                <span className="material-symbols-outlined">call</span>
                Call for Same Day Repair
              </a>
              <a
                className="bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all active:scale-95"
                href="https://wa.me/919585289293"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-emerald-400">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Trust Ribbon */}
        <div className="bg-primary py-4 px-4 md:px-12 border-b border-primary-container">
          <div className="max-w-[1280px] mx-auto flex flex-wrap justify-around md:justify-between gap-4 text-white font-mono text-xs md:text-sm">
            <div className="flex items-center gap-2 font-medium">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">check_circle</span>
              Same Day Service
            </div>
            <div className="flex items-center gap-2 font-medium">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">check_circle</span>
              Genuine Spare Parts
            </div>
            <div className="flex items-center gap-2 font-medium">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">check_circle</span>
              Multi-Brand Diagnostics
            </div>
            <div className="flex items-center gap-2 font-medium">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">check_circle</span>
              5-Star Rated Support
            </div>
          </div>
        </div>

        {/* Trust Cards Section */}
        <section className="py-16 md:py-24 px-4 md:px-12 bg-surface">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl border border-outline-variant service-card-shadow transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
                today
              </span>
              <h3 className="font-bold text-lg text-primary mb-2">Same Day Service</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                We respect your time. Get your washing machine or AC repaired within hours of booking.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-outline-variant service-card-shadow transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
                settings_suggest
              </span>
              <h3 className="font-bold text-lg text-primary mb-2">Genuine Spares</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                No cheap imitations. We only install manufacturer-approved genuine parts for longevity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-outline-variant service-card-shadow transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
                handyman
              </span>
              <h3 className="font-bold text-lg text-primary mb-2">Expert Technicians</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Technicians with 10+ years of active field experience in complex appliance circuitry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-outline-variant service-card-shadow transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
                workspace_premium
              </span>
              <h3 className="font-bold text-lg text-primary mb-2">Multi-Brand Hub</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Expert support for Samsung, LG, IFB, Whirlpool, Bosch, Panasonic, and other leading brands.
              </p>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-16 md:py-24 px-4 md:px-12 bg-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-surface-container rounded-full -z-10 opacity-60"></div>
              <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] w-full">
                <Image
                  src="/about-us.jpg"
                  alt="Washing Machine PCB Diagnostic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-primary p-6 md:p-8 rounded-2xl text-white shadow-xl max-w-[200px]">
                <div className="text-3xl md:text-4xl font-bold mb-1">10+</div>
                <div className="font-mono text-xs tracking-wider uppercase text-slate-300 font-semibold leading-tight">
                  Years of Expert Service
                </div>
              </div>
            </div>
            <div className="lg:pl-6">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-primary tracking-tight leading-tight">
                JP Service Center – Trusted Home Appliance Repair Experts
              </h2>
              <p className="text-base md:text-lg text-on-surface-variant mb-8 leading-relaxed font-light">
                For over a decade, JP Service Center has stood for engineering excellence and honest customer support in the local appliance repair sector. We combine industrial-grade diagnostic tools with friendly, expert service to address your appliance emergencies quickly and efficiently.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="bg-surface-container-high p-2 rounded-full text-primary material-symbols-outlined text-lg">
                    task_alt
                  </span>
                  <span className="font-semibold text-sm md:text-base text-on-surface">
                    Fully-Equipped Mobile Service Units
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-surface-container-high p-2 rounded-full text-primary material-symbols-outlined text-lg">
                    task_alt
                  </span>
                  <span className="font-semibold text-sm md:text-base text-on-surface">
                    Transparent Upfront Pricing &amp; Zero Hidden Fees
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-surface-container-high p-2 rounded-full text-primary material-symbols-outlined text-lg">
                    task_alt
                  </span>
                  <span className="font-semibold text-sm md:text-base text-on-surface">
                    Up to 6 Months Warranty on Replaced Spare Parts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 px-4 md:px-12 bg-background" id="services">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary tracking-tight">
                Our Specialized Services
              </h2>
              <div className="w-16 h-1.5 bg-secondary mx-auto rounded-full"></div>
              <p className="text-on-surface-variant mt-3 text-sm md:text-base font-light">
                Professional repair and maintenance solutions for washing machines &amp; air conditioners.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-8 rounded-xl border border-outline-variant hover:border-secondary transition-all duration-300 service-card-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="material-symbols-outlined text-primary text-4xl mb-6 block group-hover:scale-110 duration-300 transition-transform">
                      {service.icon}
                    </span>
                    <h4 className="font-bold text-xl mb-3 text-primary">{service.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>
                  </div>
                  <a
                    className="text-secondary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-sm"
                    href={service.href}
                  >
                    Book Diagnostic Service <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marquee Brands */}
        <section className="py-12 bg-on-surface overflow-hidden border-t border-b border-primary-container/20">
          <div className="max-w-[1280px] mx-auto px-4 md:px-12 mb-8">
            <h2 className="font-sans text-lg md:text-xl font-semibold text-center text-slate-300 tracking-wider">
              AUTHORIZED &amp; EXPERT SUPPORT FOR LEADING BRANDS
            </h2>
          </div>
          <div className="marquee">
  <div className="marquee-content">
    {brands.map((brand, idx) => (
      <div key={idx} className="flex items-center justify-center px-12 h-14 w-44">
        <Image
          src={brand.path}
          alt={brand.name}
          width={160}
          height={48}
          className="object-contain max-h-12 brightness-0 invert"
        />
      </div>
    ))}
  </div>

  <div className="marquee-content" aria-hidden="true">
    {brands.map((brand, idx) => (
      <div key={idx} className="flex items-center justify-center px-12 h-14 w-44">
        <Image
          src={brand.path}
          alt={brand.name}
          width={160}
          height={48}
          className="object-contain max-h-12 brightness-0 invert"
        />
      </div>
    ))}
  </div>
</div>
        </section>

        {/* Service Process Section */}
        <section className="py-16 md:py-24 px-4 md:px-12 bg-white" id="process">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary tracking-tight">
                Our Service Process
              </h2>
              <div className="w-16 h-1.5 bg-secondary mx-auto rounded-full"></div>
              <p className="text-on-surface-variant mt-3 text-sm md:text-base font-light">
                Four simple steps to get your home appliance working perfectly.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Process Step 1 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-transform hover:rotate-6">
                  <span className="material-symbols-outlined text-2xl">calendar_today</span>
                </div>
                <h5 className="font-bold text-lg mb-2 text-primary">1. Book Service</h5>
                <p className="text-on-surface-variant text-sm px-4 leading-relaxed font-light">
                  Call us or tap WhatsApp to schedule a diagnostic visit.
                </p>
              </div>
              {/* Process Step 2 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-transform hover:rotate-6">
                  <span className="material-symbols-outlined text-2xl">moped</span>
                </div>
                <h5 className="font-bold text-lg mb-2 text-primary">2. Doorstep Visit</h5>
                <p className="text-on-surface-variant text-sm px-4 leading-relaxed font-light">
                  A certified repair technician visits your location at the agreed slot.
                </p>
              </div>
              {/* Process Step 3 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-transform hover:rotate-6">
                  <span className="material-symbols-outlined text-2xl">build</span>
                </div>
                <h5 className="font-bold text-lg mb-2 text-primary">3. Diagnostic &amp; Repair</h5>
                <p className="text-on-surface-variant text-sm px-4 leading-relaxed font-light">
                  Instant fault detection, clear estimate, and repair with genuine spares.
                </p>
              </div>
              {/* Process Step 4 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-transform hover:rotate-6">
                  <span className="material-symbols-outlined text-2xl">verified</span>
                </div>
                <h5 className="font-bold text-lg mb-2 text-primary">4. Quality Test</h5>
                <p className="text-on-surface-variant text-sm px-4 leading-relaxed font-light">
                  We complete post-repair test cycles and deliver the appliance with a warranty card.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 md:py-24 px-4 md:px-12 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 w-full">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-primary tracking-tight leading-tight">
                Service Areas We Cover
              </h2>
              <p className="text-base md:text-lg text-on-surface-variant mb-8 leading-relaxed font-light">
                Need quick support? We provide rapid diagnostic visits and same-day home service across the Thiruvallur district:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-outline-variant hover:border-secondary transition-colors">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="font-semibold text-sm md:text-base text-primary">Gummidipoondi</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-outline-variant hover:border-secondary transition-colors">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="font-semibold text-sm md:text-base text-primary">Periyapalayam</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-outline-variant hover:border-secondary transition-colors">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="font-semibold text-sm md:text-base text-primary">Uthukottai</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-outline-variant hover:border-secondary transition-colors">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="font-semibold text-sm md:text-base text-primary">Redhills</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-outline-variant hover:border-secondary transition-colors col-span-2 justify-center">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="font-semibold text-sm md:text-base text-primary">Thiruvallur Head Office</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-500 relative">
              <Image
                src="/service-area-map.jpg"
                alt="Thiruvallur District Map Service Area"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-24 px-4 md:px-12 bg-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary tracking-tight">
                Our Recent Service Works
              </h2>
              <div className="w-16 h-1.5 bg-secondary mx-auto rounded-full"></div>
              <p className="text-on-surface-variant mt-3 text-sm md:text-base font-light">
                Real photos from our doorstep repair calls.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl overflow-hidden shadow-lg group relative aspect-[16/10] w-full">
                <Image
                  src="/recent-work-1.jpg"
                  alt="Technician maintaining Front Load drum"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h5 className="text-white font-bold text-lg">Front Load Washing Machine</h5>
                    <p className="text-slate-300 text-xs font-mono">Drum &amp; bearing calibration service</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg group relative aspect-[16/10] w-full">
                <Image
                  src="/recent-work-2.jpg"
                  alt="AC Indoor Unit Installation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h5 className="text-white font-bold text-lg">Inverter Split AC Installation</h5>
                    <p className="text-slate-300 text-xs font-mono">Precision copper piping &amp; mounting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-primary text-on-primary px-4 md:px-12">
          <div className="max-w-[1280px] mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-12 tracking-tight text-white">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-left hover:border-white/40 transition-colors">
                <div className="flex gap-1 text-secondary-container mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-yellow-400 text-xl font-fill">
                      star
                    </span>
                  ))}
                </div>
                <p className="italic mb-6 text-slate-200 text-sm leading-relaxed">
                  &quot;Highly professional service. They fixed my LG front-loading washing machine on the same day. Very transparent with part costs.&quot;
                </p>
                <p className="font-bold text-white text-sm">— Rajesh Kumar, Periyapalayam</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-left hover:border-white/40 transition-colors">
                <div className="flex gap-1 text-secondary-container mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-yellow-400 text-xl font-fill">
                      star
                    </span>
                  ))}
                </div>
                <p className="italic mb-6 text-slate-200 text-sm leading-relaxed">
                  &quot;JP Service Center is our go-to for AC maintenance. Their technicians are very skilled, polite, and they cleaned up thoroughly after the work.&quot;
                </p>
                <p className="font-bold text-white text-sm">— Priya S., Gummidipoondi</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-left hover:border-white/40 transition-colors">
                <div className="flex gap-1 text-secondary-container mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-yellow-400 text-xl font-fill">
                      star
                    </span>
                  ))}
                </div>
                <p className="italic mb-6 text-slate-200 text-sm leading-relaxed">
                  &quot;Affordable and genuine. They actually fixed a motherboard PCB that others said needed a complete replacement. Saved me 4k!&quot;
                </p>
                <p className="font-bold text-white text-sm">— Manikandan, Thiruvallur</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-4 md:px-12 bg-surface">
          <div className="max-w-[768px] mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-primary tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-outline-variant overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center p-6 text-left font-bold text-primary hover:bg-surface-container transition-colors focus:outline-none"
                    >
                      <span className="text-sm md:text-base">{faq.question}</span>
                      <span
                        className={`material-symbols-outlined text-secondary transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-40 border-t border-outline-variant/60' : 'max-h-0'
                      }`}
                    >
                      <div className="p-6 text-on-surface-variant text-sm leading-relaxed font-light bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-20 px-4 md:px-12 bg-secondary text-white relative overflow-hidden" id="contact">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none flex items-center justify-center">
            <span className="material-symbols-outlined text-[200px] md:text-[300px]">
              support_agent
            </span>
          </div>
          <div className="max-w-[1280px] mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Need Immediate Appliance Service?</h2>
            <p className="text-base md:text-xl mb-10 text-slate-100 opacity-90 max-w-xl mx-auto font-light">
              We are ready to assist you right now. Call us or message us for an instant technician booking.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
              <a
                className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all"
                href="tel:+919585289293"
              >
                <span className="material-symbols-outlined text-2xl">phone_in_talk</span>
                +91 95852 89293
              </a>
              <a
                className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all"
                href="https://wa.me/919585289293"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-2xl">chat</span>
                WhatsApp Chat
              </a>
            </div>
            <div className="mt-12 text-slate-200">
              <p className="font-bold font-mono text-sm tracking-wider uppercase mb-1">Service Center Address:</p>
              <p className="text-sm font-light">Janapachathiam Kotroad, Periyapalayam Road, Thiruvallur District, Tamil Nadu</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-on-surface text-slate-300 py-16 px-4 md:px-12 border-t border-primary-container/20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="JP Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
    
              <span className="font-bold text-lg text-white">JP Service Center</span>
            </div>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Providing expert domestic and commercial home appliance diagnostics, maintenance, and repairs with precision and honesty since 2014.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-bold text-white uppercase tracking-wider text-xs font-mono">Service Regions</h6>
            <ul className="space-y-2 text-sm text-slate-400 font-light">
              <li>Gummidipoondi</li>
              <li>Periyapalayam</li>
              <li>Uthukottai</li>
              <li>Redhills</li>
              <li>Thiruvallur</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-bold text-white uppercase tracking-wider text-xs font-mono">Contact Info</h6>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span className="material-symbols-outlined text-sm text-secondary">call</span>
              +91 95852 89293
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span className="material-symbols-outlined text-sm text-secondary">pin_drop</span>
              Janappanchatram Koot Road,Periyapalayam, Tamil Nadu
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500 font-light">
          <p>© 2026 JP Service Center. All rights reserved. Built as a high-fidelity Next.js application.</p>
        </div>
      </footer>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center h-16 bg-surface/95 backdrop-blur-md border-t border-outline-variant shadow-2xl px-2">
        <a
          className="flex flex-col items-center justify-center text-primary active:scale-90 transition-transform py-1 px-3"
          href="#"
        >
          <span className="material-symbols-outlined text-xl">home</span>
          <span className="text-[10px] font-mono font-medium">Home</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-90 transition-transform py-1 px-3"
          href="#services"
        >
          <span className="material-symbols-outlined text-xl">build</span>
          <span className="text-[10px] font-mono font-medium">Services</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-90 transition-transform py-1 px-3"
          href="https://wa.me/919585289293"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-xl text-emerald-600">chat</span>
          <span className="text-[10px] font-mono font-medium">WhatsApp</span>
        </a>
      </nav>
    </div>
  );
}
