import React from 'react';
import { useState } from 'react';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false) 

    const toggleNav = () => {
        setIsMenuOpen(isMenuOpen => !isMenuOpen)
    }

    let toggleNavMenu = isMenuOpen ? ' open' : ''
    let toggleMenuOverlay = isMenuOpen ? ' active' : ''

    return (
        <header>
            <div className="container-menu">
                <div className={`nav-menu${toggleNavMenu}`}>
                    <div className="close-nav-menu" onClick={toggleNav}>
                        <span className="close-icon"></span>
                    </div>
                    <ul className="menu">
                        <li className="menu-item"><a href="#">home</a></li>
                        <li className="menu-item"><a href="#">about me</a></li>
                        <li className="menu-item"><a href="#">my work</a></li>
                    </ul>
                </div>

                <div className="open-nav-menu" onClick={toggleNav}>
                    <span></span>
                </div>

                <div className={`menu-overlay${toggleMenuOverlay}`} onClick={toggleNav}>
                </div>
            </div>
        </header>
    )
}