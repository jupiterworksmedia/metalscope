'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Download, 
  Factory, 
  TrainFront, 
  ShieldCheck, 
  Building2, 
  HardHat, 
  Warehouse, 
  Layers3, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  FileText, 
  Send, 
  X 
} from 'lucide-react';

const photos = {
  hero: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&q=85',
  peb: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&q=85',
  steel: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=85',
  bridge: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900&q=85',
  industrial: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=85',
  roof: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85',
  rail: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=900&q=85',
  factory: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?w=900&q=85',
  power: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=85'
};

const solutions = [
  { id: 'peb', title: 'Pre-Engineered Buildings', text: 'Efficient, scalable steel building systems for factories, warehouses and commercial facilities.', image: photos.peb, icon: Warehouse },
  { id: 'structural', title: 'Structural Steel & High-Rise', text: 'Engineered steel frameworks for complex industrial and commercial applications.', image: photos.steel, icon: Building2 },
  { id: 'bridges', title: 'Steel Bridges & Composite Girders', text: 'Bridge fabrication solutions for transport and public infrastructure.', image: photos.bridge, icon: Layers3 },
  { id: 'industrial', title: 'Industrial & Power Structures', text: 'Heavy fabrication for process plants, material handling and energy projects.', image: photos.industrial, icon: Factory },
  { id: 'roofing', title: 'Roofing, Cladding & Accessories', text: 'Integrated building envelopes, roofing profiles and structural accessories.', image: photos.roof, icon: Warehouse },
  { id: 'rail', title: 'Rail & Rolling Stock', text: 'Precision-fabricated underframes, sidewalls, roofs and rail coach components.', image: photos.rail, icon: TrainFront }
];

const sectors = [
  ['Automotive', photos.factory],
  ['Warehouses & Factories', photos.peb],
  ['Food Processing & FMCG', photos.industrial],
  ['Pharmaceuticals & Chemicals', photos.power],
  ['Power & Material Handling', photos.power],
  ['Aviation Hangars & Sports', photos.roof],
  ['Bridges & Infrastructure', photos.bridge],
  ['Rail & Rolling Stock', photos.rail]
];

