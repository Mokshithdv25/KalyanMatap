'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🪷</span>
              <span className="logo-text">Mangal</span>
            </div>
            <p className="footer-desc">
              India&apos;s first instant wedding booking platform. Verified venues, fixed packages, zero broker fees.
            </p>
            <div className="trust-badges">
              <span className="trust-badge">🔒 Secure Payments</span>
              <span className="trust-badge">✅ Verified Venues</span>
              <span className="trust-badge">💯 Best Price Guarantee</span>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Explore</h4>
            <Link href="/venues" className="footer-link">All Venues</Link>
            <Link href="/venues" className="footer-link">Marriage Halls</Link>
            <Link href="/venues" className="footer-link">Destination Weddings</Link>
            <Link href="/venues" className="footer-link">Budget Weddings</Link>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Services</h4>
            <span className="footer-link">Catering</span>
            <span className="footer-link">Decor & Lighting</span>
            <span className="footer-link">Photography</span>
            <span className="footer-link">EMI Plans</span>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Cities</h4>
            <span className="footer-link">Hyderabad</span>
            <span className="footer-link">Bangalore</span>
            <span className="footer-link">Mumbai</span>
            <span className="footer-link">Jaipur</span>
            <span className="footer-link">Chennai</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Mangal. All rights reserved. Made with ❤️ for Indian families.</p>
          <div className="footer-bottom-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--warm-gray-900);
          color: var(--warm-gray-300);
          padding: 64px 0 0;
          margin-top: 80px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid var(--warm-gray-700);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .logo-icon {
          font-size: 1.6rem;
        }

        .logo-text {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--gold);
        }

        .footer-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--warm-gray-400);
          margin-bottom: 20px;
        }

        .trust-badges {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .trust-badge {
          font-size: 0.8rem;
          color: var(--warm-gray-400);
        }

        .footer-heading {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 600;
          color: var(--gold);
          margin-bottom: 16px;
        }

        .footer-links-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link {
          font-size: 0.85rem;
          color: var(--warm-gray-400);
          transition: color var(--transition-base);
          cursor: pointer;
        }

        .footer-link:hover {
          color: white;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
          font-size: 0.8rem;
          color: var(--warm-gray-500);
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-links span {
          cursor: pointer;
          transition: color var(--transition-base);
        }

        .footer-bottom-links span:hover {
          color: var(--warm-gray-300);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
