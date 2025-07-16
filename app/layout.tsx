import { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Footer from "layout/footer/footer";
import WidthSizeProvider from "providers/width-size/width-size-provider";
import ScrollProvider from "providers/scroll/scroll-provider";
import Compose from "utils/compose/compose";
import { InterFont } from "theme/font";
import "styles/globals.css";

type RootLayoutProps = {
  children: ReactNode;
  session: never;
};

export const metadata: Metadata = {
  title:
    "Bellum - Agencia de Software en Argentina | Desarrollo Web, Tiendas Online y Consultoría",
  description:
    "Agencia de software en Argentina especializada en desarrollo de páginas web, tiendas online, consultoría tecnológica y soluciones digitales para negocios. Creamos sitios web profesionales y tiendas ecommerce a medida.",
  keywords:
    "agencia de software argentina, consultora de software, desarrollo web argentina, creación de páginas web, tiendas online argentina, página para negocios, ecommerce argentina, soluciones digitales, desarrollo de apps, diseño web profesional",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "og:title":
      "Bellum - Agencia de Software en Argentina | Desarrollo Web, Tiendas Online y Consultoría",
    "og:description":
      "Agencia de software en Argentina especializada en desarrollo de páginas web, tiendas online, consultoría tecnológica y soluciones digitales para negocios.",
    "og:url": "https://bellumsoftware.com/",

    "og:type": "website",
  },
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  const Providers = [WidthSizeProvider, ScrollProvider];

  return (
    <html lang="en">
      <body className={InterFont.className}>
        <Compose providers={Providers as never}>
          {children}
          <Footer />
          <Analytics />
        </Compose>
      </body>
    </html>
  );
};

export default RootLayout;
