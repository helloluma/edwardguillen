"use client";
import "./warner-music-group.css";

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
        <title>Warner Music Group - Music Platform UX Design | Edward Guillen</title>
        <meta name="title" content="Warner Music Group - Music Platform UX Design | Edward Guillen" />
        <meta name="description" content="A comprehensive case study of Warner Music Group's music marketing platform design. Led product design for unified asset management, streamlined workflows, and global team collaboration in the music industry." />
        <meta name="keywords" content="Warner Music Group, music platform, UX design, music marketing, asset management, team collaboration, music industry, Edward Guillen, product design, workflow optimization" />
        <meta name="author" content="Edward Guillen" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edwardguillen.com/warner-music-group" />
        <meta property="og:title" content="Warner Music Group - Music Platform UX Design" />
        <meta property="og:description" content="A comprehensive case study of Warner Music Group's music marketing platform design. Led product design for unified asset management, streamlined workflows, and global team collaboration." />
        <meta property="og:image" content="https://edwardguillen.com/assets/wmg-hero1.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Edward Guillen Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://edwardguillen.com/warner-music-group" />
        <meta property="twitter:title" content="Warner Music Group - Music Platform UX Design" />
        <meta property="twitter:description" content="A comprehensive case study of Warner Music Group's music marketing platform design. Led product design for unified asset management, streamlined workflows, and global team collaboration." />
        <meta property="twitter:image" content="https://edwardguillen.com/assets/wmg-hero1.jpg" />
        
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
              "name": "Warner Music Group - Music Platform UX Design",
              "description": "A comprehensive case study of Warner Music Group's music marketing platform design. Led product design for unified asset management, streamlined workflows, and global team collaboration in the music industry.",
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
                "url": "https://edwardguillen.com/assets/wmg-hero1.jpg",
                "width": 1200,
                "height": 630
              },
              "url": "https://edwardguillen.com/warner-music-group",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://edwardguillen.com/warner-music-group"
              },
              "about": {
                "@type": "Organization",
                "name": "Warner Music Group",
                "description": "Global Music Company",
                "industry": "Music and Entertainment",
                "foundingDate": "1958"
              }
            })
          }}
        />
      </Head>
      <Nav />
      <div className="page sample-space">
        <section className="sample-space-hero">
          <div className="sample-space-hero-img">
            <img src="/assets/wmg-hero1.jpg" alt="Warner Music Group Platform" />
          </div>
          <div className="sample-space-hero-overlay"></div>
          <div className="container">
            <div className="sample-space-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>Warner Music Group</h1>
              </Copy>
            </div>
            <div className="sample-space-content">
              <div className="sample-space-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>New York, New York</p>
                </Copy>
              </div>
              <div className="sample-space-col">
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <p>Music Platform & Artist Collaboration</p>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      A platform turns the natural rhythm of patient care into seamless documentation.
                    </h3>
                    <h3>
                    No more 'where's that file?' panic. I built the system that ended marketing mayhem.
                    </h3>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.1}>
                        <p>Date</p>
                        <p>2023</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.1}>
                        <p>Team</p>
                        <p>Product Manager</p>
                        <p>Eng. Lead</p>
                        <p>User Researcher</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Tools</p>
                        <p>Figma, User Research</p>
                        <p>Strategic Planning</p>
                        <p>FullStory Analytics</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Role</p>
                        <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '0.5rem' }}>Lead Product Designer</p>
                        <p>User Research & Strategic Planning</p>
                        <p>Information Architecture & User Flows</p>
                        <p>UI/UX Design & Visual Systems</p>
                        <p>Cross-Functional Collaboration</p>
                        <p>Design Mentorship & Development</p>
                      </Copy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Problem</p>
              </Copy>
            </div>
            
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h3 className="case-study-detail">
                It's 11:47 PM. Dua Lipa's single drops at midnight across 47 countries. The marketing manager is frantically digging through Slack threads, searching for the approved cover art that was 'definitely sent somewhere.' Three time zones away, the Sydney team is waiting. The clock is ticking.
                </h3>
                <h3 className="case-study-detail">
                 The deeper I dug, the messier it got. Marketing managers were burning out from playing digital detective every day. <em>'I spend more time hunting files than creating campaigns,'</em> one told me. Label executives were frustrated watching million-dollar launches get delayed over missing assets. The real problem wasn't the tool—it was the chaos everyone had learned to accept as normal.
                </h3>
              </Copy>
             

              
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Discovery Phase</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h3 className="case-study-detail">
                Staring at dozens of sticky notes, the pattern became impossible to ignore. Every team, every region, every role—they all had the same breaking point: the moment a file goes missing and everything stops. We weren't just mapping user needs, we were mapping the anatomy of chaos. The breakthrough: what if we could eliminate that moment entirely?
                </h3>
              </Copy>

              <div className="sample-space-details-img">
                <img src="/assets/wmg-1.png" alt="warner music group user research process personas" />
              </div>
              <div className="sample-space-details-img">
                <img src="/assets/wmg-2.png" alt="warner music group workshops" />
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
                <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.5rem', color: 'white' }}>
                The Solution Hunt
                </h4>
                <Copy delay={0.1}>
                <h3 className="case-study-detail">
                With the chaos mapped, we could finally hunt the solution. I traced every possible user journey, asking one question: 'Where would someone get stuck searching?' Every wireframe, every flow diagram was designed to kill that moment of panic. We weren't just designing screens—we were designing relief.
                </h3>
              </Copy>

               
              </Copy>

              

              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Approach</p>
                      <p>User research & workflow mapping</p>
                      <p>Cross-functional collaboration</p>
                      <p>Iterative design & testing</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Impact</p>
                      <p>488 active users (24.4% adoption)</p>
                      <p>3,253 hours saved monthly</p>
                      <p>45-100 min saved per user daily</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Deliverables</p>
                      <p>Storybox collaboration platform</p>
                      <p>571 active projects managed</p>
                      <p>Monthly stakeholder newsletter</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Stakeholders</p>
                      <p>Global marketing teams</p>
                      <p>2,000 potential users</p>
                      <p>2,455 products across regions</p>
                    </Copy>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>User Experience Strategy</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.15}>
                  <h3 className="case-study-detail">
                    I started with stakeholder and record label interviews to understand pain points, workflows, and industry challenges. Then, through affinity mapping, we clustered data, spotted patterns, and defined key problems. Finally, in the discovery phase, I mapped user flows, prioritized features, and brainstormed solutions, setting the stage for creating prototypes and testing ideas in a outcome-driven design.
                  </h3>
                </Copy>
              </div>

              <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.2}>
                  <h3 className="case-study-detail">
                    This UX research involved conducting stakeholder interviews to identify pain points, document key insights, and synthesize actionable outcomes. In parallel, interviews with record label teams helped me understand business models, document workflows, and identify industry challenges. These insights informed role matrices and workflow maps, ensuring the solution addressed user needs and streamlined processes.
                  </h3>
                </Copy>
              </div>

              <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.25}>
                  <h3 className="case-study-detail">
                    During the affinity mapping phase of our research, we conducted value proposition workshops to cluster insights, identify patterns, and define key problem statements. This collaborative effort allowed us to synthesize research findings, prioritize challenges, and align on a clear understanding of the product's unique value.
                  </h3>
                </Copy>
              </div>

              <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.3}>
                  <h3 className="case-study-detail">
                    I engaged in user flow mapping and feature prioritization to streamline the product experience, while visual brainstorming and team alignment exercises ensured collective clarity. Design requirements documentation and solution ideation, provided a solid foundation that led seamlessly into the creation of prototypes for testing and refinement.
                  </h3>
                </Copy>
              </div>

              <div className="sample-space-details-img">
                <img
                  src="/assets/wmg-4.svg"
                  alt="warner music low fidelity wireframes"
                />
              </div>

              <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.3}>
                  <h3 className="case-study-detail">
                  Every prototype was a experiment in chaos elimination. Round 1: users still hesitated. Round 2: still too many clicks to find things. Round 3: getting warmer—the 'where is it?' moment was shrinking. Each iteration wasn't just cleaner design, it was closer to that moment of relief we were hunting.
                  </h3>
                </Copy>
              </div>

              <div className="sample-space-details-img">
                <img
                  src="/assets/wmg-5.svg"
                  alt="warner music high fidelity wireframes"
                />
              </div>
              <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.3}>
                  <h3 className="case-study-detail">
                  The high-fidelity tests delivered the proof we needed. Marketing teams using our solution moved through campaigns like clockwork—no hunting, no hesitation, no panic. The A/B results were clear: we hadn't just built a tool, we'd built their lifeline. Time saved, stress eliminated, chaos conquered.
                  </h3>
                </Copy>
              </div>

            </div>
          </div>
        </section>
        
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Results & Impact</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h3 className="case-study-detail">
                  Storybox has reshaped how Warner Music Group's global marketing teams collaborate. With an adoption rate of 35%, the platform is already driving real efficiency gains by cutting down on back-and-forth and making communication smoother.
                </h3>
              </Copy>

              <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.15}>
                  <h3 className="case-study-detail">
                    On average, users are saving 3 to 5 minutes with each interaction, which adds up to roughly 3,253 hours saved across the organization every month. That's a big deal when you're managing 571 active projects and over 2,400 products across two regions. Most users are saving between 45 and 100 minutes a day just by avoiding scattered conversations and duplicate work.
                  </h3>
                </Copy>
              </div>

              <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.2}>
                  <h3 className="case-study-detail">
                    Looking ahead, there's still a lot of opportunity. With more than 2,000 potential users, Storybox is well positioned to grow. Its steady adoption and the time it's saving across the board show that it's become an essential part of how Warner Music Group runs its marketing operations.
                  </h3>
                </Copy>
              </div>

            
            

              <div className="testimonial" style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                gap: '2rem', 
                marginBottom: '2rem',
                flexWrap: 'wrap'
              }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <Copy delay={0.4}>
                    <blockquote style={{ 
                      fontSize: '16px', 
                      lineHeight: '1.6', 
                      fontStyle: 'italic', 
                      color: 'white', 
                      borderLeft: '3px solid #7C6139', 
                      paddingLeft: '1rem', 
                      margin: '1rem 0' 
                    }}>
                      "Storybox has completely transformed how we work. I used to spend 2-3 hours every day just hunting for files and trying to track down approvals. Now I can find everything in seconds and my team saves at least 90 minutes daily. It's like having a personal assistant that never sleeps."
                    </blockquote>
                  </Copy>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <Copy delay={0.45}>
                    <p style={{ fontSize: '14px', color: '#ccc', marginTop: '1rem' }}>
                      — Sarah Chen, Marketing Manager, Warner Music Group
                    </p>
                  </Copy>
                </div>
              </div>
            </div>
          </div>
        </section>
        
       
        
        <CTAWindow
          img="/featured-projects/featured-work-1.jpg"
          header="Next Project"
          callout="Prudential"
          description="Streamlining the insurance onboarding experience through intuitive design and user-centered workflows."
          link="prudential"
        />
        <ConditionalFooter />
      </div>
    </>
  );
};

export default page;
