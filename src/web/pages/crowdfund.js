import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { projects } from '../lib/projects';

const FAKE_WALLET = '0x1234...ABCD';

export default function Crowdfund() {
  const router = useRouter();
  const { project: selectedProjectTitle } = router.query;
  const [selectedProject, setSelectedProject] = useState(null);
  const [contributionAmount, setContributionAmount] = useState(0);
  const [wallet, setWallet] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (selectedProjectTitle) {
      const project = projects.find(p => p.title === selectedProjectTitle);
      setSelectedProject(project);
    }
  }, [selectedProjectTitle]);

  const handleContributionChange = (e) => {
    setContributionAmount(Number(e.target.value));
  };

  const handleConnect = () => {
    setWallet(FAKE_WALLET);
  };

  const handlePayment = () => {
    if (contributionAmount > 0) {
      setSuccess(true);
      setContributionAmount(0);
      setTimeout(() => setSuccess(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Crowdfunding Govinda Systems
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {selectedProject 
              ? `Apoie o projeto ${selectedProject.title}`
              : 'Selecione um projeto para apoiar'}
          </p>
        </div>

        {selectedProject ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedProject.description}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Contribuição
                </h3>
                <div className="space-y-4">
                  {wallet && (
                    <div className="mb-2 text-sm text-gray-700 dark:text-gray-200">
                      Carteira conectada: <span className="font-mono">{wallet}</span>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Valor (ETH)
                    </label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={contributionAmount}
                      onChange={handleContributionChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
                      placeholder="0.00"
                      disabled={!wallet}
                    />
                  </div>
                  {success && (
                    <div className="text-green-600 dark:text-green-400 font-bold">Pagamento realizado!</div>
                  )}
                  {!wallet ? (
                    <button
                      onClick={handleConnect}
                      className="w-full py-3 px-4 rounded-lg font-bold transition-colors duration-200 bg-orange-500 text-white hover:bg-orange-600"
                    >
                      Conectar Carteira
                    </button>
                  ) : (
                    <button
                      onClick={handlePayment}
                      className="w-full py-3 px-4 rounded-lg font-bold transition-colors duration-200 bg-primary text-white hover:bg-primary-dark"
                    >
                      Contribuir
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Nenhum projeto selecionado. Por favor, volte à página de projetos e selecione um projeto para apoiar.
            </p>
            <button
              onClick={() => router.push('/projects')}
              className="mt-4 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors duration-200"
            >
              Voltar para Projetos
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 