export default function Campus() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Experience Our Campus</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Our 20-acre smart campus combines traditional architecture with 21st-century 
              technology. From the solar-powered library to our Olympic-sized sports complex, 
              we provide the environment students need to thrive.
            </p>
            <ul className="space-y-4">
              {['Digital Innovation Lab', 'Sustainable Green Gardens', 'Arts & Music Pavilion'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="aspect-video bg-[url('samplelogo.png')] bg-cover bg-center bg-sky-200 rounded-3xl border-4 border-slate-700 overflow-hidden relative">
               {/* Replace with a real school building image later */}
               <div className="absolute inset-0 flex items-center justify-center text-slate-500 italic">
                 [High-Res Campus Photo]
               </div>
            </div>
            {/* Design Trick: Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-slate-900 font-bold">2026 Facility of the Year</p>
              <p className="text-emerald-600 text-sm">Awarded by Education Design Intl.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}