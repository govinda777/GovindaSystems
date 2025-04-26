/**
 * Arquivo de utilidades de tema
 * Centraliza cores, tamanhos, espaçamentos e outras constantes de estilo
 */

// Cores principais
export const colors = {
  primary: '#2ECAD5',
  secondary: '#FF6B6B',
  accent: '#F25F94',
  dark: '#1E3D59',
  darker: '#15293E',
  darkBg: '#111827',
  darkBgLighter: '#1F2937',
  light: '#FFFFFF',
  gray: '#9CA3AF',
};

// Gradientes
export const gradients = {
  heroGradient: 'linear-gradient(135deg, #111827 0%, #1E3D59 100%)',
  textGradient: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
};

// Espaçamentos
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
};

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
};

// Sombras
export const shadows = {
  card: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  button: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
};

// Transições
export const transitions = {
  default: 'all 0.2s ease-in-out',
  slow: 'all 0.3s ease-in-out',
  fast: 'all 0.1s ease-in-out',
};

// Exporta um objeto padrão com todas as variáveis de tema
export default {
  colors,
  gradients,
  spacing,
  breakpoints,
  shadows,
  transitions,
}; 