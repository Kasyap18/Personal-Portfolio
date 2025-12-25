import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <ul className="nav-links">
                    <li><a onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
                    <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
                    <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
