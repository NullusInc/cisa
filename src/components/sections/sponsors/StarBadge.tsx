export function StarBadge({ label }: { label: string }) {
  return (
    <div className="absolute -bottom-3 -right-3 h-16 w-16 transition-transform duration-300 group-hover:rotate-15">
      <svg viewBox="0 0 100 100">
        <polygon
          points="50,2 59.32,15.23 74,8.43 75.46,24.54 91.57,26 84.77,40.68 98,50 84.77,59.32 91.57,74 75.46,75.46 74,91.57 59.32,84.77 50,98 40.68,84.77 26,91.57 24.54,75.46 8.43,74 15.23,59.32 2,50 15.23,40.68 8.43,26 24.54,24.54 26,8.43 40.68,15.23"
          fill="#f5c518"
          stroke="#1f4d36"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
      <span className="absolute inset-0 flex flex-col items-center justify-center text-center text-secondary font-extrabold leading-none">
        <span className="text-md">{label.split(" ")[0]}</span>
        <p className="text-xs">OFF</p>
      </span>
    </div>
  );
}