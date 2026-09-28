import { ChevronDown, ChevronUp } from "lucide-react";

export const SectionNavigator = ({
  href,
  label,
  eyebrow = "Next",
  direction = "down",
  className = "",
}) => {
  const isUp = direction === "up";
  const Icon = isUp ? ChevronUp : ChevronDown;

  return (
    <div className={`flex justify-center ${className}`}>
      <a
        href={href}
        aria-label={`${eyebrow}: ${label}`}
        className="group flex min-w-0 items-center gap-4 rounded-full border border-primary/25 bg-surface/80 py-2.5 pl-3 pr-6 text-left shadow-[0_12px_40px_rgba(0,153,255,0.1)] backdrop-blur-xl transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/55 hover:shadow-[0_16px_50px_rgba(0,153,255,0.18)] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 motion-reduce:hover:translate-y-0"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/12 text-primary ring-1 ring-primary/25 transition-colors duration-300 group-hover:bg-primary/20">
          <Icon
            className="h-5 w-5 animate-bounce motion-reduce:animate-none"
            aria-hidden="true"
          />
        </span>
        <span className="min-w-0">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </span>
          <span className="mt-0.5 block text-sm font-medium text-foreground sm:text-base">
            {label}
          </span>
        </span>
      </a>
    </div>
  );
};
