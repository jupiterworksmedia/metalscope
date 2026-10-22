'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Layers, 
  ArrowRight, 
  CheckCircle, 
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'PEB' | 'Industrial' | 'Bridges' | 'Rail' | 'Commercial';
  location: string;
  tonnage: string;
  area: string;
  year: string;
  desc: string;
  image: string;
  tags: string[];
}

const allProjects: Project[] = [
  {
    id: 'p1',
    title: 'Automated Mega Logistics & Distribution Hub',
    category: 'PEB',
    location: 'Sri City Industrial Corridor, AP',
    tonnage: '2,800 MT',
    area: '450,000 Sq. Ft.',
    year: '2023',
    desc: 'High-bay pre-engineered logistics facility featuring 72m clear span portal frames, 14m clear eave height, and automated dock leveler integration.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=85',
    tags: ['72m Clear Span', 'FM Global Compliant', 'Standing Seam Roof']
  },
  {
    id: 'p2',
    title: 'Four-Lane Rail Overbridge (ROB) Superstructure',
    category: 'Bridges',
    location: 'National Highway Corridor, Tamil Nadu',
    tonnage: '1,450 MT',
    area: '64m Main Span',
    year: '2022',
    desc: 'Fabrication and supply of composite steel plate girders, cross frames, and shear studs for a major highway ROB passing over electrified railway lines.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900&q=85',
    tags: ['RDSO & IRC Standard', 'Trial Assembly', 'SA 2.5 Epoxy Coating']
  },
  {
    id: 'p3',
    title: 'Precision Rail Coach Shell Assemblies',
    category: 'Rail',
    location: 'Supply to Integral Coach Factory (ICF)',
    tonnage: '3,200 MT / Ann.',
    area: 'LHB Series',
    year: '2024',
    desc: 'Batch manufacturing of Cort-Ten steel coach underframes, stainless steel sidewalls, and crash-optimized roof assemblies for Indian Railways passenger trainsets.',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=900&q=85',
    tags: ['AISI 304 Stainless', 'Laser-Cut Profiles', 'EN 15085 CL1']
  },
  {
    id: 'p4',
    title: 'Automotive Stamping & Assembly Plant',
    category: 'Industrial',
    location: 'Oragadam Auto Hub, Chennai',
    tonnage: '4,100 MT',
    area: '380,000 Sq. Ft.',
    year: '2023',
    desc: 'Integrated manufacturing plant with heavy 40-tonne EOT crane runways, deep pit press foundations, and heavy structural mezzanine floors.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=85',
    tags: ['40T Crane Gantries', 'Vibration Damping', 'PUF Wall Panels']
  },
  {
    id: 'p5',
    title: 'Multi-Tier Commercial Tech Park Framework',
    category: 'Commercial',
    location: 'OMR IT Corridor, Chennai',
    tonnage: '1,950 MT',
    area: '180,000 Sq. Ft.',
    year: '2021',
    desc: 'Composite steel-deck composite floor framework allowing column-free flexible office layouts, high architectural aesthetics, and LEED Gold compliance.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85',
    tags: ['Composite Decking', 'Castellated Beams', 'Seismic Zone III']
  },
  {
    id: 'p6',
    title: 'Thermal Power Plant Boiler Supporting Structure',
    category: 'Industrial',
    location: 'Tuticorin Energy Complex',
    tonnage: '5,600 MT',
    area: 'Heavy Structural',
    year: '2022',
    desc: 'Heavy box-column vertical structure, flue gas ducting trestles, and high-temperature coal bunker steelwork with specialized heat-resistant coatings.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=85',
    tags: ['Heavy Box Columns', '100% UT Testing', 'Intumescent Coating']
  }
];

const categories = [
  { id: 'All', label: 'All Projects' },
  { id: 'PEB', label: 'Pre-Engineered Buildings' },
  { id: 'Industrial', label: 'Industrial Plants' },
  { id: 'Bridges', label: 'Bridges & Infrastructure' },
  { id: 'Rail', label: 'Rail & Rolling Stock' },
  { id: 'Commercial', label: 'Commercial High-Rise' },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filtered = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <main className="subpage">
      <PageHeader
        eyebrow="PORTFOLIO & CASE STUDIES"
        title="Engineering Landmark Steel Structures"
        description="A showcase of our executed structural projects across industrial complexes, infrastructure bridges, rail rolling-stock, and commercial parks."
        breadcrumbs={[{ label: 'Projects' }]}
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=85"
      />

      {/* Portfolio section with filters */}
      <section className="section">
        <div className="wrap">
          {/* Filter Bar */}
          <div className="projects-filter-bar">
            <div className="filter-tabs">
              {categories.map((c) => (
                <button
                  key={c.id}
                  className={`filter-tab ${selectedCategory === c.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="filter-count">
              Showing <strong>{filtered.length}</strong> of {allProjects.length} Projects
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="projects-gallery-grid">
            {filtered.map((proj) => (
              <article key={proj.id} className="project-card-full">
                <div className="project-card-image">
                  <img src={proj.image} alt={proj.title} />
                  <span className="project-cat-badge">{proj.category}</span>
                </div>
                <div className="project-card-content">
                  <div className="project-meta-top">
                    <span><MapPin size={13} /> {proj.location}</span>
                    <span><Calendar size={13} /> {proj.year}</span>
                  </div>
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>

                  <div className="project-specs-grid">
                    <div>
                      <small>Steel Tonnage</small>
                      <strong>{proj.tonnage}</strong>
                    </div>
                    <div>
                      <small>Project Scope</small>
                      <strong>{proj.area}</strong>
                    </div>
                  </div>

                  <div className="project-tags">
                    {proj.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats counter strip */}
      <section className="section section-dark">
        <div className="wrap">
          <div className="project-track-record">
            <div className="track-stat">
              <strong>500+</strong>
              <span>Structures Erected</span>
            </div>
            <div className="track-stat">
              <strong>1.2M+ MT</strong>
              <span>Total Steel Processed</span>
            </div>
            <div className="track-stat">
              <strong>15M+ Sq. Ft.</strong>
              <span>Covered Building Area</span>
            </div>
            <div className="track-stat">
              <strong>100%</strong>
              <span>Zero-Accident Site Track Record</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="subpage-cta">
        <div className="wrap cta-box">
          <div>
            <h2>Planning a similar project?</h2>
            <p>Share your architectural concepts or preliminary layouts for an expert structural review.</p>
          </div>
          <Link href="/contact" className="btn btn-orange">
            Discuss Your Project Scope <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
