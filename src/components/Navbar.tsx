import { useEffect, useState } from "react"
import MenuButton from "./MenuButton"

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false)

    const isOpen = (val: boolean) => {
        setShowLinks(val);
    }

    useEffect(() => {
        if (showLinks) {
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            document.body.style.overflow = ''; // Re-enable scroll
        }

        return () => {
            document.body.style.overflow = ''; // Cleanup on unmount
        };
    }, [showLinks]);

    return (
        <>
            <div className={`hidden md:flex pr-2`}>
                <ul className="flex gap-10 text-zinc-500">
                    <li><a href="/" className={`text-black`}>Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className={`flex md:hidden items-center pr-2`}>
                <MenuButton statue={showLinks} isOpen={isOpen} />
            </div>
            <div className={`flex md:hidden ${showLinks ? 'translate-x-0 opacity-100 overflow-hidden' : 'translate-x-full opacity-0'} fixed duration-500 w-full h-lvh bg-black top-14 z-50`}>
                <ul onClick={() => { setShowLinks(false) }} className="flex gap-10 text-zinc-500 text-lg flex-col pl-5 pt-10">
                    <li><a href="/" className={`text-black`}>Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    )
}
