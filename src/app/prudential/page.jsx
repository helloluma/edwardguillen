"use client";
import "./prudential.css";

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
        <title>Prudential Onboarding Experience - UX Design Case Study | Edward Guillen</title>
        <meta name="title" content="Prudential Onboarding Experience - UX Design Case Study | Edward Guillen" />
        <meta name="description" content="A comprehensive UX design case study for Prudential's customer onboarding experience. Led design strategy to improve user engagement and reduce drop-off rates in the financial services sector." />
        <meta name="keywords" content="Prudential, UX design, onboarding, financial services, case study, Edward Guillen, user experience, insurance, fintech" />
        <meta name="author" content="Edward Guillen" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edwardguillen.com/prudential" />
        <meta property="og:title" content="Prudential Onboarding Experience - UX Design Case Study" />
        <meta property="og:description" content="A comprehensive UX design case study for Prudential's customer onboarding experience. Led design strategy to improve user engagement and reduce drop-off rates." />
        <meta property="og:image" content="https://edwardguillen.com/assets/prudential-social-preview.jpg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="800" />
        <meta property="og:site_name" content="Edward Guillen Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://edwardguillen.com/prudential" />
        <meta property="twitter:title" content="Prudential Onboarding Experience - UX Design Case Study" />
        <meta property="twitter:description" content="A comprehensive UX design case study for Prudential's customer onboarding experience. Led design strategy to improve user engagement and reduce drop-off rates." />
        <meta property="twitter:image" content="https://edwardguillen.com/assets/prudential-social-preview.jpg" />
        
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
              "name": "Prudential Onboarding Experience - UX Design Case Study",
              "description": "A comprehensive UX design case study for Prudential's customer onboarding experience. Led design strategy to improve user engagement and reduce drop-off rates in the financial services sector.",
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
                "url": "https://edwardguillen.com/assets/prudential-hero1.jpg",
                "width": 1200,
                "height": 630
              },
              "url": "https://edwardguillen.com/prudential",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://edwardguillen.com/prudential"
              },
              "about": {
                "@type": "Organization",
                "name": "Prudential",
                "description": "Financial Services Company",
                "industry": "Insurance and Financial Services"
              }
            })
          }}
        />
      </Head>
      <Nav />
      <div className="page sample-space">
        <section className="sample-space-hero">
          <div className="sample-space-hero-img">
            <img src="/assets/prudential-hero1.jpg" alt="Prudential Onboarding Experience" />
          </div>
          <div className="sample-space-hero-overlay"></div>
          <div className="container">
            <div className="sample-space-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>Prudential</h1>
              </Copy>
            </div>
            <div className="sample-space-content">
              <div className="sample-space-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>Newark, New Jersey</p>
                </Copy>
              </div>
              <div className="sample-space-col">
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <p>Digital Onboarding Experience</p>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      At Prudential, I led the redesign/development of their digital onboarding experience, creating a streamlined process that reduced drop-off rates and improved customer satisfaction.
                    </h3>
                    <h3>
                      The challenge was simplifying a complex financial onboarding process while maintaining regulatory compliance and building trust with new customers.
                    </h3>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Date Completed</p>
                        <p>2025</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Project Type</p>
                        <p>UX Design</p>
                        <p>UX Research</p>
                        <p>UX Engineering</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Team</p>
                        <p>Product Team</p>
                        <p>Accessibility</p>
                        <p>Compliance</p>
                        
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Tools</p>
                        <p>Figma</p>
                        <p>Sublime Text</p>
                        <p>UserTesting</p>
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
                  After 15+ minutes filling out complex insurance forms, 53% of Prudential users abandoned their applications at submission. While our 47% conversion rate beat industry averages (16-18%), we were still losing $2.1M quarterly and leaving thousands of families without needed coverage.
                </h3>

                <h3 className="case-study-detail">
                  The challenge wasn't just improving completion rates—it was redesigning a complex regulatory process that could build trust at every step while maintaining strict compliance requirements. We needed to transform what felt like bureaucratic paperwork into a guided, confidence-building experience.
                </h3>
              </Copy>
              
              <div className="performance-data" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.15}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    The Performance Reality Check:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>2023:</strong> 56.9% conversion rate (4,302 opens → 2,448 completions)
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>2024:</strong> 47.2% conversion rate (3,965 opens → 1,872 completions)
                    </li>
                    <li>
                      <strong>Industry Benchmark:</strong> Most insurance forms see 80-84% abandonment rates
                    </li>
                  </ul>
                </Copy>
              </div>

              <div className="sample-space-details-img">
                <img src="/assets/pru-1.svg" alt="Prudential onboarding user journey" />
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
                    Jobs-to-be-Done Research Revealed:
                  </h4>
                  <h3 className="case-study-detail">
                 Primary Job: "When I've spent 15+ minutes entering personal information, I want to review and verify everything is correct before submitting so I can feel confident I haven't made errors that could affect my coverage."
                  </h3>
                </Copy>

                <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                  <Copy delay={0.15}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Key Pain Points Discovered:
                    </h4>
                    <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Progressive Disclosure:</strong> Break complex forms into digestible steps with clear progress indicators
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Smart Validation:</strong> Real-time error checking with helpful, non-threatening messaging
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Review & Confirm:</strong> Comprehensive summary page before final submission
                      </li>
                      <li>
                        <strong>Trust Building:</strong> Security badges, clear data usage policies, and transparent next steps
                      </li>
                    </ul>
                  </Copy>

                  <div style={{ marginTop: '1.5rem' }}>
                    <AnimatedButton
                      label="Figma Designs"
                      route="https://www.figma.com/design/5QvFaAXfBQaaJsR36uMUQA/Ed-2025?node-id=17069-5371"
                      animateOnScroll={false}
                    />
                  </div>
                  
                </div>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Approach</p>
                      <p>Jobs-to-be-Done research</p>
                      <p>Progressive disclosure design</p>
                      <p>Trust-building UX patterns</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Impact</p>
                      <p>9.7% conversion increase</p>
                      <p>Reduced form anxiety</p>
                      <p>Higher completion confidence</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Deliverables</p>
                      <p>JTBD research insights</p>
                      <p>Multi-step form flows</p>
                      <p>Review & confirm screens</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Stakeholders</p>
                      <p>Product managers</p>
                      <p>UX research team</p>
                      <p>Compliance & legal</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/assets/pru-2.png"
                  alt="Prudential onboarding wireframes"
                />
              </div>
              
             
             
            </div>
          </div>
        </section>
         <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>The Design Challenge</p>
              </Copy>
            </div>
            <div className="sample-space-col">
               <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                  <Copy delay={0.15}>
                        <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
                     Option 1: Comprehensive Summary <span style={{ color: 'red' }}>(Failed)</span><br/>The All-Info Approach: Show every detail entered
                     </h4>
                    <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Result:</strong> Analysis paralysis, overwhelming on mobile
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>User Feedback:</strong> "Too much information, I got lost"
                      </li>
                    </ul>
                  </Copy>
                </div>
        
              <div className="sample-space-details-img">
                <img
                  src="/assets/pru-3.svg"
                  alt="Option Design 1"
                />
              </div>

              <div className="solution-approach" style={{ marginBottom: '2rem' }}>

             
                  <Copy delay={0.15}>
                         <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
                         Option 2: Tabbed Navigation <span style={{ color: 'red' }}>(Failed)</span><br/>The Free-Form Approach: Let users jump between sections
                     </h4>
                    <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>User Testing:</strong> Clear preference in 12 user interviews
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Technical Feasible:</strong> Worked within existing CMS limitations
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Mobile Optimized:</strong> Single-column flow with progressive disclosure
                      </li>
                    </ul>
                  </Copy>
                </div>
        
              <div className="sample-space-details-img">
                <img
                  src="/assets/pru-4.svg"
                  alt="Option Design 2"
                />
              </div>

            
              <div className="solution-approach" style={{ marginBottom: '2rem' }}>

             
