import React from "react"
import InteractiveTerminal from "./InteractiveTerminal";


export default function Hero(){
    return (
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg-text-6xl
                 font-extrabold text-slate-900 leading-[1.1]">Infraestructure
                <span className="text-blue-600"> Scalable</span> & Automatization</h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0">Cloud Engineer Trainee
                    focused on the *Google Cloud* ecosystem. 
                </p>
            </div>
            <div className="flex justify-center lg:justify-end">
                <InteractiveTerminal/>
            </div>
        </section>
    )
}