const projects = [
  { title: 'Automated Logistics & Distribution Center', type: 'PEB', place: 'Sri City, India', image: photos.peb, desc: '72m clear span portal frame warehouse' },
  { title: 'Four-Lane Steel Bridge Superstructure', type: 'Infrastructure', place: 'Tamil Nadu, India', image: photos.bridge, desc: 'Composite plate girders & bridge engineering' },
  { title: 'Precision Rail Coach Shell Assemblies', type: 'Rail', place: 'Chennai, India', image: photos.rail, desc: 'RDSO-approved underframe & coach fabrication' }
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span /> {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="section-heading">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

export default function Home() {
  const [filter, setFilter] = useState('All');
  const [submitted, setSubmitted] = useState(false);
  const [profile, setProfile] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n');
    const email = 'sales@metalscopeindia.com';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      'Website RFQ - ' + String(data.get('company') || 'New enquiry')
    )}&body=${encodeURIComponent(lines)}`;
    setSubmitted(true);
  };

  return (
    <>
      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="hero"
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(4,25,44,.97) 0%,rgba(4,25,44,.86) 42%,rgba(4,25,44,.16) 100%),url('${photos.hero}')`
          }}
        >
          <div className="wrap hero-inner">
            <Eyebrow>ENGINEERING EXCELLENCE · BUILT TO LAST</Eyebrow>
            <h1>Total Steel Building Solutions for <em>Industry, Infrastructure & Rail.</em></h1>
            <p>From concept to completion. Design, fabrication, supply and erection of pre-engineered buildings, complex steel structures, bridges and rolling-stock components.</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-orange">
                Request a Quote <ArrowRight size={17} />
              </Link>
              <Link href="/about" className="btn btn-outline">
                About Our Company <ArrowRight size={17} />
              </Link>
              <button className="btn btn-outline" onClick={() => setProfile(true)}>
                Capability Profile <Download size={17} />
              </button>
            </div>
            <div className="hero-foot">ENGINEERING <b>·</b> MANUFACTURING <b>·</b> EXECUTION</div>
          </div>
        </section>

        {/* Trust Metrics Strip */}
        <section className="trust">
          <div className="wrap trust-grid">
            {[
              ['36+', 'Years of experience*'],
              ['ISO', '9001:2015*'],
              ['RDSO', 'Approval*'],
              ['IGBC', 'Membership*'],
              ['3,000 MT', 'Monthly capacity*']
            ].map(([a, b]) => (
              <div key={a}>
                <strong>{a}</strong>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions Overview */}
        <section id="solutions" className="section">
          <div className="wrap">
            <div className="section-top">
              <SectionHeading
                eyebrow="OUR SOLUTIONS"
                title="End-to-End Steel Building Solutions"
                sub="One integrated partner for engineered steel buildings, infrastructure and rolling-stock fabrication."
              />
              <Link href="/solutions" className="text-link">
                View All Solutions <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="solution-grid">
              {solutions.map((s) => {
                const Icon = s.icon;
                return (
                  <article className="solution-card" key={s.title}>
                    <img src={s.image} alt={s.title} />
                    <div className="solution-content">
                      <div className="solution-icon"><Icon size={23} /></div>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                      <Link href={`/solutions#${s.id}`} className="solution-link">
                        Explore solution <ArrowRight size={15} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section id="capabilities" className="process section-dark">
          <div className="wrap">
            <div className="section-top">
              <SectionHeading
                eyebrow="OUR PROCESS"
                title="From Concept to Completion"
                sub="A coordinated engineering-to-delivery approach, with quality and safety built into every stage."
              />
              <Link href="/capabilities" className="text-link text-white">
                Detailed Plant Capabilities <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="steps">
              {[
                'Consultation & Planning',
                'Design & Engineering',
                'Fabrication',
                'Quality Control',
                'Logistics',
                'Modular Erection',
                'Project Handover'
              ].map((s, i) => (
                <div className="step" key={s}>
                  <div className="step-number">0{i + 1}</div>
                  <div className="step-line" />
                  <h3>{s}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="section sectors">
          <div className="wrap">
            <SectionHeading
              eyebrow="SECTORS WE SERVE"
              title="Building Across Industries"
              sub="Engineered solutions for the requirements of industrial and infrastructure projects."
            />
            <div className="sector-grid">
              {sectors.map(([title, img]) => (
                <div className="sector" key={title}>
                  <img src={img} alt={title} />
                  <div>
                    {title}
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rail Banner */}
        <section
          id="rail"
          className="rail-section"
          style={{
            backgroundImage: `linear-gradient(90deg,#06213b 0%,rgba(6,33,59,.94) 50%,rgba(6,33,59,.35) 100%),url('${photos.rail}')`
          }}
        >
          <div className="wrap rail-inner">
            <Eyebrow>DEDICATED RAIL DIVISION</Eyebrow>
            <h2>Precision Engineering for Rail & Rolling Stock</h2>
            <p>Dedicated fabrication capabilities for rail coach underframes, sidewalls, roofs and shell-kit assemblies, supported by engineering and quality-control processes.</p>
            <div className="rail-tags">
              <span>Underframes</span>
              <span>Sidewalls & Roofs</span>
              <span>Shell Kits</span>
              <span>Steel Fabrication</span>
            </div>
            <div className="rail-cta-group">
              <Link href="/rail" className="btn btn-orange">
                Explore Rail Division <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Rail Supplier Enquiry <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section id="projects" className="section projects">
          <div className="wrap">
            <div className="section-top">
              <SectionHeading
                eyebrow="SELECTED APPLICATIONS"
                title="Engineering in Action"
                sub="Representative project categories executed with precision engineering and turnkey erection."
              />
              <Link href="/projects" className="text-link">
                View Full Project Gallery <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="project-grid">
              {projects.map((p) => (
                <article className="project" key={p.title}>
                  <img src={p.image} alt={p.title} />
                  <div className="project-body">
                    <span>{p.type.toUpperCase()}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <small><MapPin size={13} />{p.place}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Metal Scope & Quick RFQ */}
        <section id="about" className="why section">
          <div className="wrap why-grid">
            <div>
              <SectionHeading
                eyebrow="WHY METAL SCOPE"
                title="Engineering Strength. Execution Excellence."
                sub="Technical capability and integrated delivery, from engineering design to on-site assembly."
              />
              <div className="why-list">
                {[
                  ['In-House Engineering', 'BIM-enabled design, analysis and detailing'],
                  ['Manufacturing Capability', 'Advanced fabrication and production infrastructure'],
                  ['Quality-Driven Processes', 'Inspection, traceability and documented QA'],
                  ['Project Execution', 'Coordination from fabrication through erection']
                ].map(([h, p]) => (
                  <div key={h}>
                    <CheckCircle2 size={22} />
                    <div>
                      <h3>{h}</h3>
                      <p>{p}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="verification">*Certification, capacity and experience claims are supplied in the project brief and require current documentary verification before launch.</p>
              <div style={{ marginTop: '20px' }}>
                <Link href="/about" className="btn btn-outline-dark">
                  Read More About Us <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div id="contact" className="rfq">
              <Eyebrow>GET STARTED</Eyebrow>
              <h2>Request a Project Consultation</h2>
              <p>Share your project requirements and our team can review the scope.</p>
              <form onSubmit={submit}>
                <div className="form-grid">
                  <label>
                    Full Name*
                    <input name="name" placeholder="Your name" required />
                  </label>
                  <label>
                    Company Name*
                    <input name="company" placeholder="Company" required />
                  </label>
                  <label>
                    Email Address*
                    <input name="email" type="email" placeholder="name@company.com" required />
                  </label>
                  <label>
                    Phone Number*
                    <input name="phone" type="tel" placeholder="+91 ..." required />
                  </label>
                  <label>
                    Project Type*
                    <select name="project_type" required defaultValue="">
                      <option value="" disabled>Select project type</option>
                      <option>Pre-Engineered Building</option>
                      <option>Structural Steel</option>
                      <option>Bridge / Infrastructure</option>
                      <option>Rail & Rolling Stock</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label>
                    Project Location
                    <input name="location" placeholder="City / Region" />
                  </label>
                </div>
                <label>
                  Project Requirements
                  <textarea name="requirements" rows={4} placeholder="Tell us about scope, tonnage, timeline and drawings available..." />
                </label>
                <button className="btn btn-orange submit" type="submit">
                  Prepare Email Enquiry <Send size={16} />
                </button>
                <small className="form-note">This demo opens your email application with the enquiry details. A production website should connect to a secure RFQ backend.</small>
                {submitted && (
                  <div className="success">Your email application should open with a prepared enquiry. Please send the email to complete the request.</div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="final-cta"
          style={{
            backgroundImage: `linear-gradient(90deg,#061d33 0%,rgba(6,29,51,.88) 60%,rgba(6,29,51,.4) 100%),url('${photos.steel}')`
          }}
        >
          <div className="wrap">
            <h2>Ready to Build What’s Next?</h2>
            <p>Discuss your steel building, bridge, industrial structure or rail fabrication project with our technical specialists.</p>
            <Link href="/contact" className="btn btn-orange">
              Request a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      {profile && (
        <div className="modal-backdrop" onClick={() => setProfile(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" aria-label="Close" onClick={() => setProfile(false)}>
              <X />
            </button>
            <FileText size={36} color="#f47721" />
            <h2>Capability Profile</h2>
            <p>The approved corporate capability profile PDF has not yet been supplied. Request it from the team or upload the official PDF to enable a direct download.</p>
            <Link href="/contact" className="btn btn-orange" onClick={() => setProfile(false)}>
              Request Profile via Email <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
