import Head from "next/head";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
});

const NotFound = () => {
  return(
    <>
     <Head>
      <title>404 Huriel</title>
     </Head>
     <div className="flex flex-col items-center text-center mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
      <h1 className="text-5xl sm:text-7xl font-bold">400</h1>
      <p className="flex flex-col gap-8 md:gap-4 md:text-xl">
        <span>Oops, não conseguimos encontrar essa pagina!</span>
        <span> Clique no botão abaixo para ser redirecionado a pagina inicial</span>
      </p>
      <Link
       href="/"
       className={`${roboto.className} p-4 bg-blue-500 rounded-xl text black mt-5 md:mt-12 md:text-xl w-fit`}
       >
        Ir para Pagina Inicial
      </Link>
     </div>
    </>
  );
};

export default NotFound;