<Copy delay={0.15}>
       <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
       Option 3: Hybrid Review-Checkout <span style={{ color: 'green' }}>(Approved for development)</span><br/>The Smart Approach: Essential info + integrated payment
   </h4>
  <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
    <li style={{ marginBottom: '0.5rem' }}>
      <strong>Technical Constraints:</strong>  Legacy PHP couldn't support real-time tab updates
    </li>
    <li style={{ marginBottom: '0.5rem' }}>
      <strong>UX Issues:</strong> Users skipped required sections, validation problems
    </li>
    <li style={{ marginBottom: '0.5rem' }}>
      <strong>Mobile Failure:</strong> Tab navigation broke on smaller screens
    </li>
  </ul>
</Copy>
<br />
<Copy delay={0.15}>
        <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
        Design Principles Applied:
    </h4>
   <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
     <li style={{ marginBottom: '0.5rem' }}>
       <strong>Cognitive Load Reduction:</strong> Show only essential verification points
     </li>
     <li style={{ marginBottom: '0.5rem' }}>
       <strong>Progressive Disclosure:</strong> Detailed info available but not forced
     </li>
     <li style={{ marginBottom: '0.5rem' }}>
       <strong>Trust Building:</strong> Clear value proposition and cost breakdown
     </li>
     <li style={{ marginBottom: '0.5rem' }}>
       <strong>Mobile-First:</strong> Optimized for 61% of our mobile users
     </li>
   </ul>
 </Copy>
