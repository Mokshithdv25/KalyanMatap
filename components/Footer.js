'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo"><img src="/logo.png" alt="Kalyan Mantap" className="footer-logo-img" /><span className="logo-t">Kalyan Mantap</span></div>
            <p className="footer-desc">South India&apos;s trusted wedding hall booking platform. Pick your hall, add services, book instantly.</p>
            <div className="trust-badges">
              <span>🔒 Secure Payments</span>
              <span>✅ Verified Halls</span>
              <span>💯 No Broker Fees</span>
            </div>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <Link href="/venues">All Halls</Link>
            <Link href="/venues">By City</Link>
            <Link href="/venues">Budget Venues</Link>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <span>Decor</span><span>Catering</span><span>Photography</span><span>EMI Plans</span>
          </div>
          <div className="footer-col">
            <h4>Cities</h4>
            <span>Hyderabad</span><span>Bangalore</span><span>Chennai</span><span>Coimbatore</span><span>Mysore</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Kalyan Mantap. Made with ❤️ for South Indian families.</p>
        </div>
      </div>
      <style jsx>{`
        .footer{background:var(--warm-900);color:var(--warm-300);padding:56px 0 0;margin-top:72px}
        .footer-grid{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:40px;padding-bottom:40px;border-bottom:1px solid var(--warm-700)}
        .footer-logo{display:flex;align-items:center;gap:8px;margin-bottom:12px;font-size:1.1rem}
        .footer-logo-img{width:36px;height:36px;object-fit:contain;border-radius:6px}
        .logo-t{font-family:var(--font-heading);font-weight:700;color:var(--gold)}
        .footer-desc{font-size:0.85rem;color:var(--warm-400);margin-bottom:16px;line-height:1.6}
        .trust-badges{display:flex;flex-direction:column;gap:6px;font-size:0.78rem;color:var(--warm-400)}
        .footer-col{display:flex;flex-direction:column;gap:8px}
        .footer-col h4{font-family:var(--font-heading);font-size:0.95rem;color:var(--gold);margin-bottom:8px}
        .footer-col a,.footer-col span{font-size:0.82rem;color:var(--warm-400);cursor:pointer;transition:color var(--ease-base)}
        .footer-col a:hover,.footer-col span:hover{color:#fff}
        .footer-bottom{padding:20px 0;font-size:0.78rem;color:var(--warm-500);text-align:center}
        @media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr;gap:28px}.footer-brand{grid-column:1/-1}}
        @media(max-width:480px){.footer-grid{grid-template-columns:1fr}}
      `}</style>
    </footer>
  );
}
