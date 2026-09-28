import { Button } from "@/components/Button";
import {
  ArrowRight,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { SectionNavigator } from "@/components/SectionNavigator";

const backgroundDots = Array.from({ length: 50 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  duration: 15 + ((index * 7) % 20),
  delay: (index * 3) % 5,
}));

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="hero-background w-full h-full object-cover opacity-[0.45]"
          style={{
            filter:
              "hue-rotate(46deg) saturate(0.8) brightness(0.62) contrast(0.9)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundDots.map((dot, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "var(--color-secondary)",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-highlight">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Front-End Developer & Graphic Designer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Bringing <span className="text-primary glow-text">brands</span>
                <br />
                to life through
                <br />
                <span className="font-serif italic font-normal text-white">
                  design & code.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Sergio Jimenez — a graphic designer and front-end
                developer. I combine Adobe design tools, UI/UX thinking, and
                hands-on web development to create distinctive brand identities
                and responsive websites that look great and feel easy to use.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                variant="highlight"
                onClick={scrollToContact}
              >
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton
                href="https://sergiojimenez.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Site
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="hero-social flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                {
                  icon: Github,
                  href: "https://github.com/sjhappyman",
                  label: "GitHub",
                  accent: "var(--color-highlight)",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/sergio-j-dev/",
                  label: "LinkedIn",
                  accent: "var(--color-primary)",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Sergio Jimenez on ${social.label}`}
                  className="hero-social-link p-2 rounded-full glass"
                  style={{ "--social-accent": social.accent }}
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="hero-visual relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0
              rounded-3xl bg-gradient-to-br
              from-secondary/30 via-transparent
              to-secondary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <div className="flex aspect-[4/5] w-full flex-col justify-between overflow-hidden rounded-2xl border border-primary/20 bg-[radial-gradient(circle_at_25%_20%,rgba(64,221,190,0.25),transparent_30%),linear-gradient(145deg,#111827,#07111f)] p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-highlight">
                    Selected work
                  </span>
                  <div>
                    <p className="font-serif text-7xl italic text-white/90">SJ</p>
                    <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      A production React interface built around responsive layout,
                      accessible interaction, and restrained motion.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-secondary-foreground">
                    {['React', 'Tailwind CSS', 'Vite'].map((technology) => (
                      <span key={technology} className="rounded-full border border-secondary/25 px-3 py-1.5">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-highlight">20+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SectionNavigator
          href="#about"
          eyebrow="Scroll"
          label="Discover more about me"
          className="pb-4 pt-16"
        />
      </div>
    </section>
  );
};
