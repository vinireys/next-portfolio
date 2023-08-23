import { AboutMe } from "../components/Home/AboutMe";
import Head from "next/head";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	subsets: ['latin'],
	weight: '500',
});

const Home = () => {
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
     </div>
    </>
  );
};

export default Home;
