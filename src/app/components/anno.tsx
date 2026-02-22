"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
// src/components/SuccessStats.tsx
export default function anno() {
 const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnnouncements() {
      // 1. Logic: Ask the database for the announcements
      let { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) console.log("Error fetching:", error);
      else setNews(data);
      setLoading(false);
    }

    fetchAnnouncements();
  }, []);

  if (loading) return <p className="text-fcenter py-10">Loading school news...</p>;

  return (
    <section id="announcements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Latest Announcements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {news.map((item: any) => (
            <div key={item.id} className="p-6 border rounded-2xl border-slate-100 shadow-sm">
              <span className="text-xs font-bold text-emerald-600 uppercase">{item.category}</span>
              <h3 className="text-xl font-bold mt-2">{item.title}</h3>
              <p className="text-slate-500 mt-2">{item.content}</p>
              <p className="text-sm text-slate-400 mt-4">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}