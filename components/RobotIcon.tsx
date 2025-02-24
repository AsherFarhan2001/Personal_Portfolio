export function RobotIcon({ className = "w-full h-full p-2" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Robot Head */}
      <rect
        x="6"
        y="7"
        width="12"
        height="12"
        rx="2"
        className="fill-white"
        stroke="white"
        strokeWidth="1.5"
      />
      
      {/* Robot Eyes */}
      <rect
        x="9"
        y="10"
        width="2"
        height="3"
        rx="0.5"
        className="fill-indigo-600"
      />
      <rect
        x="13"
        y="10"
        width="2"
        height="3"
        rx="0.5"
        className="fill-indigo-600"
      />
      
      {/* Robot Antenna */}
      <path
        d="M12 4L12 7"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="4" r="1" className="fill-indigo-300" />
      
      {/* Robot Mouth Grid */}
      <path
        d="M9 15h6"
        stroke="indigo"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 16.5h6"
        stroke="indigo"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Circuit Lines */}
      <path
        d="M4 12h2M18 12h2M6 18l1-1M17 18l-1-1"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
      />
      
      {/* Connection Points */}
      <circle cx="4" cy="12" r="0.5" className="fill-indigo-300" />
      <circle cx="20" cy="12" r="0.5" className="fill-indigo-300" />
      <circle cx="6" cy="18" r="0.5" className="fill-indigo-300" />
      <circle cx="18" cy="18" r="0.5" className="fill-indigo-300" />
    </svg>
  )
} 