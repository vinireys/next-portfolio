import { AboutMe } from "../components/Home/AboutMe";
import Head from "next/head";
import { Projects } from "../components/Home/Projects";

const Home = () => {
  const projects = [
    {
      slug: 'natura-whitelabel',
      name: 'Natura Whitelabel',
      image: {
        url: 'https://i.imgur.com/BSphXgc.png',
        alt: 'Pagina Inicial do Site da Natura Brasil',
      },
    },
    {
      slug: 'blobg',
      name: 'Blob.g',
      image: {
        url: 'https://i.imgur.com/Fdl3Lnp.png',
        alt: 'Blob.g, noticias do mundo dos codigos',
      },
    },
    {
      slug: 'userdash',
      name: 'UserDash',
      image: {
        url: 'https://i.imgur.com/biViAwow.png',
        alt: 'UserDash, dashboard de usuarios. Pgina inicial contendo uma opçao'
      },
    },
    {
      slug: 'videoteca',
      name: 'Videoteca',
      image: {
        url: 'https://i.imgur.com/wuTKxK9.png',
        alt: 'Videoteca, aplicativo para salvar videos',
      }
    }
  ];
  return (
    <>
      <Head>
        <title>Sobre min  Huriel</title>
        <meta 
        name="description"
        content="Sou um desenvolvedor Front-end apaixonado por criar interfaces e ajudar outros devs!"
        />
      </Head>
      <div className="py-12 px-6 md:px-32 espace-y-10 md:space-y-28">
        <AboutMe />
        <Projects projects={Projects} />
     </div>
    </>
  );
};

export default Home;
