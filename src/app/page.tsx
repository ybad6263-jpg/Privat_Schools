
import Hero from "./components/hero";
import Announcements from "./components/anno";
import Why from "./components/Whyus";
import Vision from "./components/vs";
import Voc from "./components/Voc";
import Success from "./components/Success";
import BetoGrid from "./components/Betogrid";
import Map from "./components/map";
import Conatct from "./components/contact";
import Footer from "./components/footer";
import Campus from "./components/campus";
import Programs from "./components/programs";
import AIChat from "./components/AIChat";
import Navbar from "./components/Navbar";


export default function Home() {

  // --- STORY 1: THE LOGIC ---
 
  // --- STORY 2: THE UI ---
  return (
    <main className="bg-white">
      <Navbar />
<Hero/>
<Programs />
<Campus />
<Announcements/>

{//Whyus
   <section id="about" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900">Why Choose Our Academy?</h2>
            <p className="mt-4 text-slate-600">Building a foundation for lifelong success.</p>
        
            <div className="grid md:grid-cols-3 gap-12 mt-16">
              {/* Feature 1 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-sky-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                  🎓
                </div>
                <h3 className="text-xl font-bold text-slate-900">Expert Faculty</h3>
                <p className="mt-3 text-slate-600">Our teachers are industry leaders dedicated to mentorship.</p>
              </div>
        
              {/* Feature 2 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                  💻
                </div>
                <h3 className="text-xl font-bold text-slate-900">Modern Tech</h3>
                <p className="mt-3 text-slate-600">Students have access to the latest tools and laboratories.</p>
              </div>
        
              {/* Feature 3 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-sky-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                  🌟
                </div>
                <h3 className="text-xl font-bold text-slate-900">Small Classes</h3>
                <p className="mt-3 text-slate-600">Personalized attention for every student's unique needs.</p>
              </div>
            </div>
          </div>
        </section>

}
<Vision/>
<Voc/>
<Success/>
<BetoGrid/>
<Map/>
<Conatct/>
<AIChat />
<Footer/>
    </main>
  );
}