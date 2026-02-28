"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PostAnnouncement() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [loading, setLoading] = useState(false);

  const handlePost = async () => {
    setLoading(true);
    const { error } = await supabase
      .from('announcements')
      .insert([{ title, content, category, created_at: new Date() }]);

    if (error) alert("Error posting news");
    else {
      alert("News Published Successfully!");
      setTitle(""); setContent(""); // Clear form
    }
    setLoading(false);
  };

  return (
    <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-slate-900">Post New Announcement</h2>
      
      <div className="space-y-4">
        <input 
          placeholder="Headline (e.g. Science Fair 2026)" 
          className="w-full p-4 bg-slate-50 rounded-xl border-none outline-emerald-500 font-semibold"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <select 
          className="w-full p-4 bg-slate-50 rounded-xl border-none outline-emerald-500 text-slate-500"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>General</option>
          <option>Holiday</option>
          <option>Exam News</option>
          <option>Sports</option>
        </select>

        <textarea 
          placeholder="Details..." 
          rows={5}
          className="w-full p-4 bg-slate-50 rounded-xl border-none outline-emerald-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button 
          onClick={handlePost}
          disabled={loading}
          className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-emerald-600 transition-colors"
        >
          {loading ? "Publishing..." : "Publish to Live Website"}
        </button>
      </div>
    </div>
  );
}