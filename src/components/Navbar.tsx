import React from 'react'

export default function Navbar() {
  return (
    <div className={`hidden md:flex`}>
        <ul className="flex gap-10">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}
