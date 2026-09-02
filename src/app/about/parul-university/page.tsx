import Image from "next/image";
import { Award } from "lucide-react";

export default function AboutParulUniversityPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            About Parul University
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto">
            India's youngest private university to receive NAAC A++ accreditation in the first cycle
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent flex items-center justify-center relative">
              <div className="w-2 h-2 rounded-full bg-yellow-500 absolute"></div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md overflow-hidden relative">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Text Content */}
            <div className="flex-1 space-y-6 flex flex-col justify-center">
              <p className="text-slate-300 text-lg text-justify leading-relaxed">
                Nestled in the vibrant city of <strong className="text-white">Vadodara, Gujarat</strong>, Parul University has emerged as a beacon of academic excellence and innovation. With a sprawling <strong className="text-white">250+ acre eco-friendly campus</strong>, the university is home to students from every Indian state and <strong className="text-white">75+ countries</strong>, making it one of the most culturally diverse educational destinations in the country.
              </p>
              <p className="text-slate-300 text-lg text-justify leading-relaxed">
                Recognized for its world-class infrastructure, industry-aligned curriculum, and outstanding placement records, Parul University houses state-of-the-art research facilities, dedicated innovation and incubation centers, and a diverse range of disciplines across multiple faculties. These include the Faculty of Engineering and Technology, Faculty of Management Studies, Faculty of Applied Sciences, Faculty of Computer Science and Applications, Faculty of Pharmacy, Faculty of Medicine, Faculty of Nursing, Faculty of Architecture and Planning, Faculty of Law, Faculty of Liberal Arts, Faculty of Design, Faculty of Commerce, Faculty of Agriculture, and Faculty of Hospitality and Tourism Management, creating a multidisciplinary academic ecosystem that encourages innovation, research, and holistic learning.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 w-full relative min-h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-slate-700">
              <style>{`
                @keyframes puFadeSlide {
                  0% { opacity: 1; transform: scale(1.05); }
                  45% { opacity: 1; transform: scale(1.05); }
                  50% { opacity: 0; transform: scale(1); }
                  95% { opacity: 0; transform: scale(1); }
                  100% { opacity: 1; transform: scale(1.05); }
                }
                .pu-slide-1 { animation: puFadeSlide 10s infinite; }
                .pu-slide-2 { animation: puFadeSlide 10s infinite; animation-delay: 5s; opacity: 0; }
              `}</style>

              <div className="absolute inset-0 pu-slide-1">
                <Image
                  src="/assets/main_gate_v2.png"
                  alt="Parul University Main Gate"
                  fill sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 pu-slide-2">
                <Image
                  src="/assets/pu_admin_side.webp"
                  alt="Parul University Campus"
                  fill sizes="100vw"
                  className="object-cover"
                />
              </div>

              {/* NAAC A++ Badge overlay */}
              <div className="absolute bottom-6 left-[-16px] md:left-[-24px] bg-[#0f172a] border border-slate-700 shadow-2xl rounded-xl py-3 px-6 flex items-center gap-3 z-10 translate-x-8">
                <div className="text-yellow-500">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-yellow-500 font-bold text-lg leading-tight">NAAC A++</div>
                  <div className="text-slate-300 text-xs font-semibold tracking-wider">FIRST CYCLE</div>
                </div>
              </div>

              {/* Slideshow indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
