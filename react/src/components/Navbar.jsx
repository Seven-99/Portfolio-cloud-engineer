import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center py-8 mb-16 border-b border-slate-100">
      {/* Logo and CLI style */}
      <div className="font-mono font-bold text-lg text-slate-800 mb-6 md:mb-0">
        <span className="text-blue-600">eliot-francisco-gutierrez@</span>cloud-engineer:~#
      </div>
      
      {/* Button and Nav content */}
      <div className="flex flex-col md:flex-row items-center gap-8 font-medium text-slate-500">
        {/* Navegation Links with separation */}
        <div className="flex gap-6">
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#certifications" className="hover:text-blue-600 transition-colors">Certifications</a>
        </div>
        
        {/* Resumee button */}
        <button className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-all shadow-md active:scale-95 font-semibold">
          Resume PDF
        </button>
      </div>
    </nav>
  );
}