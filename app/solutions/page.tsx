import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { 
  Warehouse, 
  Building2, 
  Layers3, 
  Factory, 
  TrainFront, 
  CheckCircle, 
  ArrowRight, 
  SlidersHorizontal,
  ShieldAlert,
  Ruler,
  Clock,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Solutions | Pre-Engineered Buildings & Heavy Steel Structures',
  description: 'Explore our complete spectrum of steel solutions: Pre-Engineered Buildings (PEB), High-Rise Steel Framing, Bridge Girders, Power Plants, and Rail Coach Assemblies.',
};

const solutionsDetail = [
  {
    id: 'peb',
    icon: Warehouse,
    title: 'Pre-Engineered Buildings (PEB)',
    tagline: 'Cost-Effective, Rapidly Deployable & Architecturally Versatile',
    desc: 'Our custom-engineered PEB systems are engineered to high precision utilizing tapered built-up sections, cold-formed Z & C purlins, and high-performance roofing profiles. Ideal for factories, automated logistics warehouses, sports complexes, and aviation hangars.',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&q=85',
    features: [
      'Clear unobstructed spans up to 90+ meters without intermediate columns',
      '30% to 40% faster on-site erection compared to conventional masonry/RCC',
      'Optimized tapered I-beams tailored specifically to bending moment diagrams',
      'Integrated crane runway girders (EOT cranes up to 50 MT capacity)',
      'Compatible with sandwich panels, skylights, louvers, and ridge vents'
    ],
    applications: ['Mega Logistics Warehouses', 'Automobile Manufacturing Plants', 'FMCG & Cold Storage Facilities', 'Aircraft Maintenance Hangars']
  },
  {
    id: 'structural',
    icon: Building2,
    title: 'Structural Steel & High-Rise Frameworks',
    tagline: 'Heavy Industrial Framing & Architectural Multi-Story Structures',
    desc: 'We fabricate heavy, complex structural steel assemblies for multi-story corporate towers, airport terminals, sports stadiums, and institutional complexes requiring aesthetic excellence and extreme seismic resilience.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=85',
    features: [
      'Heavy built-up box columns, castellated beams, and cross-braced trusses',
      'Strict adherence to IS 800, AISC 360, and Eurocode 3 design standards',
      '3D Tekla BIM modeling ensuring zero-clash detailing with MEP services',
      'Full penetration Submerged Arc Welding (SAW) with ultrasonic verification',
      'High-durability blast cleaning (SA 2.5) with epoxy and polyurethane coats'
    ],
    applications: ['Commercial Tech Parks', 'Airport Terminal Buildings', 'Multi-Level Car Parks', 'Hospital & Educational Facilities']
  },
  {
    id: 'bridges',
    icon: Layers3,
    title: 'Steel Bridges & Composite Plate Girders',
    tagline: 'Robust Transport Infrastructure Engineered for Decades of Heavy Load',
    desc: 'Certified bridge fabrication for National Highways, state road networks, and rail overbridges (ROBs). Our facilities are equipped with heavy automated submerged-arc welding gantries and high-capacity overhead cranes to handle massive girder sections.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900&q=85',
    features: [
      'Plate girders, box girders, and through-truss steel bridge superstructures',
      'Precision camber engineering to offset dead-load deflections',
      'RDSO and IRC (Indian Roads Congress) compliant fabrication',
      'Non-destructive testing (NDT): Radiography, Ultrasonic, and MPI tests',
      'Pre-assembly trial erection at our shop floor to guarantee site fitment'
    ],
    applications: ['Rail Over Bridges (ROBs)', 'National Highway Flyovers', 'Foot Over Bridges (FOBs)', 'Metro Viaduct Steel Girders']
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial & Power Plant Structures',
    tagline: 'High-Temperature, Heavy-Vibration & High-Tonnage Environments',
    desc: 'Specialized structural fabrication engineered to withstand dynamic vibrational forces, heavy material handling equipment, and harsh corrosive atmospheres in thermal power plants, cement factories, steel mills, and chemical refineries.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=85',
    features: [
      'Boiler supporting structures, conveyor galleries, and transfer towers',
      'Bunker, hopper, and silo fabrication with abrasion-resistant liners',
      'Pipe racks, ducting supports, and heavy crane trestles',
      'Specialized fireproofing-compatible coatings and galvanized finishes',
      'Dynamic analysis for seismic and reciprocating machinery loads'
    ],
    applications: ['Thermal & Solar Power Plants', 'Cement & Mineral Processing Units', 'Steel Smelters & Rolling Mills', 'Chemical & Petrochemical Refineries']
  },
  {
    id: 'roofing',
    icon: Warehouse,
    title: 'Roofing, Standing Seam & Cladding',
    tagline: 'Weatherproof, Energy-Efficient & Leak-Proof Building Envelopes',
    desc: 'Complete building envelope systems including 360-degree double-lock standing seam roofing, insulated sandwich panels (PUF/PIR/Rockwool), and architectural wall facades providing superior thermal and acoustic performance.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85',
    features: [
      'Continuous standing-seam profiles roll-formed on-site to eliminate end laps',
      'Galvalume (AZ150) high-tensile steel (550 MPa) for extreme corrosion resistance',
      'Zero-penetration clip fastening system preventing roof puncture leaks',
      'Energy-saving insulation combinations meeting ECBC and green building norms',
      'Full range of matching polycarbonate skylights, louvers, and gutters'
    ],
    applications: ['Cold Storage Warehouses', 'Cleanroom Facilities', 'Commercial Showrooms', 'Coastal Industrial Plants']
  },
  {
    id: 'rail',
    icon: TrainFront,
    title: 'Rail & Rolling Stock Components',
    tagline: 'Safety-Critical Sub-Assemblies for Indian Railways & Metros',
    desc: 'A dedicated division delivering precision-fabricated coach underframes, stainless steel sidewalls, roof assemblies, and structural chassis components complying with strict RDSO standards.',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=900&q=85',
    features: [
      'Certified RDSO Category-1 approved manufacturing setup',
      'Cort-Ten and stainless steel (AISI 304 / 409M) welding capabilities',
      'Laser-guided cutting and CNC robotic bending for zero distortion',
      'Dedicated jigs and fixtures for LHB and Vande Bharat coach components',
      '100% weld dimension and crack inspection via Dye Penetrant & Radiography'
    ],
    applications: ['LHB Passenger Coaches', 'Vande Bharat Trainsets', 'Electric Locomotive Shells', 'Freight Wagons & Bogies']
  }
];

