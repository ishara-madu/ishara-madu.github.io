import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LuBriefcase, LuGraduationCap } from "react-icons/lu";
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
      className={`relative pl-6 md:pl-16 pb-10 last:pb-2 group transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      {/* Circuit track style timeline connector line */}
      <div 
        className="absolute left-[7px] md:left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-900 group-last:hidden"
      />

      {/* Futuristic Radar pulse dot indicator */}
      <div 
        className="absolute left-[-6px] md:left-[-2px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full animate-ping opacity-20 pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />
      <div
        className="absolute left-0 md:left-[4px] top-2.5 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-zinc-950 shadow-md z-10 transition-all duration-300 group-hover:scale-125 flex items-center justify-center"
        style={{ 
          backgroundColor: accentColor,
          boxShadow: `0 0 10px ${accentColor}80`,
        }}
        title={item.type}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
      </div>

      {/* High-fidelity Workstation IDE-File Module Card */}
      <div className="flex flex-col overflow-hidden bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 shadow-md hover:shadow-xl rounded-2xl transition-[border-color,background-color,transform,box-shadow] duration-300 hover:translate-x-1.5">
        
        {/* IDE Editor Tab Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-2.5 bg-zinc-950/60 border-b border-zinc-800/80 gap-2 sm:gap-0">
          <div className="flex items-center gap-2">
            {/* File Type Icon (Lucide LuBriefcase / LuGraduationCap) */}
            <span className="text-zinc-400 select-none">
              {item.type === "work" ? (
                <LuBriefcase className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <LuGraduationCap className="w-3.5 h-3.5 text-indigo-400" />
              )}
            </span>
            {/* Tab File Title */}
            <span className="font-mono text-xs font-semibold text-zinc-300 select-none">
              {item.type === "work" ? `experience_${item.id}.sh` : `degree_${item.id}.json`}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Git Branch Info */}
            <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-zinc-500 select-none">
              <svg className="w-3 h-3 text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              main*
            </span>
            
            {/* Year Badge */}
            <span 
              className="text-[10px] font-mono font-bold px-2 py-0.5 rounded text-white tracking-wider select-none shadow-sm whitespace-nowrap"
              style={{ backgroundColor: `${accentColor}cc` }}
            >
              {item.year}
            </span>
          </div>
        </div>

        {/* Code Layout Grid with Gutter & Content */}
        <div className="flex">
          {/* Left Gutter: Code Line Numbers (Resembles an IDE editor workspace) */}
          <div className="hidden sm:flex flex-col items-end px-3 py-5 bg-zinc-950/20 border-r border-zinc-800/40 text-[10px] font-mono text-zinc-600 select-none min-w-[36px] tracking-wider leading-[1.65]">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            {item.skills && item.skills.length > 0 && <span>05</span>}
          </div>

          {/* Right Area: Core Text Content */}
          <div className="flex-1 p-5 sm:p-6">
            <div className="flex flex-col">
              
              {/* Institution and Code Directory path */}
              <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500 mb-1.5 select-none uppercase tracking-wider">
                <span>{item.type === "work" ? "work" : "edu"}</span>
                <span>/</span>
                <span className="text-zinc-400 font-semibold">{item.institution}</span>
              </div>

              {/* Card Title */}
              <h3 className="text-base md:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors duration-200 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm font-normal text-zinc-400 mt-2.5 leading-relaxed">
                {item.description}
              </p>

              {/* Technology Tags styled as code hashtags */}
              {item.skills && item.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-zinc-800/40">
                  {item.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-mono font-semibold bg-zinc-950/60 text-zinc-300 px-2 py-0.5 rounded border border-zinc-800/60 hover:bg-zinc-800/40 hover:border-zinc-600 hover:text-white transition-all duration-150"
                    >
                      #{skill.toLowerCase().replace(/\s+/g, "_")}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

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
  const lastMousePos = useRef({ clientX: 0, clientY: 0 });

  useEffect(() => {
    // Detect if device supports hover (desktop mouse pointer vs touch screen)
    if (typeof window !== "undefined") {
      setHasHover(window.matchMedia("(hover: hover)").matches);
    }
  }, []);

  // Listen to scroll events to dynamically update container rect offsets, shift the mask, and track hover transitions
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      
      // Check if mouse cursor is physically inside the container during scroll
      const isInside = (
        lastMousePos.current.clientX >= rect.left &&
        lastMousePos.current.clientX <= rect.right &&
        lastMousePos.current.clientY >= rect.top &&
        lastMousePos.current.clientY <= rect.bottom
      );
      
      if (isInside) {
        if (!isHovered) {
          setIsHovered(true);
        }
        rectRef.current = rect;
        
        const x = lastMousePos.current.clientX - rect.left;
        const y = lastMousePos.current.clientY - rect.top;
        
        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
        
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${lastMousePos.current.clientX}px, ${lastMousePos.current.clientY}px, 0) translate(-97.7%, -33.2%)`;
        }
      } else {
        if (isHovered) {
          setIsHovered(false);
          rectRef.current = null;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHovered]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    // Cache bounding client rect on mouse enter to avoid layout thrashing during mouse move
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
    lastMousePos.current = { clientX: e.clientX, clientY: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hasHover || !containerRef.current || !rectRef.current) return;
    
    // Store latest client coordinates for scroll listener offset calculations
    lastMousePos.current = { clientX: e.clientX, clientY: e.clientY };
    
    const x = e.clientX - rectRef.current.left;
    const y = e.clientY - rectRef.current.top;
    
    // 1. Direct GPU positioning of the fixed cursor (using client coordinates for zero-latency scroll alignment)
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-97.7%, -33.2%)`;
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
    maskImage: `radial-gradient(260px circle at calc(var(--mouse-x, -999px) + 212px) calc(var(--mouse-y, -999px) - 212px), black 30%, rgba(0, 0, 0, 0.25) 100%)`,
    WebkitMaskImage: `radial-gradient(260px circle at calc(var(--mouse-x, -999px) + 212px) calc(var(--mouse-y, -999px) - 212px), black 30%, rgba(0, 0, 0, 0.25) 100%)`,
    opacity: isHovered ? 1 : 0.25,
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
        hasHover && isHovered ? "cursor-none [&_*]:!cursor-none" : ""
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

      {/* Custom user flashlight icon cursor (tourch.svg) - Fixed viewport-relative positioning for 100% scroll sync */}
      {isHovered && hasHover && (
        <div 
          ref={cursorRef}
          className="pointer-events-none fixed left-0 top-0 z-[9999] select-none will-change-transform"
          style={{
            transform: `translate3d(${lastMousePos.current.clientX}px, ${lastMousePos.current.clientY}px, 0) translate(-97.7%, -33.2%)`,
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
        className="flex h-auto w-full px-4 py-6 md:p-10 flex-col z-10 relative"
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
