import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import MargeloLogo from "public/logo.png";

const Footer = async () => {
  return (
    <footer className="bg-black text-white flex flex-col justify-center items-center gap-4 py-10">
      <Image src="/logo.png" width={20} height={20} alt="margelo-logo" />
      <div className="flex flex-row justify-center items-center gap-4 md:gap-8">
        <Link href="/proyectos">Proyectos</Link>
        <Link href="/privacy-policy">Política de privacidad</Link>
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        <Link
          href="https://www.instagram.com/bellumweb/"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram className="text-xl" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/bellum-software/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-xl" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