export default function SolutionsPage() {
  return (
    <main className="subpage">
      <PageHeader
        eyebrow="PRODUCT & SERVICE SPECTRUM"
        title="Comprehensive Steel Building Solutions"
        description="From pre-engineered steel buildings and high-rise structural framing to heavy bridge girders and safety-critical rail components, we provide single-source structural delivery."
        breadcrumbs={[{ label: 'Solutions' }]}
        bgImage="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1800&q=85"
      />

      {/* Solutions Detail List */}
      <section className="section">
        <div className="wrap">
          <div className="solutions-detail-list">
            {solutionsDetail.map((sol, index) => {
              const Icon = sol.icon;
              const isEven = index % 2 === 1;
              return (
                <div 
                  key={sol.id} 
                  id={sol.id} 
                  className={`solution-detail-block ${isEven ? 'reverse' : ''}`}
                >
                  <div className="solution-detail-image">
                    <img src={sol.image} alt={sol.title} />
                    <div className="solution-badge-float">
                      <Icon size={20} />
                      <span>{sol.title.split(' ')[0]}</span>
                    </div>
                  </div>
                  <div className="solution-detail-info">
                    <div className="solution-cat">SOLUTION 0{index + 1}</div>
                    <h2>{sol.title}</h2>
                    <p className="solution-tagline">{sol.tagline}</p>
                    <p className="solution-body">{sol.desc}</p>

                    <h4>Key Engineering Features:</h4>
                    <ul className="solution-features">
                      {sol.features.map((feat, fi) => (
                        <li key={fi}>
                          <CheckCircle size={16} className="text-orange" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="solution-apps">
                      <strong>Typical Applications:</strong>
                      <div className="app-tags">
                        {sol.applications.map((app) => (
                          <span key={app}>{app}</span>
                        ))}
                      </div>
                    </div>

                    <div className="solution-action">
                      <Link href={`/contact?solution=${sol.id}`} className="btn btn-orange">
                        Enquire About {sol.title.split('(')[0]} <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="section section-dark">
        <div className="wrap">
          <div className="section-heading">
            <div className="eyebrow"><span /> TECHNICAL COMPARISON</div>
            <h2>Pre-Engineered Steel vs. Conventional Concrete / Steel</h2>
            <p>Why modern industry favors custom-designed Pre-Engineered Buildings for rapid payback and structural longevity.</p>
          </div>

          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Parameters</th>
                  <th className="highlight-col">Metal Scope PEB System</th>
                  <th>Conventional Structural Steel</th>
                  <th>Reinforced Concrete (RCC)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Structural Weight</strong></td>
                  <td className="highlight-col">Optimized tapered sections (Up to 30% lighter)</td>
                  <td>Uniform rolled sections (Heavier self-weight)</td>
                  <td>Extremely heavy dead-load foundation</td>
                </tr>
                <tr>
                  <td><strong>Project Delivery Speed</strong></td>
                  <td className="highlight-col">6 – 10 weeks factory fabrication + rapid site assembly</td>
                  <td>16 – 24 weeks intensive on-site fabrication</td>
                  <td>24 – 40 weeks with formwork curing cycles</td>
                </tr>
                <tr>
                  <td><strong>Clear Span Capability</strong></td>
                  <td className="highlight-col">Up to 90+ meters without intermediate columns</td>
                  <td>Limited to 25 – 40 meters before cost spike</td>
                  <td>Extremely costly beyond 15 – 20 meters</td>
                </tr>
                <tr>
                  <td><strong>Expansion & Relocation</strong></td>
                  <td className="highlight-col">100% bolted connections; modular expansion simple</td>
                  <td>Difficult on-site modifications</td>
                  <td>Virtually impossible without demolition</td>
                </tr>
                <tr>
                  <td><strong>Seismic Performance</strong></td>
                  <td className="highlight-col">High ductility, low mass, flexible joint dissipation</td>
                  <td>Moderate flexibility</td>
                  <td>Brittle failure risks under severe earthquakes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="subpage-cta">
        <div className="wrap cta-box">
          <div>
            <h2>Need a tailored structural estimate for your site?</h2>
            <p>Our structural design team can review your site parameters and provide an initial GA drawing and tonnage estimate.</p>
          </div>
          <Link href="/contact" className="btn btn-orange">
            Request Design & Cost Review <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
