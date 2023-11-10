import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const keywords = [
    "SECOMP",
    "UFSCar",
    "Computação",
    "Acadêmica",
    "Evento",
    "Inovação",
    "Tecnologia",
    "Palestras",
    "Conferências",
    "Universidade",
    "Graduação",
    "Departamento",
    "Informações",
    "Conhecimento",
    "Participantes",
    "Entusiastas",
    "Experiências",
    "Novidades",
    "Comunidade",
    "São Carlos",
    "Desenvolvimento",
    "Estudantes",
    "Tecnológico",
    "Educação",
    "Aprendizado",
    "Discussões",
    "Networking",
    "Futuro da Computação",
    "Evento Anual",
    "Ciência da Computação"
  ];

export const metadata = {
    metadataBase: new URL('https://www.secompufscar.com.br'),
    alternates: {
      canonical: '/'
    },
    title: "SECOMP UFSCar 2023",
    description: "A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar) surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica quanto de entusiastas.",
    url: 'https://www.secompufscar.com.br',
    siteName: 'SECOMP UFSCar 2023',
    icons: {
      icon: '/favicon.png',
    },
    keywords: keywords,
    openGraph: {
      title: "SECOMP UFSCar 2023",
      description: "A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar) surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica quanto de entusiastas.",
      images: ['/foto1.jpg', '/foto2.jpg', "/foto3.jpg"],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'SECOMP UFSCar 2023',
      description: 'A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar) surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica quanto de entusiastas.',
      creator: '@secompufscar',
      images: ['/foto1.jpg', '/foto2.jpg', "/foto3.jpg"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
