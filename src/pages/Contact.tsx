import ContactLinks from "../components/ContactLinks";
import placeholder from '../assets/images/gradient.png';
import homeData from '../data/home.json';
import contactData from '../data/contacts.json';
import { LuTerminal, LuFolderHeart } from 'react-icons/lu';

export default function Contact() {
  return (
    <div id="contact" className="flex h-[420px] md:h-[300px] w-full rounded-3xl animate-slide-up overflow-hidden justify-center items-center relative">
      {/* Background Image (Kept exactly identical to original layout) */}
      <div className="flex w-[800px] md:w-full h-[420px] md:h-[300px] object-cover absolute">
        <img 
          src={homeData.customGradientImage || placeholder} 
          className="w-[800px] md:w-full h-[800px] object-cover animate-halfRotate z-0" 
          style={{ transformOrigin: "center center", scale: "1.5" }} 
        />
      </div>

      {/* Content Container (Kept exactly identical to original bg-slate-500 bg-opacity-10) */}
      <div className="flex h-[420px] md:h-[300px] w-full bg-slate-500 bg-opacity-10 p-6 md:p-10 flex-col justify-between z-10">
        
        {/* macOS Window Title Bar */}
        <div className="flex items-center justify-between w-full pb-3 border-b border-slate-900/10 select-none">
          <div className="flex items-center gap-4">
            {/* macOS Control Dots */}
            <div className="flex gap-1.5 flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/90 shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/90 shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/90 shadow-sm" />
            </div>
            
            {/* File Path */}
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-600 bg-white/40 px-2.5 py-1 rounded border border-slate-200/40">
              <LuTerminal className="w-3.5 h-3.5 text-indigo-650" />
              <span>bash</span>
              <span>-</span>
              <span className="text-slate-800 font-semibold">establish_connection.sh</span>
            </div>
          </div>

          <span className="font-mono text-[10px] text-slate-500 hidden sm:inline uppercase tracking-widest">
            contact_session
          </span>
        </div>

        {/* Content Columns split */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-6 w-full items-start lg:items-center">
          
          {/* Left Column: Terminal Config Editor */}
          <div className="flex flex-col max-w-lg select-none w-full lg:w-auto">
            <span className="font-mono text-xs text-indigo-700 font-bold mb-1.5 block tracking-wider">
              // contact_profile.yaml
            </span>
            <div className="bg-white/55 backdrop-blur-md border border-slate-200/45 rounded-2xl p-4 font-mono text-[11px] sm:text-xs text-slate-800 space-y-1.5 shadow-sm">
              <div><span className="text-slate-400">01</span>  <span className="text-indigo-700 font-bold">developer:</span> <span className="text-emerald-700">"Ishara Madusanka"</span></div>
              <div><span className="text-slate-400">02</span>  <span className="text-indigo-700 font-bold">status:</span> <span className="text-emerald-700">"open_to_collaborations"</span></div>
              <div><span className="text-slate-400">03</span>  <span className="text-indigo-700 font-bold">location:</span> <span className="text-emerald-700">"Sri Lanka"</span></div>
              <div><span className="text-slate-400">04</span>  <span className="text-indigo-700 font-bold">email:</span> <a href={`mailto:${contactData.email}`} className="text-violet-650 font-semibold underline hover:text-violet-750 transition-colors">"{contactData.email}"</a></div>
            </div>
          </div>

          {/* Right Column: Execution prompt and platform buttons */}
          <div className="flex flex-col w-full lg:w-auto items-stretch lg:items-end justify-center">
            <div className="font-mono text-[11px] text-slate-500 mb-2 select-none lg:text-right hidden lg:block">
              $ sh establish_connection.sh --email
            </div>
            <ContactLinks />
          </div>

        </div>

        {/* Footer log */}
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500 select-none">
          <LuFolderHeart className="w-3.5 h-3.5 text-slate-650" />
          <span>Session compiled successfully. Ready for inquiries.</span>
        </div>

      </div>
    </div>
  );
}
