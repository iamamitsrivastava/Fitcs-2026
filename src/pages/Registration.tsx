"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Copy,
  CreditCard,
  Download,
  ExternalLink,
  FileText,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  User,
  Building,
  Check,
  Globe,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface FeeTier {
  category: string;
  type: string;
  amount: string;
  currency: "INR" | "USD";
  deadline?: string;
}

const feeData = [
  {
    category: "Research Scholar (MCA / M.Sc. / M.Tech. / Ph.D.)",
    delegates: "1500 INR",
    earlyBird: "2000 INR",
    regular: "2500 INR",
    currency: "INR" as const,
  },
  {
    category: "Academicians",
    delegates: "2000 INR",
    earlyBird: "2500 INR",
    regular: "3000 INR",
    currency: "INR" as const,
  },
  {
    category: "Industry",
    delegates: "2500 INR",
    earlyBird: "3000 INR",
    regular: "3500 INR",
    currency: "INR" as const,
  },
  {
    category: "Foreign Student",
    delegates: "25 USD",
    earlyBird: "50 USD",
    regular: "75 USD",
    currency: "USD" as const,
  },
  {
    category: "Foreign Delegates",
    delegates: "50 USD",
    earlyBird: "100 USD",
    regular: "125 USD",
    currency: "USD" as const,
  },
];

const keyDatesList = [
  {
    title: "Abstract Submission Deadline",
    date: "30th October 2026",
    sub: "Submission via Microsoft CMT",
  },
  {
    title: "Notification of Abstract Acceptance",
    date: "06th November 2026",
    sub: "Direct notification via email",
  },
  {
    title: "Full Length Paper Submission",
    date: "04th January 2027",
    sub: "Camera-ready manuscript submission",
  },
  {
    title: "Acceptance Notification",
    date: "20th January 2027",
    sub: "Final acceptance status",
  },
  {
    title: "Conference Registration",
    date: "28th January 2027",
    sub: "Final registration date",
  },
  {
    title: "Conference Date",
    date: "06th February 2027",
    sub: "Parul University, Vadodara, India",
  },
];

const bankDetails = {
  bankName: "HDFC Bank",
  accountName: "R & D Centre Unit of PU",
  accountNo: "50100269520370",
  ifscCode: "HDFC0009277",
  branch: "Sangam Char Rasta, Vadodara",
  micrCode: "390240031",
};

