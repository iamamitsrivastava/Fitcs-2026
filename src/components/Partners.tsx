"use client";


import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function Partners() {

  const partnersDetails = [
    {
      name: "Universitas of Teknokrat",
      logo: "/assets/partners/universitas-teknokra-indonesia-logo.png",
      website: "https://teknokrat.ac.id/",
      type: "Academic Partner",
      contact: "+62 852-7910-3452"
    },
    {
      name: "SSM Infotech Solutions Pvt. Ltd",
      logo: "/assets/partners/SSM-logo.avif",
      website: "#",
      type: "Industry Partner",
      contact: "7486022024, 99988816019"
    },
    {
      name: "Arth Consultancy Services",
      logo: "/assets/partners/arth-consultancy-services-logo.webp",
      website: "#",
      type: "Industry Partner",
      contact: "9377718823"
    },
    {
      name: "EXCELR Edtech Pvt. Ltd.",
      logo: "/assets/partners/excelr.png",
      website: "#",
      type: "Industry Partner",
      contact: "8010245639"
    },
    {
      name: "Infolink University College, Ethiopia",
      logo: "/assets/partners/inflolink.png",
      website: "#",
      type: "Academic Partner",
      contact: "251916581753"
    },
    {
      name: "Akash Technolabs",
      logo: "/assets/partners/akash-technolabs.png",
      website: "#",
      type: "Industry Partner",
      contact: "8000147888"
    },
    {
      name: "NYSHA SOLUTIONS",
      logo: "/assets/partners/LOGO-MAIN.png",
      website: "#",
      type: "Industry Partner",
      contact: "9727772202"
    },
    {
      name: "MyinfoPie",
      logo: "/assets/partners/myinfopie-white-amd-black.png",
      website: "#",
      type: "Industry Partner",
      contact: "8401584017"
    },
    {
      name: "Happy Window Skill Services Private Ltd.",
      logo: "/assets/partners/skill.png",
      website: "#",
      type: "Industry Partner",
      contact: "9967763315"
    },
    {
      name: "Enlighten Infosystem, Vadodara, Gujarat",
      logo: "/assets/partners/EnliLogoNewPNG.png",
      website: "#",
      type: "Industry Partner",
      contact: "7990343306"
    },
    {
      name: "Cybertronix Solution, Vadodara, Gujarat",
      logo: "/assets/partners/cybt-logo.png",
      website: "#",
      type: "Industry Partner",
      contact: ""
    },
    {
      name: "Encoderspro Private Limited, Kanpur, UP",
      logo: "/assets/partners/enpro_logo.png",
      website: "#",
      type: "Industry Partner",
      contact: ""
    },
    {
      name: "Baroda Institute of Technology",
      logo: "/assets/partners/baroda.png",
      website: "#",
      type: "Academic Partner",
      contact: ""
    },
    {
      name: "Brainybeam Pvt. Ltd.",
      logo: "/assets/partners/brainylogo.png",
      website: "#",
      type: "Industry Partner",
      contact: ""
    },
    {
      name: "AccioJob",
      logo: "/assets/partners/acciojob-logo-color.png",
      website: "#",
      type: "Industry Partner",
      contact: ""
    }
  ];

  // Split partners into two rows for different sliding directions
  const firstRowPartners = partnersDetails.slice(0, Math.ceil(partnersDetails.length / 2));
  const secondRowPartners = partnersDetails.slice(Math.ceil(partnersDetails.length / 2));

  // Partner Card Component - Clean & Modern Layout
  const PartnerCard = ({ partner }: {
    partner: {
      name: string;
      logo: string;
      website: string;
      type: string;
      contact: string;
    }
  }) => (
    <div className="flex-shrink-0 w-80 mx-3 py-4">
      <div className="bg-white rounded-2xl p-4 group cursor-pointer relative overflow-hidden h-32 border-2 border-blue-400 shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center gap-4 h-full">
          {/* Logo Container - Clean */}
          <div className="relative w-20 h-20 bg-gray-50/50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 flex items-center justify-center group-hover:bg-white transition-colors duration-300 p-2">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              fill sizes="100vw"
              className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Partner Info - Clean Typography */}
          <div className="flex-1 min-w-0 h-full flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-2">
              <span className={`inline-block px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full ${partner.type === 'Academic Partner'
                ? 'bg-blue-50 text-blue-600 border border-blue-200'
                : 'bg-green-50 text-green-600 border border-green-200'
                }`}>
                {partner.type}
              </span>
            </div>

            {/* Partner Name */}
            <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2">
              {partner.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 " />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            Associated Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading institutions and organizations to advance research, innovation, and technological excellence
          </p>
        </motion.div>

        {/* Partners Slider - Fixed Animation */}
        <motion.div
          className="space-y-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* First Row - Sliding Forward */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-forward">
              {/* Duplicate the array for seamless loop */}
              {[...firstRowPartners, ...firstRowPartners, ...firstRowPartners].map((partner, index) => (
                <PartnerCard key={`forward-${index}`} partner={partner} />
              ))}
            </div>
          </div>

          {/* Second Row - Sliding Backward */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-backward">
              {/* Duplicate the array for seamless loop */}
              {[...secondRowPartners, ...secondRowPartners, ...secondRowPartners].map((partner, index) => (
                <PartnerCard key={`backward-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* About Sections */}
        <motion.div
          id="about-conference"
          className="mt-12 space-y-8 pt-20 -mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* About the Conference Card */}
          <div className="w-full rounded-2xl border border-slate-700 p-8 md:p-12 bg-slate-900/90 shadow-2xl backdrop-blur-md overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="text-yellow-500 font-bold tracking-wider uppercase text-sm mb-2"></h4>
                  <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                    About the Conference
                  </h3>
                </div>

                <p className="text-slate-300 text-lg text-justify leading-relaxed">
                  Welcome to the International Conference on Artificial Intelligence and Sustainable Computing Technologies (AISCT 2026-27). This premier international conference brings together
                  researchers, academicians, industry professionals, and students to share their knowledge
                  and experience in emerging technologies. The conference provides a platform for presenting
                  novel ideas, discussing recent developments, and establishing collaborations.
                </p>
                <p className="text-slate-300 text-lg text-justify leading-relaxed">
                  With a focus on practical applications and theoretical foundations, the conference covers
                  a wide range of topics in artificial intelligence and sustainable computing technologies. All accepted papers
                  will be published in peer-reviewed proceedings and indexed in major databases.
                </p>
              </div>

              {/* Image Section */}
              <div className="flex-1 w-full relative min-h-[300px] md:min-h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-slate-700">
                <Image
                  src="/assets/lakshya_2047.jpg"
                  alt="Conference Venue Lakshya 2047"
                  fill sizes="100vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* About FITCS Card */}
          <div className="w-full rounded-2xl border border-slate-700 p-8 md:p-12 bg-slate-900/90 shadow-2xl backdrop-blur-md mt-12 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="text-yellow-500 font-bold tracking-wider uppercase text-sm mb-2"></h4>
                  <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                    About Faculty of IT And Computer (FITCS)
                  </h3>
                </div>

                <p className="text-slate-300 text-lg text-justify leading-relaxed">
                  Welcome to the Faculty of Information Technology and Computer Science (FITCS), Parul University, where innovation, excellence, and technology come together to shape the future. Recognized for its academic achievements, FITCS secured the 48th Rank in the INDIA TODAY Survey among 1207 BCA colleges across India, reflecting its commitment to delivering high-quality education and fostering academic excellence.
                </p>
                <p className="text-slate-300 text-lg text-justify leading-relaxed">
                  At FITCS, students are empowered with a perfect blend of theoretical knowledge and practical experience. The industry-oriented curriculum covers programming, web development, software engineering, artificial intelligence, data science, and other emerging technologies, enabling students to develop innovative solutions and stay ahead in the rapidly evolving digital world.
                </p>
                <p className="text-slate-300 text-lg text-justify leading-relaxed">
                  With state-of-the-art laboratories, experienced faculty members, and a strong focus on research, innovation, and skill development, FITCS provides an inspiring learning environment. The department prepares students to become confident, industry-ready professionals capable of leading technological advancements and building successful careers in Information Technology and Computer Science.
                </p>
              </div>

              {/* Image Section - Slideshow */}
              <div className="flex-1 w-full relative min-h-[300px] md:min-h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-slate-700">
                <style>{`
                  @keyframes fadeSlide {
                    0% { opacity: 1; transform: scale(1.05); }
                    25% { opacity: 1; transform: scale(1.05); }
                    33% { opacity: 0; transform: scale(1); }
                    92% { opacity: 0; transform: scale(1); }
                    100% { opacity: 1; transform: scale(1.05); }
                  }
                  .slide-1 { animation: fadeSlide 15s infinite; }
                  .slide-2 { animation: fadeSlide 15s infinite; animation-delay: 5s; opacity: 0; }
                  .slide-3 { animation: fadeSlide 15s infinite; animation-delay: 10s; opacity: 0; }
                `}</style>
                <div className="absolute inset-0 slide-1">
                  <Image
                    src="/assets/fitcs/fitcs-1.png"
                    alt="FITCS Lab 1"
                    fill sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 slide-2">
                  <Image
                    src="/assets/fitcs/fitcs-2.png"
                    alt="FITCS Lab 2"
                    fill sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 slide-3">
                  <Image
                    src="/assets/fitcs/fitcs-3.png"
                    alt="FITCS Drone 3"
                    fill sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* About Parul University Card */}
          <div className="w-full rounded-2xl border border-slate-700 p-8 md:p-12 bg-slate-900/90 shadow-2xl backdrop-blur-md mt-12 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="text-yellow-500 font-bold tracking-wider uppercase text-sm mb-2">
                    India's youngest private university to receive NAAC A++ accreditation in the first cycle
                  </h4>
                  <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                    About Parul University
                  </h3>
                </div>

                <p className="text-slate-300 text-lg text-justify leading-relaxed">
                  Nestled in the vibrant city of <strong className="text-white">Vadodara, Gujarat</strong>, Parul University has emerged as a beacon of academic excellence and innovation. With a sprawling <strong className="text-white">250+ acre eco-friendly campus</strong>, the university is home to students from every Indian state and <strong className="text-white">75+ countries</strong>, making it one of the most culturally diverse educational destinations in the country.
                </p>
                <p className="text-slate-300 text-lg text-justify leading-relaxed">
                  Recognized for its world-class infrastructure, industry-aligned curriculum, and outstanding placement records, Parul University houses state-of-the-art research facilities, dedicated innovation and incubation centers, and a diverse range of disciplines across multiple faculties. These include the Faculty of Engineering and Technology, Faculty of Management Studies, Faculty of Applied Sciences, Faculty of Computer Science and Applications, Faculty of Pharmacy, Faculty of Medicine, Faculty of Nursing, Faculty of Architecture and Planning, Faculty of Law, Faculty of Liberal Arts, Faculty of Design, Faculty of Commerce, Faculty of Agriculture, and Faculty of Hospitality and Tourism Management, creating a multidisciplinary academic ecosystem that encourages innovation, research, and holistic learning.
                </p>
                <p className="text-slate-300 text-lg text-justify leading-relaxed mt-4">
                  To know more about Parul:- <a href="https://www.paruluniversity.ac.in/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 font-semibold hover:text-yellow-400 underline transition-colors">https://www.paruluniversity.ac.in/</a>
                </p>
              </div>

              {/* Image Section */}
              <div className="flex-1 w-full relative min-h-[300px] md:min-h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-slate-700 group">
                <Image
                  src="/assets/main_gate_v2.png"
                  alt="Parul University Campus"
                  fill sizes="100vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 bg-[#0f172a] rounded-xl p-3 border border-yellow-500/30 shadow-2xl flex items-center gap-3 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-yellow-500 font-bold text-sm leading-tight">NAAC A++</div>
                    <div className="text-slate-400 text-[10px] font-bold tracking-wider">FIRST CYCLE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}