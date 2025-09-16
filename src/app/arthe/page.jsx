"use client";
import "./arthe.css";

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
        <title>Arthe - AI-Powered Healthcare Documentation Platform | Edward Guillen</title>
        <meta name="title" content="Arthe - AI-Powered Healthcare Documentation Platform | Edward Guillen" />
        <meta name="description" content="A comprehensive case study of Arthe, an AI-powered documentation platform that transforms patient care into seamless documentation. Led UX strategic innovation for healthcare providers." />
        <meta name="keywords" content="Arthe, healthcare, AI, documentation platform, UX design, patient care, healthcare technology, Edward Guillen, product design" />
        <meta name="author" content="Edward Guillen" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edwardguillen.com/arthe" />
        <meta property="og:title" content="Arthe - AI-Powered Healthcare Documentation Platform" />
        <meta property="og:description" content="A platform that turns the natural rhythm of patient care into seamless documentation. Led UX strategic innovation for a cross-functional healthcare team." />
        <meta property="og:image" content="https://edwardguillen.com/assets/arthe-hero1.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Edward Guillen Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://edwardguillen.com/arthe" />
        <meta property="twitter:title" content="Arthe - AI-Powered Healthcare Documentation Platform" />
        <meta property="twitter:description" content="A platform that turns the natural rhythm of patient care into seamless documentation. Led UX strategic innovation for a cross-functional healthcare team." />
        <meta property="twitter:image" content="https://edwardguillen.com/assets/arthe-hero1.jpg" />
        
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
              "name": "Arthe - AI-Powered Healthcare Documentation Platform",
              "description": "A platform that turns the natural rhythm of patient care into seamless documentation. Led UX strategic innovation for a cross-functional healthcare team.",
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
                "url": "https://edwardguillen.com/assets/arthe-hero1.jpg",
                "width": 1200,
                "height": 630
              },
              "url": "https://edwardguillen.com/arthe",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://edwardguillen.com/arthe"
              },
              "about": {
                "@type": "SoftwareApplication",
                "name": "Arthe",
                "description": "AI-Powered Healthcare Documentation Platform",
                "applicationCategory": "Healthcare Technology",
                "operatingSystem": "Web"
              }
            })
          }}
        />
      </Head>
      <Nav />
      <div className="page sample-space">
        <section className="sample-space-hero">
          <div className="sample-space-hero-img">
            <img src="/assets/arthe-hero1.jpg" alt="Arthe Platform" />
          </div>
          <div className="sample-space-hero-overlay"></div>
          <div className="container">
            <div className="sample-space-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>Arthe</h1>
              </Copy>
            </div>
            <div className="sample-space-content">
              <div className="sample-space-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>Dallas, Texas</p>
                </Copy>
              </div>
              <div className="sample-space-col">
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <p>AI-Powered Documentation Platform</p>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      A platform turns the natural rhythm of patient care into seamless documentation.
                    </h3>
                    <h3>
                      I led the UX strategic innovation for a cross-functional group that I assembled, including healthcare professionals, developers, designers, and a product manager to create Arthe, an AI-powered documentation solution that directly addressed the daily challenges faced by healthcare providers and their patients.
                    </h3>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.1}>
                        <p>Date</p>
                        <p>2025</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.1}>
                        <p>Team</p>
                        <p>Cross-functional Group</p>
                        <p>Healthcare Professionals</p>
                        <p>Developers & Designers</p>
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
                        <p>AI Integration</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Role</p>
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
                <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.5rem', color: 'white' }}>
                  Time. The one thing doctors can't prescribe themselves.
                </h4>
                <h3 className="case-study-detail">
                  Every year, we ask physicians to do more with less of it. The future of healthcare shouldn't force us to choose between being efficient and being human.
                </h3>
              </Copy>
              
              <div className="performance-data" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.15}>
                  <div style={{ 
                    display: 'flex', 
                    gap: '4rem', 
                    marginBottom: '1rem', 
                    alignItems: 'center', 
                    justifyContent: 'flex-start',
                    flexWrap: 'nowrap',
                    minWidth: 'fit-content'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem',
                      flexShrink: 0,
                      whiteSpace: 'nowrap'
                    }}>
                      <h4 style={{ 
                        fontWeight: 'bold', 
                        fontSize: '32px', 
                        margin: 0, 
                        color: 'white', 
                        lineHeight: '1',
                        flexShrink: 0
                      }}>40%</h4>
                      <p style={{ 
                        fontSize: '16px', 
                        color: 'white', 
                        margin: 0, 
                        fontWeight: '500',
                        flexShrink: 0
                      }}>Adoption Rate</p>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem',
                      flexShrink: 0,
                      whiteSpace: 'nowrap'
                    }}>
                      <h4 style={{ 
                        fontWeight: 'bold', 
                        fontSize: '32px', 
                        margin: 0, 
                        color: 'white', 
                        lineHeight: '1',
                        flexShrink: 0
                      }}>25%</h4>
                      <p style={{ 
                        fontSize: '16px', 
                        color: 'white', 
                        margin: 0, 
                        fontWeight: '500',
                        flexShrink: 0
                      }}>Patient Satisfaction</p>
                    </div>
                  </div>
                </Copy>
              </div>

              
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
                  Our journey began with stakeholder insights, moving to hands-on research with hospital staff and patients. This 6-week process gave us the foundation for everything that followed.
                </h3>
              </Copy>

              <div className="user-centered-methods" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.15}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
                    Through <strong>user-centered design methods</strong>, we:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      Identified critical pain points in current systems
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      Mapped doctor-patient documentation flows
                    </li>
                    <li>
                      Prioritized features based on user impact
                    </li>
                  </ul>
                </Copy>
              </div>

              <div className="weekly-activities" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.2}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Weekly Activities:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Week 1:</strong> 5 stakeholder interviews
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Week 2:</strong> 12 hospital staff shadowing
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Week 4:</strong> 28 patient interviews started
                    </li>
                    <li>
                      <strong>Week 6:</strong> 45 total sessions initiated
                    </li>
                  </ul>
                </Copy>
              </div>

              <div className="sample-space-details-img">
                <img src="/assets/arthe-1.png" alt="Arthe healthcare platform user research process" />
              </div>

              <div className="problem-breakdown" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.25}>
                  <div style={{ display: 'flex', gap: '3rem', marginBottom: '2rem' }}>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
                        Problem for Patients
                      </h4>
                      <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                          Visits feel rushed, with less face-to-face time with doctors
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                          Harder to ask questions and understand their health
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                          No easy way to review what was discussed during visits
                        </li>
                        <li>
                          Concerns about the privacy and security of their medical records
                        </li>
                      </ul>
                    </div><br/>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
                        Problem for Healthcare Workers
                      </h4>
                      <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                          Doctors and Clinicians spend too much time on paperwork
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                          Less time to talk with and care for patients
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                          Overworked and unhappy healthcare workers
                        </li>
                        <li>
                          Current solutions don't work well and aren't secure
                        </li>
                      </ul>
                    </div>
                  </div>
                </Copy>
              </div>

              <div className="sample-space-details-img">
                <img src="/assets/arthe-2.png" alt="Arthe platform design process and user research insights" />
              </div>

              
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>The Solution: Arthe</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.5rem', color: 'white' }}>
                  AI-Powered Documentation Platform
                </h4>
               
              </Copy>

              <div className="core-features" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.15}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Arthe Features:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                    Utilizes AI to streamline clinical documentation, allowing healthcare professionals to dictate notes effortlessly
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                    Optimizes time management and minimizes errors, enabling doctors to dedicate more time to patient care
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                    Empowers patients with comprehensive visit summaries and AI-assisted support for follow-up questions
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                    Employs blockchain technology to ensure records are secure, tamper-proof, and easily auditable
                    </li>
                  </ul>
                </Copy>
              </div>

              <div className="technical-architecture" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.2}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Technical Architecture:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>ReactJS PWA:</strong> Cross-platform compatibility with offline access capabilities
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>AWS Hosting:</strong> Secure cloud infrastructure with HIPAA-compliant data handling
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>AssemblyAI Integration:</strong> Advanced speech-to-text and entity recognition
                    </li>
                    <li>
                      <strong>Pinata Blockchain:</strong> Decentralized storage ensuring data integrity and security
                    </li>
                  </ul>
                </Copy>
              </div>

              <div className="sample-space-details-img">
                <img src="/assets/arthe-3.png" alt="Arthe healthcare platform wireframes and user flow diagrams" />
              </div>
              
              <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.25}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Solution: AI-Powered Documentation Platform
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Voice-to-Text Processing:</strong> Real-time transcription during patient consultations
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Smart Context Awareness:</strong> AI understands medical terminology and patient context
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Automated Note Generation:</strong> Creates structured clinical notes from voice input
                    </li>
                    <li>
                      <strong>Secure Data Management:</strong> Blockchain-encrypted storage with audit trails
                    </li>
                  </ul>
                </Copy>
              </div>

              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Approach</p>
                      <p>User-centered design</p>
                      <p>Healthcare workflow analysis</p>
                      <p>AI integration strategy</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Impact</p>
                      <p>40% faster documentation</p>
                      <p>25% improved patient satisfaction</p>
                      <p>Reduced administrative burden</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Deliverables</p>
                      <p>UX research insights</p>
                      <p>Technical architecture</p>
                      <p>Healthcare platform designs</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Stakeholders</p>
                      <p>Healthcare professionals</p>
                      <p>Hospital administrators</p>
                      <p>Patient community</p>
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
                <p>Technical Discovery</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.15}>
                  <h3 className="case-study-detail">
                    While heading up UX strategy, I made key decisions about our tech stack: ReactJS, AWS, AssemblyAI, and Pinata. This balanced our requirements with budget constraints, enabling secure authentication, AI processing, and decentralized storage. The PWA approach with ReactJS gave us offline access and cross-platform compatibility, though it meant working around push notification and camera limitations. Understanding these boundaries early helped shape realistic UX decisions throughout development.
                  </h3>
                </Copy>
              </div>

              <div className="sample-space-details-img">
                <img
                  src="/assets/arthe-4.png"
                  alt="Arthe technical discovery and development process"
                />
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
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
                  Low-Fidelity Wireframes
                  </h4>
                  <h3 className="case-study-detail">
                  Starting with the core UI components, we designed wireframes focusing on a seamless user flow - from the initial user onboarding screen through the connection interface, to the main voice recording dashboard with a prominent timer, and finally to the results display and summary views, enabling us to quickly test the essential voice-to-text features.
                  </h3>
                </Copy>           
              </div>

              <div className="sample-space-details-img">
                <img
                  src="/assets/arthe-6.svg"
                  alt="wireframes"
                />
              </div>

              <div className="solution-approach" style={{ marginBottom: '3rem' }}>
                <Copy delay={0.15}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
                    User Testing & Feedback
                  </h4>
                  <h3 className="case-study-detail">
                    Once we had a functional UI in place, we were able to conduct extensive testing and gather usability interview feedback.
                  </h3>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>40+ hours of recorded sessions</li>
                    <li style={{ marginBottom: '0.5rem' }}>30 remote usability studies</li>
                    <li style={{ marginBottom: '0.5rem' }}>Alpha testing with 50 physicians</li>
                    <li>Patient feedback groups</li>
                  </ul>
                </Copy>
              </div>

              <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.15}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
                    Final Physician Designs
                  </h4>
                  <h3 className="case-study-detail">
                    While working through feedback cycles, we built a lean design library alongside everything else. It became our efficiency toolkit - ready-to-use components that let us move quickly without compromising quality. When feature requests came in, we'd pull from the library and adapt, keeping our work consistent and cutting development time in half.
                  </h3>
                </Copy>
              </div>

               <div className="sample-space-details-img">

               <img
                   src="/assets/arthe-7.png"
                   alt="high fidelity mockups"
                 />

                 <img
                   src="/assets/arthe-8.png"
                   alt="high fidelity mockups"
                 />
                  
                  <img
                   src="/assets/arthe-9.svg"
                   alt="high fidelity mockups"
                 />
               </div>

               <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                 <Copy delay={0.15}>
                   <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
                     Final Patient Designs
                   </h4>
                   <h3 className="case-study-detail">
                     For our initial iOS release, we focused on native-first design patterns and interactions. The interface leverages familiar iOS gestures and behaviors. We created reusable design components specifically for iOS, ensuring consistency across iPhone models. Android development was planned for a later phase in our roadmap.
                   </h3>
                 </Copy>
               </div>

      <div className="sample-space-details-img">

               <img
                   src="/assets/arthe-10.png"
                   alt="high fidelity mockups"
                 />
                 
                 <img
                   src="/assets/arthe-11.svg"
                   alt="patient high fidelity mockups"
                 />
                                    
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
                <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.5rem', color: 'white' }}>
                  The Results
                </h4>
                <h3 className="case-study-detail">
                  Arthe saves time and money while improving the healthcare experience for everyone involved.
                </h3>
              </Copy>

              <div className="performance-data" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.15}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Key Metrics:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Documentation Time Reduction:</strong> 46% reduction from 13 minutes to 7-10 minutes per patient
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Clinician Satisfaction:</strong> Increased by 40%
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Patient Satisfaction:</strong> Scores went up by 25%
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Clinical Note Errors:</strong> Decreased by 25%
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Security:</strong> Maintained zero security breaches
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Recommendations:</strong> 80% of clinicians now recommend the system
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Patient Understanding:</strong> 70% of patients report better understanding of their health
                    </li>
                    <li>
                      <strong>Time Savings:</strong> 5 extra hours per week for patient care
                    </li>
                  </ul>
                </Copy>
              </div>

              <div className="qualitative-impact" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.2}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Key Learnings:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Simple isn't always simple:</strong> Achieving a simple user experience often requires complex backend solutions, powered by sophisticated AI and blockchain technology.
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Listen to your users:</strong> Best features emerged from casual comments during testing, such as a doctor's suggestion for hand gestures when hands were sterile, which became a key feature.
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Design for the ecosystem:</strong> The design process considered all stakeholders: doctors, nurses, patients, IT staff, and administrators, ensuring seamless collaboration.
                    </li>
                    <li>
                      <strong>Empathy is everything:</strong> Understanding the stress and pressure of healthcare environments significantly shaped every design decision.
                    </li>
                  </ul>
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
                      "The interface is so intuitive and calming. As someone managing chronic pain, I can easily track my symptoms and communicate with my care team without feeling overwhelmed. It's like having a personal health companion."
                    </blockquote>
                  </Copy>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <Copy delay={0.45}>
                    <p style={{ fontSize: '14px', color: '#ccc', marginTop: '1rem' }}>
                      — Maria Rodriguez, Patient
                    </p>
                  </Copy>
                </div>
              </div>
            </div>
          </div>
        </section>
        
       
        
        <CTAWindow
          img="/featured-projects/featured-work-4.jpg"
          header="Next Project"
          callout="Warner Music Group"
          description="Designing a comprehensive music creation platform that puts creativity and collaboration at the center of the experience."
          link="/warner-music-group"
        />
        <ConditionalFooter />
      </div>
    </>
  );
};

export default page;
