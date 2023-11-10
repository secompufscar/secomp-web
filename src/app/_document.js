import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />

          <meta charset="utf-8" />
          <meta name="language" content="pt-BR" />
          <title>SECOMP UFSCar 2023</title>
          <meta name="description" content="A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar) surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica quanto de entusiastas." />
          <meta name="robots" content="all" />
          <meta name="author" content="SECOMP UFSCar" />
          <link rel="icon" type="image/png" href="/favicon.png"/>
          <link rel="icon" type="image/png" href="https://www.secompufscar.com.br/favicon.png"/>
          <meta name="keywords" content="SECOMP, UFSCar, Computação, Acadêmica, Evento, Inovação, Tecnologia, Palestras, Conferências, Universidade, Graduação, Departamento, Informações, Conhecimento, Participantes, Entusiastas, Experiências, Novidades, Comunidade, São Carlos, Desenvolvimento, Estudantes, Tecnológico, Educação, Aprendizado, Discussões, Networking, Futuro da Computação, Evento Anual, Ciência da Computação" />

          <meta property="og:type" content="page" />
          <meta property="og:url" content="https://www.secompufscar.com.br" />
          <meta property="og:title" content="SECOMP UFSCar" />
          <meta property="og:image" content="/foto1.jpg" />
          <meta property="og:description" content="A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar) surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica quanto de entusiastas." />

          <meta property="article:author" content="SECOMP UFSCar" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@secompufscar" />
          <meta name="twitter:title" content="SECOMP UFSCar" />
          <meta name="twitter:creator" content="@secompufscar" />
          <meta name="twitter:description" content="A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar) surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica quanto de entusiastas." />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;