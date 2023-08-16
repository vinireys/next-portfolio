import Head from "next/head";
import Link from "next/link"

const Home = () => {
  return (
    <>
     <Head>
      <title>Sobre min  Huriel</title>
     </Head>
     <main>
      <h1>Hello Word com Next.js</h1>
      <Link href="/contatos">Ir para a Pagina Contatos</Link>
     </main>
    </>
  );
};

export default Home;
