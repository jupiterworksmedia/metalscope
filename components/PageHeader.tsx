import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  bgImage?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  bgImage = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=85',
}: PageHeaderProps) {
  return (
    <div
      className="page-header"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(5, 23, 39, 0.96) 0%, rgba(5, 23, 39, 0.85) 50%, rgba(5, 23, 39, 0.6) 100%), url('${bgImage}')`,
      }}
    >
      <div className="wrap page-header-inner">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {breadcrumbs.map((b, i) => (
            <span key={i} className="breadcrumb-item">
              <ChevronRight size={14} />
              {b.href ? <Link href={b.href}>{b.label}</Link> : <span>{b.label}</span>}
            </span>
          ))}
        </nav>

        <div className="eyebrow eyebrow-light">
          <span /> {eyebrow}
        </div>
        <h1 className="page-title">{title}</h1>
        <p className="page-desc">{description}</p>
      </div>
    </div>
  );
}
