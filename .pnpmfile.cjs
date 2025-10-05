// ⚡ PNPM Configuration File
// Este arquivo permite customizar o comportamento do pnpm
// Documentação: https://pnpm.io/pnpmfile

module.exports = {
  hooks: {
    // Hook executado antes da resolução de dependências
    readPackage(pkg) {
      // Correção de peer dependencies problemáticas
      if (pkg.name === '@coinbase/wallet-sdk') {
        // Forçar usar React 18 ao invés de Preact
        pkg.dependencies = {
          ...pkg.dependencies,
          'react': '^18.3.1',
          'react-dom': '^18.3.1'
        }
      }

      return pkg
    }
  }
}


