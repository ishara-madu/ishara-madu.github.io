import { useState } from "react"

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(true)

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
                <button onClick={() => { setShowLinks(prev => !prev) }} className={`flex items-center px-4 py-2 rounded-md text-sm text-white bg-blue-500 hover:bg-blue-600`}>Menu</button>
            </div>
            <div className={`flex md:hidden ${showLinks?'translate-x-full opacity-0':'translate-x-0 opacity-100'} duration-500 w-full h-[calc(100vh-56px)] bg-white fixed top-14`}>
                <ul className="flex gap-10 text-zinc-500 text-lg flex-col pl-5 pt-10">
                    <li><a href="/" className={`text-black`}>Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    )
}
