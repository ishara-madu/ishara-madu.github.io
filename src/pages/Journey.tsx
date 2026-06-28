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
      {/* Vertical connector line - Optimized: removed animate-pulse to prevent continuous repaint loops */}
      <div 
        className="absolute left-[7px] md:left-[11px] top-6 bottom-0 w-[2px] bg-zinc-800 group-last:hidden"
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

      {/* Content card - Optimized: removed backdrop-blur-sm to avoid rendering bottleneck under mask-image, swapped transition-all with targeted CSS transitions */}
      <div className="flex flex-col bg-zinc-900 bg-opacity-35 hover:bg-opacity-55 p-5 md:p-6 rounded-2xl border border-zinc-800/80 hover:border-zinc-700 shadow-sm hover:shadow-md transition-[border-color,background-color,transform,box-shadow] duration-300 hover:translate-x-1">
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
                className="text-[10px] font-mono font-semibold bg-zinc-900/60 text-zinc-300 px-2.5 py-1 rounded-lg border border-zinc-800/80 hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-[border-color,background-color,text-color] duration-150"
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
  const cursorRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    // Detect if device supports hover (desktop mouse pointer vs touch screen)
    if (typeof window !== "undefined") {
      setHasHover(window.matchMedia("(hover: hover)").matches);
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Cache bounding client rect on mouse enter to avoid layout thrashing during mouse move
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hasHover || !containerRef.current || !rectRef.current) return;
    const x = e.clientX - rectRef.current.left;
    const y = e.clientY - rectRef.current.top;
    
    // 1. Direct GPU position update to the custom cursor container (removes 1-frame latency entirely)
    // Precise offset calculated from tourch.svg viewBox coordinates (tip is at 97.7% X, 33.2% Y)
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-97.7%, -33.2%)`;
    }

    // 2. Set coordinates directly to CSS variables on container for the mask-image radial gradient
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rectRef.current = null;
  };

  // Optimized: will-change added to promote masked content container to GPU compositor layer
  const maskStyle: React.CSSProperties = hasHover ? {
    maskImage: `radial-gradient(260px circle at calc(var(--mouse-x, -999px) + 212px) calc(var(--mouse-y, -999px) - 212px), black 30%, rgba(0, 0, 0, 0.06) 100%)`,
    WebkitMaskImage: `radial-gradient(260px circle at calc(var(--mouse-x, -999px) + 212px) calc(var(--mouse-y, -999px) - 212px), black 30%, rgba(0, 0, 0, 0.06) 100%)`,
    opacity: isHovered ? 1 : 0.06,
    transition: "opacity 0.4s ease-out",
    willChange: "mask-image, opacity, transform",
  } : {
    opacity: 1, // Always 100% visible on mobile/tablets
  };

  return (
    <div
      ref={containerRef}
      id="journey"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex h-auto w-full rounded-3xl overflow-hidden justify-center items-center mb-5 border border-zinc-800 shadow-xl bg-zinc-950 transition-all duration-355 ${
        hasHover ? "cursor-none" : ""
      }`}
    >
      {/* Spotlight Gradient Background Overlay (Only active when device supports hover) */}
      {hasHover && (
        <div 
          className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `radial-gradient(500px circle at calc(var(--mouse-x, -999px) + 212px) calc(var(--mouse-y, -999px) - 212px), rgba(99, 102, 241, 0.35) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 80%)`,
          }}
        />
      )}

      {/* Custom user flashlight icon cursor (tourch.svg) - GPU translate3d positioning for zero-latency mouse sync */}
      {isHovered && hasHover && (
        <div 
          ref={cursorRef}
          className="pointer-events-none absolute left-0 top-0 z-30 select-none will-change-transform"
          style={{
            transform: 'translate3d(-999px, -999px, 0) translate(-97.7%, -33.2%)',
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
