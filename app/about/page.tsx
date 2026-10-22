import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { 
  ShieldCheck, 
  Award, 
  Factory, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Building, 
  Globe2, 
  Target, 
  Eye, 
  Compass,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Metal Scope India - Steel Building & Fabrication Leaders',
  description: 'Learn about Metal Scope India: our 36+ year heritage in pre-engineered buildings, heavy structural steel fabrication, RDSO-approved rail solutions, and our modern plant in Chennai.',
};

const milestones = [
  { year: '1988', title: 'Founding & Structural Beginnings', desc: 'Established as a specialized structural fabrication enterprise serving early industrial corridors.' },
  { year: '1998', title: 'Pioneering PEB Technology', desc: 'Introduced computer-aided pre-engineered building (PEB) design and automated portal-frame fabrication.' },
  { year: '2008', title: 'RDSO Approval for Indian Railways', desc: 'Achieved stringent RDSO manufacturing certification for rail coach underframes and rolling-stock components.' },
  { year: '2016', title: 'Sriperumbudur Mega Facility', desc: 'Commissioned our advanced 250,000 sq. ft. automated fabrication facility in Tamil Nadu, boosting capacity to 3,000 MT/month.' },
  { year: '2024', title: 'Industry 4.0 & Green Steel', desc: 'Integrated 3D BIM-Tekla detailing, robotic welding cells, and eco-certified fabrication under IGBC guidelines.' },
];

const values = [
  { icon: Target, title: 'Engineering Precision', desc: 'Zero-compromise structural tolerances verified through laser inspection and NDT methods.' },
  { icon: ShieldCheck, title: 'Safety & Compliance', desc: 'Stringent adherence to IS, AISC, BS, and RDSO engineering codes with complete material traceability.' },
  { icon: Zap, title: 'On-Time Execution', desc: 'Turnkey project management ensuring modular assembly and fast-track site commissioning.' },
  { icon: Compass, title: 'Sustainable Construction', desc: 'Promoting 100% recyclable structural steel, optimized material weight ratios, and green building practices.' },
];

export default function AboutPage() {
  return (
    <main className="subpage">
      <PageHeader
        eyebrow="ABOUT METAL SCOPE INDIA"
        title="Engineering Strength. Proven Reliability."
        description="Over three decades of pioneering structural engineering, pre-engineered building excellence, and precision rail component fabrication across India and global markets."
        breadcrumbs={[{ label: 'About Us' }]}
        bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=1800&q=85"
      />

      {/* Overview Section */}
      <section className="section">
        <div className="wrap">
          <div className="about-overview-grid">
            <div className="about-text">
              <div className="eyebrow"><span /> WHO WE ARE</div>
              <h2>A Legacy of Structural Innovation & Industrial Integrity</h2>
              <p className="lead-text">
                Metal Scope India Pvt. Ltd. is one of India’s foremost integrated engineering and steel fabrication companies. Headquartered in Tamil Nadu, we provide end-to-end design, manufacturing, supply, and turnkey erection of steel infrastructure.
              </p>
              <p>
                From massive logistics warehousing parks and multi-story structural steel commercial complexes to heavy highway composite bridge girders and safety-critical rolling stock coach assemblies for Indian Railways, we turn complex blueprints into enduring realities.
              </p>
              <div className="highlights-pills">
                <span>3,000 MT Monthly Capacity</span>
                <span>RDSO Certified Division</span>
                <span>500+ Projects Delivered</span>
                <span>Integrated In-House Detailing</span>
              </div>
            </div>
            <div className="about-image-card">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=85" 
                alt="Metal Scope Manufacturing Plant" 
              />
              <div className="about-image-badge">
                <strong>36+</strong>
                <span>Years of Engineering Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-dark mission-vision">
        <div className="wrap">
          <div className="grid-2">
            <div className="card-dark">
              <div className="card-icon"><Target size={28} /></div>
              <h3>Our Mission</h3>
              <p>
                To provide benchmark-setting, cost-efficient, and sustainable steel structures through advanced design engineering, state-of-the-art manufacturing infrastructure, and dependable project execution that empowers our clients&apos; industrial growth.
              </p>
            </div>
            <div className="card-dark">
              <div className="card-icon"><Eye size={28} /></div>
              <h3>Our Vision</h3>
              <p>
                To be the most preferred and trusted structural steel building and rolling-stock fabrication partner across South Asia, recognized for uncompromising safety, engineering ingenuity, and customer-first execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="wrap">
          <div className="section-heading text-center">
            <div className="eyebrow justify-center"><span /> OUR VALUES</div>
            <h2>The Principles that Guide Every Beam & Bolt</h2>
            <p>Our commitment to excellence is reflected in our working methodology, safety protocols, and long-term client partnerships.</p>
          </div>
          <div className="grid-4 values-grid">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="value-card">
                  <div className="value-icon"><Icon size={24} /></div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section id="quality" className="section quality-section">
        <div className="wrap">
          <div className="section-heading">
            <div className="eyebrow"><span /> CREDENTIALS & COMPLIANCE</div>
            <h2>Certified for the Highest Engineering Demands</h2>
            <p>Our fabrication works and quality control systems are audited and certified by leading national and international bodies.</p>
          </div>
          <div className="cert-cards-grid">
            <div className="cert-card">
              <div className="cert-badge"><ShieldCheck size={32} /></div>
              <h3>ISO 9001:2015</h3>
              <p>Comprehensive Quality Management System certification across Design, Fabrication, Surface Treatment, and Site Erection.</p>
            </div>
            <div className="cert-card">
              <div className="cert-badge"><Award size={32} /></div>
              <h3>RDSO Approved</h3>
              <p>Recognized by the Research Designs and Standards Organisation (Ministry of Railways) for rail coach sub-assemblies and underframes.</p>
            </div>
            <div className="cert-card">
              <div className="cert-badge"><Factory size={32} /></div>
              <h3>EN 15085-2 / ISO 3834</h3>
              <p>Global standard for welding of railway vehicles and high-stress structural steel components with certified welding coordinators.</p>
            </div>
            <div className="cert-card">
              <div className="cert-badge"><Globe2 size={32} /></div>
              <h3>IGBC Member</h3>
              <p>Committed to green factory buildings, low carbon steel sourcing, and sustainable modular erection technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="section section-dark">
        <div className="wrap">
          <div className="section-heading">
            <div className="eyebrow"><span /> OUR JOURNEY</div>
            <h2>Milestones Along the Way</h2>
            <p>From a modest workshop to one of South India’s most technologically capable steel manufacturing plants.</p>
          </div>
          <div className="timeline-grid">
            {milestones.map((m) => (
              <div key={m.year} className="timeline-item">
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-dot" />
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="subpage-cta">
        <div className="wrap cta-box">
          <div>
            <h2>Have a project that requires trusted steel engineering?</h2>
            <p>Connect with our technical consultants to discuss feasibility, detailing, and commercial estimates.</p>
          </div>
          <Link href="/contact" className="btn btn-orange">
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
