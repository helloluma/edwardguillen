"use client";
import "./contact.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page contact">
        <section className="contact-hero">
          <div className="container">
            <div className="contact-col">
              <div className="contact-hero-header">
                <Copy delay={0.85}>
                  <h1>All spaces begin with intention</h1>
                </Copy>
              </div>
              <div className="contact-copy-year">
                <Copy delay={0.1}>
                  <h1>&copy;25</h1>
                </Copy>
              </div>
            </div>
            <div className="contact-col">
              <div className="contact-info">
                <div className="contact-info-block">
                  <Copy delay={0.85}>
                    <p>General</p>
                    <p><a href="mailto:hello@edwardguillen.com" className="ulink">hello@edwardguillen.com</a></p>
                    <p><a href="/assets/EdwardGuillen-Resume.pdf" target="_blank" rel="noopener noreferrer" className="ulink">Resume</a></p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1.3}>
                    <p>Social</p>
                    <p><a href="https://www.linkedin.com/in/edward-guillen311/" target="_blank" rel="noopener noreferrer" className="ulink">LinkedIn</a></p>
                    <p><a href="https://dribbble.com/edwardguillen" target="_blank" rel="noopener noreferrer" className="ulink">Dribbble</a></p>
                    <p><a href="https://www.instagram.com/lalo_parade/" target="_blank" rel="noopener noreferrer" className="ulink">Instagram</a></p>
                    <p><a href="https://open.spotify.com/artist/4gzee1kqd06h5IklHX0mir?si=oKy7D4BDRjKEK6q42dx1AQ" target="_blank" rel="noopener noreferrer" className="ulink">Spotify</a></p>
                  </Copy>
                </div>
              </div>
              <div className="contact-img">
                <img
                  src="/contact/contact-img.jpg"
                  alt="Terrene studio workspace"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
