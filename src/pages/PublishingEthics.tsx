"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Users,
  FileText,
  Scale,
  Clipboard,
  CheckCircle,
  Shield,
  Mail,
  Download,
  Copyright,
  AlertCircle,
  Check,
} from "lucide-react";

const PublishingEthics = () => {
  const downloadFile = () => {
    window.open("https://drive.google.com/file/d/1w-_ix3qKmf9bEpXgVuXoJybOZltiHkH_/view?usp=sharing", "_blank");
  };

  const sections = [
    {
      id: "authors-responsibilities",
      title: "Authors and Their Responsibilities",
      icon: Users,
      color: "primary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Original Work Requirements</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Submit only original, previously unpublished research work</li>
              <li>Work must not be submitted simultaneously to other journals or conferences</li>
              <li>All authors must agree on authorship and order before submission</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Peer Review Process</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Accept the peer review process and address reviewer comments constructively</li>
              <li>Provide detailed responses to reviewer feedback</li>
              <li>Be transparent about any limitations in the research methodology</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Co-authorship Limits</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Maximum of 5 co-authors per paper</li>
              <li>All co-authors must have made substantial contributions to the work</li>
              <li>Each co-author must approve the final manuscript</li>
            </ul>
          </div>
        </div>
      ),
    },

    {
      id: "peer-review",
      title: "Peer-Review Process",
      icon: Clipboard,
      color: "primary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Editorial Checks</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Initial manuscript screening for scope and quality</li>
              <li>Verification of formatting compliance</li>
              <li>Check for plagiarism using Turnitin</li>
              <li>Verification that the work is original and not previously published</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Reviewer Evaluation Criteria</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Originality and contribution to the field</li>
              <li>Methodology appropriateness and validity</li>
              <li>Quality of writing and presentation</li>
              <li>Significance and impact of the research</li>
              <li>Accuracy of data and conclusions</li>
              <li>Proper citation of related work</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Review Outcomes</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Accept: Paper accepted as it is</li>
              <li>Accept with minor revisions: Address small issues</li>
              <li>Reject with invitation to resubmit: Major revisions needed</li>
              <li>Reject: Does not meet publication standards</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "publication-ethics",
      title: "Publication Ethics",
      icon: CheckCircle,
      color: "primary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Key Ethical Principles</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Conflict of Interest</p>
                  <p className="text-sm text-muted-foreground">Disclose any financial, professional, or personal relationships that could influence the work</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Research Accuracy</p>
                  <p className="text-sm text-muted-foreground">Ensure all data and claims are accurate, with proper documentation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Methodology</p>
                  <p className="text-sm text-muted-foreground">Use appropriate, valid research methods and clearly document procedures</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Data Integrity</p>
                  <p className="text-sm text-muted-foreground">Do not fabricate, falsify, or manipulate research data or results</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Ethical Review</p>
                  <p className="text-sm text-muted-foreground">Research involving human subjects or animals must have appropriate ethics approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "retraction-policy",
      title: "Policy on Retraction and Correction",
      icon: Shield,
      color: "secondary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Corrections</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Minor errors (spelling, formatting) can be corrected via errata</li>
              <li>Authors should notify the conference immediately upon discovering errors</li>
              <li>Corrections are published in subsequent materials or proceedings</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Retraction Grounds</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Evidence of plagiarism or self-plagiarism</li>
              <li>Fabricated or falsified data</li>
              <li>Serious breach of research ethics</li>
              <li>Duplicate publication without permission</li>
              <li>Major errors that invalidate the findings</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Plagiarism Handling</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Detection: All papers screened with Turnitin similarity index</li>
              <li>Threshold: Similarity index above 20% requires investigation</li>
              <li>Action: Cases of plagiarism result in rejection and possible sanctions</li>
              <li>Appeal: Authors can appeal plagiarism decisions with explanation</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "originality-plagiarism",
      title: "Originality and Plagiarism",
      icon: Check,
      color: "primary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Plagiarism Definition</h4>
            <p className="text-muted-foreground mb-4">
              Plagiarism is the use of someone&apos;s work, ideas, or words without proper attribution. This includes text, data, figures, and code.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Accepted Practices</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Properly cite all sources using APA format</li>
              <li>Use quotation marks for direct quotes</li>
              <li>Paraphrase appropriately with citations</li>
              <li>Use your own words and analysis</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Plagiarism Index Limits</h4>
            <div className="bg-primary/5 p-4 rounded-lg space-y-2">
              <p className="text-muted-foreground">
                <strong>0-10%:</strong> Excellent - minimal similarities
              </p>
              <p className="text-muted-foreground">
                <strong>10-20%:</strong> Good - acceptable similarity (mostly citations)
              </p>
              <p className="text-muted-foreground">
                <strong>20-30%:</strong> Caution - requires review
              </p>
              <p className="text-muted-foreground">
                <strong>&gt;30%:</strong> Likely plagiarism - paper rejected
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">AI-Generated Content Policy</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><strong>Prohibited:</strong> Using AI to generate primary research or results</li>
              <li><strong>Prohibited:</strong> Submitting AI-generated text as original work</li>
              <li><strong>Allowed:</strong> Using AI for grammar/language checking</li>
              <li><strong>Required:</strong> Disclose any AI tool usage in acknowledgments</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "authorship",
      title: "Authorship of the Paper",
      icon: Users,
      color: "secondary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Authorship Criteria</h4>
            <p className="text-muted-foreground mb-4">
              An author must have made substantial contributions to at least two of the following:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Conception and design of the research</li>
              <li>Acquisition of data</li>
              <li>Analysis and interpretation of data</li>
              <li>Drafting or critical review of the manuscript</li>
              <li>Final approval and accountability for the work</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Corresponding Author Responsibilities</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Ensure all co-authors have approved the final manuscript</li>
              <li>Handle communication with the editorial team</li>
              <li>Respond to reviewer comments and queries</li>
              <li>Ensure authorship information is accurate</li>
              <li>Declare any conflicts of interest</li>
              <li>Provide contact information for inquiries</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Acknowledging Contributions</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Non-author contributors should be listed in the Acknowledgments section</li>
              <li>Technical assistants, funding sources, and consultants should be recognized</li>
              <li>Funding sources must be disclosed</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "copyright",
      title: "Copyright and Accessibility",
      icon: Copyright,
      color: "primary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Creative Commons License</h4>
            <p className="text-muted-foreground mb-4">
              All published papers in AISCT 2026-27 proceedings are released under the Creative Commons Attribution License (CC BY 4.0).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">License Terms</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><strong>CC BY 4.0:</strong> You are free to share and adapt the work, with proper attribution</li>
              <li>Others can use your work for commercial purposes</li>
              <li>Credit and license information must be included when reused</li>
              <li>Works must be in a human and machine-readable format</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Copyright Assignment</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>By submitting, authors retain copyright of their work</li>
              <li>AISCT 2026-27 receives perpetual license for publication</li>
              <li>Authors may reuse their work in future publications with proper attribution</li>
              <li>Copyright holder remains the author unless otherwise agreed</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Accessibility</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Papers should be formatted to be accessible to people with disabilities</li>
              <li>Use descriptive alt text for figures and tables</li>
              <li>Ensure sufficient color contrast in visualizations</li>
              <li>Provide structured headings and readable formatting</li>
            </ul>
          </div>
        </div>
      ),
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
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Download Author Guidelines Button */}
            <Card className="p-8 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1">
              <div className="flex items-center justify-between flex-col sm:flex-row gap-6">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-yellow-100 mb-2 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Author Guidelines & Policies</h2>
                  <p className="text-gray-300">
                    Download our comprehensive author guidelines to ensure your submission meets all requirements and ethical standards.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition-all flex-shrink-0"
                  onClick={downloadFile}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Guidelines
                </Button>
              </div>
            </Card>

            {/* Expandable Sections */}
            <Card className="p-8 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1">
              <h2 className="text-3xl font-bold text-yellow-100 mb-8 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Publishing Requirements</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <AccordionItem key={section.id} value={section.id} className="border border-gray-700 bg-gray-800/30 rounded-lg px-4 data-[state=open]:bg-gray-800/60 transition-colors">
                      <AccordionTrigger className="hover:no-underline py-4 text-white hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                        <div className="flex items-center space-x-3 text-left">
                          <div className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] group`}>
                            <Icon className={`w-5 h-5 text-white group-hover:text-black transition-colors`} />
                          </div>
                          <span className="font-semibold text-base">{section.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4">
                        <div className="ml-12 text-gray-300">
                          {section.content}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </Card>

            {/* Key Ethics Principles - Dark Card */}
            <Card className="p-8 bg-gray-900/50 border border-gray-700 backdrop-blur-sm transition-all duration-300 hover:border-gray-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-1 text-white">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] group">
                  <AlertCircle className="w-6 h-6 text-yellow-400 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Key Ethics Commitments</h2>
                  <p className="text-gray-300">
                    AISCT 2026-27 is committed to the highest standards of research ethics and integrity.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 transition-all hover:translate-x-1">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]" />
                    <div>
                      <p className="font-semibold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Original Research</p>
                      <p className="text-sm text-gray-400">Only unpublished original work is accepted</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 transition-all hover:translate-x-1">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]" />
                    <div>
                      <p className="font-semibold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Ethical Conduct</p>
                      <p className="text-sm text-gray-400">All research must follow ethical guidelines</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 transition-all hover:translate-x-1">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]" />
                    <div>
                      <p className="font-semibold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Peer Review</p>
                      <p className="text-sm text-gray-400">Fair and rigorous peer review process</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 transition-all hover:translate-x-1">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]" />
                    <div>
                      <p className="font-semibold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Transparency</p>
                      <p className="text-sm text-gray-400">Clear disclosure of funding and conflicts</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 transition-all hover:translate-x-1">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]" />
                    <div>
                      <p className="font-semibold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Accountability</p>
                      <p className="text-sm text-gray-400">Authors accountable for research accuracy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 transition-all hover:translate-x-1">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]" />
                    <div>
                      <p className="font-semibold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Open Access</p>
                      <p className="text-sm text-gray-400">Published works available under CC BY 4.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
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
                      <a href="mailto:aisct@paruluniversity.ac.in" className="text-white hover:underline ml-2 font-semibold drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
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
