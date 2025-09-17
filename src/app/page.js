"use client";
import "./index.css";
import "./preloader.css";
import { useRef, useState, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
 

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";


let isInitialLoad = true;
gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");


export default function Home() {
  const tagsRef = useRef(null);
  // Start hidden; we will decide to show dynamically based on heuristics
  const [showPreloader, setShowPreloader] = useState(false);
  const [loaderAnimating, setLoaderAnimating] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    // Decide if we should show the preloader dynamically
    // Heuristics: first visit OR slow network OR slow critical asset readiness (>450ms)
    const controller = new AbortController();
    const signal = controller.signal;

    const decide = async () => {
      try {
        const visited = typeof window !== "undefined" && sessionStorage.getItem("visited") === "1";
        const conn = typeof navigator !== "undefined" && (navigator.connection || navigator.mozConnection || navigator.webkitConnection);
        const effectiveType = conn && conn.effectiveType ? String(conn.effectiveType).toLowerCase() : "";
        const isSlowNetwork = !!conn && (effectiveType.includes("2g") || effectiveType.includes("slow") || conn.saveData === true);

        const criticalImages = Array.from(document.querySelectorAll(".hero-bg img"));
        const imagePromises = criticalImages.map((img) => (img.decode ? img.decode().catch(() => {}) : Promise.resolve()));
        const fontsPromise = document.fonts && document.fonts.ready ? document.fonts.ready.catch(() => {}) : Promise.resolve();

        // Always show on very first visit
        if (!visited) {
          if (!signal.aborted) setShowPreloader(true);
        } else {
          // Subsequent visits: only show if things are slow
          const readyPromise = Promise.allSettled([fontsPromise, ...imagePromises]);
          const timeout = new Promise((resolve) => setTimeout(resolve, 450));
          const result = await Promise.race([readyPromise, timeout]);
          const shouldShow = (isSlowNetwork && result === undefined) || result === undefined; // timeout won
          if (!signal.aborted && shouldShow) {
            setShowPreloader(true);
          }
        }

        // Mark session as visited after first render cycle
        if (!visited) {
          sessionStorage.setItem("visited", "1");
        }
      } catch (_) {
        // Fail safe: never block rendering
      }
    };

    decide();

    return () => {
      controller.abort();
      isInitialLoad = false;
    };
  }, []);

  useEffect(() => {
    if (lenis) {
      if (loaderAnimating) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [lenis, loaderAnimating]);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
    });

    if (showPreloader) {
      setLoaderAnimating(true);
      const counts = document.querySelectorAll(".count");

      counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");

        tl.to(
          digits,
          {
            y: "0%",
            duration: 1,
            stagger: 0.075,
          },
          index * 1
        );

        if (index < counts.length) {
          tl.to(
            digits,
            {
              y: "-100%",
              duration: 1,
              stagger: 0.075,
            },
            index * 1 + 1
          );
        }
      });

      tl.to(".spinner", {
        opacity: 0,
        duration: 0.3,
      });

      tl.to(
        ".word h1",
        {
          y: "0%",
          duration: 1,
        },
        "<"
      );

      tl.to(".divider", {
        scaleY: "100%",
        duration: 1,
        onComplete: () =>
          gsap.to(".divider", { opacity: 0, duration: 0.3, delay: 0.3 }),
      });

      tl.to("#word-1 h1", {
        y: "100%",
        duration: 1,
        delay: 0.3,
      });

      tl.to(
        "#word-2 h1",
        {
          y: "-100%",
          duration: 1,
        },
        "<"
      );

      tl.to(
        ".block",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.75,
          onStart: () => {
            gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" });
          },
          onComplete: () => {
            gsap.set(".loader", { pointerEvents: "none" });
            setLoaderAnimating(false);
          },
        },
        "<"
      );
    }
  }, [showPreloader]);

  useGSAP(
    () => {
      if (!tagsRef.current) return;

      const tags = tagsRef.current.querySelectorAll(".what-we-do-tag");
      gsap.set(tags, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: tagsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(tags, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }),
      });
    },
    { scope: tagsRef }
  );

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Edward Guillen",
            "jobTitle": "Product Designer, UX Engineer, AI Consultant",
            "description":
              "Product Designer with 13+ years experience specializing in UX/UI design, AI integration, and user-centered digital products.",
            "url": "https://edwardguillen.com",
            "image": "https://edwardguillen.com/home/hero.jpg",
            "sameAs": ["https://dribbble.com/edwardguillen"],
            "knowsAbout": [
              "User Experience Design",
              "User Interface Design",
              "Product Design",
              "Artificial Intelligence",
              "UX Strategy",
              "Frontend Development",
              "Motion Design",
              "Healthcare Technology",
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Product Designer",
              "description":
                "Designing digital products that put people first, using research and creativity to solve real problems in simple, natural ways.",
            },
            "worksFor": [
              { "@type": "Organization", "name": "Prudential" },
              { "@type": "Organization", "name": "Cisco" },
              { "@type": "Organization", "name": "Warner Music Group" },
            ],
            "alumniOf": [{ "@type": "Organization", "name": "Tenet Healthcare" }],
          }),
        }}
      />
      {showPreloader && (
        <div className="loader">
          <div className="overlay">
            <div className="block"></div>
            <div className="block"></div>
          </div>
          <div className="intro-logo">
            <div className="word" id="word-1">
              <h1>
                <span>Edward</span>
              </h1>
            </div>
            <div className="word" id="word-2">
              <h1>Guillen</h1>
            </div>
          </div>
          <div className="divider"></div>
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
          <div className="counter">
            <div className="count">
              <div className="digit">
                <h1>0</h1>
              </div>
              <div className="digit">
                <h1>0</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>2</h1>
              </div>
              <div className="digit">
                <h1>7</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>6</h1>
              </div>
              <div className="digit">
                <h1>5</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>9</h1>
              </div>
              <div className="digit">
                <h1>8</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>9</h1>
              </div>
              <div className="digit">
                <h1>9</h1>
              </div>
            </div>
          </div>
        </div>
      )}
      <Nav />
      <section className="hero">
        <div className="hero-bg">
          <img src="/home/hero.jpg" alt="" />
        </div>
        <div className="hero-gradient"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-header">
              <Copy animateOnScroll={false} delay={showPreloader ? 10 : 0.85}>
                <h1>Product Designer, UX Engineer, AI Consultant</h1>
              </Copy>
            </div>
            <div className="hero-tagline">
              <Copy animateOnScroll={false} delay={showPreloader ? 10.15 : 1}>
                <p>
                Currently at Prudential, previously at Cisco, Warner Music Group, Tenet Healthcare and a handful of emerging tech startups.
                </p>
              </Copy>
            </div>
            <AnimatedButton
              label="Learn More"
              route="/about"
              animateOnScroll={false}
              delay={showPreloader ? 10.3 : 1.15}
              className="hide-on-mobile"
            />
          </div>
        </div>
        <div className="hero-stats">
          <div className="container">
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.1}>
                  <h2>13+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.15}>
                  <p>Years of design experience</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.2}>
                  <h2>50+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.25}>
                  <p>Products designed & launched</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.3}>
                  <h2>5</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.35}>
                  <p>Fortune 500 companies</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.4}>
                  <h2>30%</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.45}>
                  <p>Average user engagement increase</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.5}>
                  <h2>3</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.55}>
                  <p>Artificial Intelligence products</p>
                </Copy>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="what-we-do">
        <div className="container">
          <div className="what-we-do-header">
            <Copy delay={0.1}>
              <h1>
                <span className="spacer">&nbsp;</span>
                I create digital products that put people first, using research and creativity to solve real problems in simple, natural ways.
              </h1>
            </Copy>
          </div>
          <div className="what-we-do-content">
            <div className="what-we-do-col">
              <Copy delay={0.1}>
                <p>About Edward</p>
              </Copy>

              <Copy delay={0.15}>
                <p className="lg">
                I’ve built a mix of skills across leadership, UX strategy, frontend development, UX/UI design, research, motion design, and B2C advertising. But at the end of the day, what I enjoy most is building strong team culture and driving innovation; because when your team works well together, it’s pretty remarkable what you can build and the problems you can solve for your users.
                </p>
              </Copy>
            </div>
            <div className="what-we-do-col">
              <div className="what-we-do-tags" ref={tagsRef}>
                <div className="what-we-do-tag">
                  <h3>User-centered</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Data-driven</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Accessible</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>AI-enhanced</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Scalable systems</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Cross-platform</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-projects-container">
        <div className="container">
          <div className="featured-projects-header-callout">
            <Copy delay={0.1}>
              <p>Featured work</p>
            </Copy>
          </div>
          <div className="featured-projects-header">
            <Copy delay={0.15}>
              <h2>A selection of completed case studies</h2>
            </Copy>
          </div>
        </div>
        <FeaturedProjects />
      </section>

      <section className="gallery-callout">
        <div className="container">
          <div className="gallery-callout-col">
            <div className="gallery-callout-row">
              <div className="gallery-callout-img gallery-callout-img-1">
                <img src="/gallery-callout/gallery-callout-1.jpg" alt="" />
              </div>
              <div className="gallery-callout-img gallery-callout-img-2">
                <img src="/gallery-callout/gallery-callout-2.jpg" alt="" />
                <div className="gallery-callout-img-content">
                  <h3>300+</h3>
                  <p>Project Images</p>
                </div>
              </div>
            </div>
            <div className="gallery-callout-row">
              <div className="gallery-callout-img gallery-callout-img-3">
                <img src="/gallery-callout/gallery-callout-3.jpg" alt="" />
              </div>
              <div className="gallery-callout-img gallery-callout-img-4">
                <img src="/gallery-callout/gallery-callout-4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gallery-callout-col">
            <div className="gallery-callout-copy">
              <Copy delay={0.1}>
                <h3>
                  A collection of completed work across design, motion, and print. No case studies, just the visuals.
                </h3>
              </Copy>
              <AnimatedButton label="Explore Visuals" route="https://dribbble.com/edwardguillen" />
            </div>
          </div>
        </div>
      </section>

      <ConditionalFooter />
    </>
  );
}
