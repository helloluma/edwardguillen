"use client";
import "./Footer.css";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useViewTransition } from "@/hooks/useViewTransition";
import Copy from "../Copy/Copy";

import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiDribbbleLine } from "react-icons/ri";
import { RiSpotifyLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { navigateWithTransition } = useViewTransition();
  const socialIconsRef = useRef(null);

  useGSAP(
    () => {
      if (!socialIconsRef.current) return;

      const icons = socialIconsRef.current.querySelectorAll(".icon");
      gsap.set(icons, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: socialIconsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(icons, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: -0.1,
          ease: "power3.out",
        }),
      });
    },
    { scope: socialIconsRef }
  );

  return (
    <div className="footer">
      <div className="footer-meta">
        <div className="container footer-meta-header">
          <div className="footer-meta-col">
            <div className="footer-meta-block">
              <div className="footer-meta-logo">
                <div className="footer-name-with-image">
                  <img 
                    src="/logos/edwardguillen.gif" 
                    alt="Edward Guillen" 
                  />
                  <Copy delay={0.1}>
                    <h3 className="lg">Edward</h3>
                  </Copy>
                </div>
              </div>
              <Copy delay={0.2}>
                <h2>Product Designer, UX Engineer, AI Consultant</h2>
              </Copy>
            </div>
          </div>
          <div className="footer-meta-col">
            <div className="footer-nav-links">
              <Copy delay={0.1}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/");
                  }}
                >
                  <h3>Index</h3>
                </a>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/about");
                  }}
                >
                  <h3>About</h3>
                </a>
                <a
                  href="/case-studies"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/case-studies");
                  }}
                >
                  <h3>Case Studies</h3>
                </a>
                <a
                  href="https://dribbble.com/edwardguillen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Visuals</h3>
                </a>
                <a
                  href="https://articles.edwardguillen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Articles</h3>
                </a>
                <a
                  href="mailto:hello@edwardguillen.com"
                >
                  <h3>Email</h3>
                </a>
                
              </Copy>
            </div>
          </div>
        </div>
        <div className="container footer-socials">
          <div className="footer-meta-col">
            <div className="footer-socials-wrapper" ref={socialIconsRef}>
              <a href="https://www.linkedin.com/in/edward-guillen311/" target="_blank" rel="noopener noreferrer" className="icon">
                <RiLinkedinBoxLine />
              </a>
              <a href="https://dribbble.com/edwardguillen" target="_blank" rel="noopener noreferrer" className="icon">
                <RiDribbbleLine />
              </a>
              <a href="https://www.instagram.com/lalo_parade/" target="_blank" rel="noopener noreferrer" className="icon">
                <RiInstagramLine />
              </a>
              <a href="https://open.spotify.com/artist/4gzee1kqd06h5IklHX0mir?si=oKy7D4BDRjKEK6q42dx1AQ" target="_blank" rel="noopener noreferrer" className="icon">
                <RiSpotifyLine />
              </a>
            </div>
          </div>
          <div className="footer-meta-col">
            <Copy delay={0.1}>
              <p>
              Currently at Prudential, previously at Cisco, Warner Music Group, Tenet Healthcare and a handful of emerging tech startups.
              </p>
            </Copy>
          </div>
        </div>
      </div>
      <div className="footer-outro">
        <div className="container">
          <div className="footer-header">
            <img src="/logos/edward-footer-logo.svg" alt="" />
          </div>
          <div className="footer-copyright">
            <p>
              Developed by <span className="footer-dash">—</span> 
              <span className="footer-copyright-name-with-image">
                Edward Guillen
              </span>
            </p>
            <p>This website is using cookies.</p>
            <p>All rights reserved &copy; 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
