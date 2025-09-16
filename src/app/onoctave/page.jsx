"use client";
import "./onoctave.css";

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
        <title>OnOctave Music Platform - UX Design Case Study | Edward Guillen</title>
        <meta name="title" content="OnOctave Music Platform - UX Design Case Study | Edward Guillen" />
        <meta name="description" content="A comprehensive UX design case study for OnOctave, a music creation platform that puts creativity and collaboration at the center of the experience. Led design strategy for Warner Music Group." />
        <meta name="keywords" content="OnOctave, music platform, Warner Music Group, UX design, case study, Edward Guillen, music technology, collaboration, creativity, B2C design" />
        <meta name="author" content="Edward Guillen" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edwardguillen.com/onoctave" />
        <meta property="og:title" content="OnOctave Music Platform - UX Design Case Study" />
        <meta property="og:description" content="A comprehensive UX design case study for OnOctave, a music creation platform that puts creativity and collaboration at the center of the experience." />
        <meta property="og:image" content="https://edwardguillen.com/assets/onoctave-hero1.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Edward Guillen Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://edwardguillen.com/onoctave" />
        <meta property="twitter:title" content="OnOctave Music Platform - UX Design Case Study" />
        <meta property="twitter:description" content="A comprehensive UX design case study for OnOctave, a music creation platform that puts creativity and collaboration at the center of the experience." />
        <meta property="twitter:image" content="https://edwardguillen.com/assets/onoctave-hero1.jpg" />
        
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
              "name": "OnOctave Music Platform - UX Design Case Study",
              "description": "A comprehensive UX design case study for OnOctave, a music creation platform that puts creativity and collaboration at the center of the experience. Led design strategy for Warner Music Group.",
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
                "url": "https://edwardguillen.com/assets/onoctave-hero1.jpg",
                "width": 1200,
                "height": 630
              },
              "url": "https://edwardguillen.com/onoctave",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://edwardguillen.com/onoctave"
              },
              "about": {
                "@type": "SoftwareApplication",
                "name": "OnOctave",
                "description": "Music Creation Platform",
                "applicationCategory": "Music Technology",
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
            <img src="/assets/onoctave-hero1.jpg" alt="OnOctave Music Platform" />
          </div>
          <div className="sample-space-hero-overlay"></div>
          <div className="container">
            <div className="sample-space-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>OnOctave</h1>
              </Copy>
            </div>
            <div className="sample-space-content">
              <div className="sample-space-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>Los Angeles, California</p>
                </Copy>
              </div>
              <div className="sample-space-col">
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <p>Music Monetization Platform</p>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      OnOctave is a social media platform specifically for musicians where fans support artists through micro-transactions ($0.10 - $5.00), enabling immediate monetization regardless of follower count.
                    </h3>
                    <h3>
                      The challenge was creating a platform that could bridge the gap between emerging artists and their fans, enabling direct monetization without the barriers of traditional music industry gatekeepers.
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
                        <p>Founding Designer</p>
                        <p>10-person lean team</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Tools</p>
                        <p>Figma, Principle</p>
                        <p>iOS Native Development</p>
                        <p>User Research</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Role</p>
                        <p>UX Strategist & Branding</p>
                        <p>Founding Designer</p>
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
                <p>The Challenge</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.5rem', color: 'white' }}>
                  Emerging musicians face a critical monetization barrier in today's digital landscape
                </h4>
                <h3 className="case-study-detail">
                  Artists with 2,000-10,000 fans cannot effectively monetize their work on existing platforms like Spotify (requires thousands of plays) or YouTube (high follower thresholds). The reality: musicians maintain day jobs to support their artistic pursuits instead of earning from their craft.
                </h3>
              </Copy>
              
              <div className="performance-data" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.15}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    The Music Industry Reality Check:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Spotify:</strong> Need millions of streams for meaningful revenue ($0.003-0.005 per stream)
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>YouTube:</strong> High monetization thresholds (1,000 subscribers + 4,000 watch hours)
                    </li>
                    <li>
                      <strong>Reality:</strong> Talented artists work day jobs while building their audience
                    </li>
                  </ul>
                </Copy>
              </div>

              <div className="ux-challenge" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.2}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
                    Key UX Challenge: Solving Tipping Anxiety
                  </h4>
                  <h3 className="case-study-detail">
                    Through beta testing with emerging artists (100-1,000 fans), we identified critical psychological barriers preventing fans from supporting artists through micro-payments.
                  </h3>
                </Copy>
              </div>

              <div className="psychological-barriers" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.25}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    The Psychological Barriers Discovered:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Fan Anxiety:</strong> Users experienced decision paralysis when choosing tip amounts
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Artist Pressure:</strong> Small artist communities meant individual tipping amounts were highly visible
                    </li>
                    <li>
                      <strong>Social Dynamics:</strong> Fear of tipping "too little" or "too much" relative to other fans
                    </li>
                  </ul>
                </Copy>
              </div>

              <div className="sample-space-details-img">
                <img src="/assets/onoctave-1.svg" alt="OnOctave music platform user journey" />
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
                  TikTok for Musicians with Micro-Tipping
                </h4>
                <h3 className="case-study-detail">
                  Created a social media platform specifically for musicians where fans support artists through micro-transactions ($0.10 - $5.00), enabling immediate monetization regardless of follower count.
                </h3>
              </Copy>

              <div className="core-features" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.15}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Core Features:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Video/audio content feed</strong> (TikTok-style interface)
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Micro-tipping system</strong> with predefined amounts
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Monthly artist payouts</strong> with zero platform fees
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Wallet-based payment system</strong> for seamless transactions
                    </li>
                    <li>
                      <strong>Celebrity endorsement network</strong> for launch credibility
                    </li>
                  </ul>
                </Copy>
              </div>

              <div className="research-process" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.2}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Research Process:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Initial Testing:</strong> Broad range of amounts ($0.05 - $10.00)
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>User Feedback:</strong> Identified optimal "comfort zone" amounts through beta testing
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Iterative Refinement:</strong> Tested specific combinations with real users
                    </li>
                    <li>
                      <strong>Final Selection:</strong> $0.10, $0.50, $1.00, $3.00, $5.00 based on user comfort and artist expectations
                    </li>
                  </ul>
                </Copy>
              </div>

              <div className="sample-space-details-img">
                <img
                  src="/assets/onoctave-2.svg"
                  alt="OnOctave user research insights and design process"
                />
              </div>
              
              <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.25}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Solution: Predefined Tipping Models
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Carefully tested preset amounts</strong> that normalized tipping behavior
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Reduced decision paralysis by 68%</strong> through standardized options
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Created a "tipping culture"</strong> where all amounts felt socially acceptable
                    </li>
                    <li>
                      <strong>Iterative refinement</strong> based on continuous beta feedback
                    </li>
                  </ul>
                </Copy>
              </div>

              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Approach</p>
                      <p>User research & testing</p>
                      <p>Micro-payment UX design</p>
                      <p>Social platform integration</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Impact</p>
                      <p>78% tipping adoption rate</p>
                      <p>68% reduction in decision paralysis</p>
                      <p>$1.23 average tip amount</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Deliverables</p>
                      <p>User research insights</p>
                      <p>Payment flow prototypes</p>
                      <p>Social platform designs</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Stakeholders</p>
                      <p>Founding team</p>
                      <p>Music artists</p>
                      <p>Fan community</p>
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
                <p>Wallet System Innovation</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <div className="solution-approach" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.15}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem', color: 'white' }}>
                    From Friction to Flow: Turning micro-payments into moments of joy
                  </h4>
                  <h3 className="case-study-detail">
                    The solution required transforming the entire payment experience from a transactional process into an emotional, supportive interaction that felt like applause rather than a purchase.
                  </h3>
                </Copy>

                <div className="wallet-challenge" style={{ marginBottom: '2rem' }}>
                  <Copy delay={0.2}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                      The Challenge:
                    </h4>
                    <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Multiple small card charges</strong> created friction and potential banking fees
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Users hesitated to tip frequently</strong> due to transaction overhead
                      </li>
                      <li>
                        <strong>Card decline rates were higher</strong> for micro-transactions
                      </li>
                    </ul>
                  </Copy>
                </div>

                <div className="wallet-solution" style={{ marginBottom: '2rem' }}>
                  <Copy delay={0.25}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                      The Solution:
                    </h4>
                    <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Lump Sum Loading:</strong> Users pre-load wallet with $20, $50, or $100
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Seamless Deduction:</strong> Tips instantly deducted from wallet balance
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Psychological Benefit:</strong> Pre-loaded money felt "already spent," reducing tip hesitation
                      </li>
                      <li>
                        <strong>Technical Benefit:</strong> Reduced processing costs and improved transaction success rates
                      </li>
                    </ul>
                  </Copy>
                </div>
              </div>

              <div className="sample-space-details-img">
                <img
                  src="/assets/onoctave-3.svg"
                  alt="OnOctave wallet system and payment flow"
                />
              </div>

              <div className="sample-space-details-img">
                <img
                  src="/assets/onoctave-3B.png"
                  alt="Workshop Sessions & Strategy Mapping"
                />
              </div>


              <div className="implementation" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.3}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Implementation:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Apple Pay integration</strong> for easy wallet loading
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Real-time balance tracking</strong> with spending insights
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Low balance notifications</strong> to maintain tipping capability
                    </li>
                    <li>
                      <strong>Monthly spending reports</strong> for budget-conscious users
                    </li>
                  </ul>
                </Copy>
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
                    Design Philosophy: "Seamless Support"
                  </h4>
                  <h3 className="case-study-detail">
                    Making financial transactions feel like natural expressions of appreciation rather than commercial exchanges.
                  </h3>
                </Copy>

                <div className="interface-design" style={{ marginBottom: '2rem' }}>
                  <Copy delay={0.2}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                      Interface Design Solutions:
                    </h4>
                    <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Contextual tipping buttons</strong> that appear based on engagement signals
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Subtle heart-shaped tip icon</strong> that scales with user interaction time
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>One-tap tipping</strong> with haptic feedback for satisfaction
                      </li>
                      <li>
                        <strong>Visual animations</strong> showing impact ("Your $1 helps Sarah buy studio time!")
                      </li>
                    </ul>
                  </Copy>
                </div>

                <div className="user-segmentation" style={{ marginBottom: '2rem' }}>
                  <Copy delay={0.25}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                      User Segmentation:
                    </h4>
                    <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Casual Listeners:</strong> Lower-commitment options ($0.10-$0.50) with social proof
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Dedicated Fans:</strong> Higher-value options ($1.00-$5.00) with "Super Fan" status
                      </li>
                      <li>
                        <strong>Artist Supporters:</strong> Bulk tipping and charity donation routing capabilities
                      </li>
                    </ul>
                  </Copy>
                </div>
              </div>

              <div className="sample-space-details-img">
                <img
                  src="/assets/onoctave-4.png"
                  alt="dev site map"
                />
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/assets/onoctave-5.svg"
                  alt="site map"
                />
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/assets/onoctave-6.svg"
                  alt="site map"
                />
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/assets/onoctave-7.png"
                  alt="high fidelity mockups"
                />
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/assets/onoctave-8.png"
                  alt="high fidelity mockups"
                />
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/assets/onoctave-9.png"
                  alt="high fidelity mockups"
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
                  Transforming Music Monetization for Emerging Artists
                </h4>
                <h3 className="case-study-detail">
                  OnOctave successfully bridged the gap between fan appreciation and artist monetization by treating tipping as social interaction rather than payment processing. The platform transformed how emerging artists build sustainable careers in the digital music economy.
                </h3>
              </Copy>

              <div className="performance-data" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.15}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Quantitative Results:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>78% tipping adoption rate</strong> within first week of beta testing
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>$1.23 average tip amount</strong> per transaction
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>84% monthly user retention</strong> (significantly above industry average)
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>67% completion rate</strong> for tip transactions
                    </li>
                    <li>
                      <strong>92% artist satisfaction</strong> with improved income vs. traditional platforms
                    </li>
                  </ul>
                </Copy>
              </div>

              <div className="qualitative-impact" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.2}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Qualitative Impact:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Artists with 3,000-5,000 followers earned average of $340 monthly</strong>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>30-day time to first payout</strong> vs. months/years on traditional platforms
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>156% increase in fan engagement</strong> compared to social media platforms
                    </li>
                    <li>
                      <strong>89% of beta artists</strong> committed to continue using platform post-launch
                    </li>
                  </ul>
                </Copy>
              </div>

              <div className="technical-excellence" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.25}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Technical Excellence:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>End-to-end encryption</strong> for all financial transactions
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>PCI DSS compliant</strong> payment processing
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Real-time earnings tracking</strong> for artists
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Automated monthly payout</strong> system
                    </li>
                    <li>
                      <strong>Scalable architecture</strong> for celebrity endorsement integration
                    </li>
                  </ul>
                </Copy>
              </div>
              
              <div className="sample-space-details-img">
                <video
                  src="/assets/video/OnOctave-Tip-Success.webm"
                  alt="OnOctave Results and Impact"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

              <div className="key-learnings" style={{ marginBottom: '2rem' }}>
                <Copy delay={0.3}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem', color: 'white' }}>
                    Key Learnings:
                  </h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '1.5rem', color: 'white' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Emotional connection</strong> over transactional features drives adoption
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Predefined options</strong> significantly reduce user anxiety in financial interactions
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Wallet systems</strong> solve both technical and psychological barriers
                    </li>
                    <li>
                      <strong>Community visibility</strong> requires careful balance between transparency and pressure
                    </li>
                  </ul>
                  
                  <p style={{ fontSize: '16px', lineHeight: '1.6', marginTop: '1.5rem', color: 'white' }}>
                    While OnOctave featured numerous innovative capabilities, this tipping system represented the cornerstone feature that the founders identified as critical to their microtransaction strategy. Beyond the core UX design, I developed comprehensive animation and motion design specifications that I seamlessly transitioned to the native app engineering team. This collaborative handoff ensured pixel-perfect implementation while maintaining design integrity across platforms. Working on such a forward-thinking fintech startup was an incredibly rewarding experience that pushed the boundaries of user-centered design.
                  </p>
                </Copy>
              </div>
              
              <div style={{ marginTop: '1.5rem' }}>
                    <AnimatedButton
                      label="Figma Designs"
                      route="https://www.figma.com/design/5QvFaAXfBQaaJsR36uMUQA/Ed-2025?node-id=17074-2007"
                      animateOnScroll={false}
                    />
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
                      "The suggested amounts are perfect - I don't have to think about what's appropriate anymore. Before, I'd stare at the screen for like a full minute wondering if $2 was too cheap."
                    </blockquote>
                  </Copy>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <Copy delay={0.45}>
                    <p style={{ fontSize: '14px', color: '#ccc', marginTop: '1rem' }}>
                      — Sarah Chen, Beta User
                    </p>
                  </Copy>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
        <CTAWindow
          img="/featured-projects/featured-work-3.jpg"
          header="Next Project"
          callout="Arthe"
          description="I led the UX Strategy/design of an AI documentation solution that balanced efficiency, accuracy, and the human side of healthcare."
          link="/arthe"
        />
        <ConditionalFooter />
        </div>
      </div>
    </>
  );
};

export default page;
