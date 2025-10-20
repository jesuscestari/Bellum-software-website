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
  metadataBase: new URL("https://bellumsoftware.com"),
  title:
    "Bellum - Agencia de Software en Argentina | Desarrollo Web, Tiendas Online y Consultoría",
  description:
    "Agencia de software en Argentina especializada en desarrollo de páginas web, tiendas online, consultoría tecnológica y soluciones digitales para negocios. Creamos sitios web profesionales y tiendas ecommerce a medida.",
  keywords:
    "agencia de software argentina, consultora de software, desarrollo web argentina, creación de páginas web, tiendas online argentina, página para negocios, ecommerce argentina, soluciones digitales, desarrollo de apps, diseño web profesional",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/web-app-manifest-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/web-app-manifest-512x512.png",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://bellumsoftware.com/",
    title:
      "Bellum - Agencia de Software en Argentina | Desarrollo Web, Tiendas Online y Consultoría",
    description:
      "Agencia de software en Argentina especializada en desarrollo de páginas web, tiendas online, consultoría tecnológica y soluciones digitales para negocios.",
    siteName: "Bellum Software",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bellum - Agencia de Software en Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bellum - Agencia de Software en Argentina | Desarrollo Web, Tiendas Online y Consultoría",
    description:
      "Agencia de software en Argentina especializada en desarrollo de páginas web, tiendas online, consultoría tecnológica y soluciones digitales para negocios.",
    images: ["/og-image.png"],
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
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
