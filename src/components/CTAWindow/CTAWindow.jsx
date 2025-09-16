"use client";
import "./CTAWindow.css";

import Copy from "../Copy/Copy";
import { useViewTransition } from "@/hooks/useViewTransition";

const CTAWindow = ({ img, header, callout, description, link }) => {
  const { navigateWithTransition } = useViewTransition();

  const handleClick = () => {
    if (link) {
      navigateWithTransition(link);
    }
  };

  return (
    <section 
      className="cta-window" 
      onClick={handleClick}
      style={{ cursor: link ? 'pointer' : 'default' }}
    >
      <div className="container">
        <div className="cta-window-img-wrapper">
          <img src={img} alt="" />
        </div>
        <div className="cta-window-img-overlay"></div>
        <div className="cta-window-header">
          <Copy delay={0.1}>
            <h1>{header}</h1>
          </Copy>
        </div>
        <div className="cta-window-footer">
          <div className="cta-window-callout">
            <Copy delay={0.1}>
              <h3>{callout}</h3>
            </Copy>
          </div>
          <div className="cta-window-description">
            <Copy delay={0.1}>
              <p>{description}</p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAWindow;
