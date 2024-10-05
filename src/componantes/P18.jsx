import React, { useState } from 'react'
import '../App.css'

const P18 = () => {
    const [isOpen,setOpen] = useState(false)

    const togaleMenu = ()=>[
        setOpen(!isOpen)
    ]
  return (
    <div>
      <button className="text-5xl menu-icon" onClick={togaleMenu}> = </button>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Email</li>
      </ul>
    </div>
  )
}

export default P18
