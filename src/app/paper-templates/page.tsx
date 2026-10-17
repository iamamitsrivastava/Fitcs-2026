"use client";

import { Download, FileText, CheckCircle, Mail, AlertTriangle } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const PaperTemplatesPage = () => {
  const submissionSteps = [
    "Authors should format the paper according to the aforementioned templates along with author and institution information.",
    "The maximum number of authors in a paper is limited to 6.",
    "The authors should refer to their own past work in the submission as they would any other author's prior work, and should provide all relevant citations. This can be accomplished by referring to their previous work in the third person or by citing publications in general.",
    "To enable for repeatability, algorithms and resources utilized in a study should be explained as thoroughly as feasible. This covers experimental design, empirical analysis, and outcomes. When feasible, authors are highly urged to make their code and data publicly available. Furthermore, authors are highly encouraged to publish the results of their techniques on publicly available datasets.",
    "After satisfying all the above mentioned requirements, author should mail their paper to fitcs.conference@paruluniversity.ac.in.",
    "All manuscripts should be submitted as full papers and are reviewed based on their scientific merit. There is no separate abstract submission step. There are no separate industrial, application, short paper or poster tracks during submission."
  ];

  // Download function for Word template
  const downloadWordTemplate = () => {
    // Create a link to local Word template
    const link = document.createElement('a');
    link.href = '/templates/Conference-template-A4.doc';
    link.download = 'IEEE_Conference_Template_Word.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Download function for LaTeX template
  const downloadLatexTemplate = () => {
    // Create a link to local LaTeX template
    const link = document.createElement('a');
    link.href = '/templates/conference-latex-template.zip';
    link.download = 'IEEE_Conference_Template_LaTeX.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Fallback function to open IEEE templates page
  //   const openIEEETemplates = () => {
  //     window.open('https://www.ieee.org/conferences/publishing/templates.html', '_blank');
  //   };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-16 mt-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Paper Submission Guidelines
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Complete guide for manuscript preparation and submission to AISCT 2026-27
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <Card className="p-8 mb-8 border-red-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Call for Papers</h2>
                <p className="text-gray-700 leading-relaxed">
                  Authors are invited to submit original papers, which have not been published elsewhere and are not currently under consideration for another journal, conference or workshop.
                </p>
              </div>
            </div>
          </Card>

          {/* Submission Email */}
          <Card className="p-6 mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Submit full manuscript via Email</h3>
                <p className="text-red-600 font-semibold text-lg">fitcs.conference@paruluniversity.ac.in</p>
              </div>
            </div>
          </Card>

          {/* Steps for Paper Submission */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Steps for Paper Submission
            </h2>
            <div className="space-y-4">
              {submissionSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:border-red-200 transition-colors">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Paper Templates */}
          <Card className="p-8 mb-8 border-blue-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Download className="w-6 h-6 text-blue-600" />
              Paper Templates
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 border-2 border-dashed border-blue-200 rounded-lg hover:border-blue-400 transition-colors">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">MS Word Template</h3>
                  <p className="text-gray-600 text-sm mb-4">IEEE format template for Microsoft Word</p>
                  <Button
                    onClick={downloadWordTemplate}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Word Template
                  </Button>
                </div>
              </div>

              <div className="p-6 border-2 border-dashed border-green-200 rounded-lg hover:border-green-400 transition-colors">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">LaTeX Template</h3>
                  <p className="text-gray-600 text-sm mb-4">IEEE format template for LaTeX</p>
                  <Button
                    onClick={downloadLatexTemplate}
                    className="w-full bg-green-600 hover:bg-green-700"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download LaTeX Template
                  </Button>
                </div>
              </div>
            </div>

            {/* <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-center">
                <p className="text-gray-700 mb-3">
                  <strong>Alternative: Visit IEEE Official Templates Page</strong>
                </p>
                <Button 
                  onClick={openIEEETemplates}
                  variant="outline" 
                  className="mb-3 border-gray-400 hover:bg-gray-100"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  IEEE Conference Publishing Templates
                </Button>
                <p className="text-sm text-gray-600">
                  <Link 
                    href="https://www.ieee.org/conferences/publishing/templates.html" 
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    https://www.ieee.org/conferences/publishing/templates.html
                  </Link>
                </p>
              </div>
            </div> */}
          </Card>

          {/* Conference Publication Ethics */}
          <Card className="p-8 border-orange-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              Conference Publication Ethics
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                All articles submitted will be subjected to a &quot;similarity/plagiarism test.&quot; Papers with a high similarity score/plagiarism will be scrutinized, and those judged too similar will be rejected without a formal review. We also anticipate reporting such unsatisfactory contributions to each of the writers&apos; superiors.
              </p>
              <p className="leading-relaxed">
                Submission of papers to AISCT 2026-27 indicates an implied agreement that one or more of the stated authors will register for, attend, and deliver the work at the conference. Papers that are not delivered during the conference will not be included in either the final program or the digital proceedings. As a result, writers are strongly advised to plan ahead of time before submitting a paper.
              </p>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-black hover:shadow-lg cursor-pointer">
                <a
                  href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICICDSE2027"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Submit Your Paper
                </a>
              </Button>
              <Link href="/">
                <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperTemplatesPage;