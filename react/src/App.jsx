import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsGrid from "./components/SkillsGrid";
import ProjectCard from "./components/ProjectCard";
import FooterStats from "./components/FooterStats";
import { projectsData } from "./data/projects"; 

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <Navbar />
        
        <main>
          {/* Interactive Section */}
          <Hero />

          {/* Skills (Bento Grid) */}
          <h2 className="text-2xl font-black text-slate-800 mb-8 uppercase tracking-widest">
            Bento Skills
          </h2>
          <SkillsGrid />

          {/* Dynamic Projects */}
          <div className="mt-24">
            <h2 className="text-2xl font-black text-slate-800 mb-8 uppercase tracking-widest">
              Selected Projects
            </h2>
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </main>

        <FooterStats />
      </div>
    </div>
  );
}