import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { SectionNavigator } from "@/components/SectionNavigator";
import { Reveal } from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Sergio is one of the most talented UI/UX Designer I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Rusty Pickens",
    role: "Founder & Principal",
    company: "580 Strategies",
    companyUrl: "https://508strategies.com/",
  },
  {
    quote:
      "Working with Sergio has given me tremendous peace of mind. Unexpected issues inevitably come up on my side, and it is incredibly valuable to know I have someone I can rely on to respond quickly, think through the problem, and guide me toward a solution. He is consistently available, patient, and dependable. I have come to see him as a trusted technology partner, rather than simply someone who manages my website.",
    author: "Sergio Abarca",
    role: "Managing Partner",
    company: "Personal Financial Partners",
    companyUrl: "https://personalpfp.com/",
  },
  {
    quote:
      "Working with Sergio was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Jett McDowell",
    role: "Software Developer",
    company: "580 Strategies",
    companyUrl: "https://508strategies.com/",
  },
  {
    quote:
      "Sergio has a rare combination of sharp design instincts and zero ego. He listens, asks the right questions, and delivers something better than what you originally had in mind. As someone who works on the technical side of marketing, I notice when a designer truly understands how the web works. Sergio builds websites that look great and perform just as well behind the scenes—clean, fast, and built to last.",
    author: "Conner Smith",
    role: "Marketing Automations Engineer",
    company: "ISS STOXX",
    companyUrl: "https://www.iss-stoxx.com/",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [timerVersion, setTimerVersion] = useState(0);
  const [isPlaying, setIsPlaying] = useState(() =>
    typeof window === "undefined"
      ? false
      : !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const readingDuration = useMemo(
    () =>
      Math.min(
        20000,
        Math.max(10000, testimonials[activeIdx].quote.length * 35)
      ),
    [activeIdx]
  );

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (!isPlaying || isInteracting || !isPageVisible) return undefined;

    const timeoutId = window.setTimeout(() => {
      setActiveIdx((previousIdx) =>
        (previousIdx + 1) % testimonials.length
      );
    }, readingDuration);

    return () => window.clearTimeout(timeoutId);
  }, [activeIdx, isInteracting, isPageVisible, isPlaying, readingDuration, timerVersion]);

  const showTestimonial = (index) => {
    setActiveIdx((index + testimonials.length) % testimonials.length);
    setTimerVersion((version) => version + 1);
  };

  const next = () => {
    showTestimonial(activeIdx + 1);
  };

  const previous = () => {
    showTestimonial(activeIdx - 1);
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto
      px-6 relative z-10"
      >
        {/* Section Header */}
        <Reveal
          className="testimonial-heading mx-auto mb-16"
        >
          <span className="testimonial-eyebrow">
            What People Say
          </span>
          <h2 className="testimonial-title">
            <span className="testimonial-title-intro">What it’s like to</span>
            <span className="testimonial-title-focus">
              work with me.
            </span>
          </h2>
        </Reveal>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative"
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            onFocusCapture={() => setIsInteracting(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsInteracting(false);
              }
            }}
          >
            {/* Main Testimonial */}
            <Reveal className="glass p-8 rounded-3xl md:p-12 glow-border">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <div key={activeIdx} className="testimonial-swap">
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div
                  aria-hidden="true"
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary/15 font-semibold text-primary ring-2 ring-primary/20"
                >
                  {testimonials[activeIdx].author
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                    <span aria-hidden="true"> · </span>
                    <a
                      href={testimonials[activeIdx].companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-primary underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary/80 hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
                      aria-label={`${testimonials[activeIdx].company} website (opens in a new tab)`}
                    >
                      {testimonials[activeIdx].company}
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </Reveal>

            <div className="mt-5 h-1 overflow-hidden rounded-full bg-muted" aria-hidden="true">
              <span
                key={`${activeIdx}-${timerVersion}-${isInteracting}-${isPageVisible}-${isPlaying}`}
                className="testimonial-progress block h-full origin-left rounded-full bg-primary"
                style={{
                  animationDuration: `${readingDuration}ms`,
                  animationPlayState:
                    isPlaying && !isInteracting && isPageVisible
                      ? "running"
                      : "paused",
                }}
              />
            </div>

            {/* Testimonials Navigation */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
                aria-label="Previous testimonial"
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((testimonial, idx) => (
                  <button
                    key={testimonial.author}
                    onClick={() => showTestimonial(idx)}
                    aria-label={`Show testimonial from ${testimonial.author}`}
                    aria-current={idx === activeIdx ? "true" : undefined}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight />
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsPlaying((playing) => !playing);
                  setTimerVersion((version) => version + 1);
                }}
                className="ml-0 inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 sm:ml-2"
                aria-label={isPlaying ? "Pause testimonial autoplay" : "Start testimonial autoplay"}
                aria-pressed={isPlaying}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Play className="h-4 w-4" aria-hidden="true" />
                )}
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              {isPlaying
                ? isInteracting
                  ? "Autoplay paused while you read or use the controls."
                  : "Autoplay is on. Hover or focus here to pause."
                : "Autoplay is paused. Use the arrows or press Play to continue."}
            </p>
          </div>
        </div>

        <SectionNavigator
          href="#contact"
          label="Start a conversation"
          className="pt-20"
        />
      </div>
    </section>
  );
};
