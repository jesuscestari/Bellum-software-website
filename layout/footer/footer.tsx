import Link from "next/link";
import Image from "next/image";
import MargeloLogo from "public/logo.png";

const Footer = async () => {
  return (
    <footer className="bg-black text-white flex justify-around items-center py-10 md:justify-center md:gap-8">
      <Image src={MargeloLogo} width={20} height={20} alt="margelo-logo" />

      <Link href="/privacy-policy">Política de privacidad</Link>
      <Link href="https://www.instagram.com/bellumweb/" target="_blank">
        Instagram
      </Link>
      <Link
        href="https://www.linkedin.com/company/bellum-software/"
        target="_blank"
      >
        Linkedin
      </Link>
    </footer>
  );
};

export default Footer;
