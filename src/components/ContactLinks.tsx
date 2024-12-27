import React from 'react'
import { TbBrandGithubFilled } from 'react-icons/tb'
export default function ContactLinks() {

    return (
        <div className="flex sm:gap-x-5">
            <a href="mailto:your@email.com" className="flex w-44 h-12 rounded-full gap-2 text-sm text-white bg-slate-900 hover:bg-slate-800 duration-150 justify-center items-center">Contact me</a>
            <a href='' className={`flex w-12 h-12 bg-white hover:bg-black rounded-full items-center justify-center group duration-300`}>
            <TbBrandGithubFilled size={24} className={`group-hover:fill-white`}/>
            </a>
        </div>
    )
}
