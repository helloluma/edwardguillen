"use client";
import "./spaces.css";
import { spacesData } from "./spaces.js";
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
  const spacesRef = useRef(null);
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

    if (!spacesRef.current) return;

    const spaces = spacesRef.current.querySelectorAll(".space");
    if (spaces.length === 0) return;

    spaces.forEach((space, index) => {
      gsap.set(space, {
        opacity: 0,
        scale: 0.75,
        y: 150,
      });

      if (index === 0) {
        gsap.to(space, {
          duration: 0.75,
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          delay: 1.4,
        });
      } else {
        const trigger = ScrollTrigger.create({
          trigger: space,
          start: "top 100%",
          onEnter: () => {
            gsap.to(space, {
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
        <title>Timeless Spaces - Design Portfolio | Edward Guillen</title>
        <meta name="title" content="Timeless Spaces - Design Portfolio | Edward Guillen" />
        <meta name="description" content="A curated collection of timeless design spaces showcasing Edward Guillen's portfolio across various industries including healthcare, finance, technology, and music." />
        <meta name="keywords" content="design portfolio, spaces, Edward Guillen, UX design, UI design, healthcare, finance, technology, music, visual design" />
        <meta name="author" content="Edward Guillen" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edwardguillen.com/spaces" />
        <meta property="og:title" content="Timeless Spaces - Design Portfolio" />
        <meta property="og:description" content="A curated collection of timeless design spaces showcasing Edward Guillen's portfolio across various industries including healthcare, finance, technology, and music." />
        <meta property="og:image" content="https://edwardguillen.com/spaces/space-1.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Edward Guillen Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://edwardguillen.com/spaces" />
        <meta property="twitter:title" content="Timeless Spaces - Design Portfolio" />
        <meta property="twitter:description" content="A curated collection of timeless design spaces showcasing Edward Guillen's portfolio across various industries including healthcare, finance, technology, and music." />
        <meta property="twitter:image" content="https://edwardguillen.com/spaces/space-1.jpg" />
        
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
              "@type": "CreativeWork",
              "name": "Timeless Spaces - Design Portfolio",
              "description": "A curated collection of timeless design spaces showcasing Edward Guillen's portfolio across various industries including healthcare, finance, technology, and music.",
              "author": {
                "@type": "Person",
                "name": "Edward Guillen",
                "url": "https://edwardguillen.com"
              },
              "creator": {
                "@type": "Person",
                "name": "Edward Guillen"
              },
              "dateCreated": "2024",
              "genre": "Portfolio",
              "inLanguage": "en-US",
              "isPartOf": {
                "@type": "WebSite",
                "name": "Edward Guillen Portfolio",
                "url": "https://edwardguillen.com"
              },
              "image": {
                "@type": "ImageObject",
                "url": "https://edwardguillen.com/spaces/space-1.jpg",
                "width": 1200,
                "height": 630
              },
              "url": "https://edwardguillen.com/spaces",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://edwardguillen.com/spaces"
              },
              "about": [
                {
                  "@type": "Thing",
                  "name": "User Experience Design"
                },
                {
                  "@type": "Thing", 
                  "name": "User Interface Design"
                },
                {
                  "@type": "Thing",
                  "name": "Product Design"
                }
              ]
            })
          }}
        />
      </Head>
      <Nav />
      <div className="page spaces">
        <section className="spaces-header">
          <div className="container">
            <div className="prop-col"></div>
            <div className="prop-col">
              <Copy delay={1}>
                <h1>Timeless Spaces</h1>
              </Copy>
              <div className="prop-filters">
                <div className="filter default">
                  <Copy delay={1}>
                    <p className="lg">All</p>
                  </Copy>
                </div>
                <div className="filter">
                  <Copy delay={1.1}>
                    <p className="lg">Residential</p>
                  </Copy>
                </div>
                <div className="filter">
                  <Copy delay={1.2}>
                    <p className="lg">Commercial</p>
                  </Copy>
                </div>
                <div className="filter">
                  <Copy delay={1.3}>
                    <p className="lg">Hospitality</p>
                  </Copy>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="spaces-list">
          <div className="container" ref={spacesRef}>
            {spacesData.map((space, index) => (
              <a
                key={space.id}
                href={space.route}
                className="space"
                onClick={(e) => {
                  e.preventDefault();
                  navigateWithTransition(space.route);
                }}
              >
                <div className="space-img">
                  <img src={space.image} alt={space.name} />
                </div>
                <div className="space-info">
                  <div className="prop-info-col">
                    <div className="prop-date">
                      <p>{space.date}</p>
                    </div>
                  </div>
                  <div className="prop-info-col">
                    <div className="prop-info-sub-col">
                      <div className="prop-name">
                        <h3>{space.name}</h3>
                        <p className="lg">{space.location}</p>
                      </div>
                    </div>
                    <div className="prop-info-sub-col">
                      <div className="prop-client">
                        <div className="prop-client-img">
                          <img src={space.clientImage} alt={space.clientName} />
                        </div>
                        <div className="prop-client-name">
                          <p>{space.clientName}</p>
                        </div>
                      </div>
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
