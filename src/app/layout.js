import "./globals.css";
import ClientLayout from "@/client-layout";
import TopBar from "@/components/TopBar/TopBar";
import Script from "next/script";

export const metadata = {
  title: "Edward Guillen | Product Designer Portfolio",
  description: "Product Designer specializing in UX/UI design with experience at Prudential, Cisco, Warner Music Group, and healthcare startups. View my portfolio of innovative digital experiences.",
  keywords: ["Edward Guillen", "product designer", "UX designer", "UI designer", "portfolio", "Prudential", "Cisco", "Warner Music Group", "healthcare", "digital design"],
  author: "Edward Guillen",
  openGraph: {
    title: "Edward Guillen | Product Designer Portfolio",
    description: "Product Designer with experience at Prudential, Cisco, Warner Music Group, and healthcare startups. View my portfolio of innovative digital experiences.",
    type: "website",
    url: "https://edwardguillen.com/",
    siteName: "Edward Guillen Portfolio",
    images: [
      {
        url: "/home/edward-guillen-social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Edward Guillen - Product Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edward Guillen | Product Designer Portfolio",
    description: "Product Designer with experience at Prudential, Cisco, Warner Music Group, and healthcare startups.",
    images: ["/home/edward-guillen-social-preview.jpg"],
    creator: "@edwardguillen",
  },
  alternates: {
    canonical: "https://edwardguillen.com/",
    languages: {
      en: "https://edwardguillen.com/",
    },
  },
  robots: "index, follow",
  metadataBase: new URL("https://edwardguillen.com"),
  icons: {
    icon: "/assets/favicon/favicon-32x32.png",
    shortcut: "/assets/favicon/favicon-16x16.png",
    apple: "/assets/favicon/apple-touch-icon-180x180.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/assets/favicon/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/assets/favicon/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/assets/favicon/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/assets/favicon/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/assets/favicon/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/assets/favicon/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/assets/favicon/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/assets/favicon/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="/assets/favicon/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="/assets/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/assets/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/assets/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/assets/favicon/favicon-128x128.png" sizes="128x128" />
        <meta name="application-name" content="&nbsp;"/>
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/assets/favicon/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/assets/favicon/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/assets/favicon/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/assets/favicon/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/assets/favicon/mstile-310x310.png" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R0BJ2MW99D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R0BJ2MW99D');
          `}
        </Script>
        
        {/* Hotjar Tracking Code */}
        <Script id="hotjar-tracking" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2611614,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </head>
      <body>
        <ClientLayout>
          <TopBar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
