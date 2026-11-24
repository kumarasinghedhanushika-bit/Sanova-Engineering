const paths = [
  "M0 200 H300 L360 260 H600",
  "M1200 120 H900 L840 180 H700",
  "M0 620 H220 L300 540 H520",
  "M1200 680 H980 L900 600 H760",
  "M150 0 V120 L210 180 V320",
  "M1050 800 V660 L990 600 V480",
  "M600 800 V700 L660 640 H820",
];

export default function CircuitBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {paths.map((d, i) => (
        <g key={i}>
          <path d={d} fill="none" className="stroke-fg/10 dark:stroke-fg/[0.07]" strokeWidth={1.5} />
          <path
            d={d}
            fill="none"
            stroke="#ffc20e"
            strokeWidth={2}
            strokeLinecap="round"
            pathLength={100}
            className="pulse-line"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
