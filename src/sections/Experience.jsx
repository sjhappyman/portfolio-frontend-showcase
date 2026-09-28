import { useEffect, useRef, useState } from "react";
import { SectionNavigator } from "@/components/SectionNavigator";

const experiences = [
  {
    period: "Nov 2025 — Present",
    role: "Digital Systems Partner / Technology Advisor",
    company: "Personal Financial Partners · Remote",
    description:
      "Advise the CEO on technology, security, and digital infrastructure decisions, translating business needs into practical technology solutions. Manage and optimize the website with attention to accessibility, performance, security, and usability. Oversee IT operations and cybersecurity practices to protect sensitive financial information and support reliable digital systems.",
    technologies: [
      "Technology Strategy",
      "Web Administration",
      "Accessibility",
      "Cybersecurity",
    ],
    current: true,
  },
  {
    period: "Jan 2024 — Present",
    role: "Front-End Developer / Designer",
    company: "580 Strategies · Remote",
    description:
      "Design responsive interfaces and prototypes in Figma, applying user-centered design principles to support accessible digital experiences. Implement CSS styling for responsive layouts and cross-browser compatibility; collaborate with developers to translate designs into front-end code. Create brand-consistent logos and visual assets for client projects. Perform Salesforce QA testing and participate in Agile development and sprint planning.",
    technologies: ["Figma", "HTML5", "CSS", "Responsive Design", "Salesforce QA", "Agile"],
    current: true,
  },
  {
    period: "Aug 2018 — Jul 2022",
    role: "IT Director & Web Designer / Spanish Teacher",
    company: "The Academy of Seminole · Seminole, OK",
    description:
      "Designed, implemented, and managed the school website and maintained campus network and computer systems. Taught computer coding to middle school students and directed technology integration across academic programs.",
    technologies: [
      "Web Design",
      "IT Operations",
      "Coding Education",
      "Technology Integration",
    ],
    current: false,
  },
  {
    period: "Jun 2012 — Aug 2013",
    role: "GIS Intern",
    company: "East Central University · Ada, OK",
    description:
      "Collected field data and built an interactive campus map identifying buildings and classroom contents using HTML and PHP. Prepared spatial data and graphics with ArcMap, ArcCatalog, Excel, and Photoshop.",
    technologies: ["HTML", "PHP", "ArcMap", "ArcCatalog", "Photoshop"],
    current: false,
  },
  {
    period: "Aug 2008 — Jun 2010",
    role: "IT Manager / Spanish Teacher",
    company: "Country Gardens Academic Services · Laveen, AZ",
    description:
      "Designed and managed the school website, maintained campus computers, and taught computer skills and Spanish to grades 2–12.",
    technologies: ["Web Design", "IT Management", "Computer Skills", "Spanish"],
    current: false,
  },
  {
    period: "Sep 2007 — Aug 2008",
    role: "Lead E-Learning Multimedia Developer",
    company: "TTI Performance Systems · Scottsdale, AZ",
    description:
      "Developed interactive e-learning courses, combining graphics, animation, programming, and synchronized audio. Created and edited course media using Adobe Photoshop, Flash, and Audacity.",
    technologies: ["E-Learning", "Photoshop", "Flash", "Audacity"],
    current: false,
  },
  {
    period: "2003 — 2010",
    role: "Web & Graphic Consultant",
    company: "Various Clients",
    description:
      "Developed websites, graphics, and interactive learning content for clients including ASQ and Cisco Learning Institute. Redesigned the QuEST Forum website and developed and maintained the company intranet for ASQ. Created three network e-learning courses for Linksys through Cisco Learning Institute and coded interactive lessons for Anthem College Online.",
    technologies: [
      "Web Development",
      "Graphic Design",
      "Interactive Learning",
      "Intranet",
    ],
    current: false,
  },
];

const useRevealOnScroll = () => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollHighlighted, setIsScrollHighlighted] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          revealObserver.unobserve(element);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    const highlightObserver = new IntersectionObserver(
      ([entry]) => setIsScrollHighlighted(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "-28% 0px -28% 0px" }
    );

    revealObserver.observe(element);
    highlightObserver.observe(element);

    return () => {
      revealObserver.disconnect();
      highlightObserver.disconnect();
    };
  }, []);

  return { elementRef, isVisible, isScrollHighlighted };
};

const ExperienceItem = ({ experience, index }) => {
  const { elementRef, isVisible, isScrollHighlighted } =
    useRevealOnScroll();
  const entersFrom =
    index % 2 === 0 ? "md:-translate-x-12" : "md:translate-x-12";

  return (
    <div
      ref={elementRef}
      className={`relative grid md:grid-cols-2 gap-8 transform-gpu transition-[opacity,transform,filter] duration-700 ease-out motion-reduce:transition-none ${
        isVisible
          ? "opacity-100 translate-y-0 md:translate-x-0 blur-0"
          : `opacity-0 translate-y-8 ${entersFrom} blur-sm motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:blur-none`
      }`}
    >
      <div
        className={`absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full -translate-x-1/2 ring-4 ring-background z-10 transition-[background-color,box-shadow,transform] duration-500 motion-reduce:transition-none ${
          isVisible
            ? "bg-highlight scale-100 shadow-[0_0_20px_rgba(242,166,90,0.75)]"
            : "bg-secondary scale-75"
        }`}
      >
        {experience.current && isVisible && (
          <span className="absolute inset-0 rounded-full bg-highlight animate-ping opacity-60 motion-reduce:animate-none" />
        )}
      </div>

      <div
        className={`pl-8 md:pl-0 ${
          index % 2 === 0
            ? "md:pr-16 md:text-right"
            : "md:col-start-2 md:pl-16"
        }`}
      >
        <div
          className={`glass p-6 rounded-2xl border hover:border-highlight/60 hover:-translate-y-1 transition-[border-color,transform,box-shadow] duration-500 hover:shadow-[0_18px_45px_rgba(0,0,0,0.2)] motion-reduce:hover:translate-y-0 motion-reduce:translate-y-0 ${
            isScrollHighlighted
              ? "border-highlight/60 -translate-y-1 shadow-[0_18px_45px_rgba(0,0,0,0.2)]"
              : "border-secondary/30"
          }`}
        >
          <span className="text-sm text-highlight font-medium">
            {experience.period}
          </span>
          <h3 className="text-xl font-semibold mt-2">{experience.role}</h3>
          <p className="text-muted-foreground">{experience.company}</p>
          <p className="text-sm text-muted-foreground mt-4">
            {experience.description}
          </p>
          <div
            className={`flex flex-wrap gap-2 mt-4 ${
              index % 2 === 0 ? "md:justify-end" : ""
            }`}
          >
            {experience.technologies.map((technology, technologyIndex) => (
              <span
                key={technology}
                className={`px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground transition-[opacity,transform] duration-500 motion-reduce:transition-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 motion-reduce:opacity-100 motion-reduce:translate-y-0"
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${250 + technologyIndex * 70}ms`
                    : "0ms",
                }}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-highlight text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            Front-end developer and designer with experience in responsive
            websites, UI/UX design, branding, interactive learning content,
            website administration, and Salesforce quality assurance.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary/60 via-secondary/30 to-transparent md:-translate-x-1/2" />
          <div className="timeline-progress timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-highlight via-primary to-transparent md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={`${experience.company}-${experience.role}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        <SectionNavigator
          href="#testimonials"
          label="Read client testimonials"
          className="pt-20"
        />
      </div>
    </section>
  );
};
