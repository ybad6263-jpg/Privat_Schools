// src/components/BentoGrid.tsx
export default function BentoGrid() {
  return (
   <section className="py-24 bg-sky px-6">
  <div className="max-w-6xl mx-auto">
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-slate-900 font-tech">Life at Elite Academy</h2>
      <p className="text-slate-500">A glimpse into our daily innovation and learning.</p>
    </div>

    {/* The Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[500px]">
      <div className="col-span-2 row-span-2 bg-slate-100 rounded-3xl flex items-center justify-center border border-slate-200 overflow-hidden">
        <span className="text-slate-400">Main Lab Image</span>
      </div>
      <div className="col-span-1 row-span-1 bg-sky-50 rounded-3xl flex items-center justify-center border border-sky-100 overflow-hidden">
        <span className="text-sky-400">Library</span>
      </div>
      <div className="col-span-1 row-span-1 bg-slate-100 rounded-3xl flex items-center justify-center border border-slate-200 overflow-hidden  ">
        <span className="text-slate-400">Sports</span>
      </div>
      <div className="col-span-2 row-span-1 bg-slate-900 rounded-3xl flex items-center justify-center  overflow-hidden">
        <span className="text-slate-300">Innovation Center</span>
      </div>
    </div>
  </div>
</section>
  );
}