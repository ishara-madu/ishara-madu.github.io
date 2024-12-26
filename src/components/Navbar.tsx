import { useState } from "react";

export default function Navbar() {
    const [selectLink, setselectLink] = useState<number>(0)

    const links = [
        { id: 1, name: 'Home', href: '#home' },
        { id: 2, name: 'Projects', href: '#projects' },
        { id: 3, name: 'Contact', href: '#contact' }
    ]
    const handleVisited = (id:number) => {
        setselectLink(id)
    };

    return (
        <div className={`hidden md:flex`}>
            <ul className="flex gap-10 text-zinc-500">
                {
                    links.map(link => (
                        <li key={link.id}>
                            <a 
                            className={`${selectLink === link.id? 'text-black' : ''}`}
                            href={link.href} onClick={()=>handleVisited(link.id)}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
