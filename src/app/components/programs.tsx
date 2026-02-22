export default function Programs() {
  const categories = [
    { title: "Primary Education", icon: "🌱", desc: "Foundation years focusing on literacy, numeracy, and social growth." },
    { title: "Middle School", icon: "🚀", desc: "Transitioning to deeper inquiry and specialized subject exploration." },
    { title: "Senior Secondary", icon: "🎓", desc: "Rigorous academic prep for university entrance and global careers." },
    { title: "STEM & Robotics", icon: "🤖", desc: "Advanced labs for future engineers and tech innovators." }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Academic Programs</h2>
          <p className="text-slate-500 mt-4">Nurturing excellence from foundation to graduation.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((p, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-emerald-600 transition-all duration-300">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3">{p.title}</h3>
              <p className="text-slate-600 group-hover:text-emerald-50 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}