import { Code2, Music2, PanelsTopLeft, Palette, Users } from "lucide-react";
import { SectionNavigator } from "@/components/SectionNavigator";

const highlights = [
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    description:
      "Creating logos, brand identities, and visual assets with Adobe Photoshop and Illustrator.",
  },
  {
    icon: PanelsTopLeft,
    title: "UI/UX Design",
    description:
      "Turning ideas into clear, user-centered interfaces and prototypes with Figma and Adobe XD.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working with clients and developers in English and Spanish, from initial requirements through feedback and delivery.",
  },
  {
    icon: Code2,
    title: "Front-End Development",
    description:
      "Building responsive websites with HTML, CSS, Bootstrap, WordPress, Elementor, and Webflow.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-x-12 xl:gap-x-16 items-stretch">
          {/* Shared heading gives both columns the same starting point. */}
          <div className="order-1 space-y-4 lg:col-span-2 mb-4 lg:mb-6">
            <div className="animate-fade-in">
              <span className="text-highlight text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-foreground">
              A designer's eye.
              <span className="font-serif italic font-normal text-white">
                {" "}
                A developer's mindset.
              </span>
            </h2>
          </div>

            <div className="order-2 self-center space-y-5 text-muted-foreground leading-relaxed animate-fade-in animation-delay-200 lg:col-start-1 lg:row-start-2">
              <p>
                I'm Sergio Jimenez, a graphic designer and front-end developer
                with a background spanning branding, websites, and interactive
                learning. Graphic design is a core part of my work: I use Adobe
                Photoshop and Illustrator to create logos and visual assets
                that give each brand a clear, consistent identity.
              </p>
              <p>
                I bring that visual foundation into UI/UX design, using Figma
                and Adobe XD to explore layouts and prototypes. With HTML, CSS,
                Bootstrap, WordPress, Elementor, and Webflow, I turn designs
                into responsive websites with attention to accessibility,
                usability, and the details that make an experience feel complete.
              </p>
              <p>
                My experience also includes multimedia course development,
                website administration, and Salesforce quality assurance. I
                collaborate with developers and business leaders to connect
                creative decisions with practical needs, and communicate in
                both English and Spanish.
              </p>
            </div>

            <div className="order-4 flex items-center glass rounded-2xl p-6 md:p-8 glow-border animate-fade-in animation-delay-300 lg:col-start-1 lg:row-start-3">
              <p className="text-lg font-medium italic text-foreground">
                "I want every project to feel like the brand behind it —
                visually distinctive, thoughtfully designed, and easy to use."
              </p>
            </div>

            <div className="order-5 relative flex flex-col items-start gap-5 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-surface/70 to-background p-6 md:p-8 sm:flex-row sm:items-center lg:col-start-2 lg:row-start-3">
              <div className="relative mb-3 mr-3 grid h-28 w-28 shrink-0 place-items-center rounded-full border-2 border-primary/35 bg-background/70 shadow-[0_0_24px_rgba(0,153,255,0.12)] sm:h-32 sm:w-32">
                <div aria-hidden="true" className="absolute inset-3 rounded-full border border-secondary/25" />
                <div aria-hidden="true" className="absolute inset-6 rounded-full border border-secondary/25" />
                <Music2 className="h-10 w-10 text-highlight" aria-hidden="true" />
              </div>
              <div className="min-w-0">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-highlight">Beyond the canvas</span>
              <h3 className="mt-1 mb-2 text-lg font-semibold text-foreground">Another side of my creativity.</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Outside design and development, music is another creative
                outlet. Explore my DJ mixes and musical projects.
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Design · Code · Sound
              </p>
              </div>
            </div>

          {/* Right Column - Hilights */}
          <div className="order-3 grid sm:grid-cols-2 auto-rows-fr gap-5 lg:col-start-2 lg:row-start-2">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center mb-4 hover:bg-secondary/25">
                  <item.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <SectionNavigator
          href="#tools"
          label="Explore my creative toolkit"
          className="pt-20"
        />
      </div>
    </section>
  );
};
