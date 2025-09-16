export const metadata = {
  title: "OnOctave - Music Monetization Platform | Edward Guillen",
  description: "OnOctave is a social media platform for musicians where fans support artists through micro-transactions ($0.10 - $5.00), enabling immediate monetization regardless of follower count. UX research and design case study.",
  keywords: "OnOctave, music platform, micro-transactions, musician monetization, UX design, case study, Edward Guillen, music industry, fan support, social media platform",
  author: "Edward Guillen",
  openGraph: {
    title: "OnOctave - Music Monetization Platform | Edward Guillen",
    description: "OnOctave is a social media platform for musicians where fans support artists through micro-transactions ($0.10 - $5.00), enabling immediate monetization regardless of follower count.",
    url: "https://edwardguillen.com/onoctave",
    siteName: "Edward Guillen Portfolio",
    images: [
      {
        url: "/assets/onoctave-hero1.jpg",
        width: 1200,
        height: 630,
        alt: "OnOctave Music Platform - Social media platform for musician monetization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnOctave - Music Monetization Platform | Edward Guillen",
    description: "OnOctave is a social media platform for musicians where fans support artists through micro-transactions ($0.10 - $5.00), enabling immediate monetization regardless of follower count.",
    images: ["/assets/onoctave-hero1.jpg"],
    creator: "@edwardguillen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function OnOctaveLayout({ children }) {
  return children;
}
