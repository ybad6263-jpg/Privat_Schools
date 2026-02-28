"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) alert(error.message);
    else {
      alert("Login Successful!");
      router.push("/admin"); // Send them to the dashboard
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <form onSubmit={handleLogin} className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">Admin Login</h1>
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="School Email" 
            className="w-full p-4 bg-slate-50 rounded-2xl outline-emerald-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-4 bg-slate-50 rounded-2xl outline-emerald-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all">
            Enter Dashboard
          </button>
        </div>
      </form>
    </div>
  );
}