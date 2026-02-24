import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mangal — Book Your Dream Wedding Venue Instantly',
  description: 'India\'s first instant wedding booking platform. Verified venues, bundled packages (hall + decor + catering + photography), live availability, and flexible EMI plans. Zero broker fees.',
  keywords: 'wedding venue booking, marriage hall, Indian wedding, wedding packages, wedding decor, wedding catering, wedding photography, EMI wedding',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
