'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cities } from '@/data/venues';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Hyderabad');

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link href="/" className="navbar-logo">
          <img src="/logo.png" alt="Kalyan Mantap" className="logo-img" />
          <span className="logo-text">Kalyan Mantap</span>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link href="/venues" className="nav-link" onClick={() => setMenuOpen(false)}>Browse Halls</Link>
          <Link href="/dashboard" className="nav-link" onClick={() => setMenuOpen(false)}>My Bookings</Link>

          <div className="city-selector" onClick={() => setCityOpen(!cityOpen)}>
            <span className="city-icon">📍</span>
            <span>{selectedCity}</span>
            <span className="city-arrow">{cityOpen ? '▲' : '▼'}</span>
            {cityOpen && (
              <div className="city-dropdown">
                {cities.map(city => (
                  <div key={city} className={`city-option ${city === selectedCity ? 'active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); setSelectedCity(city); setCityOpen(false); }}>
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="navbar-actions">
          <Link href="/venues" className="btn btn-primary btn-sm navbar-cta">Book Now</Link>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`hamburger ${menuOpen ? 'open' : ''}`}><span></span><span></span><span></span></span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .navbar{position:sticky;top:0;z-index:1000;background:rgba(255,248,236,0.94);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--warm-100);height:var(--navbar-height)}
        .navbar-inner{display:flex;align-items:center;justify-content:space-between;height:100%;gap:28px}
        .navbar-logo{display:flex;align-items:center;gap:8px;flex-shrink:0}
        .logo-img{width:38px;height:38px;object-fit:contain;border-radius:6px}
        .logo-text{font-family:var(--font-heading);font-size:1.35rem;font-weight:700;background:linear-gradient(135deg,var(--maroon),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .navbar-links{display:flex;align-items:center;gap:24px}
        .nav-link{font-size:0.88rem;font-weight:500;color:var(--text-secondary);transition:color var(--ease-base);position:relative}
        .nav-link::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:2px;background:var(--maroon);border-radius:1px;transition:width var(--ease-base)}
        .nav-link:hover{color:var(--maroon)}
        .nav-link:hover::after{width:100%}
        .city-selector{display:flex;align-items:center;gap:5px;padding:6px 13px;border-radius:var(--radius-full);background:var(--warm-50);cursor:pointer;position:relative;font-size:0.82rem;font-weight:500;color:var(--text-secondary);transition:all var(--ease-base)}
        .city-selector:hover{background:var(--maroon-50);color:var(--maroon)}
        .city-icon{font-size:0.85rem}
        .city-arrow{font-size:0.55rem;opacity:.5}
        .city-dropdown{position:absolute;top:calc(100% + 8px);left:0;background:#fff;border-radius:var(--radius-md);box-shadow:var(--shadow-xl);border:1px solid var(--border-color);min-width:170px;overflow:hidden;animation:fadeInUp .2s ease;z-index:100}
        .city-option{padding:9px 16px;font-size:0.82rem;cursor:pointer;transition:all var(--ease-fast)}
        .city-option:hover{background:var(--maroon-50);color:var(--maroon)}
        .city-option.active{background:var(--maroon);color:#fff}
        .navbar-actions{display:flex;align-items:center;gap:12px}
        .menu-toggle{display:none;background:none;padding:8px}
        .hamburger{display:flex;flex-direction:column;gap:5px;width:20px}
        .hamburger span{display:block;height:2px;width:100%;background:var(--text-primary);border-radius:1px;transition:all var(--ease-base)}
        .hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
        .hamburger.open span:nth-child(2){opacity:0}
        .hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
        @media(max-width:768px){
          .navbar-links{position:fixed;top:var(--navbar-height);left:0;right:0;background:#fff;flex-direction:column;padding:20px;gap:16px;border-bottom:1px solid var(--border-color);box-shadow:var(--shadow-lg);transform:translateY(-100%);opacity:0;pointer-events:none;transition:all var(--ease-slow)}
          .navbar-links.open{transform:translateY(0);opacity:1;pointer-events:all}
          .navbar-cta{display:none}
          .menu-toggle{display:block}
        }
      `}</style>
    </nav>
  );
}
