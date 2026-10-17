"use client";

import { useState, useEffect } from "react";
import {
  Clock,
  Calendar,
  CheckCircle,
  AlertCircle,
  FileText,
  Sparkles,
  Send,
  Award,
} from "lucide-react";
import { useClientOnly } from "@/hooks/use-client-only";
import { createDateObject } from "@/lib/date-utils";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 20 },
  },
};

const ImportantDates = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const isClient = useClientOnly();

  useEffect(() => {
    if (!isClient) return;

    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [isClient]);

  const dates = [
    {
      title: "COMMENCEMENT & DEADLINE FOR ABSTRACT SUBMISSION",
      dateString: "30 OCTOBER 2026",
      date: createDateObject("2026-10-30"),
      icon: Send,
      isConference: false,
    },
    {
      title: "NOTIFICATION OF ABSTRACT ACCEPTANCE",
      dateString: "06 NOVEMBER 2026",
      date: createDateObject("2026-11-06"),
      icon: AlertCircle,
      isConference: false,
    },
    {
      title: "FULL LENGTH PAPER SUBMISSION",
      dateString: "04 JANUARY 2027",
      date: createDateObject("2027-01-04"),
      icon: FileText,
      isConference: false,
    },
    {
      title: "ACCEPTANCE NOTIFICATION",
      dateString: "20 JANUARY 2027",
      date: createDateObject("2027-01-20"),
      icon: CheckCircle,
      isConference: false,
    },
    {
      title: "CONFERENCE REGISTRATION",
      dateString: "28 JANUARY 2027",
      date: createDateObject("2027-01-28"),
      icon: Clock,
      isConference: false,
    },
    {
      title: "CONFERENCE DATE (FITCS 2026–27)",
      dateString: "06 FEBRUARY 2027",
      date: createDateObject("2027-02-06"),
      icon: Award,
      isConference: true,
    },
  ].filter((item) => item.date !== null) as Array<{
    title: string;
    date: Date;
    dateString: string;
    icon: React.ComponentType<{ className?: string }>;
    isConference?: boolean;
  }>;

  const getTimeRemaining = (date: Date) => {
    if (!currentTime) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false };
    }

    const diff = date.getTime() - currentTime.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (diff < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    return { days, hours, minutes, seconds, isPast: false };
  };

  return (
    <section id="dates" className="py-20 bg-[#070b14] text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-[#facc15]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#facc15]/10 border border-[#facc15]/30 text-[#facc15] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
            <Sparkles className="w-4 h-4" />
            Important Schedule
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white font-serif tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            Important <span className="text-[#facc15] drop-shadow-[0_0_25px_rgba(250,204,21,0.6)]">Dates</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#facc15] to-transparent mx-auto mb-4" />
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed md:whitespace-nowrap">
            Please note all critical milestones and submission deadlines for <span className="whitespace-nowrap">FITCS 2026&#8209;27</span>.
          </p>
        </motion.div>

        {/* Schedule Cards in Website's Exact Color Scheme */}
        <motion.div
          className="space-y-4 max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {dates.map((item, index) => {
            const timeRemaining = getTimeRemaining(item.date);
            const isConf = item.isConference;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.015 }}
                className={`relative rounded-2xl md:rounded-full p-3.5 sm:p-4 border transition-all duration-300 ${
                  isConf
                    ? "bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#FFD700] border-2 border-[#FFD700] text-black shadow-[0_0_35px_rgba(255,215,0,0.35)]"
                    : "bg-gradient-to-r from-[#0d162b] via-[#121c33] to-[#0d162b] border border-[#facc15]/25 hover:border-[#facc15]/70 text-white shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(250,204,21,0.15)]"
                }`}
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 px-2 sm:px-4">
                  {/* Left: Round Calendar Icon + Date Details */}
                  <div className="flex items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md transition-transform duration-300 ${
                        isConf
                          ? "bg-black text-[#FFD700] border border-black/40"
                          : "bg-[#facc15]/10 text-[#facc15] border border-[#facc15]/30 shadow-[0_0_15px_rgba(250,204,21,0.2)]"
                      }`}
                    >
                      <Calendar className="w-6 h-6" />
                    </div>

                    <div>
                      <h3
                        className={`text-lg sm:text-2xl font-black tracking-wide ${
                          isConf
                            ? "text-black"
                            : "text-[#facc15] drop-shadow-[0_0_10px_rgba(250,204,21,0.4)] font-serif"
                        }`}
                      >
                        {item.dateString}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${
                          isConf ? "text-neutral-900 font-extrabold" : "text-gray-300"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>

                  {/* Right: Countdown or Status Pill */}
                  <div className="w-full sm:w-auto flex justify-end">
                    {timeRemaining.isPast ? (
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          isConf
                            ? "bg-black/20 text-black font-extrabold"
                            : "bg-white/5 text-gray-400 border border-white/10"
                        }`}
                      >
                        Completed
                      </span>
                    ) : (
                      <span
                        className={`text-xs font-extrabold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm ${
                          isConf
                            ? "bg-black text-[#FFD700] border border-black"
                            : "bg-[#facc15]/10 border border-[#facc15]/30 text-[#facc15] shadow-[0_0_12px_rgba(250,204,21,0.15)]"
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 text-[#facc15]" />
                        {timeRemaining.days}d {timeRemaining.hours}h left
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ImportantDates;