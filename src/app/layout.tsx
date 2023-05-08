import "styles/globals.css";
import * as fbq from "../lib/fpixel";
import Script from "next/script";
import FacebookPixel from "components/facebookPixel";

export const metadata = {
  title: "Carioca Jeans MS",
  description:
    "Rede Carioca Jeans | Campo Grande - MS 🏝️ Desfrute à Melhor experiência em Jeans 🏝️ Veja qual Loja fica mais perto de Você",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <meta
        name="facebook-domain-verification"
        content="lxomrkg1c48jcv7ga0nltrcp03dwku"
      />
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      <Script
        id="analytics"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-59SS98D4NB');
        `,
        }}
      />
      <FacebookPixel />
      <body>{children}</body>
    </html>
  );
}
