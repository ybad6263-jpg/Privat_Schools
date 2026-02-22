"use client";
import { useState } from "react";

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "ai", content: "Hello! I'm the Elite Academy Assistant. How can I help you today?" }]);

  const sendMessage = async () => {
    if (!input) return;
    
    // Add user message to screen
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // Call our AI API
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ prompt: input, history: messages })
    });
    const data = await res.json();

    // Add AI response to screen
    setMessages([...newMessages, { role: "ai", content: data.text }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white w-80 h-96 shadow-2xl rounded-3xl flex flex-col border border-slate-100 overflow-hidden">
          <div className="bg-emerald-600 p-4 text-white font-bold flex justify-between">
            <span>School Assistant</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'ai' ? 'bg-slate-100 mr-8' : 'bg-emerald-50 ml-8 text-right'} p-3 rounded-2xl`}>
                {m.content}
              </div>
            ))}
          </div>

          <div className="p-4 border-t flex gap-2">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..." 
              className="flex-1 outline-none text-sm"
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage} className="text-emerald-600 font-bold">Send</button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-emerald-600 rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform"
        >
          ✨
        </button>
      )}
    </div>
  );
}