const Registration = () => {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<FeeTier>({
    category: "Research Scholar (MCA / M.Sc. / M.Tech. / Ph.D.)",
    type: "Contributor - Early Bird",
    amount: "2000 INR",
    currency: "INR",
    deadline: "15/12/2026",
  });

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    country: "India",
    paperId: "",
    paperTitle: "",
    transactionId: "",
    paymentDate: new Date().toISOString().split("T")[0],
    participationMode: "In-Person",
  });

  // UI state
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleOpenRegister = (
    category: string,
    type: string,
    amount: string,
    currency: "INR" | "USD",
    deadline?: string
  ) => {
    setSelectedTier({
      category,
      type,
      amount,
      currency,
      deadline,
    });
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate registration processing
    setTimeout(() => {
      const randomRef =
        "FITCS-" + Math.floor(100000 + Math.random() * 900000).toString();
      setReferenceId(randomRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const isContributor = selectedTier.type.toLowerCase().includes("contributor");

  return (
    <div className="min-h-screen bg-[#070b14] text-white pt-28 md:pt-32 pb-24 font-sans selection:bg-[#facc15] selection:text-black">
      {/* Background Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#facc15]/5 rounded-full blur-[140px]" />
        <div className="absolute top-2/3 right-10 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#facc15]/10 border border-[#facc15]/30 text-[#facc15] text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
            <Sparkles className="w-4 h-4" />
            FITCS 2026-27 Conference Registration
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight font-serif drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            Registration <span className="text-[#facc15] drop-shadow-[0_0_25px_rgba(250,204,21,0.5)]">Fees</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Register for the 1st International Conference on Future Innovations in Technology and Computer Science.
            Review the fee structure below and click any category to initiate your registration.
          </p>
        </div>

        {/* Key Dates Banner */}
        <div className="mb-14 bg-[#0d1424] border border-[#facc15]/20 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#facc15]/10 text-[#facc15] border border-[#facc15]/30">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white">Important Registration Deadlines</h3>
                <p className="text-xs text-gray-400">Mark your calendar to ensure early bird benefits</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#facc15] bg-[#facc15]/10 px-3 py-1.5 rounded-full border border-[#facc15]/30">
              <Clock className="w-4 h-4 animate-pulse" />
              Early Bird Active
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
            {keyDatesList.map((item, idx) => (
              <div
                key={idx}
                className="group p-3.5 rounded-xl transition-all duration-300 flex flex-col justify-between bg-[#11192d] border border-gray-800/80 hover:border-[#facc15] hover:shadow-[0_0_20px_rgba(250,204,21,0.25)] hover:bg-[#151f36] hover:scale-[1.02] cursor-pointer"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-300 transition-colors block mb-1">
                    {item.title}
                  </span>
                  <p className="text-sm sm:text-[15px] font-bold text-white group-hover:text-[#facc15] transition-colors mb-1">
                    {item.date}
                  </p>
                </div>
                <p className="text-[10px] text-gray-400 group-hover:text-gray-300 transition-colors leading-tight mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Fees - FITCS Main Card */}
        <div className="bg-[#0b1120] border-2 border-[#facc15]/30 rounded-2xl shadow-[0_0_40px_rgba(250,204,21,0.1)] overflow-hidden mb-16">
          {/* Card Header */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-[#0d162b] via-[#141e38] to-[#0d162b] border-b border-[#facc15]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-[#facc15] uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4 text-[#facc15]" />
                Official Fee Schedule
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-serif">
                Registration Fees – <span className="text-[#facc15]">FITCS</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
              <AlertCircle className="w-4 h-4 text-[#facc15] flex-shrink-0" />
              <span>Click on any fee below to register</span>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[780px]">
              <thead>
                {/* Row 1 Header */}
                <tr className="bg-[#121c33] text-white border-b border-[#facc15]/30">
                  <th
                    rowSpan={2}
                    className="p-5 text-left font-bold text-sm md:text-base uppercase tracking-wider w-[34%] border-r border-gray-800 text-yellow-300 align-middle bg-[#121c33]"
                  >
                    Category – FITCS
                  </th>
                  <th
                    rowSpan={2}
                    className="p-5 text-center font-bold text-sm md:text-base uppercase tracking-wider w-[22%] border-r border-gray-800 text-yellow-300 align-middle bg-[#14203b]"
                  >
                    Delegates
                    <span className="block text-xs font-medium text-gray-400 normal-case tracking-normal mt-0.5">
                      (Only Attending)
                    </span>
                  </th>
                  <th
                    colSpan={2}
                    className="p-4 text-center font-bold text-sm md:text-base uppercase tracking-wider border-b border-gray-800 text-yellow-300 bg-[#162342]"
                  >
                    Contributor
                    <span className="block text-xs font-medium text-yellow-200 normal-case tracking-normal">
                      (Presenting Paper)
                    </span>
                  </th>
                </tr>

                {/* Row 2 Header (Contributor Sub-headers) */}
                <tr className="bg-[#0f182e] text-white border-b-2 border-[#facc15]/40 text-xs">
                  <th className="p-3.5 text-center font-bold uppercase tracking-wider w-[22%] border-r border-gray-800 bg-[#14213d] text-yellow-100">
                    <div>Early Bird Registration</div>
                    <div className="text-[11px] text-[#facc15] font-semibold mt-0.5">
                      (Last Date: 15/12/2026)
                    </div>
                  </th>
                  <th className="p-3.5 text-center font-bold uppercase tracking-wider w-[22%] bg-[#121c33] text-gray-200">
                    <div>Regular Registration</div>
                    <div className="text-[11px] text-gray-400 font-medium mt-0.5">
                      (Last Date: 15/01/2027)
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-800/80 text-sm">
                {feeData.map((row, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <tr
                      key={index}
                      className={`transition-colors duration-200 ${
                        isEven ? "bg-[#0b1120]" : "bg-[#0e1629]"
                      } hover:bg-[#15213d]`}
                    >
                      {/* Category Title */}
                      <td className="p-5 font-semibold text-white border-r border-gray-800/80 align-middle">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#facc15]" />
                          <span>{row.category}</span>
                        </div>
                      </td>

                      {/* Delegates (Only Attending) */}
                      <td className="p-4 text-center border-r border-gray-800/80 align-middle">
                        <button
                          onClick={() =>
                            handleOpenRegister(
                              row.category,
                              "Delegates (Only Attending)",
                              row.delegates,
                              row.currency
                            )
                          }
                          className="group relative inline-flex items-center justify-center gap-1.5 w-full max-w-[170px] mx-auto py-2.5 px-4 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 hover:border-yellow-400/60 shadow-sm transition-all duration-200 hover:scale-[1.03] active:scale-95"
                        >
                          <span>{row.delegates}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#facc15]" />
                        </button>
                      </td>

                      {/* Contributor: Early Bird */}
                      <td className="p-4 text-center border-r border-gray-800/80 align-middle bg-[#facc15]/[0.02]">
                        <button
                          onClick={() =>
                            handleOpenRegister(
                              row.category,
                              "Contributor - Early Bird",
                              row.earlyBird,
                              row.currency,
                              "15/12/2026"
                            )
                          }
                          className="group relative inline-flex items-center justify-center gap-1.5 w-full max-w-[170px] mx-auto py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#facc15] to-[#eab308] hover:from-[#eab308] hover:to-[#ca8a04] text-black font-extrabold text-sm shadow-[0_0_15px_rgba(250,204,21,0.25)] hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-200 hover:scale-[1.03] active:scale-95"
                        >
                          <span>{row.earlyBird}</span>
                          <Sparkles className="w-3.5 h-3.5 text-black" />
                        </button>
                      </td>

                      {/* Contributor: Regular */}
                      <td className="p-4 text-center align-middle">
                        <button
                          onClick={() =>
                            handleOpenRegister(
                              row.category,
                              "Contributor - Regular",
                              row.regular,
                              row.currency,
                              "15/01/2027"
                            )
                          }
                          className="group relative inline-flex items-center justify-center gap-1.5 w-full max-w-[170px] mx-auto py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 hover:border-yellow-400/80 shadow-sm transition-all duration-200 hover:scale-[1.03] active:scale-95"
                        >
                          <span>{row.regular}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#facc15]" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer Instructions */}
          <div className="p-4 md:p-6 bg-[#0d1424] border-t border-gray-800 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#facc15]" />
              <span>
                All amounts are inclusive of conference kit, technical session entry, certificates, lunch, and refreshments.
              </span>
            </div>
            <div className="text-gray-300">
              Need assistance? Email:{" "}
              <a
                href="mailto:fitcs.conference@paruluniversity.ac.in"
                className="text-[#facc15] font-semibold hover:underline"
              >
                fitcs.conference@paruluniversity.ac.in
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Publishers Section */}
      <section className="py-16 bg-[#050814] relative border-t border-slate-800/80">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-sm md:text-base font-semibold tracking-[0.3em] text-yellow-400 uppercase mb-3">
            PUBLISHERS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Our <span className="text-yellow-300 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]">Publishing Partners</span>
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 w-full max-w-4xl mx-auto">
            <div className="bg-white p-3 md:p-5 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-shadow duration-300 w-full flex items-center justify-center group overflow-hidden">
              <img
                src="/assets/publishers/image.png"
                alt="Publishers Indexing"
                className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Working Registration Dialog Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl bg-[#0b1222] border-2 border-[#facc15]/40 text-white shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
          <DialogHeader className="border-b border-gray-800 pb-4 text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-[#facc15] uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              Conference Registration Portal
            </div>
            <DialogTitle className="text-2xl font-bold font-serif text-white">
              {isSubmitted ? "Registration Successful!" : "Complete Your Registration"}
            </DialogTitle>
            <DialogDescription className="text-xs text-gray-400">
              {isSubmitted
                ? "Your registration request has been successfully submitted."
                : "Fill in the details below to finalize your registration for FITCS 2026-27."}
            </DialogDescription>
          </DialogHeader>

          {isSubmitted ? (
            /* Success Confirmation Screen */
            <div className="py-6 space-y-6 text-center">
              <div className="w-16 h-16 bg-green-500/10 border-2 border-green-500 text-green-400 rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1">Thank you, {formData.fullName}!</h3>
                <p className="text-sm text-gray-300">
                  Your registration details and payment acknowledgment have been received.
                </p>
              </div>

              {/* Reference ID Box */}
              <div className="bg-[#121c33] border border-[#facc15]/30 rounded-xl p-4 max-w-md mx-auto text-center">
                <span className="text-xs text-gray-400 block mb-1">Registration Reference ID</span>
                <span className="text-xl font-mono font-bold text-[#facc15] tracking-wider">
                  {referenceId}
                </span>
              </div>

              {/* Summary Details */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between py-1 border-b border-gray-800">
                  <span className="text-gray-400">Category:</span>
                  <span className="font-semibold text-white">{selectedTier.category}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-800">
                  <span className="text-gray-400">Type:</span>
                  <span className="font-semibold text-yellow-300">{selectedTier.type}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-800">
                  <span className="text-gray-400">Amount Paid:</span>
                  <span className="font-bold text-green-400">{selectedTier.amount}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-800">
                  <span className="text-gray-400">Transaction ID:</span>
                  <span className="font-mono text-white">{formData.transactionId || "N/A"}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">Confirmation Sent To:</span>
                  <span className="text-white font-medium">{formData.email}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Button
                  onClick={() => window.print()}
                  variant="outline"
                  className="border-gray-600 text-gray-200 hover:bg-white hover:text-black rounded-lg"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Print / Save Receipt
                </Button>
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#facc15] hover:bg-[#eab308] text-black font-bold rounded-lg"
                >
                  Done
                </Button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-6 pt-2">
              {/* Selected Tier Banner */}
              <div className="bg-gradient-to-r from-[#14213d] to-[#0f182e] border border-[#facc15]/30 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <span className="text-[11px] text-[#facc15] font-bold uppercase tracking-wider block">
                    Selected Category & Tier
                  </span>
                  <h4 className="text-sm md:text-base font-bold text-white">{selectedTier.category}</h4>
                  <p className="text-xs text-gray-400">{selectedTier.type}</p>
                </div>
                <div className="bg-[#facc15] text-black font-extrabold text-base md:text-lg px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                  {selectedTier.amount}
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5 border-b border-gray-800 pb-1.5">
                  <User className="w-3.5 h-3.5 text-[#facc15]" />
                  Participant Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Dr. Amit Sharma"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-[#121c33] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#facc15]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@university.edu"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#121c33] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#facc15]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#121c33] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#facc15]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Affiliation / Institute / University *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      required
                      placeholder="e.g. Parul University"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full bg-[#121c33] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#facc15]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-[#121c33] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#facc15]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Participation Mode
                    </label>
                    <select
                      name="participationMode"
                      value={formData.participationMode}
                      onChange={handleInputChange}
                      className="w-full bg-[#121c33] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#facc15]"
                    >
                      <option value="In-Person">In-Person (On Campus)</option>
                      <option value="Virtual">Virtual / Online (For Foreign Authors)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Paper Details if Contributor */}
              {isContributor && (
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5 border-b border-gray-800 pb-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#facc15]" />
                    Paper Information (Microsoft CMT)
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        CMT Paper ID *
                      </label>
                      <input
                        type="text"
                        name="paperId"
                        required={isContributor}
                        placeholder="e.g. FITCS-108"
                        value={formData.paperId}
                        onChange={handleInputChange}
                        className="w-full bg-[#121c33] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#facc15]"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        Accepted Paper Title *
                      </label>
                      <input
                        type="text"
                        name="paperTitle"
                        required={isContributor}
                        placeholder="Full title of accepted manuscript"
                        value={formData.paperTitle}
                        onChange={handleInputChange}
                        className="w-full bg-[#121c33] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#facc15]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Verification Information */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5 border-b border-gray-800 pb-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-[#facc15]" />
                  Payment Verification (Transfer Details)
                </h4>

                <div className="bg-[#121c33] border border-gray-800 rounded-xl p-3.5 text-xs text-gray-300 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Beneficiary:</span>
                    <span className="font-semibold text-white">{bankDetails.accountName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">A/C No:</span>
                    <span className="font-mono font-bold text-yellow-300">{bankDetails.accountNo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">IFSC Code:</span>
                    <span className="font-mono font-bold text-yellow-300">{bankDetails.ifscCode}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Transaction ID / UTR / Reference No. *
                    </label>
                    <input
                      type="text"
                      name="transactionId"
                      required
                      placeholder="e.g. 427819827364"
                      value={formData.transactionId}
                      onChange={handleInputChange}
                      className="w-full bg-[#121c33] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#facc15]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Payment Date *
                    </label>
                    <input
                      type="date"
                      name="paymentDate"
                      required
                      value={formData.paymentDate}
                      onChange={handleInputChange}
                      className="w-full bg-[#121c33] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#facc15]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#facc15] hover:bg-[#eab308] text-black font-extrabold py-6 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Processing Registration...
                    </>
                  ) : (
                    <>
                      <Check className="w-5 h-5" />
                      Submit & Confirm Registration
                    </>
                  )}
                </Button>
                <p className="text-[11px] text-gray-400 text-center mt-2">
                  Upon submission, our secretariat will verify the transaction and issue your formal receipt.
                </p>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Registration;