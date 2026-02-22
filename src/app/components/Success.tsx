// src/components/SuccessStats.tsx
export default function SuccessStats() {
  return (
   <section className="py-24 bg-slate-50 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div className="max-w-xl">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Proven Results</h2>
        <p className="text-slate-600">Our students consistently outperform national averages, securing placements in top-tier universities worldwide.</p>
      </div>
      <div className="text-sky-600 font-bold text-lg underline cursor-pointer">View Full 2025 Report</div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Stat 1: Exam Pass Rate */}
      <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100">
        <div className="text-5xl font-black text-sky-600 mb-2">98.4%</div>
        <h4 className="text-xl font-bold text-slate-900 mb-4">Final Exam Pass Rate</h4>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div className="bg-sky-500 h-full w-[95%]"></div>
        </div>
        <p className="text-slate-500 mt-4 text-sm italic">Across all STEM and Humanities subjects.</p>
      </div>

      {/* Stat 2: University Placement */}
      <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100">
        <div className="text-5xl font-black text-sky-600 mb-2">85%</div>
        <h4 className="text-xl font-bold text-slate-900 mb-4">Top-Tier University Entry</h4>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div className="bg-sky-500 h-full w-[85%]"></div>
        </div>
        <p className="text-slate-500 mt-4 text-sm italic">Students accepted into Ivy League & Russell Group.</p>
      </div>

      {/* Stat 3: Scholarship Awards */}
      <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100">
        <div className="text-5xl font-black text-sky-600 mb-2">$1.2M</div>
        <h4 className="text-xl font-bold text-slate-900 mb-4">Scholarship Fundings</h4>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div className="bg-sky-500 h-full w-[70%]"></div>
        </div>
        <p className="text-slate-500 mt-4 text-sm italic">Total merit-based scholarships won by Class of '25.</p>
      </div>
    </div>
  </div>
</section>
  );
}