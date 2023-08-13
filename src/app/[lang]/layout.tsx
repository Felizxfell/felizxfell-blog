import "../globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import { ParamsRootLayout } from "@/types/types.p";

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
    <html lang={lang} className={`dark-custom ${googleFont.className}`}>      
      <body>        
        <Navbar lang={lang} />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
