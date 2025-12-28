import React from "react"

export default function ProjectCard() {
  return (
    <section id="projects" className="bg-white border border-slate-200 rounded-4xl p-8 md:p-12 shadow-xl shadow-slate-200/50 mb-24 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Diagram Area */}
        <div className="bg-[#fcfdfe] rounded-2xl p-8 border border-dashed border-slate-300 flex flex-col items-center justify-center min-h-75 relative overflow-hidden group">
           <div className="text-slate-400 italic text-sm mb-6">[ Architecture Diagram ]</div>
           
           {/* icons Mock */}
           <div className="flex items-center gap-4 z-10">
              <div className="p-4 bg-blue-100 rounded-lg border border-blue-200 shadow-sm text-blue-600 font-bold">Bucket</div>
              <div className="h-0.5 w-8 bg-slate-300"></div>
              <div className="p-4 bg-indigo-100 rounded-lg border border-indigo-200 shadow-sm text-indigo-600 font-bold">CDN</div>
              <div className="h-0.5 w-8 bg-slate-300"></div>
              <div className="p-4 bg-emerald-100 rounded-lg border border-emerald-200 shadow-sm text-emerald-600 font-bold">Users</div>
           </div>
           
           <div className="absolute inset-0 bg-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Project Details */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Cloud Infraestructure & Automation</h2>
          <div className="flex gap-2">
            {["Terraform", "GCP", "GitHub Actions"].map(tag => (
              <span key={tag} className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase italic">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-slate-800 text-lg uppercase tracking-tight">Specs</h4>
            <ul className="space-y-3">
              {["Infrastructure as Code: Resource Management through Terraform to secure consistency and avoid manual errors", "CI/CD Pipeline: Total deploy automatization through GitHub Actions.", "Cloud Storage Optimization: High availability hosting in CGS with stricted IAM policy access"].map(spec => (
                <li key={spec} className="flex items-start gap-2 text-slate-600">
                  <span className="text-blue-500 mt-1">▹</span> {spec}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
            <a href="https://github.com/Seven-99/Portfolio-cloud-engineer.git" className="text-blue-600 font-bold flex items-center gap-2 hover:translate-x-1 transition-transform uppercase text-sm">
              Repository →
            </a>
            <a href="https://github.com/Seven-99/Portfolio-cloud-engineer/blob/main/README.md" className="text-blue-600 font-bold flex items-center gap-2 hover:translate-x-1 transition-transform uppercase text-sm">
              Technical Documentation →
            </a>
          </div>  
        </div>
      </div>
    </section>
  );
}