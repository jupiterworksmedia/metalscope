'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  FileText,
  Building,
  TrainFront,
  HelpCircle
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n');
    const email = 'sales@metalscopeindia.com';
    const subject = `Website RFQ - ${String(data.get('company') || 'New Structural Enquiry')}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'What is your typical turnaround time for an initial PEB quotation?',
      a: 'For projects with preliminary architectural drawings or basic dimensional parameters (span, length, eave height), our estimation team provides an initial general arrangement (GA) proposal and commercial estimate within 48 to 72 business hours.'
    },
    {
      q: 'Do you provide turnkey erection services across India?',
      a: 'Yes. Metal Scope India manages end-to-end delivery: in-house 3D BIM design, shop fabrication, surface coating, sequenced logistics, and complete site erection with our certified site supervisors and erection crews.'
    },
    {
      q: 'Can you participate in government and PSU infrastructure tenders?',
      a: 'Yes. Metal Scope possesses required certifications including ISO 9001:2015, RDSO Category-1 approval for Indian Railways, and active registrations for National Highway (NHAI) and state infrastructure tenders.'
    },
    {
      q: 'What quality testing documentation is provided with shipments?',
      a: 'Every dispatch is accompanied by complete inspection dossiers: Mill Test Certificates (MTC 3.1) for raw steel, Ultrasonic / Radiography NDT reports, blast profile & paint DFT reports, and torque-wrench calibration certificates.'
    }
  ];

  return (
    <main className="subpage">
      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Contact Us & Request a Project Consultation"
        description="Share your structural scope, architectural drawings, or tender specifications with our engineering team for an accurate feasibility review and commercial estimate."
        breadcrumbs={[{ label: 'Contact' }]}
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=85"
      />

      {/* Contact info cards */}
      <section className="section contact-cards-section">
        <div className="wrap">
          <div className="grid-3 contact-cards-grid">
            <div className="contact-info-card">
              <div className="contact-card-icon"><MapPin size={24} /></div>
              <h3>Manufacturing Plant</h3>
              <p>Plot No. G-30, SIPCOT Industrial Park, Vallam Vadagal, Sriperumbudur, Tamil Nadu 602105, India</p>
              <span className="contact-badge">Heavy Fabrication Facility</span>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon"><Phone size={24} /></div>
              <h3>Telephone & Direct Lines</h3>
              <p><strong>General Office:</strong> +91 (0) 44 2688 0500</p>
              <p><strong>Sales & RFQ:</strong> +91 (0) 44 2688 0501</p>
              <span className="contact-badge">Mon – Sat: 9:00 AM – 6:30 PM IST</span>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon"><Mail size={24} /></div>
              <h3>Departmental Email Inquiries</h3>
              <p><strong>Project Estimations:</strong> sales@metalscopeindia.com</p>
              <p><strong>Rail Division:</strong> rail@metalscopeindia.com</p>
              <p><strong>Vendor & Procurement:</strong> purchase@metalscopeindia.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main RFQ Form and Map Section */}
      <section id="rfq" className="section rfq-main-section">
        <div className="wrap">
          <div className="rfq-split-grid">
            {/* Form */}
            <div className="rfq-form-container">
              <div className="rfq-form-header">
                <div className="eyebrow"><span /> SUBMIT YOUR REQUIREMENTS</div>
                <h2>Request for Quotation (RFQ)</h2>
                <p>Fill out the details below. Our technical sales team will review your specifications and contact you.</p>
              </div>

              <form onSubmit={handleSubmit} className="rfq-subpage-form">
                <div className="form-row-2">
                  <label>
                    Full Name *
                    <input name="name" required placeholder="e.g. Ramesh Kumar" />
                  </label>
                  <label>
                    Company / Organization *
                    <input name="company" required placeholder="e.g. Acme Logistics Pvt Ltd" />
                  </label>
                </div>

                <div className="form-row-2">
                  <label>
                    Corporate Email Address *
                    <input name="email" type="email" required placeholder="name@company.com" />
                  </label>
                  <label>
                    Phone / Mobile Number *
                    <input name="phone" type="tel" required placeholder="+91 98765 43210" />
                  </label>
                </div>

                <div className="form-row-2">
                  <label>
                    Project Category *
                    <select name="project_type" required defaultValue="">
                      <option value="" disabled>Select project type</option>
                      <option value="PEB">Pre-Engineered Building (Warehouse / Factory)</option>
                      <option value="Structural Steel">Heavy Structural Steel / High-Rise</option>
                      <option value="Steel Bridge">Steel Bridge / ROB / Flyover Girders</option>
                      <option value="Rail">Rail & Rolling Stock Components (RDSO)</option>
                      <option value="Industrial">Power Plant / Heavy Industrial Structure</option>
                      <option value="Roofing">Roofing, Standing Seam & Cladding</option>
                    </select>
                  </label>

                  <label>
                    Drawing / Stage Status
                    <select name="stage" defaultValue="Preliminary Concept">
                      <option value="Detailed Drawings Available">Detailed Structural Drawings Ready</option>
                      <option value="Preliminary Concept">Preliminary Architectural Concept</option>
                      <option value="Tender / Bidding Stage">Tender / RFP Bidding Stage</option>
                      <option value="Budgetary Estimation Only">Budgetary Feasibility Only</option>
                    </select>
                  </label>
                </div>

                <div className="form-row-2">
                  <label>
                    Estimated Scope (Tonnage or Area)
                    <input name="scope_estimate" placeholder="e.g. 1,500 MT or 150,000 Sq. Ft." />
                  </label>
                  <label>
                    Project Site Location (City / State)
                    <input name="site_location" placeholder="e.g. Chennai, Tamil Nadu" />
                  </label>
                </div>

                <label>
                  Project Details & Technical Scope *
                  <textarea
                    name="requirements"
                    rows={5}
                    required
                    placeholder="Please specify clear spans, eave height, crane requirements (tonnage), timeline, and site constraints..."
                  />
                </label>

                <div className="form-footer-action">
                  <button type="submit" className="btn btn-orange btn-large">
                    Submit RFQ Enquiry <Send size={16} />
                  </button>
                  <small className="form-security-note">
                    <ShieldCheck size={14} className="text-orange" />
                    Your engineering blueprints and data are protected under strict commercial confidentiality.
                  </small>
                </div>

                {submitted && (
                  <div className="form-success-box">
                    <CheckCircle2 size={20} />
                    <div>
                      <strong>Your enquiry has been prepared!</strong>
                      <p>Your default email client has been launched with your form inputs directed to <code>sales@metalscopeindia.com</code>. Please hit send to finalize.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Side summary & Plant directions */}
            <div className="rfq-side-info">
              <div className="side-box factory-preview">
                <h3>Our Fabrication Facility</h3>
                <img 
                  src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?w=800&q=85" 
                  alt="Metal Scope Manufacturing Unit" 
                />
                <div className="facility-details">
                  <h4>SIPCOT Industrial Park Unit</h4>
                  <p>Strategically situated in the Sriperumbudur-Oragadam manufacturing belt, offering direct proximity to Chennai Port, Ennore Port, and major railway freight corridors.</p>
                  <ul className="facility-bullets">
                    <li><CheckCircle2 size={14} /> 250,000+ sq. ft. modern covered shed</li>
                    <li><CheckCircle2 size={14} /> Direct heavy multi-axle trailer road access</li>
                    <li><CheckCircle2 size={14} /> Dedicated RDSO railway testing bay</li>
                  </ul>
                </div>
              </div>

              <div className="side-box contact-turnaround">
                <Clock className="text-orange" size={26} />
                <div>
                  <h4>Fast Turnaround Guaranteed</h4>
                  <p>Our dedicated proposals engineering team responds within 24 to 48 hours for standard PEB and structural steel enquiries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-dark faq-section">
        <div className="wrap">
          <div className="section-heading">
            <div className="eyebrow"><span /> FREQUENTLY ASKED QUESTIONS</div>
            <h2>Got Questions Before Requesting an RFQ?</h2>
            <p>Common questions from project owners, architects, and structural engineering consultants.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`faq-item ${activeFaq === i ? 'open' : ''}`}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <span className="faq-toggle">{activeFaq === i ? '−' : '+'}</span>
                </div>
                {activeFaq === i && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
