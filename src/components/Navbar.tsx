import { useState } from "react"
import MenuButton from "./MenuButton"

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false)

    const isOpen = (val:boolean) => {
        setShowLinks(val);
    }

    return (
        <>
            <div className={`hidden md:flex`}>
                <ul className="flex gap-10 text-zinc-500">
                    <li><a href="/" className={`text-black`}>Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className={`flex md:hidden items-center pr-5 md:pr-0`}>
                <MenuButton statue={showLinks} isOpen={isOpen}/>
            </div>
            <div className={`flex md:hidden ${showLinks ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} duration-500 w-full h-[calc(100vh-56px)] bg-white fixed top-14`}>
                <ul onClick={()=>{setShowLinks(false)}} className="flex gap-10 text-zinc-500 text-lg flex-col pl-5 pt-10">
                    <li><a href="/" className={`text-black`}>Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    )
}
