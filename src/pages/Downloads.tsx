"use client";

import { Download, FolderArchive, FileArchive, CheckCircle, ArrowDownToLine } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DownloadFolder {
  title: string;
  fileName: string;
  description: string;
  downloadUrl: string;
}

const Downloads = () => {
  const downloadZip = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const folders: DownloadFolder[] = [
    {
      title: "AISCT 2026 Conference LaTeX Template",
      fileName: "SCITEPRESS_Conference_Latex (2).zip",
      description:
        "Official LaTeX formatting package containing document class, sample document, bibliography styles, and compilation instructions for AISCT 2026-27.",
      downloadUrl: "/downloads/SCITEPRESS_Conference_Latex (2).zip",
    },
    {
      title: "AISCT 2026 Conference MS Word Template",
      fileName: "SCITEPRESS_Conference_MSWord (2).zip",
      description:
        "Official Microsoft Word document templates (.doc / .docx) and formatting instructions tailored for AISCT 2026-27 paper submissions.",
      downloadUrl: "/downloads/SCITEPRESS_Conference_MSWord (2).zip",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]" />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-center mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] group">
              <FolderArchive className="w-8 h-8 text-white group-hover:text-black transition-colors" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-100 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
            Downloads
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Download the official AISCT 2026 conference template packages for manuscript submission to AISCT 2026-27.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {folders.map((folder, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-[#facc15]/50 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)] hover:-translate-y-1 group"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  {/* Left Column: Icon & Info */}
                  <div className="flex items-start gap-4 sm:gap-5 flex-grow">
                    <div className="w-14 h-14 rounded-2xl bg-[#1e273c] flex items-center justify-center flex-shrink-0 border border-gray-700/80 group-hover:border-[#facc15]/50 transition-colors shadow-inner">
                      <FileArchive className="w-7 h-7 text-[#facc15] transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-xl md:text-2xl font-bold text-yellow-100 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
                          {folder.title}
                        </h2>
                      </div>


                      <p className="text-gray-300 text-sm md:text-base leading-relaxed pt-1">
                        {folder.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Download Button */}
                  <div className="w-full md:w-auto flex-shrink-0">
                    <Button
                      onClick={() => downloadZip(folder.downloadUrl, folder.fileName)}
                      className="w-full md:w-auto bg-[#cca300] hover:bg-[#e0b500] text-black font-bold px-7 py-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all duration-200 flex items-center justify-center gap-2.5 text-base cursor-pointer"
                    >
                      <ArrowDownToLine className="w-5 h-5 text-black" />
                      <span>Download Folder</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}

            {/* Information Notice */}
            <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800/80 flex items-start gap-3 text-sm text-gray-400">
              <CheckCircle className="w-5 h-5 text-[#facc15] flex-shrink-0 mt-0.5" />
              <p>
                Clicking <span className="text-yellow-100 font-medium">Download Folder</span> will directly download the complete zip archive to your device. Please extract the archive to access all templates, guidelines, and style files.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;
