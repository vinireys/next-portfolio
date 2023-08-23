import { MenuCloseIcon } from '@/src/components/icons/MenuCloseIcon';
import Image from "next/image";
import Link from "next/link";

export const Menu = () => {
  return(
    <div>
      <div>
        <div>
          <Link href="/">
            <Image src="/favicon.svg" width={55} height={55} alt="Icone da letra H, logo de Huriel"></Image>
          </Link >
          <button>
            <MenuCloseIcon />
          </button>
        </div>
        <nav>
          <Link href="/">Sobre mim</Link>
          {/* <Link href="/portfolio">Portfolio</Link> */}
          <Link href="/contatos">Entre em contato</Link>
        </nav>
      </div>
    </div>
  );
};
