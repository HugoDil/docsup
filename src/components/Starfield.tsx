const stars = [
  { top: "10%", left: "6%", size: 2, delay: "0s", duration: "3.4s" },
  { top: "18%", left: "22%", size: 1.5, delay: "0.4s", duration: "4.2s" },
  { top: "8%", left: "46%", size: 1.5, delay: "1.1s", duration: "3.8s" },
  { top: "26%", left: "64%", size: 2, delay: "0.2s", duration: "4.6s" },
  { top: "14%", left: "88%", size: 1.5, delay: "1.6s", duration: "3.6s" },
  { top: "34%", left: "12%", size: 1.5, delay: "2s", duration: "4s" },
  { top: "42%", left: "78%", size: 2, delay: "0.8s", duration: "3.9s" },
  { top: "52%", left: "34%", size: 1.5, delay: "1.4s", duration: "4.4s" },
  { top: "60%", left: "92%", size: 1.5, delay: "0.6s", duration: "3.5s" },
  { top: "68%", left: "8%", size: 2, delay: "1.8s", duration: "4.1s" },
  { top: "72%", left: "56%", size: 1.5, delay: "0.3s", duration: "3.7s" },
  { top: "6%", left: "70%", size: 1.5, delay: "1.2s", duration: "4.3s" },
];

export default function Starfield({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full bg-white"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  );
}
