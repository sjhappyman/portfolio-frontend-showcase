export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  children,
  ...props
}) => {
  const baseClasses =
    "button-motion relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 shadow-lg transition-[color,background-color,transform,box-shadow] duration-300";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary shadow-primary/25",
    highlight:
      "bg-highlight text-background hover:bg-highlight/90 focus-visible:ring-highlight shadow-highlight/25",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  return (
    <button className={classes} {...props}>
      <span className="button-shine" aria-hidden="true" />
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
