import { useState } from "react";
import ContactLinks from "../components/ContactLinks";
import placeholder from '../assets/images/gradient.png';
import homeData from '../data/home.json';
import contactData from '../data/contacts.json';
import { LuTerminal, LuFolderHeart } from 'react-icons/lu';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields before executing send_message.sh");
      return;
    }
    
    // Prefill body contents matching the message.md issue template format
    const bodyContent = `**From:** ${name} (${email})\n\n**Message:**\n${message}`;
    const newIssueUrl = `https://github.com/ishara-madu/ishara-madu.github.io/issues/new?template=message.md&title=Message+from+${encodeURIComponent(name)}&body=${encodeURIComponent(bodyContent)}`;
    
    // Open in a new tab to create the pre-filled issue
    window.open(newIssueUrl, '_blank');
  };

  return (
    <div id="contact" className="flex h-auto w-full rounded-3xl animate-slide-up overflow-hidden justify-center items-center relative border border-slate-200 border-opacity-80 shadow-md">
      {/* Background Image (Covering full dynamic height) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={homeData.customGradientImage || placeholder} 
          className="w-full h-full object-cover animate-halfRotate" 
          style={{ transformOrigin: "center center", scale: "2" }} 
        />
      </div>

      {/* Content Container (Matches other workstation windows) */}
      <div className="flex h-auto w-full bg-slate-500 bg-opacity-10 p-6 md:p-10 flex-col gap-6 z-10">
        
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

        {/* Section Header Block (Enables layout consistency with projects/testimonials/skills) */}
        <div className="flex flex-col">
          <span className="font-mono text-xs text-slate-500 mb-1.5 block tracking-wider font-semibold">
            // contact.sh - connection channels & endpoints
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-1 text-slate-900 select-none">
            &lt;Connect /&gt;
          </h2>
        </div>

        {/* Content Columns split */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 w-full items-stretch">
          
          {/* Left Column: Terminal Config Editor */}
          <div className="flex flex-col max-w-lg select-none w-full lg:w-auto justify-between gap-4 lg:gap-0">
            <div className="flex flex-col">
              <span className="font-mono text-xs text-indigo-700 font-bold mb-1.5 block tracking-wider">
                // contact_profile.yaml
              </span>
              <div className="bg-white/55 backdrop-blur-md border border-slate-200/45 rounded-2xl p-5 font-mono text-[11px] sm:text-xs text-slate-800 space-y-1.5 shadow-sm">
                <div><span className="text-slate-400">01</span>  <span className="text-indigo-700 font-bold">developer:</span> <span className="text-emerald-700">"Ishara Madusanka"</span></div>
                <div><span className="text-slate-400">02</span>  <span className="text-indigo-700 font-bold">status:</span> <span className="text-emerald-700">"open_to_collaborations"</span></div>
                <div><span className="text-slate-400">03</span>  <span className="text-indigo-700 font-bold">location:</span> <span className="text-emerald-700">"Sri Lanka"</span></div>
                <div><span className="text-slate-400">04</span>  <span className="text-indigo-700 font-bold">email:</span> <a href={`mailto:${contactData.email}`} className="text-violet-650 font-semibold underline hover:text-violet-750 transition-colors">"{contactData.email}"</a></div>
                <div><span className="text-slate-400">05</span>  <span className="text-indigo-700 font-bold">role:</span> <span className="text-emerald-700">"Full Stack Developer"</span></div>
                <div><span className="text-slate-400">06</span>  <span className="text-indigo-700 font-bold">availability:</span> <span className="text-emerald-700">"freelance_or_contract"</span></div>
                <div><span className="text-slate-400">07</span>  <span className="text-indigo-700 font-bold">timezone:</span> <span className="text-emerald-700">"GMT+5:30"</span></div>
                <div><span className="text-slate-400">08</span>  <span className="text-indigo-700 font-bold">website:</span> <a href="https://ishara-madu.github.io" target="_blank" rel="noopener noreferrer" className="text-violet-650 font-semibold underline hover:text-violet-750 transition-colors">"https://ishara-madu.github.io"</a></div>
              </div>
            </div>
            
            {/* Social connection platform links placed on the left, pushed to bottom on desktop */}
            <div className="lg:pt-2">
              <ContactLinks />
            </div>
          </div>

          {/* Right Column: Dynamic Send Message Form */}
          <div className="flex flex-col w-full lg:w-[380px] items-stretch justify-start">
            
            {/* Terminal Style Send Message Input Box */}
            <form onSubmit={handleSendMessage} className="flex flex-col bg-white/55 backdrop-blur-md border border-slate-200/45 rounded-2xl p-5 sm:p-6 font-mono text-[11px] sm:text-xs text-slate-800 space-y-3.5 shadow-sm w-full">
              <div className="text-indigo-750 font-bold select-none">$ ./send_message.sh</div>
              
              {/* Name Input */}
              <div className="flex items-center gap-2">
                <span className="text-indigo-700 font-bold select-none">name:</span>
                <input 
                  type="text" 
                  placeholder="enter your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-b border-slate-300 focus:border-indigo-500 outline-none px-1 py-0.5 text-slate-850 placeholder-slate-400/70 flex-grow text-base md:text-xs"
                />
              </div>

              {/* Email Input */}
              <div className="flex items-center gap-2">
                <span className="text-indigo-700 font-bold select-none">email:</span>
                <input 
                  type="email" 
                  placeholder="enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-b border-slate-300 focus:border-indigo-500 outline-none px-1 py-0.5 text-slate-850 placeholder-slate-400/70 flex-grow text-base md:text-xs"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-1.5">
                <span className="text-indigo-700 font-bold select-none">message:</span>
                <textarea 
                  placeholder="write your inquiry or message..."
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-transparent border border-slate-300 focus:border-indigo-500 outline-none p-2.5 rounded-xl text-slate-850 placeholder-slate-400/70 w-full h-24 resize-none leading-relaxed text-base md:text-xs"
                />
              </div>

              {/* Submit Action Button */}
              <button 
                type="submit"
                className="w-full py-2 bg-zinc-900 hover:bg-zinc-950 text-white rounded-xl font-bold shadow-sm hover:shadow active:scale-98 transition-all duration-200 text-center font-mono"
              >
                sh send_message.sh
              </button>
            </form>
          </div>

        </div>

        {/* Footer log */}
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500 select-none pt-2 border-t border-slate-900/5">
          <LuFolderHeart className="w-3.5 h-3.5 text-slate-650" />
          <span>Session compiled successfully. Ready for inquiries.</span>
        </div>

      </div>
    </div>
  );
}
