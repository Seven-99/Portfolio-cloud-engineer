import React from "react"

export default function FooterStats(){
    return (
        <footer className="mt-auto pt-10 pb-16 border-t border-slate-200 flex flex-col
         md:flex-row justify-between gap-6 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Portfolio Uptime: <span className="text-slate-800 font-bold">99.9%</span>
            </div>
            <div>
                Provisioning Time: <span className="text-slate-800 font-bold">&lt; 2 mins (via Terraform)</span>
            </div>
            <div>
                Security Scan: <span className="text-slate-800 font-bold uppercase underline">A+ (Qualys/Snyk)</span>
            </div>
        </footer>
    )
}