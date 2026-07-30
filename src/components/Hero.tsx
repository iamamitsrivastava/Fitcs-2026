"use client";

import { Calendar, MapPin, Users } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

const Hero = () => {
  return (
    <section id="home" className="relative w-full flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24" style={{ minHeight: '100vh' }}>

      {/* Background — full cover */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 bg-[#0a1628]">
        <Image
          src="/assets/main_gate_v2.png"
          alt="AISCT 2026-27 Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-95"
          priority
        />
        {/* Gradient Overlay — darker left for text, transparent right for AI head */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/85 via-[#0a1628]/40 to-transparent" />
      </div>

      <div className="w-full container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 relative z-10">
        <motion.div
          className="max-w-7xl flex flex-col justify-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Main Title Area */}
          <motion.div variants={itemVariants} className="border-l-4 border-[#FFD700] pl-5 sm:pl-8 py-2 mb-8 sm:mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-8">
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
                <h2 className="text-xs sm:text-sm md:text-lg uppercase tracking-widest font-bold text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.4)] mb-3">
                  International Conference on
                </h2>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-xl leading-tight mb-4 sm:mb-6">
                  Artificial Intelligence and <br className="hidden sm:block" /> Sustainable Computing Technologies
                </h3>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-none">
                  <span className="bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] whitespace-nowrap">AISCT</span>{" "}
                  <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] whitespace-nowrap">2026-27</span>
                </h1>
              </div>

              {/* Associated With Section (Right Side) */}
              <div className="flex flex-col items-center mt-4 md:mt-0 md:-mt-52 lg:-mt-64 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#FFD700]/70"></div>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC107] text-sm md:text-lg font-bold uppercase tracking-[0.2em] text-center drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">
                    Associated With
                  </p>
                  <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#FFD700]/70"></div>
                </div>
                <div className="flex items-center gap-5 md:gap-7">
                  <Image
                    src="/assets/partners/universitas-teknokra-indonesia-logo.png"
                    alt="Universitas Teknokrat Indonesia"
                    width={180}
                    height={200}
                    className="object-contain drop-shadow-lg"
                  />

                  <Image
                    src="/assets/partners/inflolink.png"
                    alt="Infolink University College"
                    width={200}
                    height={120}
                    className="object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conference Details */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
            <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#FFD700]/30 shadow-[0_0_15px_rgba(255,215,0,0.15)]">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700]" />
              <span className="text-white font-semibold text-sm sm:text-base">February 6 2027</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#FFD700]/30 shadow-[0_0_15px_rgba(255,215,0,0.15)]">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700]" />
              <span className="text-white font-semibold text-sm sm:text-base">Parul University, India</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <Link href="/call-for-papers" className="bg-gradient-to-r from-[#FFD700] to-[#FFC107] text-black font-bold py-3 px-8 text-xl hover:from-[#FFC107] hover:to-[#FFD700] transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]">Submit Your Paper</Link>
            <Link href="/call-for-abstract" className="bg-transparent text-white font-bold py-3 px-8 text-xl border-2 border-[#FFD700]/60 hover:bg-[#FFD700]/10 hover:border-[#FFD700] transition-all duration-300">Call for Abstract</Link>
          </motion.div>

          {/* SDG Goal Logos */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            <Image src="/assets/sdg/sdg-4.png" alt="SDG 4 - Quality Education" width={120} height={120} className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl object-cover shadow-xl hover:scale-105 transition-transform duration-300" />
            <Image src="/assets/sdg/sdg-7.png" alt="SDG 7 - Affordable and Clean Energy" width={120} height={120} className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl object-cover shadow-xl hover:scale-105 transition-transform duration-300" />
            <Image src="/assets/sdg/sdg-9.png" alt="SDG 9 - Industry, Innovation and Infrastructure" width={120} height={120} className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl object-cover shadow-xl hover:scale-105 transition-transform duration-300" />
            <Image src="/assets/sdg/sdg-11.png" alt="SDG 11 - Sustainable Cities and Communities" width={120} height={120} className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl object-cover shadow-xl hover:scale-105 transition-transform duration-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;