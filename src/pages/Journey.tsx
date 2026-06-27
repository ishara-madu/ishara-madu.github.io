import { useInView } from "react-intersection-observer";
import journeyData from "../data/journey.json";
import homeData from "../data/home.json";

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
        className="absolute left-[7px] md:left-[11px] top-6 bottom-0 w-[2px] bg-slate-200 group-last:hidden animate-pulse"
        style={{ transformOrigin: "top" }}
      />

      {/* Circle dot marker */}
      <div
        className="absolute left-0 top-1.5 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 border-white shadow-md z-10 transition-all duration-300 group-hover:scale-125"
        style={{ 
          backgroundColor: accentColor,
          boxShadow: `0 0 0 0px ${accentColor}40`,
        }}
        title={item.type}
      />

      {/* Content card */}
      <div className="flex flex-col bg-white bg-opacity-60 backdrop-blur-sm hover:bg-opacity-85 p-5 md:p-6 rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          {/* Year Badge */}
          <span 
            className="text-xs font-mono font-bold px-3 py-1 rounded-full text-white tracking-wider"
            style={{ backgroundColor: accentColor }}
          >
            {item.year}
          </span>
          <span className="text-[10px] font-mono font-semibold text-zinc-400 capitalize bg-slate-100 px-2 py-0.5 rounded border border-slate-200 border-opacity-40">
            {item.type}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-slate-850 group-hover:text-black transition-colors duration-200">
          {item.title}
        </h3>
        
        <p className="text-xs font-mono font-semibold text-slate-500 mt-1">
          @ {item.institution}
        </p>

        <p className="text-sm font-normal text-slate-600 mt-3 leading-relaxed">
          {item.description}
        </p>

        {/* Skills Tag Cloud */}
        {item.skills && item.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.skills.map((skill, index) => (
              <span
                key={index}
                className="text-[10px] font-mono font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg border border-slate-200 hover:bg-white hover:border-slate-350 hover:text-slate-900 transition-all duration-150"
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
      className="flex h-auto w-full rounded-3xl animate-slide-up overflow-hidden justify-center items-center mb-5 border border-zinc-200 border-opacity-40"
    >
      <div className="flex h-auto w-full bg-slate-500 bg-opacity-10 p-6 md:p-10 flex-col">
        
        {/* macOS Window Controls */}
        <div className="flex gap-1.5 mb-6 select-none">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
        </div>

        <div className="flex flex-col mb-8">
          <span className="font-mono text-xs text-slate-500 mb-2 block tracking-wider font-semibold">
            // journey.tsx - education & career timeline
          </span>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-4 text-slate-900">
            &lt;MyJourney /&gt;
          </h2>
          <p className="text-base font-normal text-slate-600">
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
