export default function hero(){

    return(
         <div id="home" className="max-w-6xl mt-[45px] mx-auto px-6 py-24 text-center bg-sky-100 rounded-full">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
          Empowering Students for a <br />
          <span className="text-sky-600 font-black">Brighter Future</span>
        </h1>
        
        <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Welcome to a premier private education experience. We combine 
          innovation with excellence to prepare the leaders of tomorrow.
        </p>
        
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <button className="bg-sky-600 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-sky-200 hover:bg-sky  -700 transition-all transform hover:-translate-y-1">
           <a href="#contact"> Enroll for 2026</a>
          </button>
          <button className="border-2 border-slate-200 text-slate-700 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all">
            
            <a href="#programs">View Curriculum</a>
          </button>
        </div>
      </div>
    );

}