import type { Metadata } from 'next';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Govinda Systems DAO - Comunidade de Inovação em IA',
  description: 'Junte-se à Govinda Systems DAO, uma comunidade de inovadores construindo o futuro da Inteligência Artificial de forma descentralizada e colaborativa.',
  other: {
    'base:app_id': '6a0233c70ec9a0da335751f0',
  },
  openGraph: {
    title: 'Govinda Systems DAO',
    description: 'Construindo o futuro da Inteligência Artificial de forma descentralizada.',
    url: 'https://govindasystems.com',
    siteName: 'Govinda Systems DAO',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Govinda Systems DAO - Inovação em IA',
    description: 'Junte-se à comunidade que está construindo o futuro da IA de forma descentralizada e open source.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
