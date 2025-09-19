"use client";
import { useTransitionRouter } from "next-view-transitions";

export const useViewTransition = () => {
  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "scale(1)",
        },
        {
          opacity: 0,
          transform: " scale(0.5)",
        },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "circle(0% at 50% 50%)",
        },
        {
          clipPath: "circle(75% at 50% 50%)",
        },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const navigateWithTransition = (href, options = {}) => {
    const currentPath = window.location.pathname;
    if (currentPath === href) {
      return;
    }

    router.push(href, {
      onTransitionReady: () => {
        slideInOut();
        // Scroll to top after transition - increased delay and added multiple attempts
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
        // Additional scroll to top after transition completes
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 2200);
        // Final scroll to top to ensure it sticks
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 2500);
      },
      ...options,
    });
  };

  return { navigateWithTransition, router };
};
