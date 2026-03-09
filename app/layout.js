import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Kalyan Mantap — South India\'s Wedding Hall Booking Platform',
  description: 'Book verified wedding halls across South India. Select your hall, add decor, catering & photography, pay with EMI. No brokers, no surprises.',
  keywords: 'wedding hall booking, kalyan mantap, marriage hall, wedding venue, south indian wedding, decor, catering, photography, EMI',
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
