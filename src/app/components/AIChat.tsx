"use client";
import { useState, useRef, useEffect } from "react";
import { schoolKnowledge } from "@/constants/schoolData";

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHook, setShowHook] = useState(true); // Control the popup
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", content: "Mingalaba! I'm the Hteik Tan Assistant. How can I help you today?" }
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-hide the hook after 8 seconds or when opened
  useEffect(() => {
    const timer = setTimeout(() => setShowHook(false), 8000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input || isLoading) return;
    setShowHook(false); // Hide hook if user starts chatting
    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input, history: messages })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "ai", content: data.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "ai", content: "Sorry, I'm having a connection issue." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end">
      
      {/* 🟢 THE ATTENTION HOOK (Speech Bubble) */}
      {!isOpen && showHook && (
        <div className="mb-3 mr-2 bg-white px-4 py-2 rounded-2xl shadow-xl border border-sky-100 text-slate-700 text-sm font-medium animate-bounce-subtle flex items-center gap-2 relative">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          သိလိုသည်များကို မေးမြန်းနိုင်ပါသည်! 👋
          {/* Triangle Pointer */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-sky-100 rotate-45"></div>
        </div>
      )}

      {isOpen ? (
        <div className="bg-white w-[340px] h-[480px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-[2rem] flex flex-col border border-slate-100 overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="bg-sky-600 p-5 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="font-bold text-sm"> Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((m, i) => (
              
              <div key={i} className={`flex ${m.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
                {/* Inside your messages.map in AIChat.tsx */}

                {/* Inside your messages mapping in AIChat.tsx */}
<div key={i} className={`flex flex-col ${m.role === 'ai' ? 'items-start' : 'items-end'}`}>
  <div className={`max-w-[85%] p-4 rounded-2xl text-sm whitespace-pre-wrap ${
    m.role === 'ai' ? 'bg-white border border-slate-100 text-slate-700' : 'bg-sky-600 text-white'
  }`}>
    {m.content}
  </div>
  
  {/* 🔥 SMART ACTION BUTTON: Shows only if AI mentions enrollment */}
  {m.role === 'ai' && (m.content.toLowerCase().includes('enroll') || m.content.includes('ကျောင်းအပ်')) && (
    <button 
      onClick={() => {
        setIsOpen(false); // Close chat
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); // Scroll to form
      }}
      className="mt-2 text-xs bg-emerald-50 text-emerald-600 font-bold py-2 px-4 rounded-full border border-emerald-100 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
    >
      Go to Enrollment Form →
    </button>
  )}
</div>

                
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none">
                   <div className="flex gap-1.5"><div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:0.2s]"></div><div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:0.4s]"></div></div>
                 </div>
               </div>
            )}
          </div>

          

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a question..." className="flex-1 outline-none text-sm bg-slate-100/50 p-3 rounded-xl focus:bg-white transition-all" onKeyDown={(e) => e.key === 'Enter' && sendMessage()} />
            <button onClick={sendMessage} disabled={isLoading} className="bg-sky-600 text-white p-3 rounded-xl hover:bg-sky-700 transition-all"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => {setIsOpen(true); setShowHook(false);}}
          className="group relative w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-sky-100"
        >
          <div className="bg-[url('samplelogo.png')] bg-center bg-cover w-full h-full rounded-full overflow-hidden"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse"></div>
        </button>
      )}
    </div>
  );
}