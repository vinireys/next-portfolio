import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
    <Head>
      <title>404 Huriel</title>
    </Head>
    <div>
      <h1>404</h1>
      <div>
       <p>Oops, não conseguimos encontrar essa pagina!</p>
       <span>Clique no botão abaixo para ser redirecionado a Pagina Inicial</span>
      </div>
      <Link href="/">Ir para Pagina Inicial</Link>
    </div>
    </>
  );
};

export default NotFound
