export default function Logo({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 shadow-[0_0_14px_-4px_rgba(167,139,250,0.7)]">
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="white"
          strokeWidth="1.3"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-24 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(36 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="white" stroke="none" />
        </svg>
      </span>
      <span className="font-serif text-2xl tracking-tight text-zinc-50">Docsup</span>
    </span>
  );
}
