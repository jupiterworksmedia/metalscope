import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { 
  Cpu, 
  Layers, 
  Wrench, 
  ShieldCheck, 
  Truck, 
  HardHat, 
  CheckCircle2, 
  ArrowRight,
  Gauge,
  Factory,
  CheckCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Manufacturing & Engineering Capabilities | Metal Scope India',
  description: 'Explore our 250,000 sq. ft. automated steel fabrication plant in Chennai. 3,000 MT monthly capacity, 3D BIM Tekla detailing, CNC plasma lines, and certified erection.',
};

const processStages = [
  {
    step: '01',
    icon: Cpu,
    title: 'Design & 3D BIM Detailing',
    desc: 'Our design office utilizes Tekla Structures 3D BIM, STAAD.Pro, and Metal Building Software (MBS) to create exact millimetric shop fabrication drawings and CNC NC1 files, eliminating fabrication errors before steel is cut.',
    points: ['3D clash detection with MEP systems', 'Automated connection design per AISC / IS 800', 'Direct CNC NC-file export to cutting machinery']
  },
  {
    step: '02',
    icon: Layers,
    title: 'CNC Cutting & Plate Processing',
    desc: 'High-definition CNC plasma cutting and multi-torch oxy-fuel cutting systems handle plate thicknesses up to 100mm with automated beveling for full penetration weld preps.',
    points: ['CNC plate drilling and punching lines', 'Plasma cutting with beveling torch heads', 'Laser inspection of cut edges and dimensions']
  },
  {
    step: '03',
    icon: Wrench,
    title: 'Automated Beam Assembly & SAW Welding',
    desc: 'Automated H-beam and box-girder assembly lines equipped with twin-arc Submerged Arc Welding (SAW) ensure continuous, deep penetration welds with minimal thermal distortion.',
    points: ['Automatic hydraulic flange-to-web clamping', 'Twin-arc tandem submerged arc welding gantries', 'Hydraulic flange straightening machines']
  },
  {
    step: '04',
    icon: Factory,
    title: 'Shot Blasting & Surface Preparation',
    desc: 'All structural components pass through an automated 8-wheel roller conveyor shot blasting chamber, cleaning steel surfaces to Swedish Standard SA 2.5 for superior paint adhesion.',
    points: ['Removal of mill scale, rust, and foreign contaminants', 'Surface anchor profile achieved: 50 – 75 microns', 'Clean air temperature-controlled painting bays']
  },
  {
    step: '05',
    icon: Gauge,
    title: 'High-Performance Protective Coating',
    desc: 'Controlled airless spray application of zinc-rich primers, intermediate epoxies, and polyurethane or intumescent fireproofing topcoats tailored to ISO 12944 corrosive environments.',
    points: ['Digital Dry Film Thickness (DFT) verification', 'Adhesion pull-off tests per ASTM D4541', 'Color-coded piece marking for rapid site handling']
  },
  {
    step: '06',
    icon: ShieldCheck,
    title: 'Rigorous Quality Assurance & NDT',
    desc: 'Comprehensive multi-stage inspection by ASNT Level II certified quality inspectors, verifying dimensions, weld soundness, and material test certificates for complete audit trails.',
    points: ['100% Visual and Ultrasonic Testing (UT)', 'Magnetic Particle (MPI) & Dye Penetrant (DP)', 'Full 3.1 material test certificate traceability']
  },
  {
    step: '07',
    icon: HardHat,
    title: 'Modular Logistics & Site Erection',
    desc: 'Precision packaging and sequenced dispatch to match erection schedules. Our certified site engineers manage heavy crane logistics, torque-controlled bolting, and safe handover.',
    points: ['Sequenced container & trailer loading plans', 'Calibrated pneumatic torque wrench bolt tightening', 'Zero-accident safety protocols and site supervision']
  }
];

