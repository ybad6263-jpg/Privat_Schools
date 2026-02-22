export default function vs()
{

    return(
        <section className="py-20 border-t border-slate-100">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
    
    {/* Vision Card */}
    <div className="bg-sky-900 text-white p-12 rounded-3xl shadow-xl shadow-sky-100">
      <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
      <p className="text-sky-100 text-lg leading-relaxed italic">
        "To be a global leader in education, fostering a community of innovative 
        thinkers who are prepared to solve the challenges of the 21st century."
      </p>
    </div>

    {/* Mission Card */}
    <div className="p-4">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
      <div className="space-y-6">
        <div className="flex gap-4">
          <span className="text-sky-600 font-bold text-xl">01.</span>
          <p className="text-slate-600">Provide a rigorous academic curriculum that challenges students to reach their full potential.</p>
        </div>
        <div className="flex gap-4">
          <span className="text-sky-600 font-bold text-xl">02.</span>
          <p className="text-slate-600">Cultivate an environment of inclusivity, respect, and emotional intelligence.</p>
        </div>
        <div className="flex gap-4">
          <span className="text-sky-600 font-bold text-xl">03.</span>
          <p className="text-slate-600">Integrate cutting-edge technology to enhance the learning experience.</p>
        </div>
      </div>
    </div>

  </div>
</section>
    );

}