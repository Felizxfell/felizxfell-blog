import "../globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import { ParamsRootLayout } from "@/types/types.p";
import ScrollTop from "@/components/ScrollTop";

export const metadata = {
  title: "felizxfell",
  description: "Blog de prueba",
  icons: {
    icon: '/icon.png',
  },
};

const googleFont = localFont({
  src: "../../assets/fonts/TiltNeon-Regular.woff2",
  display: "swap",
});

export default function RootLayout(
  { children, params }: ParamsRootLayout
) {
  const { lang } = params;

  return (
    <html lang={lang} className={`bg-shadow ${googleFont.className} scroll-smooth`} id="html">
      <body>        
        <Navbar lang={lang} />
        <Container>{children}</Container>
        <ScrollTop />
      </body>
    </html>
  );
}
