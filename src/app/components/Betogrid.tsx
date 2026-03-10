// src/components/BentoGrid.tsx
export default function BentoGrid() {
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
  
  {/* Card 1: Library */}
  <div className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="aspect-[4/5] overflow-hidden">
      <img src="/library.jpg" alt="Library" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent">
      <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-1">Academic</p>
      <h3 className="font-bold text-slate-900">Digital Library</h3>
    </div>
  </div>

  {/* Card 2: Science Lab */}
  <div className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="aspect-[4/5] overflow-hidden">
      <img src="/lab.jpg" alt="Science Lab" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent">
      <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-1">Innovation</p>
      <h3 className="font-bold text-slate-900">Smart Laboratory</h3>
    </div>
  </div>

  {/* Card 3: Sports/Playground */}
  <div className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="aspect-[4/5] overflow-hidden">
      <img src="/sports.jpg" alt="Sports" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent">
      <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-1">Activity</p>
      <h3 className="font-bold text-slate-900">Modern Sports Complex</h3>
    </div>
  </div>

  {/* Card 4: Classroom */}
  <div className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="aspect-[4/5] overflow-hidden">
      <img src="/classroom.jpg" alt="Classroom" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent">
      <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-1">Environment</p>
      <h3 className="font-bold text-slate-900">Creative Classrooms</h3>
    </div>
  </div>

</div>
  );
}