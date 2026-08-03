"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  FileText,
  Award,
  Send,
  Download,
  Mail,
  BookOpen,
  Leaf,
  Zap,
  ChevronDown
} from "lucide-react";

const CallForPapersSection = ({ id }: { id?: string }) => {
  const tracks = [
    {
      id: "track-1",
      title: "TRACK 1: 🧠 Artificial Intelligence and Intelligent Systems",
      subThemes: []
    },
    {
      id: "track-2",
      title: "TRACK 2: 🌱 Sustainable Computing and Green Technologies",
      subThemes: []
    },
    {
      id: "track-3",
      title: "TRACK 3: 💡 Smart Technologies and Intelligent Applications",
      subThemes: []
    },
    {
      id: "track-4",
      title: "TRACK 4: 🛡️ Data Science, Cybersecurity and Emerging Technologies",
      subThemes: []
    },
    {
      id: "track-5",
      title: "TRACK 5: 🌍 AI Applications for Sustainable Development",
      subThemes: []
    }
  ];

  const downloadFile = (filename: string) => {
    if (filename === 'author-guidelines.pdf') {
      window.open("https://drive.google.com/file/d/1w-_ix3qKmf9bEpXgVuXoJybOZltiHkH_/view?usp=sharing", "_blank");
      return;
    }
    const link = document.createElement('a');
    link.href = `/documents/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <div id={id} className="w-full bg-[#0f172a]">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Download Abstract Format Section */}
            <Card className="p-8 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-0 md:flex-row md:items-center md:gap-6">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-yellow-100 mb-2 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Download Abstract Format</h2>
                  <p className="text-gray-300">
                    Start by downloading our abstract format to prepare your submission. This will help ensure your paper meets all requirements.
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition-all mt-6"
                onClick={() => downloadFile('abstract-format.pdf')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Abstract Format
              </Button>
            </Card>
            {/* Submission Guidelines */}
            <Card className="p-8 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-yellow-100 mb-6 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Submission Guidelines</h2>
              <div className="space-y-8">

                {/* Author Guidelines */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center text-yellow-100 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">
                    <FileText className="w-5 h-5 mr-2 text-white" />
                    Author Guidelines
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Full Length Research/Review Papers should follow the conference guidelines to ensure consistency and quality.
                    Please review our comprehensive author guidelines before submission.
                  </p>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 bg-transparent hover:bg-white hover:text-black transition-colors"
                    onClick={() => downloadFile('author-guidelines.pdf')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Guidelines
                  </Button>
                </div>

                {/* Oral Presentation */}
                <div className="pt-6 border-t border-gray-800">
                  <h3 className="text-lg font-semibold mb-4 flex items-center text-yellow-100 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">
                    <Zap className="w-5 h-5 mr-2 text-white" />
                    Oral Presentation
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Prepare an engaging presentation in Times New Roman font. Presentations should be 10-12 slides.
                    Download our PowerPoint template to maintain consistency and visual appeal.
                  </p>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 bg-transparent hover:bg-white hover:text-black transition-colors"
                    onClick={() => downloadFile('ppt-template.pptx')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PPT Template
                  </Button>
                </div>

                {/* Poster Presentation */}
                <div className="pt-6 border-t border-gray-800">
                  <h3 className="text-lg font-semibold mb-4 flex items-center text-yellow-100 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">
                    <BookOpen className="w-5 h-5 mr-2 text-white" />
                    Poster Presentation
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Create an impactful poster (3x4 feet size) with our professional template.
                    Download the template and submit your poster with your paper for consideration in the poster track.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 bg-transparent hover:bg-white hover:text-black transition-colors"
                      onClick={() => downloadFile('poster-template.pptx')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Template
                    </Button>
                    <Button
                      className="bg-white text-black hover:bg-gray-200 shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all"
                      onClick={() => window.location.href = 'mailto:fitcs.conference@paruluniversity.ac.in?subject=Poster Submission'}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Poster
                    </Button>
                  </div>
                </div>

                {/* Other Categories */}
                <div className="pt-6 border-t border-gray-800 bg-gray-800/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center text-yellow-100 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">
                    <Mail className="w-5 h-5 mr-2 text-white" />
                    Abstract Submission for Other Categories
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Abstract submissions for other categories (workshops, lightning talks, industry sessions, etc.)
                    should be made through the Microsoft CMT (Conference Management Toolkit) portal.
                  </p>
                  <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 space-y-2">
                    <p className="text-sm text-gray-300"><span className="font-semibold text-white">Portal:</span> Microsoft CMT - Available upon registration</p>
                    <p className="text-sm text-gray-300"><span className="font-semibold text-white">Format:</span> Abstract submission only</p>
                    <p className="text-sm text-gray-300"><span className="font-semibold text-white">Deadline:</span> As per conference schedule</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Microsoft CMT Acknowledgement */}
            <Card className="p-8 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-yellow-100 mb-4 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Conference Management System</h2>
              <p className="text-gray-300 mb-4">
                We acknowledge the support of Microsoft for providing the CMT (Conference Management Toolkit) service,
                which streamlines our paper submission, abstract management, and publication workflow.
                The CMT platform ensures secure, transparent, and efficient management of the submission process for AISCT 2026-27.
              </p>
              <p className="text-sm text-gray-400">
                For technical support regarding submissions, please contact our conference secretariat at
                <a href="mailto:fitcs.conference@paruluniversity.ac.in" className="text-white hover:underline ml-1 font-semibold drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">fitcs.conference@paruluniversity.ac.in</a>
              </p>
            </Card>

            {/* CTA Section */}
            <Card className="p-8 bg-gray-900/50 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1">
              <div className="text-center space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-yellow-100 mb-2 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]">Ready to Submit?</h2>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    We look forward to receiving your high-quality research contributions.
                    Submit your papers before the deadline and join us in advancing sustainable agriculture and food systems.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition-all"
                    onClick={() => window.location.href = 'mailto:fitcs.conference@paruluniversity.ac.in?subject=Poster Submission'}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Your Paper
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-gray-300 bg-transparent hover:bg-white hover:text-black transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </div>
                <p className="text-sm text-gray-400">
                  Email: <a href="mailto:fitcs.conference@paruluniversity.ac.in" className="text-white hover:underline font-semibold drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">fitcs.conference@paruluniversity.ac.in</a>
                </p>
              </div>
            </Card>

            {/* Key Benefits Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-2 group">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                    <Award className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="font-semibold text-yellow-100 mb-2 group-hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">Best Paper Award</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    Outstanding papers will receive special recognition and awards
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-2 group">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                    <BookOpen className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="font-semibold text-yellow-100 mb-2 group-hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">Publication</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    Accepted papers published in peer-reviewed proceedings
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-2 group">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                    <Zap className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="font-semibold text-yellow-100 mb-2 group-hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">Fast Review</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    Quick review process with timely notification
                  </p>
                </div>
              </Card>
            </div>

          </div>
        </div >
      </section >
    </div >
  );
};

export default CallForPapersSection;
