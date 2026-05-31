import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
      }}
    >
      <svg
        width="52"
        height="52"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="nexGradient"
            x1="0"
            y1="0"
            x2="120"
            y2="120"
          >
            <stop offset="0%" stopColor="#FF6A00" />
            <stop offset="100%" stopColor="#FFB066" />
          </linearGradient>
        </defs>

        <rect
          x="8"
          y="8"
          width="104"
          height="104"
          rx="28"
          fill="url(#nexGradient)"
        />

        <path
          d="M34 82V38L82 82V38"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M58 38L86 82"
          stroke="rgba(255,255,255,0.75)"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>

      <div>
	  <div
		style={{
		  fontSize: "26px",
		  fontWeight: 800,
		  letterSpacing: "-1px",
		  color: "#111827",
		}}
	  >
		NexApex
	  </div>

	  <div
		style={{
		  fontSize: "11px",
		  color: "#6B7280",
		  letterSpacing: "2px",
		  textTransform: "uppercase",
		  fontWeight: 600,
		}}
	  >
		Consulting
	  </div>
	</div>
    </Link>
  );
}