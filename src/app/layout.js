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
    metadataBase: new URL('https://acme.com'),
    alternates: {
      canonical: '/',
      languages: {
        'pt-BR': '/'
      },
    },
    title: "SECOMP UFSCAR 2023",
    description: "A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar) surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica quanto de entusiastas.",
    icons: {
        icon: '/favicon.png',
    },
    keywords: keywords,
    openGraph: {
      images: '/foto1.jpg',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
