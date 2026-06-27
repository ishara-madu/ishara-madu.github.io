import { useInView } from "react-intersection-observer";
import journeyData from "../data/journey.json";
import homeData from "../data/home.json";
import placeholder from '../assets/images/gradient.png';

interface JourneyItemProps {
  item: typeof journeyData[0];
}

function JourneyItem({ item }: JourneyItemProps) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const accentColor = homeData.color || "#4f46e5"; // Default to Indigo to match theme

  return (
    <div
      ref={ref}
      className={`relative pl-8 md:pl-12 pb-10 last:pb-2 group transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      {/* Vertical connector line */}
      <div 
        className="absolute left-[7px] md:left-[11px] top-6 bottom-0 w-[2px] bg-slate-200 group-last:hidden"
        style={{ 
          transformOrigin: "top",
          backgroundImage: `linear-gradient(to bottom, ${accentColor}30, ${accentColor}10)` 
        }}
      />

      {/* Circle dot marker */}
      <div
        className="absolute left-0 top-1.5 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 border-white shadow-md z-10 transition-all duration-300 group-hover:scale-125 cursor-pointer"
        style={{ 
          backgroundColor: accentColor,
          boxShadow: inView ? `0 0 0 4px ${accentColor}20` : `0 0 0 0px ${accentColor}00`,
        }}
        title={item.type}
      />

      {/* Content card */}
      <div className="flex flex-col bg-white bg-opacity-70 backdrop-blur-md hover:bg-opacity-90 p-5 md:p-6 rounded-2xl border border-zinc-200 border-opacity-40 hover:border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          {/* Year Badge */}
          <span 
            className="text-xs font-mono font-bold px-3 py-1 rounded-full text-white tracking-wider"
            style={{ backgroundColor: accentColor }}
          >
            {item.year}
          </span>
          <span className="text-[10px] font-mono font-semibold text-zinc-400 capitalize bg-slate-100 bg-opacity-70 px-2 py-0.5 rounded border border-slate-200 border-opacity-45">
            {item.type}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-indigo-900 transition-colors duration-200">
          {item.title}
        </h3>
        
        <p className="text-xs font-mono font-semibold text-indigo-650 mt-1 select-text">
          @ {item.institution}
        </p>

        <p className="text-sm font-normal text-slate-650 mt-3 leading-relaxed select-text">
          {item.description}
        </p>

        {/* Skills Tag Cloud */}
        {item.skills && item.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.skills.map((skill, index) => (
              <span
                key={index}
                className="text-[10px] font-mono font-semibold bg-white bg-opacity-80 text-slate-700 px-2.5 py-1 rounded-lg border border-zinc-200 border-opacity-65 hover:bg-indigo-50 hover:border-indigo-400 hover:text-indigo-700 transition-all duration-150 shadow-sm"
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

  return (
    <div
      id="journey"
      className="flex h-auto w-full rounded-3xl animate-slide-up overflow-hidden justify-center items-center mb-5 border border-zinc-200 border-opacity-40 relative"
    >
      {/* Background moving abstract image */}
      <div className="w-[800px] md:w-full h-full object-cover absolute z-0 overflow-hidden opacity-25">
        <img 
          src={homeData.customGradientImage || placeholder} 
          className="w-full h-full object-cover animate-halfRotate" 
          style={{ transformOrigin: "center center", scale: "1.5" }} 
        />
      </div>

      <div className="flex-1 flex h-auto w-full bg-slate-500 bg-opacity-[0.03] p-6 md:p-10 flex-col backdrop-blur-md relative z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px]">
        
        {/* macOS Window Controls */}
        <div className="flex gap-1.5 mb-6 select-none relative z-10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
        </div>

        <div className="flex flex-col mb-8 relative z-10">
          <span className="font-mono text-xs mb-2 block tracking-wider font-normal italic select-none" style={{ color: "#969896" }}>
            // journey.tsx - education & career timeline
          </span>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-4 text-slate-900 select-none">
            <span style={{ color: "#a71d5d" }}>&lt;</span>
            <span style={{ color: "#005cc5" }}>MyJourney</span>
            <span style={{ color: "#a71d5d" }}> /&gt;</span>
          </h2>
          <p className="text-base font-normal text-slate-600 select-text">
            A timeline of my key milestones, education, professional experience, and technical growth.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-4xl mx-auto pl-1 md:pl-4 relative z-10">
          {journeyData.map((item) => (
            <JourneyItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
