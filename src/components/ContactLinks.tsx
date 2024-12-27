import { TbBrandGithubFilled, TbBrandLinkedinFilled, TbFileCv } from 'react-icons/tb'
import contactData from '../data/contacts.json'
import { PiInstagramLogoFill } from 'react-icons/pi'
export default function ContactLinks() {

    return (
        <div className="flex gap-y-5 md:gap-y-0 md:gap-x-5 flex-col md:flex-row justify-center items-center md:items-start md:justify-start w-full">
            <a href={`mailto:${contactData.email}`} className="flex w-full md:w-44 h-12 rounded-full gap-2 text-sm text-white bg-slate-900 hover:bg-slate-800 duration-150 justify-center items-center">Contact me</a>
            <div className="flex w-full md:w-auto justify-between md:justify-start md:gap-x-5">
                <a href={contactData.github} target='_blank' className={`flex w-12 h-12 bg-white hover:bg-black rounded-full items-center justify-center group duration-300`}>
                    <TbBrandGithubFilled size={26} className={`group-hover:fill-white`} />
                </a>
                <a href={contactData.instagram} target='_blank' className={`flex w-12 h-12 bg-white hover:bg-gradient-to-tr from-yellow-400 from-10% via-red-500  to-pink-400  rounded-full items-center justify-center group duration-300`}>
                    <PiInstagramLogoFill size={26} className={`group-hover:fill-white`} />
                </a>
                <a href={contactData.linkedin} target='_blank' className={`flex w-12 h-12 bg-white hover:bg-blue-500 rounded-full items-center justify-center group duration-300`}>
                    <TbBrandLinkedinFilled size={26} className={`group-hover:fill-white`} />
                </a>
                <a href={contactData.cv} target='_blank' className={`flex w-12 h-12 bg-white hover:bg-violet-400 rounded-full items-center justify-center group duration-300`}>
                    <TbFileCv size={26} className={`group-hover:fill-white`} />
                </a>
            </div>
        </div>
    )
}
