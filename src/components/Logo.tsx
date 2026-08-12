export default function Logo({ className }: { className?: string }) {
  return (
    <span className={`brand ${className ?? ""}`}>
      <span className="brandmark" aria-hidden="true" />
      <span className="brandname">
        Docsup<sup>fr</sup>
      </span>
    </span>
  );
}
