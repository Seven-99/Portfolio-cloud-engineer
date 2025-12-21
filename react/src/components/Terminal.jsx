import React from 'react';
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
      <div className="space-y-8 text-center lg:text-left">
        {/* Added space in the span */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
          Infraestructure <span className="text-blue-600">Scalable</span> y Automatization.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Cloud Engineer Trainee focused in the Google Cloud ecosystem. 
        </p>
      </div>
      
      {/* Terminal padding  */}
      <div className="flex justify-center lg:justify-end p-4">
        <Terminal />
      </div>
    </section>
  );
}