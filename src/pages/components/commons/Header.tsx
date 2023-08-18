import Image from "next/image";
import Link from "next/link";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	subsets: ['latin'],
	weight: '500',
});

export const Header = () => {
	return(
		<header 
		 className={ `${roboto.className} bg-h-blue-900 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}
		>
				<Link href="/">
					<Image src="/favicon.svg" width={55} height={55} alt="Icone da letra H, logo de Huriel" />			
				</Link>
				<nav className="hidden md:flex items-center gap-10 text-md">
					<Link href="/">Sobre mim</Link>
					  {/*<Link href="/">Portfolio</Link>*/}
				<Link href="/contatos">Entre em contato</Link>
			</nav>
		</header>
	);
};	 
		 