// src/components/SuccessStats.tsx
export default function Voc() {
  return (
    <section className="py-24 bg-slate-50 px-6">
     <section className="py-24 bg-slate-50 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-16 font-tech">Voices of Our Community</h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { name: "Sarah J.", role: "Class of 2024", text: "The tech-focused curriculum gave me a massive head start in my University CS course." },
        { name: "Dr. Robert M.", role: "Parent", text: "We love the small class sizes. The personalized attention our son receives is unmatched." },
        { name: "James L.", role: "Grade 12 Student", text: "Elite Academy isn't just a school; it's a place where my ideas are actually heard." }
      ].map((testimonial, i) => (
        <div key={i} className="bg-sky-200 bg-[url('samplelogo.png')] p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div className="text-sky-900 text-4xl mb-4 font-serif">“</div>
          <p className="text-sky-900 mb-6 italic leading-relaxed">{testimonial.text}</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-200 rounded-full"></div> {/* Avatar Placeholder */}
            <div>
              <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
              <p className="text-slate-400 text-xs uppercase tracking-tighter">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-white py-12 border-y border-slate-100">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    <div>
      <p className="text-4xl font-bold text-sky-600">500+</p>
      <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Students</p>
    </div>
    <div>
      <p className="text-4xl font-bold text-sky-600">50+</p>
      <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Expert Teachers</p>
    </div>
    <div>
      <p className="text-4xl font-bold text-sky-600">100%</p>
      <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Graduation Rate</p>
    </div>
    <div>
      <p className="text-4xl font-bold text-sky-600">15+</p>
      <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Sports Clubs</p>
    </div>
  </div>

</section>
    </section>
  );
}