const machineryList = [
  { equipment: 'CNC High-Definition Plasma Cutting System', make: 'Messer / Koike', capacity: 'Up to 50mm plate; 3000 x 14000mm table' },
  { equipment: 'Automated H-Beam Assembly & SAW Line', make: 'Corimpex / Autowel', capacity: 'Web height up to 2500mm, flange up to 800mm' },
  { equipment: 'Automatic Roller Conveyor Shot Blasting', make: 'Wheelabrator / Disa', capacity: 'SA 2.5 blast finish, components up to 2000mm width' },
  { equipment: 'CNC 3-Spindle Beam Drilling Line', make: 'Ficep / Peddinghaus', capacity: 'Sections up to 1200mm, carbide high-speed drilling' },
  { equipment: 'Heavy Hydraulic CNC Press Brake', make: 'LVD / Amada', capacity: '1000-Ton capacity for 16mm thick bending' },
  { equipment: 'Overhead EOT Cranes (Shop Floor)', make: 'Demag / Street', capacity: 'Tandem lift capacity up to 50 Metric Tonnes' }
];

export default function CapabilitiesPage() {
  return (
    <main className="subpage">
      <PageHeader
        eyebrow="FACILITY & PROCESS"
        title="Engineering Infrastructure & Execution Capabilities"
        description="A 250,000 sq. ft. modern fabrication plant equipped with advanced CNC machinery, automated welding gantries, and seasoned structural engineers."
        breadcrumbs={[{ label: 'Capabilities' }]}
        bgImage="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1800&q=85"
      />

      {/* Facility overview stats */}
      <section className="section">
        <div className="wrap">
          <div className="capabilities-stats-banner">
            <div className="cap-stat">
              <strong>250,000+</strong>
              <span>Sq. Ft. Covered Factory Space</span>
            </div>
            <div className="cap-stat">
              <strong>3,000 MT</strong>
              <span>Monthly Fabrication Capacity</span>
            </div>
            <div className="cap-stat">
              <strong>50 MT</strong>
              <span>Heavy Overhead Crane Lift</span>
            </div>
            <div className="cap-stat">
              <strong>100%</strong>
              <span>Tekla 3D BIM Detailing</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Stage Process Walkthrough */}
      <section className="section section-dark">
        <div className="wrap">
          <div className="section-heading">
            <div className="eyebrow"><span /> OUR WORKFLOW</div>
            <h2>The 7-Stage Manufacturing Process</h2>
            <p>Quality and precision are engineered into every phase, from raw steel receipt to final bolt tightening on-site.</p>
          </div>

          <div className="process-stages-vertical">
            {processStages.map((st) => {
              const Icon = st.icon;
              return (
                <div key={st.step} className="process-stage-card">
                  <div className="stage-side">
                    <span className="stage-num">{st.step}</span>
                    <div className="stage-icon-wrap"><Icon size={24} /></div>
                  </div>
                  <div className="stage-main">
                    <h3>{st.title}</h3>
                    <p>{st.desc}</p>
                    <ul className="stage-points">
                      {st.points.map((pt, i) => (
                        <li key={i}>
                          <CheckCircle size={15} className="text-orange" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Machinery Specs Table */}
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div className="eyebrow"><span /> PLANT & MACHINERY</div>
            <h2>Advanced Fabrication Equipment</h2>
            <p>Our heavy capital investments in European and precision CNC machinery guarantee repeatable millimetric accuracy.</p>
          </div>

          <div className="table-responsive">
            <table className="machinery-table">
              <thead>
                <tr>
                  <th>Equipment Description</th>
                  <th>Machine Specification / Make</th>
                  <th>Processing Capacity</th>
                </tr>
              </thead>
              <tbody>
                {machineryList.map((m, idx) => (
                  <tr key={idx}>
                    <td><strong>{m.equipment}</strong></td>
                    <td>{m.make}</td>
                    <td>{m.capacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="subpage-cta">
        <div className="wrap cta-box">
          <div>
            <h2>Want to schedule a factory visit or technical audit?</h2>
            <p>We welcome client technical evaluation teams and consultants to tour our plant in Sriperumbudur, Chennai.</p>
          </div>
          <Link href="/contact" className="btn btn-orange">
            Request Factory Visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