<br />
   <Copy delay={0.15}>
         <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
         Key Features:
     </h4>
    <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
      <li style={{ marginBottom: '0.5rem' }}>
        <strong>Essential Information Only:</strong> Coverage amount, premium, beneficiary names/percentages
      </li>
      <li style={{ marginBottom: '0.5rem' }}>
        <strong>Integrated Payment:</strong> Combined review + payment reduces friction
      </li>
      <li style={{ marginBottom: '0.5rem' }}>
        <strong>Health Confirmation Checkbox:</strong> Leverages commitment consistency principle
      </li>
      <li style={{ marginBottom: '0.5rem' }}>
        <strong>Transparent Cost Breakdown:</strong> Builds trust through clarity
      </li>
    </ul>
  </Copy>



  <div className="sample-space-details-img">
                <img
                  src="/assets/pru-5.svg"
                  alt="Option Design 3"
                />
              </div>

              <div style={{ marginTop: '2rem', marginBottom: '4rem' }}>
                <AnimatedButton
                  label="View More"
                  route="/assets/dev/prudential-summary.html"
                  animateOnScroll={false}
                />
              </div>

</div>

             
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>The Results</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.5rem', color: 'white' }}>
                  Data-Driven Solution with Significant Recovery:
                  </h4>
                  <h3 className="case-study-detail">
                  Based on real performance data and supported by UX research, this hybrid approach reduced abandonment by 12%-17% points, significantly improving AWL recovery.
                  </h3>
                </Copy>

                <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                  <Copy delay={0.15}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    What Made This Work:
                    </h4>
                    <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Smart Information Design:</strong> Only show what users need to verify decisions
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Beneficiary Optimization:</strong> Name + relationship + percentage split (addresses collected later)
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Payment Integration:</strong> Combined review + checkout reduces abandonment by 30%
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Progressive Disclosure:</strong> Edit functionality available but not forced
                      </li>
                      <li>
                        <strong>Accessibility Excellence:</strong> Full WCAG 2.1 AA compliance maintained throughout
                      </li>
                    </ul>
                  </Copy>
                </div>
              
                <div className="sample-space-details-img">
                <img
                  src="/assets/pru-6.svg"
                  alt="Results Graphic"
                />
              </div>


               <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                   <Copy delay={0.15}>
                     <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                     The Psychology Behind Success<br/>Why This Works:
                     </h4>
                     <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                       <li style={{ marginBottom: '0.5rem' }}>
                         <strong>Commitment Consistency Principle:</strong> Active confirmation creates 86.7% follow-through vs. 61.5% passive
                       </li>
                       <li style={{ marginBottom: '0.5rem' }}>
                         <strong>Cognitive Load Theory:</strong> Reduced from 15+ decision points to 5 essential ones
                       </li>
                       <li style={{ marginBottom: '0.5rem' }}>
                         <strong>Progressive Disclosure:</strong> 70% of users never needed detailed view
                       </li>
                       <li>
                         <strong>Loss Aversion:</strong> Clear cost breakdown reduced "buyer's remorse" anxiety
                       </li>
                     </ul>
                   </Copy>
                 </div>
              
                <div className="sample-space-details-img">
                <img
                  src="/assets/pru-7.svg"
                  alt="Results Graphic"
                />
              </div>

               <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                    <Copy delay={0.15}>
                      <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                      Next Steps & Learnings<br/>Immediate Roadmap:
                      </h4>
                      <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                          <strong>Expand to Other Products:</strong> Apply component to existing complex form journeys
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                          <strong>Personalization Layer:</strong> Dynamic review based on user risk profile
                        </li>
                        <li>
                          <strong>Predictive Analytics:</strong> Identify abandonment risk earlier in flow
                        </li>
                      </ul>
                      <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'white', marginTop: '1rem' }}>
                        <strong>Key Takeaway:</strong><br/>
                        Users don't need more information - they need the right information at the right time. By focusing on essential decision-making elements rather than comprehensive transparency, we reduced cognitive load while actually increasing user confidence.
                      </p>
                    </Copy>
                  </div>

                  <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                    <Copy delay={0.15}>
                      <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
                        Impact Beyond Numbers
                      </h4>
                      <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'white', marginBottom: '1rem' }}>
                        This project delivered more than conversion improvements:
                      </p>
                      <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                          <strong>For Users:</strong> Simplified a stressful process, helping 800+ additional families secure life insurance coverage.
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                          <strong>For Business:</strong> Created a scalable pattern now used across all Prudential association products.
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                          <strong>For Team:</strong> Demonstrated how UX research + technical constraints can drive innovative solutions.
                        </li>
                        <li>
                          <strong>Personal Growth:</strong> Proved that designer-developer hybrids can deliver end-to-end solutions that actually ship.
                        </li>
                      </ul>
                      
                    </Copy>
                  </div>

                  <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                    <Copy delay={0.15}>
                      <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.5rem', color: 'white' }}>
                        Technical Implementation: Designer-Developer Hybrid
                      </h4>
                      <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'white', marginBottom: '1.5rem' }}>
                        <strong>The Challenge:</strong> Build within legacy PHP/CMS constraints while delivering modern UX.
                      </p>
                      
                      <div style={{ marginBottom: '1.5rem' }}>
                        <h5 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '0.5rem', color: 'white' }}>
                          What I Built:
                        </h5>
                        <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                          <li style={{ marginBottom: '0.5rem' }}>
                            Modified existing form processing to support hybrid review
                          </li>
                          <li style={{ marginBottom: '0.5rem' }}>
                            Edit overlays that work without breaking legacy code
                          </li>
                          <li style={{ marginBottom: '0.5rem' }}>
                            Mobile-first responsive layouts
                          </li>
                          <li>
                            Complex form state management without full page refreshes
                          </li>
                        </ul>
                      </div>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <h5 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '0.5rem', color: 'white' }}>
                          Key Constraints Solved:
                        </h5>
                        <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                          <li style={{ marginBottom: '0.5rem' }}>
                            <strong>Legacy PHP Integration:</strong> Worked within existing codebase architecture
                          </li>
                          <li style={{ marginBottom: '0.5rem' }}>
                            <strong>ADA Compliance:</strong> Maintained WCAG 2.1 AA standards throughout
                          </li>
                          <li style={{ marginBottom: '0.5rem' }}>
                            <strong>Performance:</strong> Fast load times on older infrastructure
                          </li>
                          <li>
                            <strong>Cross-Browser Support:</strong> Functionality across all target browsers
                          </li>
                        </ul>
                      </div>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <h5 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '0.5rem', color: 'white' }}>
                          Why Designer-Developer Combo Mattered:
                        </h5>
                        <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                          <li style={{ marginBottom: '0.5rem' }}>
                            No handoff delays - immediate implementation of design changes
                          </li>
                          <li style={{ marginBottom: '0.5rem' }}>
                            Designed within real constraints - not ideal scenarios
                          </li>
                          <li>
                            Pixel-perfect implementation matching design vision
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '0.5rem', color: 'white' }}>
                          What I'd Do Differently:
                        </h5>
                        <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                          <li style={{ marginBottom: '0.5rem' }}>
                            Earlier A/B testing validation
                          </li>
                          <li style={{ marginBottom: '0.5rem' }}>
                            More granular micro-interaction analytics
                          </li>
                          <li>
                            Dynamic review based on user risk profile
                          </li>
                        </ul>
                      </div>
                    </Copy>
                  </div>

                  <div style={{ marginTop: '2rem', marginBottom: '4rem' }}>
                    <AnimatedButton
                      label="View HTML"
                      route="/assets/dev/prudential-summary.html"
                      animateOnScroll={false}
                    />
                  </div>

                
             
             
            </div>
          </div>
        </section>
        
        <section className="sample-space-details" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="container">
            <div className="sample-space-details-content">
              <div className="sample-space-details-text">
                <Copy delay={0.1}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1.5rem', color: 'white', textAlign: 'center' }}>
                    Testimonial
                  </h4>
                  <blockquote style={{ 
                    fontSize: '18px', 
                    lineHeight: '1.6', 
                    color: 'white', 
                    fontStyle: 'italic',
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '0 auto',
                    paddingLeft: '2rem',
                    paddingRight: '2rem',
                    borderLeft: '3px solid white',
                    paddingBottom: '1rem'
                  }}>
                    "Edward designed and developed a new review page that streamlined user interactions and improved overall satisfaction. His thorough research and exceptional design skills created enhanced clarity and a more intuitive interface. Edward is a great asset to the team, consistently contributing high-quality work while fostering a collaborative environment."
                  </blockquote>
                  <p style={{ 
                    fontSize: '16px', 
                    color: 'white', 
                    textAlign: 'center',
                    marginTop: '1.5rem',
                    fontWeight: 'bold'
                  }}>
                    — Thomas Hannula, UX Engineer, Prudential
                  </p>
                </Copy>
              </div>
            </div>
          </div>
        </section>

        <CTAWindow
          img="/featured-projects/featured-work-2.jpg"
          header="Next Project"
          callout="OnOctave"
          description="Designing a comprehensive music creation platform that puts creativity and collaboration at the center of the experience."
          link="/onoctave"
        />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
