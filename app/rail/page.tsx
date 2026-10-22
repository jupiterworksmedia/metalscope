import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { 
  TrainFront, 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck, 
  Flame, 
  Crosshair,
  Award,
  Download
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rail & Rolling Stock Division | Metal Scope India',
  description: 'RDSO-approved precision fabrication for Indian Railways and global metro rolling stock. High-grade coach underframes, sidewall assemblies, stainless steel shells, and bogie components.',
};

const railProducts = [
  {
    title: 'Coach Underframe Assemblies',
    desc: 'Heavy-duty longitudinal sole bars, cross bearers, and headstock weldments engineered to absorb high impact buffing loads in accordance with RDSO design specifications.',
    specs: ['Cort-Ten Steel IRS M-41 / Austenitic Stainless Steel', 'Automated jig-based robotic Submerged Arc Welding', '100% full-penetration ultrasonic inspection']
  },
  {
    title: 'Stainless Steel Sidewalls & Roof Sheets',
    desc: 'Precision laser-cut and roll-formed stainless steel panel sheets for LHB coaches and Vande Bharat trainsets, providing superior anti-telescopic strength and finish.',
    specs: ['Grade AISI 304 / 409M stainless steel materials', 'Automated spot and continuous TIG/MIG welding lines', 'Strict camber and flatness tolerances within 1.5mm']
  },
  {
    title: 'Bogie Frames & Bolster Fabrications',
    desc: 'Dynamic high-stress suspension members, motor bogie side frames, and bolster fabrications machined and stress-relieved to withstand severe cyclic railway vibrations.',
    specs: ['Thermal stress relieving in computerized normalizing furnaces', 'Multi-axis CNC milling for pin and bushing bores', 'Magnetic Particle & Radiographic weld joint testing']
  },
  {
    title: 'Shell Kits & End Wall Assemblies',
    desc: 'Complete modular sub-assembly kits supplied ready for assembly lines at Integral Coach Factory (ICF), Rail Coach Factory (RCF), and Modern Coach Factory (MCF).',
    specs: ['Integrated crash-worthiness energy absorber brackets', 'Dimensional inspection using 3D laser tracking arms', 'Surface pickled, passivated, or epoxy zinc phosphate coated']
  }
];

const standards = [
  { label: 'RDSO Approval', desc: 'Approved vendor category for Coach Underframes and Body Shell Sub-assemblies by Ministry of Railways, Govt. of India.' },
  { label: 'EN 15085-2 (CL1)', desc: 'Certified to the highest classification level for welding of railway vehicles and safety-critical components.' },
  { label: 'ISO 3834-2', desc: 'Comprehensive quality requirements for fusion welding of metallic materials across all shop floors.' },
  { label: 'IRS M-41 & AISI 304', desc: 'Standardized material traceability from prime steel manufacturers with 3.1 chemical & mechanical test certificates.' }
];

