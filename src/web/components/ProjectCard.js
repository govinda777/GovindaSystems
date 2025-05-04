import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ProjectCard({ project }) {
  const router = useRouter();

  const handleSupportProject = () => {
    window.location.href = `https://crowd-fund-connect.replit.app/crowdfunding?address=${project.smartContractAddress}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-video relative">
        <iframe
          src={project.siteUrl}
          className="w-full h-full"
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-col space-y-3">
          <button
            onClick={handleSupportProject}
            className="w-full bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary-dark transition-colors duration-200"
          >
            Apoiar Projeto
          </button>
          <button
            onClick={handleSupportProject}
            className="w-full bg-secondary text-white px-4 py-2 rounded-lg font-bold hover:bg-secondary-dark transition-colors duration-200"
          >
            Comprar Token Governance
          </button>
          <div className="flex space-x-4">
            <Link
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Visit Site
            </Link>
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:underline"
            >
              View Repository
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 