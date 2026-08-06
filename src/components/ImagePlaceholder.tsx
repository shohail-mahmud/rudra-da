interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
}

export function ImagePlaceholder({
  label = "IMAGE PLACEHOLDER",
  aspectRatio = "aspect-[2/3]",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-stone bg-warm ${aspectRatio} ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)`,
        backgroundSize: '12px 12px'
      }} />
      <span className="relative z-10 font-body text-[10px] sm:text-xs uppercase tracking-[0.2em] text-ash text-center px-4">
        {label}
      </span>
    </div>
  );
}
