import { ArrowUpRight } from "lucide-react";
import { SectionNavigator } from "@/components/SectionNavigator";
import { Reveal } from "@/components/Reveal";
const projects = [
  {
    title: "580 Strategies",
    description: "A consulting website presenting public-sector digital transformation services, the team, and ways to work with 580 Strategies.",
    category: "Consulting & Technology",
    image: "/projects/580-strategies-home.jpg",
    showFullImage: true,
    imageWidth: 3804,
    imageHeight: 1854,
    link: "https://508strategies.com",
  },
  {
    title: "Personal Financial Partners",
    description: "A financial services website introducing the firm's team, planning services, and client resources in one place.",
    category: "Financial Services",
    image: "/projects/personal-financial-partners-home.jpg",
    showFullImage: true,
    imageWidth: 3792,
    imageHeight: 1852,
    link: "https://personalpfp.com",
  },
  {
    title: "Indigenous Determinants of Health Alliance",
    description: "An organizational website sharing Indigenous health advocacy, foundational research, resources, and the alliance's work.",
    category: "Nonprofit & Advocacy",
    image: "/projects/indigenous-dha-home.jpg",
    showFullImage: true,
    imageWidth: 3796,
    imageHeight: 1854,
    link: "https://indigenousdha.org",
  },
  {
    title: "Statewide Fencing",
    description: "A fencing business website showcasing services and project work, with company information and a clear path to get in touch.",
    category: "Local Business",
    image: "/projects/statewide-fencing-home.jpg",
    showFullImage: true,
    imageWidth: 3802,
    imageHeight: 1832,
    link: "https://statewidefencing.net",
  },
  {
    title: "Seacret",
    description: "A product-focused website introducing Seacret's Dead Sea minerals, ingredients, skincare information, and customer programs.",
    category: "Beauty & Skincare",
    image: "/projects/seacret-home.jpg",
    showFullImage: true,
    imageWidth: 3802,
    imageHeight: 1852,
    link: "https://seacret.sergiojimenez.com",
  },
  {
    title: "Yopick",
    description: "A web and graphic design website presenting creative services, a project portfolio, and information for prospective clients.",
    category: "Web & Graphic Design",
    image: "/projects/yopick-home.jpg",
    showFullImage: true,
    imageWidth: 3808,
    imageHeight: 1860,
    link: "https://yopick.sergiojimenez.com",
  },
  {
    title: "Sergio Jimenez — DJ & Music",
    description: "A personal music website showcasing my DJ mixes, background, and musical interests through a dedicated online presence.",
    category: "Music Website",
    image: "/projects/sergio-jimenez-home.jpg",
    showFullImage: true,
    imageWidth: 3798,
    imageHeight: 1856,
    link: "https://music.sergiojimenez.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="projects-section py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <Reveal className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-highlight text-sm font-medium tracking-wider uppercase">
            Selected Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground">
            Explore a selection of my website projects.
          </p>
        </Reveal>

        {/* Projects Grid */}
        <div className="mx-auto grid max-w-7xl md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14 lg:gap-x-12 lg:gap-y-20">
          {projects.map((project, idx) => (
            <Reveal
              as="a"
              key={project.link}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} (opens in a new tab)`}
              className="project-card group block rounded-2xl overflow-hidden md:row-span-1 focus-visible:outline-2 focus-visible:outline-highlight focus-visible:outline-offset-4"
              delay={(idx % 3) * 120}
            >
              {/* Image */}
              <div className={`relative overflow-hidden bg-card border-b border-border ${project.showFullImage ? "" : "aspect-[4/3]"}`}>
                <img
                  src={project.image}
                  alt={`${project.title} homepage preview`}
                  loading="lazy"
                  decoding="async"
                  width={project.imageWidth ?? 1280}
                  height={project.imageHeight ?? 1280}
                  className={project.showFullImage
                    ? "project-image block w-full h-auto"
                    : "w-full h-full object-cover object-top transition-[object-position] duration-1000 motion-safe:group-hover:object-bottom motion-safe:group-focus-visible:object-bottom"}
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <span className="inline-block rounded-full bg-secondary/15 px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {project.category}
                </span>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 shrink-0
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <p className="text-muted-foreground text-xs break-all">
                  {new URL(project.link).hostname}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-highlight">
                  Visit website <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionNavigator
          href="#experience"
          label="Follow my career journey"
          className="pt-20"
        />
      </div>
    </section>
  );
};
