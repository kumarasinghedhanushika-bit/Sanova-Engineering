// Crops the "S + lightning" mark out of public/logo.png for the navbar.
// If you swap the logo file, tweak backgroundSize / backgroundPosition.
export default function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`block shrink-0 rounded-xl bg-navy-900 bg-no-repeat shadow-lg shadow-black/30 ${className}`}
      style={{
        backgroundImage: "url(/logo.svg)",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    />
  );
}
