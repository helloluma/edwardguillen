"use client";
import "./cisco.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import Head from "next/head";


const page = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Cisco Visual Storytelling - UX Design Case Study | Edward Guillen</title>
        <meta name="title" content="Cisco Visual Storytelling - UX Design Case Study | Edward Guillen" />
        <meta name="description" content="A comprehensive UX design case study for Cisco's visual storytelling platform. Led design strategy to enhance user engagement and improve content discovery in enterprise technology." />
        <meta name="keywords" content="Cisco, UX design, visual storytelling, enterprise technology, case study, Edward Guillen, user experience, content discovery, B2B design" />
        <meta name="author" content="Edward Guillen" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edwardguillen.com/cisco" />
        <meta property="og:title" content="Cisco Visual Storytelling - UX Design Case Study" />
        <meta property="og:description" content="A comprehensive UX design case study for Cisco's visual storytelling platform. Led design strategy to enhance user engagement and improve content discovery." />
        <meta property="og:image" content="https://edwardguillen.com/assets/cisco-hero.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Edward Guillen Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://edwardguillen.com/cisco" />
        <meta property="twitter:title" content="Cisco Visual Storytelling - UX Design Case Study" />
        <meta property="twitter:description" content="A comprehensive UX design case study for Cisco's visual storytelling platform. Led design strategy to enhance user engagement and improve content discovery." />
        <meta property="twitter:image" content="https://edwardguillen.com/assets/cisco-hero.jpg" />
        
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
              "name": "Cisco Visual Storytelling - UX Design Case Study",
              "description": "A comprehensive UX design case study for Cisco's visual storytelling platform. Led design strategy to enhance user engagement and improve content discovery in enterprise technology.",
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
              "genre": "Case Study",
              "inLanguage": "en-US",
              "isPartOf": {
                "@type": "WebSite",
                "name": "Edward Guillen Portfolio",
                "url": "https://edwardguillen.com"
              },
              "image": {
                "@type": "ImageObject",
                "url": "https://edwardguillen.com/assets/cisco-hero.jpg",
                "width": 1200,
                "height": 630
              },
              "url": "https://edwardguillen.com/cisco",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://edwardguillen.com/cisco"
              },
              "about": {
                "@type": "Organization",
                "name": "Cisco",
                "description": "Technology Company",
                "industry": "Enterprise Technology and Networking"
              }
            })
          }}
        />
      </Head>
      <Nav />
      <div className="page sample-space">
        <section className="sample-space-hero">
          <div className="sample-space-hero-img">
            <img src="/assets/cisco-hero.jpg" alt="Cisco Visual Storytelling" />
          </div>
          <div className="sample-space-hero-overlay"></div>
          <div className="container">
            <div className="sample-space-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>Cisco</h1>
              </Copy>
            </div>
            <div className="sample-space-content">
              <div className="sample-space-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>San Jose, California</p>
                </Copy>
              </div>
              <div className="sample-space-col">
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <p>Visual Storytelling for Leadership</p>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      At Cisco, I transformed complex technical roadmaps into clear visual stories, helping leadership make faster, more informed decisions.
                    </h3>
                    <h3>
                      The challenge was translating intricate technology concepts into digestible visual narratives that could drive strategic alignment across diverse stakeholder groups.
                    </h3>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Date Completed</p>
                        <p>2023</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Project Type</p>
                        <p>Visual Communication</p>
                        <p>Strategic Design</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Team</p>
                        <p>Product Strategy</p>
                        <p>Engineering Leadership</p>
                        <p>Executive Team</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Tools</p>
                        <p>Figma</p>
                        <p>Keynote</p>
                        <p>Miro</p>
                      </Copy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-1">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>The Challenge</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h3 className="case-study-detail">
                  Cisco's leadership needed a way to communicate complex technical roadmaps and strategic initiatives across diverse teams. Traditional documents and presentations weren't cutting through the noise.
                </h3>

                <h3 className="case-study-detail">
                  The solution required translating technical complexity into visual narratives that could drive alignment, accelerate decision-making, and ensure everyone understood the bigger picture.
                </h3>
              </Copy>
              <div className="sample-space-details-img">
                <img src="/assets/cisco-1.jpg" alt="Cisco visual storytelling process" />
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>The Solution</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h3 className="case-study-detail">
                  I was brought in specifically for my expertise in Duarte storytelling methods. My mission was taking those dense technical roadmaps and transforming them into visual narratives that leadership could grasp immediately.
                </h3>

                <h3 className="case-study-detail">
                  I helped bridge the gap between what is and what could be, turning complex technical documentation into accessible, engaging visual content that served real strategic purposes. The work went beyond just creating designs. I was enabling better decision-making by making technical complexity digestible for executive audiences.
                </h3>
              </Copy>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Approach</p>
                      <p>Visual hierarchy</p>
                      <p>Information architecture</p>
                      <p>Narrative flow</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Impact</p>
                      <p>Faster decisions</p>
                      <p>Clear alignment</p>
                      <p>Strategic clarity</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Deliverables</p>
                      <p>Executive presentations</p>
                      <p>Technical roadmaps</p>
                      <p>Strategy visualizations</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Stakeholders</p>
                      <p>C-suite executives</p>
                      <p>Product teams</p>
                      <p>Engineering leads</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/assets/cisco-2.jpg"
                  alt="Cisco strategic visualizations"
                />
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/assets/cisco-3.jpg"
                  alt="Cisco visual design process"
                />
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/assets/cisco-4.jpg"
                  alt="Cisco magentic design library"
                />
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/assets/cisco-5.jpg"
                  alt="Cisco visual framework examples"
                />
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/assets/cisco-6.jpg"
                  alt="Cisco strategic communications"
                />
              </div>
              <Copy delay={0.2}>
                <h3 className="case-study-detail">
                  Even though it was only a 4-month contract, working directly with C-suite leadership taught me a tremendous amount about how executives think, prioritize, and communicate vision across an organization.
                </h3>
                <h3 className="case-study-detail">
                  Really, I was helping them move from "here's a bunch of technical information" to "<em>here's the compelling story of our transformation</em>" using proven storytelling frameworks to make the complex feel simple and the future feel achievable.
                </h3>
                <h3 className="case-study-detail">
                  This experience showed me how powerful it is to operate at the intersection of technology and business strategy, especially when you can translate technical roadmaps into narratives that actually move people to action.
                </h3>
              </Copy>
              <div style={{ marginTop: '2rem', marginBottom: '4rem' }}>
                <AnimatedButton
                  label="View More Cisco"
                  route="https://dribbble.com/shots/22327189-Cisco-Design-Plan"
                  animateOnScroll={false}
                />
              </div>
            </div>
          </div>
        </section>
        <CTAWindow
          img="/featured-projects/featured-work-5.jpg"
          header="Next Project"
          callout="AI-Powered Clinical Documentation"
          description="Leading UX strategy for an AI documentation solution that balanced efficiency, accuracy, and the human side of healthcare."
        />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
