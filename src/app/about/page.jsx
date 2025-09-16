"use client";
import "./about.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import HowWeWork from "@/components/HowWeWork/HowWeWork";

import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>About Edward Guillen | Product Designer, UX Engineer, AI Consultant</title>
        <meta name="title" content="About Edward Guillen | Product Designer, UX Engineer, AI Consultant" />
        <meta name="description" content="Learn about Edward Guillen — a product designer with 15+ years of experience across UX strategy, frontend, and AI-led design at Prudential, Cisco, Warner Music Group, and more." />
        <meta name="keywords" content="Edward Guillen, about, product designer, UX engineer, AI consultant, portfolio, UX strategy, frontend, design systems" />
        <meta name="author" content="Edward Guillen" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edwardguillen.com/about" />
        <meta property="og:title" content="About Edward Guillen | Product Designer, UX Engineer, AI Consultant" />
        <meta property="og:description" content="15+ years building user-centered products and systems. Leadership in UX, frontend, and AI-enhanced design." />
        <meta property="og:image" content="https://edwardguillen.com/assets/EdwardGuillen-headshot.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Edward Guillen Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://edwardguillen.com/about" />
        <meta property="twitter:title" content="About Edward Guillen | Product Designer, UX Engineer, AI Consultant" />
        <meta property="twitter:description" content="15+ years building user-centered products and systems. Leadership in UX, frontend, and AI-enhanced design." />
        <meta property="twitter:image" content="https://edwardguillen.com/assets/EdwardGuillen-headshot.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Edward Guillen",
              "jobTitle": "Product Designer, UX Engineer, AI Consultant",
              "image": "https://edwardguillen.com/assets/EdwardGuillen-headshot.jpg",
              "url": "https://edwardguillen.com/about",
              "sameAs": [
                "https://www.linkedin.com/in/edward-guillen311/",
                "https://dribbble.com/edwardguillen"
              ],
              "worksFor": [
                { "@type": "Organization", "name": "Prudential" },
                { "@type": "Organization", "name": "Cisco" },
                { "@type": "Organization", "name": "Warner Music Group" }
              ],
              "knowsAbout": [
                "UX Strategy",
                "Design Systems",
                "Frontend Development",
                "Artificial Intelligence in Design",
                "Accessibility"
              ],
              "description": "Product designer with 15+ years of experience leading UX strategy, building design systems, and shipping outcomes-focused products across Fortune 500s and startups."
            })
          }}
        />
      </Head>
      <Nav />
      <div className="page studio">
        <section className="studio-hero">
          <div className="container">
            <div className="studio-hero-col">
              <Copy delay={0.85}>
                <p>
                I’ve been in the tech industry for over 15+ years, started with my own web agency, then moved into startups and worked with Fortune 500 companies like Prudential, Warner Music Group, Cisco, Disney, and Tenet Healthcare. I've built a mix of skills across leadership, UX strategy, frontend development, UX/UI design, research, motion design, and B2C advertising. But at the end of the day, what I enjoy most is building strong team culture and driving innovation; because when your team works well together, it's pretty remarkable what you can build and the problems you can solve for your users.
                </p>
              </Copy>
              
              <div className="toolkit-info-block">
                <Copy delay={0.3}>
                  <p>Toolkit</p>
                  <p>Product Strategy & Hands-On Design</p>
                  <p>User Engagement & Simplification</p>
                  <p>Data Analysis & Structural Planning</p>
                  <p>HTML, JavaScript, CSS, Motion</p>
                  <p>Wire-framing, Mockups, Prototyping</p>
                  <p>Cross-Functional Team Collaboration</p>
                  <p>Design Best Practices & Industry Standards</p>
                  <p>Mentorship & Designer Leadership</p>
                  <p>AI/ML Integration in Design</p>
                  <p>Accessibility Design & Inclusive Practices</p>
                </Copy>
              </div>
            </div>
            <div className="studio-hero-col">
              <Copy delay={0.85}>
                <h2>
                  Designing with purpose, building for impact.<br />I build digital experiences that deliver measurable outcomes.
                </h2>
              </Copy>
              <div className="studio-hero-hero-img">
                <img src="/assets/EdwardGuillen-headshot.jpg" alt="edward guillen" />
              </div>
            </div>
          </div>
        </section>
        <section className="more-facts">
          <div className="container">
            <div className="more-facts-items">
              <div className="fact">
                <Copy delay={0.1}>
                  <p>User research sessions</p>
                  <h2>200+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.2}>
                  <p>Design systems created</p>
                  <h2>12</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.3}>
                  <p>Teams mentored</p>
                  <h2>10+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.4}>
                  <p>Design hours logged</p>
                  <h2>15k+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.5}>
                  <p>Prototypes shipped</p>
                  <h2>150+</h2>
                </Copy>
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-work-container">
          <div className="container">
            <HowWeWork />
          </div>
        </section>


      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
