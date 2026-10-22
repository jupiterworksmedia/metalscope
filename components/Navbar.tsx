'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X, Phone, Mail } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Rail Division', href: '/rail' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top micro-bar */}
      <div className="topbar">
        <div className="wrap topbar-inner">
          <div className="topbar-info">
            <span><Phone size={13} /> +91 (0) 44 2688 0500</span>
            <span><Mail size={13} /> sales@metalscopeindia.com</span>
            <span className="badge-tag">ISO 9001:2015 & RDSO Approved</span>
          </div>
          <div className="topbar-links">
            <Link href="/contact#rfq">Fast Track RFQ</Link>
            <span className="dot-sep">·</span>
            <Link href="/about">Factory: Chennai, Tamil Nadu</Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="header">
        <div className="wrap nav">
          <Link href="/" className="logo" aria-label="Metal Scope India Home">
            <span className="logo-mark">
              M<span>▰</span>
            </span>
            <span className="logo-copy">
              <strong>METAL SCOPE</strong>
              <small>INDIA PVT. LTD.</small>
            </span>
          </Link>

          <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? 'active' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mobile-cta-wrap">
              <Link
                href="/contact"
                className="btn btn-orange"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request a Quote <ArrowRight size={15} />
              </Link>
            </div>
          </nav>

          <div className="nav-actions">
            <Link href="/contact" className="btn btn-orange nav-cta">
              Request a Quote <ArrowRight size={15} />
            </Link>
            <button
              className="menu-btn"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
