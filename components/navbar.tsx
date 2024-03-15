import { black, green, navLinks } from '@/constants'
import React from 'react'

export const Navbar = () => {
    return (
        <nav className="bg-edf8ed flex justify-between items-center px-36 mb-4" style={{ height: '10vh' }}>
            {/* Left side */}
            <div className="flex items-center">
                {/* Logo */}
                <div className="font-bold mr-4 px-4" style={{ color: green }}>Green.landing</div>
                {/* Menu */}
                <ul className="flex space-x-4">
                    {
                        navLinks.map((nav) => (
                            <li className="text-black px-2 font-semibold">{nav.label}</li>
                        ))
                    }
                </ul>
            </div>

            {/* Right side */}
            <div className="flex items-center">
                {/* Profile */}
                <div className="text-black font-semibold mr-4">Profile</div>
            </div>
        </nav>
    )
}
