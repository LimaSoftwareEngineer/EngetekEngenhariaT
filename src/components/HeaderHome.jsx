import React, { useState, useEffect } from 'react';
import Logo from '../assets/logos/ENGRENAGEM BRANCA.png';
import '../styles/global.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="/"><img src={Logo} alt="Logo" /></a>
      </div>
      <nav className="nav">
        <ul
          className={`nav-links ${isMenuOpen || !isScrolled ? 'active' : ''} ${isScrolled ? 'scrolled-links' : ''}`}
          onMouseLeave={() => isScrolled && setIsMenuOpen(false)}
        >

          <li><a href="/">Home</a></li>
          <li><a href="/portfolio">Portfólio</a></li>
          <li><a href="/services">Serviços</a></li>
          <li><a href="/aboutus">Sobre</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
        <div
          className={`hamburger ${isScrolled ? 'visible' : ''}`}
          onMouseEnter={() => isScrolled && setIsMenuOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};
