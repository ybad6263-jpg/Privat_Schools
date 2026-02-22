export default function footer()
{
    return(
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
    {/* Column 1: School Branding */}
    <div>
      <h3 className="text-xl font-bold text-sky-900 mb-4">Elite Academy</h3>
      <p className="text-slate-500 text-sm leading-relaxed">
        Nurturing the leaders of tomorrow through innovation, 
        integrity, and excellence in education.
      </p>
    </div>

    {/* Column 2: Quick Links */}
    <div>
      <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
      <ul className="space-y-2 text-slate-600 text-sm">
        <li className="hover:text-emerald-600 cursor-pointer">Academic Calendar</li>
        <li className="hover:text-emerald-600 cursor-pointer">Student Portal</li>
        <li className="hover:text-emerald-600 cursor-pointer">Admissions</li>
      </ul>
    </div>

    {/* Column 3: Contact Info */}
    <div>
      <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-widest">Connect</h4>
      <p className="text-slate-600 text-sm mb-2">info@eliteacademy.edu</p>
      <p className="text-slate-600 text-sm">+1 (555) 000-1234</p>
    </div>
  </div>
  
  <div className="max-w-6xl mx-auto border-t border-slate-50 pt-8 text-center">
    <p className="text-slate-400 text-xs">© 2026 Elite Academy. All rights reserved.</p>
  </div>
</footer>
    );
}