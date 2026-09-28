import { ArrowUpRight, Github, Headphones, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/sjhappyman", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sergio-j-dev/",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#tools", label: "Tools" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center xl:justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex min-w-0 items-center gap-4 text-left">
            <a
              href="#top"
              aria-label="Go to the top of the page"
              className="inline-block"
            >
              <img
                src="/design-references/images/Logo-initials.png"
                alt="Sergio Jimenez"
                className="h-14 w-auto"
              />
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Sergio Jimenez. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 rounded text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Independent music link, spaced equally from navigation and socials. */}
          <div className="flex justify-center xl:flex-1">
            <a
              href="https://music.sergiojimenez.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DJ & Music (opens in a new tab)"
              className="group inline-flex min-h-11 shrink-0 items-center gap-3 rounded-full border border-highlight/25 bg-highlight/5 py-2 pl-2 pr-4 text-sm text-highlight transition-colors hover:border-highlight/60 hover:bg-highlight/10 focus-visible:outline-2 focus-visible:outline-highlight focus-visible:outline-offset-4"
            >
              <span aria-hidden="true" className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-secondary/40 bg-background">
                <span className="absolute inset-1 rounded-full border border-secondary/25" />
                <span className="absolute inset-2 rounded-full border border-secondary/25" />
                <span className="grid h-4 w-4 place-items-center rounded-full bg-highlight">
                  <span className="h-1 w-1 rounded-full bg-background" />
                </span>
                <Headphones className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border border-primary/25 bg-surface p-1 text-primary" />
              </span>
              DJ & Music
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Sergio Jimenez on ${social.label}`}
                className="p-2 rounded-full glass hover:bg-secondary/20 hover:text-secondary-foreground transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
