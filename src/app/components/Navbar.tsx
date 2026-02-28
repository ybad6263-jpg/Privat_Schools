"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Logic: Menu starts closed

  return (
    
    <nav className="fixed w-full top-0 z-50 bg-sky/80 backdrop-blur-md border-b border-sky-100 p-5">
      <div className="max-w-6xl mx-auto h-20 flex justify-around items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 font-bold text-xl text-sky-900">
          <div className="bg-[url('samplelogo.png')] w-45 h-45 bg-cover rounded-xl flex items-center justify-center text-white"></div>
          {/*  */}
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-10 text-slate-600 font-semibold text-sm uppercase tracking-wider">
          <li><a href="#home" className="hover:text-sky-600 transition-colors">Home</a></li>
          <li><a href="#announcements" className="hover:text-sky-600 transition-colors">Announcements</a></li>
          <li><a href="#about" className="hover:text-sky-600 transition-colors">About</a></li>
          <li><a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a></li>
        </ul>

        {/* Mobile Menu Button (Hidden on Desktop) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} // Logic: Toggle between true/false
          className="md:hidden p-2 text-slate-600"
        >
          {/* Simple Icon: Changes from "Menu" to "X" */}
          {isOpen ? (
            <span className="text-2xl font-bold">✕</span>
          ) : (
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-slate-600"></div>
              <div className="w-6 h-0.5 bg-slate-600"></div>
              <div className="w-6 h-0.5 bg-slate-600"></div>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown (Only shows if isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-8 animate-in fade-in slide-in-from-top-4">
          <ul className="flex flex-col gap-6 text-slate-600 font-semibold text-lg">
          <li><a href="#home" className="hover:text-sky-600 transition-colors">Home</a></li>
            <li><a href="#announcements" onClick={() => setIsOpen(false)}>Announcements</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}