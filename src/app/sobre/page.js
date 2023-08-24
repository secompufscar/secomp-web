import Image from 'next/image'
import styles from './page.module.css'
import imageSobre from "../../assets/sobre-secomp.jpg"
import imageUfscar from "../../assets/sobre-ufscar.jpg"
import imageDc from "../../assets/sobre-dc.jpg"
import logoSecomp from "../../assets/logo-secomp.png"
import logoDC from "../../assets/logo-dc.png"
import logoUfscar from "../../assets/logo-ufscar.png"


export default function Sobre() {
  return (
    <main className={styles.main}>

      <div className={styles.containerTitle}>
        <h1 className={styles.title}>
          SOBRE A SECOMP
        </h1>
      </div> {/* containerTitle */}

      <div className={styles.content}>
        <p className={styles.contentText}>
          A Semana Acadêmica da Computação da Universidade Federal de São Carlos surgiu da necessidade de se trazer assuntos que fossem de interesse tanto da comunidade acadêmica quanto de entusiastas. Nela, pessoas de diferentes áreas são convidadas a apresentar, discutir e debater experiências e novidades que trarão informação, conhecimento e inovação aos participantes.

        <br /> <br />

          Desde a sua primeira edição, a SECOMP trabalha para que os assuntos sejam os mais atuais possíveis e que sejam transmitidos da maneira mais dinâmica tentando aproximar o participante de áreas que vão da academia até o mercado de trabalho através de minicursos, workshops, palestras técnicas, empresariais, mesas redondas, feira de recrutamento e muitos outros conteúdos que foram pensados ao longo do tempo em busca de um evento cada vez melhor.
        </p>

        <Image 
          className={styles.contentImageSobre}
          src={imageSobre}
          alt="Sobre secomp"
        />

      </div>

      <div className={styles.containerTitle}>
        <h1 className={styles.title}>
          SOBRE A UFSCAR
        </h1>
      </div> {/* containerTitle */}

      <div className={styles.content}>

        <p className={styles.contentText}>
          Fundada em 1968, a Universidade Federal de São Carlos (UFSCar), única instituição federal de Ensino Superior localizada no interior do Estado de São Paulo, destaca-se pelo alto nível de qualificação de seu corpo docente: 96,1% são doutores ou mestres. Em sua maioria, 98,6% dos professores desenvolvem atividades de ensino, pesquisa e extensão em regime de dedicação exclusiva.
          <br /> <br />
          A Universidade possui quatro campi, sendo que o principal fica em São Carlos, município localizado a 235 km da capital do Estado, e tem 645 hectares de extensão, sendo 196 mil m² de área construída.
          <br /> <br />
          O campus São Carlos possui 300 laboratórios, uma biblioteca, um ambulatório, dois teatros, nove anfiteatros, 12 auditórios, um ginásio, um parque esportivo, sete quadras, duas piscinas, um restaurante universitário, quatro lanchonetes, 124 salas de aula e 672 vagas internas e externas de moradia estudantil.
          <br /> <br />
          Os 48 departamentos acadêmicos da Universidade estão divididos em oito centros: Ciências Agrárias, Ciências Biológicas e da Saúde, Ciências em Gestão e Tecnologia, Ciências e Tecnologias para a Sustentabilidade, Ciências Exatas e de Tecnologia, Ciências Humanas e Biológicas, Educação e Ciências Humanas e Ciências da Natureza.
          <br /> <br />
          A UFSCar oferece 62 cursos e um total de 2.757 vagas na graduação presencial. Além disso, conta com 47 programas de pós-graduação, oito cursos de mestrado profissional, 41 de mestrado acadêmico, 27 de doutorado e 95 cursos de especialização. No escopo da extensão, a UFSCar oferece 1355 atividades de extensão e 311 programas. Oferece, também, 94 Atividades Curriculares de Integração (Aciepes).
          <br /> <br />
          Há, no total, 24.825 alunos matriculados na Universidade: 12.338 de graduação presencial; 1.584 de educação a distância; 369 são alunos de mestrado profissional; 1.915 de mestrado acadêmico; 1.690 de doutorado; e 6.929 de especialização.
          <br /> <br />
          Em 2014, a UFSCar obteve a 18ª colocação entre as 300 universidades da América Latina incluídas no ranking elaborado pela Quacquarelli Symonds (QS). A instituição obteve 82 pontos na avaliação geral e é, portanto, considerada a 10ª melhor instituição brasileira.
          <br /> <br />
          Texto obtido da página institucional da UFSCar, disponível em <a href='www.ufscar.br.' target="_blank">www.ufscar.br.</a>
          <br /> <br />
          <strong>Créditos da imagem:</strong> Erick Radner, Revista UFSCar (edição n.º 01, Abril de 2017). Disponível em <a href='http://revista.ufscar.br.' target="_blank">http://revista.ufscar.br.</a>
        </p>

      </div>

      <Image 
        src={imageUfscar}
        alt='Imagem da Ufscar'
        className={styles.contentImageUfscar}
      />

      <div className={styles.containerTitle}>
        <h1 className={styles.title}>
          O DEPARTAMENTO DE COMPUTAÇÃO
        </h1>
      </div> {/* containerTitle */}

      <div className={styles.content}>
        <p className={styles.contentText}>
          O Departamento de Computação existe desde 1972, sendo responsável por habilitar e colocar com excelência anualmente no mercado de trabalho cerca de uma centena de profissionais, que atuam em empresas e em Instituições de Ensino Superior.
          <br /> <br />
          Atento à constante evolução na área de computação, o DC-UFSCar tem atuado na vanguarda do desenvolvimento tecnológico, firmando-se no cenário nacional e internacional como um centro de pesquisa bastante atuante.
          <br /> <br />
          Texto obtido da página institucional do Departamento de Computação da UFSCar, disponível em <a href='www.dc.ufscar.br' target='_blank'>www.dc.ufscar.br.</a>
        </p>

        <Image 
          className={styles.contentImageSobre}
          src={imageDc}
          alt="Sobre DC"
        />

      </div>

      <div className={styles.containerLogo}>

        <p className={styles.textLogo}>Realização</p>
        <div className={styles.containerImage}>
          <Image 
            className={styles.contentImageLogo}
            src={logoSecomp}
            alt="Logo Secomp"
          />

          <Image 
            className={styles.contentImageLogo}
            src={logoDC}
            alt="Logo DC"
          />

          <Image 
            className={styles.contentImageLogo}
            src={logoUfscar}
            alt="Logo Ufscar"
          />

        </div>
      </div>


    </main>
  )
}
