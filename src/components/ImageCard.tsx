import { useState } from 'react';
import homeData from '../data/home.json';
import placeholder from '../assets/images/placeholder.webp';
import InteractiveTerminal from './InteractiveTerminal';

export default function ImageCard() {
    const [showTerminal, setShowTerminal] = useState(false);

    return (
        <div 
            id='person' 
            className="flex flex-col w-full md:w-4/12 h-[350px] md:h-full bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-900 shadow-lg hover:scale-[1.01] duration-300 transition-all z-10"
        >
            {/* Header window controls & tab toggle */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-900 bg-zinc-900/90 rounded-t-3xl">
                {/* macOS control dots */}
                <div className="flex gap-1.5 select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                
                {/* Mode Selector Toggle */}
                <div className="flex bg-zinc-850 rounded-lg p-0.5 text-[9px] font-bold text-zinc-400 font-mono shadow-inner border border-zinc-800">
                    <button 
                        onClick={() => setShowTerminal(false)}
                        className={`px-2.5 py-1 rounded-md transition-all duration-200 tracking-wider ${
                            !showTerminal 
                                ? 'bg-zinc-800 text-white shadow-sm' 
                                : 'hover:text-white'
                        }`}
                    >
                        PROFILE
                    </button>
                    <button 
                        onClick={() => setShowTerminal(true)}
                        className={`px-2.5 py-1 rounded-md transition-all duration-200 tracking-wider ${
                            showTerminal 
                                ? 'bg-zinc-800 text-white shadow-sm' 
                                : 'hover:text-white'
                        }`}
                    >
                        TERMINAL
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 relative overflow-hidden bg-zinc-950">
                {!showTerminal ? (
                    <img 
                        src={homeData.image || placeholder} 
                        alt={`${homeData.name[2]}'s image`} 
                        className="w-full h-full object-cover object-center animate-fade-in duration-300"
                    />
                ) : (
                    <InteractiveTerminal />
                )}
            </div>
        </div>
    );
}
