import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Topics = () => {
  const tracks = [
    {
      id: "ai-systems",
      title: "Artificial Intelligence and Intelligent Systems",
      icon: "🧠",
      topics: [
        "Machine learning & deep learning models",
        "Cognitive computing & natural language processing",
        "Computer vision & pattern recognition",
        "Robotics & autonomous systems"
      ]
    },
    {
      id: "sustainable-computing",
      title: "Sustainable Computing and Green Technologies",
      icon: "🌱",
      topics: [
        "Green computing & energy-efficient systems",
        "Sustainable IT infrastructure & architecture",
        "E-waste management & recycling technologies",
        "Renewable energy in computing"
      ]
    },
    {
      id: "smart-tech",
      title: "Smart Technologies and Intelligent Applications",
      icon: "💡",
      topics: [
        "Smart cities & IoT ecosystems",
        "Intelligent transportation systems",
        "Smart healthcare & bioinformatics",
        "Home automation & smart environments"
      ]
    },
    {
      id: "data-cyber",
      title: "Data Science, Cybersecurity and Emerging Technologies",
      icon: "🛡️",
      topics: [
        "Big data analytics & visualization",
        "Cryptography & network security",
        "Blockchain & decentralized technologies",
        "Cloud & edge computing"
      ]
    },
    {
      id: "ai-sustainable",
      title: "AI Applications for Sustainable Development",
      icon: "🌍",
      topics: [
        "AI for climate change & environmental monitoring",
        "Smart agriculture & precision farming",
        "AI in renewable energy optimization",
        "Tech-driven sustainability policies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <section className="relative pt-40 md:pt-48 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-100 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
            Conference Theme
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] mb-8">
            Artificial Intelligence and Sustainable Computing Technologies
          </p>

        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-100 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
            Tracks
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
            {tracks.map((track, index) => {
              // Centering logic for bottom rows
              let gridClasses = "md:col-span-2";
              if (index === 3) gridClasses += " lg:col-start-2";
              if (index === 4) gridClasses += " md:col-start-2 lg:col-start-4";

              return (
                <Card
                  key={track.id}
                  className={`relative p-8 bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl transition-all duration-500 hover:bg-slate-800/60 hover:border-yellow-500/50 hover:shadow-[0_8px_30px_rgb(234,179,8,0.15)] hover:-translate-y-2 group flex flex-col overflow-hidden ${gridClasses}`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-yellow-500/20" />

                  <div className="relative mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-yellow-500/30">
                        <span className="text-4xl drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{track.icon}</span>
                      </div>
                      <Badge variant="outline" className="bg-slate-800/50 text-yellow-300 border-yellow-500/30 px-3 py-1 shadow-sm font-semibold tracking-wide">
                        Track {index + 1}
                      </Badge>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-yellow-100 transition-colors duration-300">
                      {track.title}
                    </h2>
                  </div>

                  <div className="relative space-y-4 flex-grow">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Key Focus Areas
                    </h3>
                    <ul className="space-y-3">
                      {track.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:border-yellow-500/50 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-70 group-hover:opacity-100" />
                          </div>
                          <span className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                            {topic}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative mt-8 pt-5 border-t border-slate-800/80">
                    <p className="text-xs text-slate-400 leading-relaxed italic">
                      <span className="font-semibold text-yellow-400 not-italic mr-1">Note:</span>
                      Interdisciplinary and emerging topics within this track are welcome.
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Publishers Section */}
      <section className="py-16 bg-[#0f172a] relative border-t border-slate-800">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-sm md:text-base font-semibold tracking-[0.3em] text-yellow-400 uppercase mb-4">PUBLISHERS</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Our <span className="text-yellow-300 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]">Publishing Partners</span>
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 w-full max-w-4xl mx-auto">
            <div className="bg-white p-2 md:p-4 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-shadow duration-300 w-full flex items-center justify-center group overflow-hidden">
              <img src="/assets/publishers/image.png" alt="Publishers Indexing" className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Topics;
