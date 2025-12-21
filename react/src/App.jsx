import React from 'react';
import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsGrid from "./components/SkillsGrid";
import ProjectCard from "./components/ProjectCard";
import FooterStats from "./components/FooterStats";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <Navbar />
        <main>
          <Hero />
          <h2 className="text-2xl font-black text-slate-800 mb-8 uppercase tracking-widest">Bento Skills Grid</h2>
          <SkillsGrid />
          <ProjectCard />
        </main>
        <FooterStats />
      </div>
    </div>
  );
}
