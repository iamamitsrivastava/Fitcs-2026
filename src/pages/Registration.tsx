import React from "react";
import { AlertCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Registration = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-32 font-sans flex flex-col">
      <div className="container mx-auto px-4 max-w-6xl pb-24 flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0a192f] text-center mb-12 font-serif">
          Registration
        </h1>

        {/* Key Dates Section */}
        <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 mb-16 border border-gray-100">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-2xl font-bold text-[#0a192f] mb-2 font-serif">Key Dates</h2>
            <div className="w-16 h-0.5 bg-[#cca300]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f8f9fa] rounded-lg p-6 text-center border-t-4 border-[#cca300] shadow-sm">
              <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider mb-4 h-10 flex items-center justify-center">
                Early Bird Registration Closing Soon
              </p>
              <p className="text-lg md:text-xl font-bold text-[#0a192f]">15th November</p>
            </div>

            <div className="bg-[#f8f9fa] rounded-lg p-6 text-center border-t-4 border-[#cca300] shadow-sm">
              <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider mb-4 h-10 flex items-center justify-center">
                Abstract Submission Deadline
              </p>
              <p className="text-lg md:text-xl font-bold text-[#0a192f]">15th September</p>
            </div>

            <div className="bg-[#f8f9fa] rounded-lg p-6 text-center border-t-4 border-[#cca300] shadow-sm">
              <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider mb-4 h-10 flex items-center justify-center">
                Notification For Acceptance (Abstract)
              </p>
              <p className="text-lg md:text-xl font-bold text-[#0a192f]">16th October</p>
            </div>

            <div className="bg-[#f8f9fa] rounded-lg p-6 text-center border-t-4 border-[#cca300] shadow-sm flex flex-col justify-center">
              <div className="mb-4">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                  Pre-Conference Date
                </p>
                <p className="font-bold text-[#0a192f]"></p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                  Conference Date
                </p>
                <p className="font-bold text-[#0a192f]">6th February</p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Fee Structure */}
        <div className="bg-[#0f172a] rounded-xl shadow-2xl overflow-hidden border border-gray-800">
          <div className="p-8 md:p-10 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-serif">
              Registration Fee Structure
            </h2>

            <div className="border border-[#cca300] rounded-full px-6 py-3 flex items-center gap-3 bg-[#cca300]/5 max-w-3xl text-center">
              <AlertCircle className="w-5 h-5 text-[#cca300] flex-shrink-0" />
              <p className="text-gray-300 text-sm font-medium">
                Please click on the respective fee amount below to proceed to the payment portal.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#151b2b] border-y border-gray-700">
                  <th className="p-4 text-center font-bold text-white uppercase text-xs w-[25%] border-r border-gray-700 align-middle">
                    Category
                  </th>
                  <th className="text-center font-bold text-white uppercase text-xs w-[30%] border-r border-gray-700 p-0 align-top">
                    <div className="p-4 border-b border-gray-700 h-16 flex items-center justify-center">
                      Early Bird<br />(Till 15th November)
                    </div>
                    <div className="flex w-full text-[10px] text-gray-400">
                      <div className="w-1/2 p-3 border-r border-gray-700 uppercase tracking-wider">Conference</div>
                      <div className="w-1/2 p-3 uppercase tracking-wider">Pre-Conference</div>
                    </div>
                  </th>
                  <th className="text-center font-bold text-white uppercase text-xs w-[30%] border-r border-gray-700 p-0 align-top opacity-60">
                    <div className="p-4 border-b border-gray-700 h-16 flex flex-col items-center justify-center">
                      <div className="flex items-center gap-1">Late Bird <Lock className="w-3 h-3" /></div>
                      <div>(After 15th November)</div>
                    </div>
                    <div className="flex w-full text-[10px] text-gray-400">
                      <div className="w-1/2 p-3 border-r border-gray-700 uppercase tracking-wider">Conference</div>
                      <div className="w-1/2 p-3 uppercase tracking-wider">Pre-Conference</div>
                    </div>
                  </th>
                  <th className="p-4 text-center font-bold text-white uppercase text-xs w-[15%] align-middle bg-[#1a2235]">
                    <div className="border border-[#cca300] rounded px-2 py-1 text-[#cca300] inline-block mb-1">
                      Spot <Lock className="w-3 h-3 inline pb-0.5" />
                    </div>
                    <div className="text-[9px] text-[#cca300]">137D 12H LEFT</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">

                {/* Row 1 */}
                <tr className="border-b border-gray-800 bg-[#151b2b]/50">
                  <td className="p-5 font-bold text-white text-center border-r border-gray-800">
                    AISCT Member
                  </td>
                  <td className="p-0 border-r border-gray-800 h-full">
                    <div className="flex w-full h-full">
                      <div className="w-1/2 p-4 text-center border-r border-gray-800 flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-100 font-bold border-none rounded shadow-sm">
                          -
                        </Button>
                      </div>
                      <div className="w-1/2 p-4 text-center flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-100 font-bold border-none rounded shadow-sm">
                          -
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td className="p-0 border-r border-gray-800 h-full opacity-50 pointer-events-none">
                    <div className="flex w-full h-full">
                      <div className="w-1/2 p-4 text-center border-r border-gray-800 flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-gray-400 font-bold border-none rounded flex items-center justify-center gap-1">
                          - <Lock className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="w-1/2 p-4 text-center flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-gray-400 font-bold border-none rounded flex items-center justify-center gap-1">
                          - <Lock className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center opacity-50 pointer-events-none">
                    <Button variant="outline" className="w-full bg-white text-gray-400 font-bold border-none rounded flex items-center justify-center gap-1">
                      - <Lock className="w-3 h-3" />
                    </Button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="border-b border-gray-800 bg-[#151b2b]">
                  <td className="p-5 font-bold text-white text-center border-r border-gray-800">
                    AISCT Non Member
                  </td>
                  <td className="p-0 border-r border-gray-800 h-full">
                    <div className="flex w-full h-full">
                      <div className="w-1/2 p-4 text-center border-r border-gray-800 flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-100 font-bold border-none rounded shadow-sm">
                          -
                        </Button>
                      </div>
                      <div className="w-1/2 p-4 text-center flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-100 font-bold border-none rounded shadow-sm">
                          -
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td className="p-0 border-r border-gray-800 h-full opacity-50 pointer-events-none">
                    <div className="flex w-full h-full">
                      <div className="w-1/2 p-4 text-center border-r border-gray-800 flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-gray-400 font-bold border-none rounded flex items-center justify-center gap-1">
                          - <Lock className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="w-1/2 p-4 text-center flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-gray-400 font-bold border-none rounded flex items-center justify-center gap-1">
                          - <Lock className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center opacity-50 pointer-events-none">
                    <Button variant="outline" className="w-full bg-white text-gray-400 font-bold border-none rounded flex items-center justify-center gap-1">
                      - <Lock className="w-3 h-3" />
                    </Button>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="border-b border-gray-800 bg-[#151b2b]/50">
                  <td className="p-5 font-bold text-white text-center border-r border-gray-800">
                    Post Graduate Students / Senior Residents
                  </td>
                  <td className="p-0 border-r border-gray-800 h-full">
                    <div className="flex w-full h-full">
                      <div className="w-1/2 p-4 text-center border-r border-gray-800 flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-100 font-bold border-none rounded shadow-sm">
                          -
                        </Button>
                      </div>
                      <div className="w-1/2 p-4 text-center flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-100 font-bold border-none rounded shadow-sm">
                          -
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td className="p-0 border-r border-gray-800 h-full opacity-50 pointer-events-none">
                    <div className="flex w-full h-full">
                      <div className="w-1/2 p-4 text-center border-r border-gray-800 flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-gray-400 font-bold border-none rounded flex items-center justify-center gap-1">
                          - <Lock className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="w-1/2 p-4 text-center flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-gray-400 font-bold border-none rounded flex items-center justify-center gap-1">
                          - <Lock className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center opacity-50 pointer-events-none">
                    <Button variant="outline" className="w-full bg-white text-gray-400 font-bold border-none rounded flex items-center justify-center gap-1">
                      - <Lock className="w-3 h-3" />
                    </Button>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="border-b border-gray-800 bg-[#151b2b]">
                  <td className="p-5 font-bold text-white text-center border-r border-gray-800">
                    Co Authors
                  </td>
                  <td className="p-0 border-r border-gray-800 h-full">
                    <div className="flex w-full h-full">
                      <div className="w-1/2 p-4 text-center border-r border-gray-800 flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-100 font-bold border-none rounded shadow-sm">
                          -
                        </Button>
                      </div>
                      <div className="w-1/2 p-4 text-center flex items-center justify-center text-gray-500 font-bold">
                        -
                      </div>
                    </div>
                  </td>
                  <td className="p-0 border-r border-gray-800 h-full opacity-50 pointer-events-none">
                    <div className="flex w-full h-full">
                      <div className="w-1/2 p-4 text-center border-r border-gray-800 flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-gray-400 font-bold border-none rounded flex items-center justify-center gap-1">
                          - <Lock className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="w-1/2 p-4 text-center flex items-center justify-center text-gray-500 font-bold">
                        -
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center opacity-50 pointer-events-none">
                    <Button variant="outline" className="w-full bg-white text-gray-400 font-bold border-none rounded flex items-center justify-center gap-1">
                      - <Lock className="w-3 h-3" />
                    </Button>
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="bg-[#151b2b]/50">
                  <td className="p-5 font-bold text-white text-center border-r border-gray-800">
                    Interns & UG students
                  </td>
                  <td className="p-0 border-r border-gray-800 h-full">
                    <div className="flex w-full h-full">
                      <div className="w-1/2 p-4 text-center border-r border-gray-800 flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-100 font-bold border-none rounded shadow-sm">
                          -
                        </Button>
                      </div>
                      <div className="w-1/2 p-4 text-center flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-100 font-bold border-none rounded shadow-sm">
                          -
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td className="p-0 border-r border-gray-800 h-full opacity-50 pointer-events-none">
                    <div className="flex w-full h-full">
                      <div className="w-1/2 p-4 text-center border-r border-gray-800 flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-gray-400 font-bold border-none rounded flex items-center justify-center gap-1">
                          - <Lock className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="w-1/2 p-4 text-center flex items-center justify-center">
                        <Button variant="outline" className="w-full bg-white text-gray-400 font-bold border-none rounded flex items-center justify-center gap-1">
                          - <Lock className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center opacity-50 pointer-events-none">
                    <Button variant="outline" className="w-full bg-white text-gray-400 font-bold border-none rounded flex items-center justify-center gap-1">
                      - <Lock className="w-3 h-3" />
                    </Button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

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

export default Registration;