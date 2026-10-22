import Link from 'next/link';
import { ArrowUpRight, MapPin, Mail, Phone, ShieldCheck, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-cta-bar">
        <div className="footer-cta-text">
          <h3>Ready to start your next structural steel project?</h3>
          <p>Talk to our engineering team about design, cost estimation, and delivery timelines.</p>
        </div>
        <div className="footer-cta-buttons">
          <Link href="/contact" className="btn btn-orange">
            Request a Consultation <ArrowUpRight size={16} />
          </Link>
          <Link href="/capabilities" className="btn btn-outline-light">
            Explore Capabilities
          </Link>
        </div>
      </div>

      <div className="wrap footer-grid">
        <div className="footer-col brand-col">
          <div className="footer-brand">
            METAL SCOPE <span>INDIA</span>
          </div>
          <p className="brand-desc">
            A leader in engineering, manufacturing, and erection of total steel building systems, 
            heavy infrastructure bridges, and precision rail rolling-stock components.
          </p>
          <div className="footer-badges">
            <span className="badge"><ShieldCheck size={14} /> ISO 9001:2015</span>
            <span className="badge"><ShieldCheck size={14} /> RDSO Approved</span>
            <span className="badge"><ShieldCheck size={14} /> IGBC Member</span>
          </div>
        </div>

        <div className="footer-col">
          <strong>Engineering Solutions</strong>
          <Link href="/solutions#peb">Pre-Engineered Buildings</Link>
          <Link href="/solutions#structural">Structural Steel & High-Rise</Link>
          <Link href="/solutions#bridges">Steel Bridges & Girders</Link>
          <Link href="/solutions#industrial">Industrial & Power Structures</Link>
          <Link href="/solutions#roofing">Roofing, Cladding & Profiles</Link>
          <Link href="/rail">Rail & Rolling Stock Components</Link>
        </div>

        <div className="footer-col">
          <strong>Company & Execution</strong>
          <Link href="/about">About Metal Scope</Link>
          <Link href="/capabilities">End-to-End Capabilities</Link>
          <Link href="/projects">Featured Projects</Link>
          <Link href="/rail">Dedicated Rail Division</Link>
          <Link href="/about#quality">Quality & Safety Standards</Link>
          <Link href="/contact">Client Support & RFQ</Link>
        </div>

        <div className="footer-col contact-col">
          <strong>Contact Us</strong>
          <p className="footer-contact-item">
            <MapPin size={16} />
            <span>Plant: G-30, SIPCOT Industrial Park, Vallam Vadagal, Sriperumbudur, Tamil Nadu 602105, India</span>
          </p>
          <p className="footer-contact-item">
            <Phone size={16} />
            <span>+91 (0) 44 2688 0500</span>
          </p>
          <p className="footer-contact-item">
            <Mail size={16} />
            <span>sales@metalscopeindia.com</span>
          </p>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <div>
          © {new Date().getFullYear()} Metal Scope India Pvt. Ltd. All rights reserved.
        </div>
        <div className="footer-bottom-links">
          <Link href="/about">Privacy Policy</Link>
          <span>·</span>
          <Link href="/about">Terms of Service</Link>
          <span>·</span>
          <a href="https://www.metalscopeindia.com/" target="_blank" rel="noreferrer">
            Corporate Site <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
