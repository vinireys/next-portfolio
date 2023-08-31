import { AboutMe } from "../components/Home/AboutMe";
import Head from "next/head";
import { Projects } from "../components/Home/Projects";

const Home = ({ home }: any) => {
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
        url: 'https://i.imgur.com/Fdl3Lnp.png',
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

 // console.log(home);

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
        <Projects projects={projects} />
     </div>
    </>
  );
};

const loadHome = async () => {
  const res = await fetch(
    'https://gist.githubusercontent.com/huri3l/b2d6a36f169dfe3fcd11a5dac89d83cc/raw/ad2cd1cd3c858ffd6fd70af5c80bb6bf98ee2cdf/home.json'
  );
  const home = await res.json();

  return home;
}

export const getStaticProps = async () => {
 const home = await loadHome();

  return {
    props: { home },
  }
};

export default Home;
