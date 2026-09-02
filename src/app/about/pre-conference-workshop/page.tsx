import Image from "next/image";

export default function PreConferenceWorkshop() {
  const workshops = [
    {
      id: 1,
      image: "/assets/workshops/workshop1.jpg",
      alt: "Pre-Conference Workshop on From Documents to Actions - Building a grounded AI agent on AWS",
    },
    {
      id: 2,
      image: "/assets/workshops/workshop2.jpg",
      alt: "Pre-Conference Workshop on Hands-on Workshop on GenAI: Building RAG and Agentic AI Application",
    },
    {
      id: 3,
      image: "/assets/workshops/workshop3.jpg",
      alt: "Pre-Conference Workshop on From Idea to Impact: Design Sprint Workshop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <div className="pt-32 md:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white leading-tight">
          AISCT 2026 <br className="hidden sm:block" />
          <span className="text-yellow-400">Pre Conference Workshops</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-800 bg-[#0f172a] hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center justify-center w-full h-full bg-slate-900">
                <Image
                  src={workshop.image}
                  alt={workshop.alt}
                  fill sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
