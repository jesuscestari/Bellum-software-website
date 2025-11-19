import { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Footer from "layout/footer/footer";
import WhatsAppButton from "components/app/whatsapp-button/whatsapp-button";
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
    "Bellum - Agencia de Software en Argentina | Desarrollo Web, Mobile Apps, SaaS y Tiendas Online",
  description:
    "Agencia de software en Argentina especializada en desarrollo de páginas web, aplicaciones móviles (mobile apps), SaaS, tiendas online, consultoría tecnológica y soluciones digitales para negocios. Creamos sitios web profesionales, apps móviles y tiendas ecommerce a medida.",
  keywords:
    "agencia de software argentina, consultora de software, desarrollo web argentina, creación de páginas web, tiendas online argentina, página para negocios, ecommerce argentina, soluciones digitales, desarrollo de apps, diseño web profesional, saas, software as a service, mobile, mobile app, aplicaciones móviles, desarrollo mobile, desarrollo de aplicaciones móviles, app móvil, desarrollo iOS, desarrollo Android, aplicaciones nativas, desarrollo multiplataforma, react native, flutter, desarrollo de software, agencia de desarrollo, desarrollo web y mobile, soluciones SaaS, plataformas SaaS, software empresarial, desarrollo de software a medida, consultoría tecnológica argentina",
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
      "Bellum - Agencia de Software en Argentina | Desarrollo Web, Mobile Apps, SaaS y Tiendas Online",
    description:
      "Agencia de software en Argentina especializada en desarrollo de páginas web, aplicaciones móviles (mobile apps), SaaS, tiendas online, consultoría tecnológica y soluciones digitales para negocios.",
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
      "Bellum - Agencia de Software en Argentina | Desarrollo Web, Mobile Apps, SaaS y Tiendas Online",
    description:
      "Agencia de software en Argentina especializada en desarrollo de páginas web, aplicaciones móviles (mobile apps), SaaS, tiendas online, consultoría tecnológica y soluciones digitales para negocios.",
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
    <html lang="es">
      <body className={InterFont.className}>
        <Compose providers={Providers as never}>
          {children}
          <Footer />
          <WhatsAppButton />
          <Analytics />
        </Compose>
      </body>
    </html>
  );
};

export default RootLayout;
