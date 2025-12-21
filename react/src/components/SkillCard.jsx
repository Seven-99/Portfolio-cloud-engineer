import React from "react"

export default function SkillCard({title, tags}){
    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 
  transition-all duration-300 ease-in-out
  hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1
  flex flex-col gap-4 cursor-default">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:scale-150
                 transition-transform">{title}</span>
            </h3>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="bg-slate-50 border border-slate-100 text-slate-500 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider
                     transition-colors hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200">{tag}</span>
                ))}
            </div>
        </div>
    )
}