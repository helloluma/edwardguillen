"use client";
import "./case-studies.css";
import { caseStudiesData } from "./case-studies.js";
import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "next/head";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import { useViewTransition } from "@/hooks/useViewTransition";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const caseStudiesRef = useRef(null);
  const scrollTriggerInstances = useRef([]);
  const { navigateWithTransition } = useViewTransition();

  const cleanupScrollTriggers = () => {
    scrollTriggerInstances.current.forEach((instance) => {
      if (instance) instance.kill();
    });
    scrollTriggerInstances.current = [];
  };

  const setupAnimations = () => {
    cleanupScrollTriggers();

    if (!caseStudiesRef.current) return;

    const caseStudies = caseStudiesRef.current.querySelectorAll(".case-study");
    if (caseStudies.length === 0) return;

    caseStudies.forEach((caseStudy, index) => {
      gsap.set(caseStudy, {
        opacity: 0,
        scale: 0.75,
        y: 150,
      });

      if (index === 0) {
        gsap.to(caseStudy, {
          duration: 0.75,
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          delay: 1.4,
        });
      } else {
        const trigger = ScrollTrigger.create({
          trigger: caseStudy,
          start: "top 100%",
          onEnter: () => {
            gsap.to(caseStudy, {
              duration: 0.75,
              y: 0,
              scale: 1,
              opacity: 1,
              ease: "power3.out",
            });
          },
        });

        scrollTriggerInstances.current.push(trigger);
      }
    });

    ScrollTrigger.refresh();
  };

  useEffect(() => {
    setupAnimations();

    const handleResize = () => {
      setupAnimations();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cleanupScrollTriggers();
    };
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Case Studies - UX Design Portfolio | Edward Guillen</title>
        <meta name="title" content="Case Studies - UX Design Portfolio | Edward Guillen" />
        <meta name="description" content="Explore Edward Guillen's UX design case studies across healthcare, music platforms, enterprise solutions, and financial services. See how user-centered design drives business outcomes." />
        <meta name="keywords" content="UX case studies, user experience design, healthcare UX, music platform design, enterprise UX, financial services UX, design portfolio, Edward Guillen" />
        <meta name="author" content="Edward Guillen" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edwardguillen.com/case-studies" />
        <meta property="og:title" content="Case Studies - UX Design Portfolio" />
        <meta property="og:description" content="Explore Edward Guillen's UX design case studies across healthcare, music platforms, enterprise solutions, and financial services." />
        <meta property="og:image" content="https://edwardguillen.com/assets/edwardguillen-headshot.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Edward Guillen Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://edwardguillen.com/case-studies" />
        <meta property="twitter:title" content="Case Studies - UX Design Portfolio" />
        <meta property="twitter:description" content="Explore Edward Guillen's UX design case studies across healthcare, music platforms, enterprise solutions, and financial services." />
        <meta property="twitter:image" content="https://edwardguillen.com/assets/edwardguillen-headshot.jpg" />
        
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
              "@type": "CollectionPage",
              "name": "Case Studies - UX Design Portfolio",
              "description": "Explore Edward Guillen's UX design case studies across healthcare, music platforms, enterprise solutions, and financial services.",
              "url": "https://edwardguillen.com/case-studies",
              "image": "https://edwardguillen.com/assets/edwardguillen-headshot.jpg",
              "author": {
                "@type": "Person",
                "name": "Edward Guillen",
                "url": "https://edwardguillen.com",
                "image": "https://edwardguillen.com/assets/edwardguillen-headshot.jpg",
                "jobTitle": "UX Designer",
                "description": "Product designer with 15+ years of experience leading UX strategy, building design systems, and shipping outcomes-focused products across Fortune 500s and startups."
              },
              "mainEntity": {
                "@type": "ItemList",
                "name": "UX Design Case Studies",
                "description": "A collection of UX design case studies showcasing user-centered design solutions across various industries",
                "numberOfItems": 5,
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@type": "CreativeWork",
                      "name": "Arthe",
                      "description": "Healthcare platform redesign focusing on patient experience and clinical workflow optimization",
                      "url": "https://edwardguillen.com/arthe",
                      "genre": "Healthcare UX"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@type": "CreativeWork",
                      "name": "Warner Music Group",
                      "description": "Music platform UX design for global marketing teams collaboration and project management",
                      "url": "https://edwardguillen.com/warner-music-group",
                      "genre": "Music Platform UX"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "@type": "CreativeWork",
                      "name": "Cisco",
                      "description": "Enterprise networking solutions with focus on user experience and workflow efficiency",
                      "url": "https://edwardguillen.com/cisco",
                      "genre": "Enterprise UX"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                      "@type": "CreativeWork",
                      "name": "OnOctave",
                      "description": "Music collaboration platform design for artists and producers",
                      "url": "https://edwardguillen.com/onoctave",
                      "genre": "Music Platform UX"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                      "@type": "CreativeWork",
                      "name": "Prudential Onboarding",
                      "description": "Financial services onboarding experience redesign for improved user engagement",
                      "url": "https://edwardguillen.com/prudential",
                      "genre": "Financial UX"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <Nav />
      <div className="page case-studies">
        <section className="case-studies-header">
          <div className="container">
            <div className="prop-col"></div>
            <div className="prop-col">
              <Copy delay={1}>
                <h1>Case Studies</h1>
              </Copy>
              <div className="prop-filters">
                <div className="filter default">
                  <Copy delay={1}>
                    <p className="lg">All</p>
                  </Copy>
                </div>
                <div className="filter">
                  <Copy delay={1.1}>
                    <p className="lg">Healthcare</p>
                  </Copy>
                </div>
                <div className="filter">
                  <Copy delay={1.2}>
                    <p className="lg">Music</p>
                  </Copy>
                </div>
                <div className="filter">
                  <Copy delay={1.3}>
                    <p className="lg">Enterprise</p>
                  </Copy>
                </div>
                <div className="filter">
                  <Copy delay={1.4}>
                    <p className="lg">Financial</p>
                  </Copy>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="case-studies-list">
          <div className="container" ref={caseStudiesRef}>
            {caseStudiesData.map((caseStudy, index) => (
              <a
                key={caseStudy.id}
                href={caseStudy.route}
                className="case-study"
                onClick={(e) => {
                  e.preventDefault();
                  navigateWithTransition(caseStudy.route);
                }}
              >
                <div className="case-study-img">
                  <img src={caseStudy.image} alt={caseStudy.name} />
                </div>
                <div className="case-study-info">
                  <div className="prop-info-col">
                    <div className="prop-date">
                      <p>{caseStudy.date}</p>
                    </div>
                  </div>
                  <div className="prop-info-col">
                    <div className="prop-name">
                      <h3>{caseStudy.name}</h3>
                      <p className="lg">{caseStudy.category}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
