export default function map(){

    return(

        <section id="campus" className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Column 1: The Story & Info */}
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Visit Our Campus</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Founded in 1994, our campus sits on 20 acres of lush greenery, 
            designed to inspire peace and focus. From our state-of-the-art 
            science labs to our open-air amphitheater, every corner of 
            Elite Academy tells a story of excellence.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-700 shrink-0">📍</div>
            <div>
              <h4 className="font-bold text-slate-900">Main Entrance</h4>
              <p className="text-slate-500">123 Education Lane, Knowledge City, ST 56789</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-700 shrink-0">🕒</div>
            <div>
              <h4 className="font-bold text-slate-900">Visiting Hours</h4>
              <p className="text-slate-500">Mon - Fri: 9:00 AM - 3:00 PM (By Appointment)</p>
            </div>
          </div>
        </div>

        <button className="border-2 border-sky-600 text-sky-600 px-8 py-3 rounded-full font-bold hover:bg-sky-600 hover:text-white transition-all">
          Download Campus Map (PDF)
        </button>
      </div>

      {/* Column 2: The Interactive Map */}
      <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border-8 border-slate-50">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.014605175653!2d-122.4194154!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa0!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </div>

    </div>
  </div>
</section>


    );

}