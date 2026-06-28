import { TbBrandGithubFilled, TbBrandLinkedinFilled, TbFileCv } from 'react-icons/tb';
import contactData from '../data/contacts.json';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { LuPlay } from 'react-icons/lu';

export default function ContactLinks() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-end w-full">
            {/* Primary Action Button (Terminal Run Command) */}
            <a 
                href={`mailto:${contactData.email}`} 
                className="flex w-full sm:w-44 h-12 rounded-2xl gap-2 text-sm font-mono font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md hover:shadow-lg transition-all duration-200 justify-center items-center select-none active:scale-98"
            >
                <LuPlay className="w-3.5 h-3.5 fill-white" />
                <span>run_contact.sh</span>
            </a>

            {/* Social Network Port Link Icons */}
            <div className="flex items-center gap-3">
                {/* GitHub */}
                <a 
                    href={contactData.github} 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="flex w-12 h-12 bg-white border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 text-slate-700 hover:text-slate-900 rounded-2xl items-center justify-center shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 select-none"
                    title="GitHub Profile"
                >
                    <TbBrandGithubFilled size={22} />
                </a>

                {/* LinkedIn */}
                <a 
                    href={contactData.linkedin} 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="flex w-12 h-12 bg-white border border-slate-200/80 hover:border-slate-300 hover:bg-blue-50/50 text-slate-700 hover:text-blue-600 rounded-2xl items-center justify-center shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 select-none"
                    title="LinkedIn Profile"
                >
                    <TbBrandLinkedinFilled size={22} />
                </a>

                {/* Instagram */}
                <a 
                    href={contactData.instagram} 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="flex w-12 h-12 bg-white border border-slate-200/80 hover:border-slate-300 hover:bg-rose-50/50 text-slate-700 hover:text-rose-500 rounded-2xl items-center justify-center shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 select-none"
                    title="Instagram Profile"
                >
                    <PiInstagramLogoFill size={22} />
                </a>

                {/* Resume / CV */}
                <a 
                    href={contactData.cv} 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="flex w-12 h-12 bg-white border border-slate-200/80 hover:border-slate-300 hover:bg-violet-50/50 text-slate-700 hover:text-violet-600 rounded-2xl items-center justify-center shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 select-none"
                    title="Download Curriculum Vitae"
                >
                    <TbFileCv size={22} />
                </a>
            </div>
        </div>
    );
}
