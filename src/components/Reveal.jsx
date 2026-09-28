import { useEffect, useRef, useState } from "react";

export const Reveal = ({
  as = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
  ...props
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const sharedProps = {
    ref,
    className: `reveal reveal-${direction} ${isVisible ? "is-visible" : ""} ${className}`,
    style: { "--reveal-delay": `${delay}ms` },
    ...props,
  };

  if (as === "a") return <a {...sharedProps}>{children}</a>;
  if (as === "article") return <article {...sharedProps}>{children}</article>;
  return <div {...sharedProps}>{children}</div>;
};