export default function RailPage() {
  return (
    <main className="subpage">
      <PageHeader
        eyebrow="SPECIALIZED DIVISION"
        title="Precision Rail & Rolling Stock Engineering"
        description="Dedicated manufacturing infrastructure supplying safety-critical coach underframes, stainless steel body assemblies, and bogie components for Indian Railways and high-speed rail."
        breadcrumbs={[{ label: 'Rail Division' }]}
        bgImage="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1800&q=85"
      />

      {/* Intro overview */}
      <section className="section">
        <div className="wrap">
          <div className="about-overview-grid">
            <div className="about-text">
              <div className="eyebrow"><span /> ROLLING STOCK EXCELLENCE</div>
              <h2>Powering India’s Modern Rail Transformation</h2>
              <p className="lead-text">
                With the rapid modernization of Indian Railways through LHB coach expansion and the indigenous Vande Bharat Express network, Metal Scope India has established a specialized, high-precision railway fabrication division.
              </p>
              <p>
                Our facility in Chennai is strategically located close to the Integral Coach Factory (ICF Perambur), enabling seamless supply chain coordination, rigorous quality inspection, and just-in-time delivery of precision welded assemblies.
              </p>

              <div className="stat-pills">
                <div className="stat-pill">
                  <strong>RDSO</strong>
                  <span>Category-1 Approved</span>
                </div>
                <div className="stat-pill">
                  <strong>EN 15085</strong>
                  <span>Welding Certified</span>
                </div>
                <div className="stat-pill">
                  <strong>100% NDT</strong>
                  <span>Tested Joints</span>
                </div>
              </div>
            </div>

            <div className="rail-plant-card">
              <img 
                src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?w=900&q=85" 
                alt="Rail Manufacturing Division" 
              />
              <div className="rail-badge">
                <TrainFront size={24} />
                <div>
                  <strong>Approved Supplier</strong>
                  <span>Indian Railways & Tier-1 OEMs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Assemblies */}
      <section className="section section-dark">
        <div className="wrap">
          <div className="section-heading">
            <div className="eyebrow"><span /> PRODUCT PORTFOLIO</div>
            <h2>Safety-Critical Rail Sub-Assemblies</h2>
            <p>Engineered to exact railway tolerances with comprehensive dimensional and metallurgical verification.</p>
          </div>

          <div className="grid-2 rail-products-grid">
            {railProducts.map((p) => (
              <div key={p.title} className="rail-product-card">
                <div className="rail-product-header">
                  <TrainFront className="text-orange" size={26} />
                  <h3>{p.title}</h3>
                </div>
                <p>{p.desc}</p>
                <div className="rail-specs-box">
                  <strong>Engineering Specifications:</strong>
                  <ul>
                    {p.specs.map((sp, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} className="text-orange" />
                        <span>{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section className="section">
        <div className="wrap">
          <div className="section-heading text-center">
            <div className="eyebrow justify-center"><span /> QUALITY & COMPLIANCE</div>
            <h2>Railway Standards That Define Our Quality</h2>
            <p>Every rail weldment undergoes multi-tier quality control by certified International Welding Engineers (IWE) and certified NDT Level II technicians.</p>
          </div>

          <div className="grid-4 cert-standards-grid">
            {standards.map((s) => (
              <div key={s.label} className="standard-card">
                <div className="standard-icon"><FileCheck size={28} /></div>
                <h4>{s.label}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing & Inspection Protocol */}
      <section className="section testing-section">
        <div className="wrap">
          <div className="testing-grid">
            <div className="testing-info">
              <div className="eyebrow"><span /> RIGOROUS INSPECTION</div>
              <h2>Zero-Defect Quality Assurance</h2>
              <p>
                Railway components endure millions of cyclic stress fatigue hours. Our in-house testing lab guarantees complete integrity before shipment.
              </p>
              <div className="testing-list">
                <div className="testing-item">
                  <Crosshair className="text-orange" size={20} />
                  <div>
                    <strong>3D Laser Tracker & Coordinate Metrology</strong>
                    <p>Precise verification of center-pin distances, camber profiles, and diagonal squareness.</p>
                  </div>
                </div>
                <div className="testing-item">
                  <Flame className="text-orange" size={20} />
                  <div>
                    <strong>Non-Destructive Testing (NDT) Suite</strong>
                    <p>100% Radiographic Testing (RT), Ultrasonic Testing (UT), and Magnetic Particle Inspection (MPI).</p>
                  </div>
                </div>
                <div className="testing-item">
                  <ShieldCheck className="text-orange" size={20} />
                  <div>
                    <strong>Mechanical & Metallurgical Testing</strong>
                    <p>Tensile testing, Charpy V-notch impact at sub-zero temperatures, and micro-hardness profiling.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rail-rfq-box">
              <h3>Rail Supplier Enquiry</h3>
              <p>Are you looking for an approved Tier-1 / Tier-2 manufacturing partner for coach fabrication or wagon components?</p>
              <div className="rail-rfq-actions">
                <Link href="/contact?subject=rail" className="btn btn-orange">
                  Submit Rail RFQ <ArrowRight size={16} />
                </Link>
                <a href="mailto:rail@metalscopeindia.com" className="btn btn-outline-dark">
                  rail@metalscopeindia.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
