"use client"; // This tells Next.js this page can have interactive buttons and forms
import { useState } from "react";
export default function conatct()
{
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot:""
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSending(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST", // The Private way!
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), // Turn our object into a string for the trip
    });

    if (response.ok) {
      alert("Success! Your inquiry has been sent to our server.");
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    } else {
      alert("Something went wrong on the server.");
    }
  } catch (err) {
    alert("Network error. Please check your connection.");
  } finally {
    setIsSending(false);
  }
};

    return(

<section id="contact" className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900">Contact Admissions</h2>
            <p className="text-slate-600 mt-4">Have questions about enrollment? Our team is here to help.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200 border border-white">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Message</label>
              <textarea 
                rows={4}
                required
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <div className="hidden">
  <input 
    type="text" 
    name="honeypot" 
    value={formData.honeypot} 
    onChange={(e) => setFormData({...formData, honeypot: e.target.value})} 
  />
</div>

            <button 
              type="submit"
              disabled={isSending}
              className={`w-full py-4 rounded-2xl font-bold text-white transition-all transform hover:-translate-y-1 ${
                isSending ? "bg-slate-400" : "bg-sky-600 hover:bg-sky-700 shadow-lg shadow-sky-200"
              }`}
            >
              {isSending ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </section>

    );

}