import React from "react"

export default function ProjectCard({ project }) {
  return (
    <section id={project.id} className="bg-white border border-slate-200 rounded-4xl p-8 md:p-12 shadow-xl shadow-slate-200/50 mb-12 overflow-hidden hover:border-blue-300 transition-all duration-300">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Diagram Area */}
        <div className="bg-[#fcfdfe] rounded-2xl p-8 border border-dashed border-slate-300 flex flex-col items-center justify-center min-h-60 relative overflow-hidden group">
           <div className="text-slate-400 italic text-sm mb-6">[ Architecture Diagram ]</div>
           <div className="flex items-center gap-2 z-10 text-xs font-mono">
              <span className="p-2 bg-blue-100 rounded border border-blue-200 text-blue-600 font-bold">Bucket</span>
              <span className="text-slate-300">──▶</span>
              <span className="p-2 bg-indigo-100 rounded border border-indigo-200 text-indigo-600 font-bold">CDN</span>
              <span className="text-slate-300">──▶</span>
              <span className="p-2 bg-emerald-100 rounded border border-emerald-200 text-emerald-600 font-bold">Users</span>
           </div>
           <div className="absolute inset-0 bg-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Project Details */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">{project.title}</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase italic">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-slate-800 text-lg uppercase tracking-tight">Specs</h4>
            <ul className="space-y-3">
              {project.specs.map(spec => (
                <li key={spec} className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-blue-500 mt-1">▹</span> {spec}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
            <a href={project.repo} target="_blank" rel="noreferrer" className="text-blue-600 font-bold flex items-center gap-2 hover:translate-x-1 transition-transform uppercase text-xs">
              Repository →
            </a>
            {project.doc && (
              <a href={project.doc} target="_blank" rel="noreferrer" className="text-blue-600 font-bold flex items-center gap-2 hover:translate-x-1 transition-transform uppercase text-xs">
                Technical Documentation →
              </a>
            )}
          </div>  
        </div>
      </div>
    </section>
  );
}