"use client";

import React from "react";
import {
  Eye, Lock, Mic, Monitor, Download, Trophy,
  Users, BookOpen, ShieldCheck, FileText,
  AlertCircle, Copy, PenTool, Book, Mail, ChevronRight, Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CallForAbstract = () => {
  const downloadFile = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/documents/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0f1c] text-white py-24 font-sans">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#facc15] mb-8 font-serif">
            Call for Abstract
          </h1>
          <div className="bg-[#151b2b] border-l-4 border-[#facc15] p-6 md:p-10 rounded-r-lg text-left shadow-lg">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
              The Scientific Committee warmly invites researchers, academicians, industry experts, innovators, postgraduate students, and practitioners to submit original research abstracts for Oral and Poster Presentations at the conference.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
              Abstracts covering Artificial Intelligence, Smart Computing, Cybersecurity, Data Science, Cloud Computing, Internet of Things (IoT), Quantum Technologies, Software Engineering, Digital Business Transformation, and related areas of Computer Science and Information Technology, aligned with the conference themes and sub-themes, are encouraged. Selected abstracts will be presented during the scientific sessions, and outstanding oral and poster presentations will be honored with awards.
            </p>
          </div>
        </div>

        {/* 1. SUBMISSION GUIDELINES */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-wide mb-4">
              <span className="text-white">SUBMISSION </span>
              <span className="text-[#facc15]">GUIDELINES</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
              Please ensure that your manuscript complies with the conference requirements before submission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Author Instructions Card */}
            <div className="bg-[#151b2b] p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-6 font-serif">Author Instructions</h3>
              <ul className="space-y-4 text-gray-300 flex-1 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-[#facc15] mr-3 mt-1">•</span>
                  <span>Use the IEEE conference paper format.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#facc15] mr-3 mt-1">•</span>
                  <span>Paper length: 6 pages in standard IEEE format.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#facc15] mr-3 mt-1">•</span>
                  <span>Paper Format <a href="#" className="text-[#3b82f6] font-semibold hover:underline">Word and LaTex Templates</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#facc15] mr-3 mt-1">•</span>
                  <span><strong>LaTeX</strong> is the preferred submission format due to its compatibility with the publication workflow and its ability to facilitate faster processing.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#facc15] mr-3 mt-1">•</span>
                  <span>Submit only original and unpublished work.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#facc15] mr-3 mt-1">•</span>
                  <span>No simultaneous submissions elsewhere.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#facc15] mr-3 mt-1">•</span>
                  <span>Double-blind peer review applies.</span>
                </li>
              </ul>
            </div>

            {/* Submission Portal Card */}
            <div className="bg-[#151b2b] p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-6 font-serif">Submission Portal</h3>
              
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                The conference management system link is currently marked as <strong>CMT by Microsoft.</strong>
              </p>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>

              <div className="flex-1" />

              <div>
                <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICICDSE2027" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button className="bg-[#cca300] hover:bg-[#cca300]/90 text-black font-bold rounded-full px-8 py-6 text-base">
                    Submission Link
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <Button className="bg-[#cca300] hover:bg-[#cca300]/90 text-black font-bold uppercase rounded-none px-8 py-6 text-lg shadow-[0_0_15px_rgba(250,204,21,0.3)] w-full md:w-auto" onClick={() => downloadFile('author-guidelines.pdf')}>
            <Download className="w-5 h-5 mr-3" /> DOWNLOAD AUTHOR GUIDELINES
          </Button>
        </div>

        {/* 2. DOWNLOAD ABSTRACT FORMAT */}
        <div className="mb-20">
          <Card className="p-8 md:p-12 bg-gray-900/50 border border-gray-800 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-gray-600">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#facc15] mb-4 font-serif">Download Abstract Format</h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Start by downloading our abstract format to prepare your submission. This will help ensure your paper meets all requirements.
                </p>
              </div>
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold px-8 shadow-lg w-full md:w-auto" onClick={() => downloadFile('abstract-format.pdf')}>
                <Download className="w-5 h-5 mr-2" />
                Download Format
              </Button>
            </div>
          </Card>
        </div>

        {/* 3 & 4. MANUSCRIPT REQUIREMENTS & REFERENCES */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-wide">
              <span className="text-white">MANUSCRIPT </span>
              <span className="text-[#facc15]">REQUIREMENTS</span>
            </h2>
          </div>

          <div className="space-y-8">
            {/* Paper Submission Guidelines */}
            <div className="bg-[#151b2b] border border-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded bg-[#1e273c] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-yellow-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white font-serif">Paper Submission Guidelines</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                The conference proceedings editors ensure a peer review process and ethical policies and standards to ensure high-quality scientific works are added to the field of scholarly publication.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  "Any potential conflict of interest involving the author(s) should be disclosed in the paper prior to submission.",
                  "Authors must accurately present their research findings and provide an objective discussion of the significance of their results.",
                  "Sufficient details about the research methodology and data used in the study must be included in the paper.",
                  "Submitting manuscripts to multiple conference proceedings or journals simultaneously is not allowed.",
                  "Republishing non-novel content is prohibited.",
                  "If errors or inaccuracies are discovered by the authors after their paper has been published, they must inform the conference editors immediately so that appropriate actions can be taken."
                ].map((item, i) => (
                  <div key={i} className="bg-[#10141f] border border-gray-800 rounded p-4 flex gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#10141f] border border-gray-800 rounded p-5 mb-6">
                <p className="text-gray-300 text-sm md:text-base font-medium">
                  Plagiarism, data fabrication, and image manipulation are strictly prohibited. Any manuscript found to be involved in such violations will be immediately rejected, and any future manuscripts submitted by the same authors will be rejected for a period of two years.
                </p>
              </div>
              <div className="border border-blue-900/50 bg-[#101930] rounded-lg p-5 flex gap-4 items-start">
                <Mail className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm md:text-base">
                  For complaints or concerns regarding published articles, contact us at <a href="mailto:fitcs.conference@paruluniversity.ac.in" className="text-blue-400 hover:underline">fitcs.conference@paruluniversity.ac.in</a>. We will acknowledge your email and provide an estimated timeframe for investigating your concerns.
                </p>
              </div>
            </div>


            {/* Other Guidelines (Authorship, Peer-Review, Policy, Plagiarism, Copyright) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#151b2b] border border-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded bg-[#1e273c] flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-serif">Authors & Their Responsibilities</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The paper must be an original, unpublished work written in English. The submitted paper should not have been published before or be under consideration for publication elsewhere. All authors must have made substantial contributions to the scientific work and share collective responsibility.
                </p>
              </div>

              <div className="bg-[#151b2b] border border-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded bg-[#1e273c] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-serif">Peer-Review Process</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All submitted papers undergo a double blind peer-review process. Reviewers evaluate the paper and recommend to accept it in its current form, with minor/major corrections, or to reject it. Papers not following the ethical policy are rejected before peer-review.
                </p>
              </div>

              <div className="bg-[#151b2b] border border-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded bg-[#1e273c] flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-serif">Policy on Retraction & Correction</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Maintaining the integrity of the literature is of utmost importance. Corrections to published works will be made based on the situation. If plagiarism is discovered, the entire article will be removed from the conference proceedings.
                </p>
              </div>

              <div className="bg-[#151b2b] border border-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded bg-[#1e273c] flex items-center justify-center">
                    <Copy className="w-5 h-5 text-teal-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-serif">Originality & Plagiarism</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Authors should ensure entirely original works, and properly cite others. Plagiarism takes many forms and is unacceptable. Manuscripts must have a plagiarism similarity index of not more than 10%, and AI-generated content is strictly prohibited.
                </p>
              </div>
            </div>

            <div className="bg-[#151b2b] border border-gray-800 rounded-lg p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-16 h-16 rounded bg-[#1e273c] flex items-center justify-center flex-shrink-0">
                <Book className="w-8 h-8 text-gray-300" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-white font-serif mb-2">Copyright & Accessibility</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  The conference proceedings offers access to the contents in the open access system on the principles of non-exclusive license Creative Commons.
                </p>
                <Button className="bg-[#cca300] hover:bg-[#cca300]/90 text-black font-bold rounded">
                  <Download className="w-4 h-4 mr-2" /> Download Copyright Declaration Form
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 5. CONFERENCE MANAGEMENT SYSTEM */}
        <div className="mb-20">
          <Card className="p-8 md:p-12 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-[#facc15] mb-6 font-serif">Conference Management System</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              We acknowledge the support of Microsoft for providing the CMT (Conference Management Toolkit) service,
              which streamlines our paper submission, abstract management, and publication workflow.
              The CMT platform ensures secure, transparent, and efficient management of the submission process for AISCT 2026-27.
            </p>
            <div className="bg-[#10141f] border border-gray-800 rounded p-6">
              <p className="text-sm md:text-base text-gray-300">
                For technical support regarding submissions, please contact our conference secretariat at <a href="mailto:fitcs.conference@paruluniversity.ac.in" className="text-blue-400 hover:underline font-semibold ml-1">fitcs.conference@paruluniversity.ac.in</a>
              </p>
            </div>
          </Card>
        </div>

        {/* 6. READY TO SUBMIT */}
        <div className="mb-10">
          <Card className="p-8 md:p-12 bg-[#151b2b] border border-[#facc15]/30 shadow-[0_0_20px_rgba(250,204,21,0.1)] backdrop-blur-sm text-center transition-all duration-300 hover:border-[#facc15]/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#facc15] mb-4 font-serif">Ready to Submit?</h2>
            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
              We look forward to receiving your high-quality research contributions.
              Submit your papers before the deadline and join us in advancing sustainable agriculture and food systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button size="lg" className="bg-[#cca300] hover:bg-[#cca300]/90 text-black font-bold uppercase rounded px-8 py-6 text-lg w-full sm:w-auto" onClick={() => window.location.href = 'mailto:fitcs.conference@paruluniversity.ac.in?subject=Abstract Submission'}>
                <Send className="w-5 h-5 mr-2" />
                Submit Your Paper
              </Button>
              <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 bg-transparent hover:bg-white hover:text-black transition-colors rounded px-8 py-6 text-lg w-full sm:w-auto">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              Email: <a href="mailto:fitcs.conference@paruluniversity.ac.in" className="text-[#facc15] hover:underline font-semibold">fitcs.conference@paruluniversity.ac.in</a>
            </p>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default CallForAbstract;
