"use client";

import { Card } from "@/components/ui/card";
import { Mail, AlertCircle, CheckCircle, ShieldAlert, HelpCircle, FileSignature, ScanSearch, Bot } from "lucide-react";

const PublishingEthics = () => {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]" />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-center mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] group">
              <CheckCircle className="w-8 h-8 text-white group-hover:text-black transition-colors" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-100 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
            Publishing Ethics and Malpractice Statement
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            AISCT 2026-27 (International Conference on Artificial Intelligence and Sustainable Computing Technologies) is committed to maintaining the highest ethical standards in academic publishing. This comprehensive guide outlines our policies and expectations for authors, reviewers, and editors.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Plagiarism Policy Card */}
            <Card className="p-8 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-[#facc15]/40 hover:shadow-[0_0_20px_rgba(250,204,21,0.1)] hover:-translate-y-1">

              {/* 1. Plagiarism Policy */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e273c] flex items-center justify-center flex-shrink-0">
                    <ShieldAlert className="w-5 h-5 text-[#facc15]" />
                  </div>
                  <h2 className="text-2xl font-bold text-yellow-100 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Plagiarism Policy</h2>
                </div>
                <div className="border-b border-gray-700 mb-4" />
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                  Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission). These matters are taken very seriously and the conference will take action against any author who engages in either practice.
                </p>
                <a
                  href="https://www.scitepress.org/EthicsOfPublication.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#facc15] hover:text-[#cca300] font-semibold text-sm md:text-base underline underline-offset-4 transition-colors mb-4"
                >
                  SCITEPRESS Ethics of Publication
                </a>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                  All accepted papers presented during the conference will be published in the conference proceedings and submitted for inclusion in the AISCT 2026 Digital Library.
                </p>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  The conference reserves the right to exclude a paper from distribution after the conference (e.g., by not including it in the proceedings) if the paper is not presented at the conference.
                </p>
              </div>

              {/* 2. A Plagiarism FAQ */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e273c] flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-[#facc15]" />
                  </div>
                  <h2 className="text-2xl font-bold text-yellow-100 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">A Plagiarism FAQ</h2>
                </div>
                <div className="border-b border-gray-700 mb-4" />
                <ul className="space-y-3">
                  {[
                    "Authors are insisted to submit their original work without plagiarism.",
                    "If plagiarism is found, authors will be responsible for any consequences.",
                    "Authors are responsible for rejection of manuscript based on plagiarism report.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base transition-all hover:text-white hover:translate-x-1">
                      <CheckCircle className="w-5 h-5 text-[#facc15] flex-shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(250,204,21,0.6)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Copyright Form */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e273c] flex items-center justify-center flex-shrink-0">
                    <FileSignature className="w-5 h-5 text-[#facc15]" />
                  </div>
                  <h2 className="text-2xl font-bold text-yellow-100 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Copyright Form</h2>
                </div>
                <div className="border-b border-gray-700 mb-4" />
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Transferring copyright is a necessary requirement for publication, except for material in the public domain or which is reprinted with permission from a previously published, copyrighted publication.
                </p>
              </div>

              {/* 4. Turnitin */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e273c] flex items-center justify-center flex-shrink-0">
                    <ScanSearch className="w-5 h-5 text-[#facc15]" />
                  </div>
                  <h2 className="text-2xl font-bold text-yellow-100 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Turnitin</h2>
                </div>
                <div className="border-b border-gray-700 mb-4" />
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  The AISCT 2026 uses Turnitin plagiarism detection software to screen the submissions. If plagiarism is found, the COPE guidelines on plagiarism will be followed.
                </p>
              </div>

              {/* 5. Authors Use of Generative AI Tools */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e273c] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-[#facc15]" />
                  </div>
                  <h2 className="text-2xl font-bold text-yellow-100 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Authors Use of Generative AI Tools</h2>
                </div>
                <div className="border-b border-gray-700 mb-4" />
                <div className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                  <p>
                    Authors may use Generative AI tools (e.g., ChatGPT, Gemini, Copilot) only for language editing, grammar correction, or text refinement. AI tools must not be used to generate, analyze, or fabricate data, results, images, or references. Generative AI cannot be listed as an author, and all listed authors are fully responsible for the accuracy and originality of their work.
                  </p>
                  <p>
                    Authors must disclose any AI assistance in the Acknowledgment section, for example: <span className="text-[#facc15] italic">"The authors used [tool name] for language editing and proofreading."</span>
                  </p>
                  <p className="text-yellow-200/80 font-medium">
                    Undisclosed or inappropriate AI use may lead to manuscript rejection or retraction.
                  </p>
                </div>
              </div>

            </Card>

            {/* Ethics Inquiries and Complaints */}
            <Card className="p-8 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] group">
                  <Mail className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-yellow-100 mb-4 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Ethics Inquiries and Complaints</h2>
                  <p className="text-gray-300 mb-4">
                    If you have any concerns regarding research ethics, publication misconduct, or other ethics-related matters,
                    please contact our editorial office:
                  </p>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 space-y-2">
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Email:</span>
                      <a href="mailto:fitcs.conference@paruluniversity.ac.in" className="text-white hover:underline ml-2 font-semibold drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                        fitcs.conference@paruluniversity.ac.in
                      </a>
                    </p>
                    <p className="text-sm text-gray-400">
                      All complaints and inquiries will be handled confidentially and investigated thoroughly.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Important Notice */}
            <Card className="p-8 bg-gray-900/50 border border-yellow-500/30 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/60 hover:shadow-[0_0_25px_rgba(234,179,8,0.2)] hover:-translate-y-1">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1 drop-shadow-[0_0_5px_rgba(234,179,8,0.8)]" />
                <div>
                  <h3 className="font-semibold text-lg text-yellow-100 mb-2 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">Important Notice</h3>
                  <p className="text-gray-300 mb-3">
                    By submitting a manuscript to AISCT 2026-27, all authors confirm that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li className="transition-all hover:text-white hover:translate-x-1">The work is original and has not been published elsewhere</li>
                    <li className="transition-all hover:text-white hover:translate-x-1">All authors have agreed on authorship and order</li>
                    <li className="transition-all hover:text-white hover:translate-x-1">The work complies with ethical standards and regulations</li>
                    <li className="transition-all hover:text-white hover:translate-x-1">All conflicts of interest have been disclosed</li>
                    <li className="transition-all hover:text-white hover:translate-x-1">The corresponding author is authorized to act on behalf of all co-authors</li>
                    <li className="transition-all hover:text-white hover:translate-x-1">The manuscript will not be submitted elsewhere while under review</li>
                  </ul>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PublishingEthics;
