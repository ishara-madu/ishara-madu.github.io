import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import journeyData from "../data/journey.json";
import homeData from "../data/home.json";
import torchIcon from "../assets/icons/tourch.svg";

interface JourneyItemProps {
  item: typeof journeyData[0];
}

function JourneyItem({ item }: JourneyItemProps) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const accentColor = homeData.color || "#22c55e";

  return (
    <div
      ref={ref}
      className={`relative pl-8 md:pl-12 pb-10 last:pb-2 group transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      {/* Vertical connector line */}
      <div 
        className="absolute left-[7px] md:left-[11px] top-6 bottom-0 w-[2px] bg-zinc-800 group-last:hidden animate-pulse"
        style={{ transformOrigin: "top" }}
      />

      {/* Circle dot marker */}
      <div
        className="absolute left-0 top-1.5 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 border-zinc-950 shadow-md z-10 transition-all duration-300 group-hover:scale-125"
        style={{ 
          backgroundColor: accentColor,
          boxShadow: `0 0 0 0px ${accentColor}40`,
        }}
        title={item.type}
      />

      {/* Content card */}
      <div className="flex flex-col bg-zinc-900 bg-opacity-35 hover:bg-opacity-55 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-zinc-800/80 hover:border-zinc-700 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          {/* Year Badge */}
          <span 
            className="text-xs font-mono font-bold px-3 py-1 rounded-full text-white tracking-wider"
            style={{ backgroundColor: accentColor }}
          >
            {item.year}
          </span>
          <span className="text-[10px] font-mono font-semibold text-zinc-400 capitalize bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
            {item.type}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-200">
          {item.title}
        </h3>
        
        <p className="text-xs font-mono font-semibold text-zinc-500 mt-1">
          @ {item.institution}
        </p>

        <p className="text-sm font-normal text-zinc-400 mt-3 leading-relaxed">
          {item.description}
        </p>

        {/* Skills Tag Cloud */}
        {item.skills && item.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.skills.map((skill, index) => (
              <span
                key={index}
                className="text-[10px] font-mono font-semibold bg-zinc-900/60 text-zinc-300 px-2.5 py-1 rounded-lg border border-zinc-800/80 hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-all duration-150"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Journey() {
  const [isHovered, setIsHovered] = useState(false);
  const [hasHover, setHasHover] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect if device supports hover (desktop mouse pointer vs touch screen)
    if (typeof window !== "undefined") {
      setHasHover(window.matchMedia("(hover: hover)").matches);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hasHover || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // High performance GPU-accelerated coordinate setting via CSS variables
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  // Fades whole container from 100% to 6% smoothly on mouse leave. Keeps mask structure to prevent layout flash.
  // Mask centers 65px to the top-right of the cursor tip, projecting the beam significantly forward in the direction the torch points.
  const maskStyle: React.CSSProperties = hasHover ? {
    maskImage: `radial-gradient(180px circle at calc(var(--mouse-x, -999px) + 65px) calc(var(--mouse-y, -999px) - 65px), black 30%, rgba(0, 0, 0, 0.06) 100%)`,
    WebkitMaskImage: `radial-gradient(180px circle at calc(var(--mouse-x, -999px) + 65px) calc(var(--mouse-y, -999px) - 65px), black 30%, rgba(0, 0, 0, 0.06) 100%)`,
    opacity: isHovered ? 1 : 0.06,
    transition: "opacity 0.4s ease-out",
  } : {
    opacity: 1, // Always 100% visible on mobile/tablets
  };

  return (
    <div
      ref={containerRef}
      id="journey"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex h-auto w-full rounded-3xl overflow-hidden justify-center items-center mb-5 border border-zinc-800 shadow-xl bg-zinc-950 transition-all duration-355 ${
        hasHover ? "cursor-none" : ""
      }`}
    >
      {/* Brighter Spotlight Gradient Background Overlay (Only active when device supports hover) */}
      {/* Light center shifted 65px to the top-right of the cursor, projecting the beam significantly in front of the torch head */}
      {hasHover && (
        <div 
          className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `radial-gradient(350px circle at calc(var(--mouse-x, -999px) + 65px) calc(var(--mouse-y, -999px) - 65px), rgba(99, 102, 241, 0.35) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 80%)`,
          }}
        />
      )}

      {/* Custom user flashlight icon cursor (tourch.svg) */}
      {isHovered && hasHover && (
        <div 
          className="pointer-events-none absolute z-30 select-none"
          style={{
            left: 'var(--mouse-x, -999px)',
            top: 'var(--mouse-y, -999px)',
            transform: 'translate(-90%, -10%)', // Aligns the top-right shining bulb head of the SVG with the coordinates
          }}
        >
          <img 
            src={torchIcon} 
            className="w-8 h-8" 
            alt="Flashlight"
          />
        </div>
      )}

      {/* Grid/Layout Grid lines (very low opacity, rendered above spotlight, behind content) */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Content Container (Masked to reveal only under the torch/flashlight spotlight) */}
      <div 
        style={maskStyle}
        className="flex h-auto w-full p-6 md:p-10 flex-col z-10 relative"
      >
        
        {/* macOS Window Controls */}
        <div className="flex gap-1.5 mb-6 select-none">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>

        <div className="flex flex-col mb-8">
          <span className="font-mono text-xs text-zinc-500 mb-2 block tracking-wider font-semibold">
            // journey.tsx - education & career timeline
          </span>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-4 text-white">
            &lt;MyJourney /&gt;
          </h2>
          <p className="text-base font-normal text-zinc-400">
            A timeline of my key milestones, education, professional experience, and technical growth.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-4xl mx-auto pl-1 md:pl-4">
          {journeyData.map((item) => (
            <JourneyItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
