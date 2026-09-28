import { Code2, Palette, PanelsTopLeft, Workflow } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionNavigator } from "@/components/SectionNavigator";

const skillGroups = [
  {
    title: "Front-End Development",
    icon: Code2,
    skills: [
      "React",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Vite",
      "Responsive Web Design",
    ],
  },
  {
    title: "UI/UX + Interaction",
    icon: PanelsTopLeft,
    skills: [
      "UI/UX Design",
      "Figma",
      "Prototyping",
      "Design Systems",
      "CSS Animation",
      "Micro-interactions",
    ],
  },
  {
    title: "Development Workflow",
    icon: Workflow,
    skills: [
      "Git",
      "GitHub",
      "npm",
      "VS Code",
      "Component Architecture",
      "EmailJS",
    ],
  },
  {
    title: "Creative Design",
    icon: Palette,
    skills: [
      "Adobe Photoshop",
      "Illustrator",
      "Graphic Design",
      "Branding",
      "Visual Design",
      "Image Optimization",
    ],
  },
];

export const Tools = () => {
  return (
    <section id="tools" aria-labelledby="tools-heading" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-highlight/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <Reveal className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-highlight">
              Tools & Technologies
            </span>
            <h2 id="tools-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Creative + <span className="text-primary">Technical Toolkit</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base lg:text-right">
            I bridge design and development—turning visual ideas into polished,
            responsive digital experiences with modern front-end technologies
            and thoughtful interaction design.
          </p>
        </Reveal>

        <div className="glass-strong overflow-hidden rounded-3xl border border-border/60 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
          <div className="toolkit-grid grid md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group, index) => (
              <Reveal
                as="article"
                key={group.title}
                className="toolkit-group relative min-w-0 p-6 md:p-8"
                delay={index * 110}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <group.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold leading-snug text-foreground">
                    {group.title}
                  </h3>
                </div>
                <ul
                  className="space-y-2.5 text-sm leading-relaxed text-muted-foreground"
                  aria-label={`${group.title} skills`}
                >
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2.5">
                      <span
                        className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-highlight/75"
                        aria-hidden="true"
                      />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <SectionNavigator
          href="#projects"
          label="Explore selected projects"
          className="pt-20"
        />
      </div>
    </section>
  );
};
