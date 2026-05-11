"use client";

import { projects } from '../../lib/projects';
import ProjectCard from '../../components/ProjectCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0f172a]">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossos Projetos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore nossos trabalhos e contribuições para o ecossistema de IA e Web3
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
