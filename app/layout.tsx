import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Metal Scope India | Pre-Engineered Buildings, Structural Steel & Rail Fabrication',
  description: 'Engineering-led steel building systems, heavy structural steel fabrication, bridges, and RDSO-approved rail rolling stock components.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
