"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Inquiry {
  id: number;
  created_at: string;
  name: string;
  email: string;
  message: string;
}

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInquiries() {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) console.error(error);
      else setInquiries(data || []);
      setLoading(false);
    }
    fetchInquiries();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-8 mt-[60px]">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Inquiry Dashboard</h1>
            <p className="text-slate-500">Manage incoming school applications and questions.</p>
          </div>
          <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-bold text-sm">
            {inquiries.length} New Messages
          </div>
        </header>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-6 font-semibold text-slate-700">Date</th>
                <th className="p-6 font-semibold text-slate-700">Parent Name</th>
                <th className="p-6 font-semibold text-slate-700">Email</th>
                <th className="p-6 font-semibold text-slate-700">Message</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {inquiries.map((iq) => (
                <tr key={iq.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 text-sm text-slate-500">
                    {new Date(iq.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-6 font-bold text-slate-900">{iq.name}</td>
                  <td className="p-6 text-emerald-600 font-medium">{iq.email}</td>
                  <td className="p-6 text-slate-600 max-w-xs truncate">{iq.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {inquiries.length === 0 && !loading && (
            <div className="p-20 text-center text-slate-400">No inquiries yet.</div>
          )}
        </div>
      </div>
    </div>
  );
}