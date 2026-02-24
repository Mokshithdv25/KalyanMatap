'use client';

import { useState } from 'react';
import Link from 'next/link';
import VenueCard from '@/components/VenueCard';
import { getFeaturedVenues, cities } from '@/data/venues';

export default function HomePage() {
  const featured = getFeaturedVenues();
  const [searchCity, setSearchCity] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchGuests, setSearchGuests] = useState('');

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <div className="hero-badge animate-fade-in">
            <span>🪷</span> India&apos;s First Instant Wedding Booking Platform
          </div>
          <h1 className="hero-title animate-fade-in-up">
            Your Dream Wedding<br />
            <span className="gradient-text">One Click Away</span>
          </h1>
          <p className="hero-subtitle animate-fade-in-up delay-1">
            Verified venues. Fixed bundled packages. Live availability.<br />
            No brokers. No surprises. Just book.
          </p>

          {/* Search Bar */}
          <div className="hero-search animate-fade-in-up delay-2">
            <div className="search-field">
              <span className="search-icon">📍</span>
              <select
                className="search-select"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
              >
                <option value="">Select City</option>
                {cities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="search-divider"></div>
            <div className="search-field">
              <span className="search-icon">📅</span>
              <input
                type="date"
                className="search-input"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                placeholder="Wedding Date"
              />
            </div>
            <div className="search-divider"></div>
            <div className="search-field">
              <span className="search-icon">👥</span>
              <input
                type="number"
                className="search-input"
                placeholder="Guests"
                value={searchGuests}
                onChange={(e) => setSearchGuests(e.target.value)}
              />
            </div>
            <Link
              href={`/venues${searchCity ? `?city=${searchCity}` : ''}`}
              className="btn btn-primary btn-lg search-btn"
            >
              Search Venues ✨
            </Link>
          </div>

          <div className="hero-trust animate-fade-in delay-3">
            <span>🔒 Secure Booking</span>
            <span>•</span>
            <span>✅ Verified Venues</span>
            <span>•</span>
            <span>💯 Best Price Guarantee</span>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-it-works section">
        <div className="container">
          <h2 className="section-title">
            Book Your Venue in <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="section-subtitle">No phone calls. No brokers. No hidden costs.</p>

          <div className="steps-grid">
            {[
              { emoji: '🔍', title: 'Browse & Compare', desc: 'Explore verified venues with real photos, transparent pricing, and bundled packages. Filter by city, budget, and capacity.' },
              { emoji: '📅', title: 'Check & Select', desc: 'See live availability. Pick your date. Choose an all-inclusive package — hall, decor, catering, and photography.' },
              { emoji: '✅', title: 'Book Instantly', desc: 'Lock your date tonight. Pay upfront or choose flexible EMIs. Get instant confirmation. Done.' },
            ].map((step, i) => (
              <div key={i} className="step-card card animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="step-number">{i + 1}</div>
                <div className="step-emoji">{step.emoji}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {[
              { value: '10M+', label: 'Indian Families / Year' },
              { value: '₹0', label: 'Broker Fees' },
              { value: '5,000+', label: 'Verified Venues' },
              { value: '₹130B', label: 'Wedding Market' },
            ].map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED VENUES ===== */}
      <section className="featured section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">
                Featured <span className="gradient-text">Venues</span>
              </h2>
              <p className="section-subtitle">Hand-picked venues loved by families</p>
            </div>
            <Link href="/venues" className="btn btn-outline">
              View All Venues →
            </Link>
          </div>

          <div className="venues-grid">
            {featured.map((venue, i) => (
              <VenueCard key={venue.id} venue={venue} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className="included section">
        <div className="container">
          <h2 className="section-title">
            Everything Bundled. <span className="gradient-text">One Price.</span>
          </h2>
          <p className="section-subtitle">No hidden charges. Every package includes all 4 services.</p>

          <div className="included-grid">
            {[
              { emoji: '🏛️', title: 'Marriage Hall', desc: 'AC halls, lawns, or full venue access with all furniture and setup included.' },
              { emoji: '🎨', title: 'Decor & Lighting', desc: 'Stage decor, entrance, mandap, lighting, photo booths — theme-matched and stunning.' },
              { emoji: '🍽️', title: 'Catering', desc: 'Multi-cuisine buffets with live counters. Veg, Non-Veg, or Jain options available.' },
              { emoji: '📸', title: 'Photography & Video', desc: 'Professional teams with candid + traditional coverage, drones, and cinematic films.' },
            ].map((item, i) => (
              <div key={i} className="included-card card animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="included-emoji">{item.emoji}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials section">
        <div className="container">
          <h2 className="section-title">
            What <span className="gradient-text">Families Say</span>
          </h2>
          <div className="testimonials-grid">
            {[
              { name: 'Priya Sharma', city: 'Hyderabad', text: 'We booked Rajmahal Grand Palace in 10 minutes from our phone. No broker, no haggling. The Gold package was exactly as described. My father couldn\'t believe it.', rating: 5 },
              { name: 'Karthik & Meera', city: 'Bangalore', text: 'The EMI option let us book our dream venue instead of settling for a cheaper one. We paid in 3 installments and the wedding was magical.', rating: 5 },
              { name: 'Ritu Gupta', city: 'Jaipur', text: 'Heritage Haveli was a dream. Everything was transparent — the package, the food menu, the decor. No surprises on the wedding day. Just joy.', rating: 5 },
            ].map((t, i) => (
              <div key={i} className="testimonial-card card animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-city">📍 {t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Book Your <span className="gradient-text">Dream Wedding?</span></h2>
            <p>Join thousands of families who chose transparency over chaos.</p>
            <div className="cta-buttons">
              <Link href="/venues" className="btn btn-gold btn-lg">
                🪷 Explore Venues
              </Link>
              <Link href="/dashboard" className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                View Demo Bookings
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ===== HERO ===== */
        .hero {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600') center/cover;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(61, 12, 17, 0.88) 0%,
            rgba(92, 16, 24, 0.82) 30%,
            rgba(122, 21, 32, 0.7) 60%,
            rgba(212, 160, 23, 0.4) 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 80px 24px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--border-radius-full);
          color: var(--gold-200);
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(2.2rem, 6vw, 4rem);
          color: white;
          margin-bottom: 16px;
          line-height: 1.15;
        }

        .hero-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1rem;
          max-width: 550px;
          margin: 0 auto 36px;
          line-height: 1.7;
        }

        /* Search Bar */
        .hero-search {
          display: flex;
          align-items: center;
          background: white;
          border-radius: var(--border-radius-full);
          padding: 6px 6px 6px 24px;
          max-width: 720px;
          margin: 0 auto 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .search-field {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          min-width: 0;
        }

        .search-icon {
          font-size: 1rem;
          flex-shrink: 0;
        }

        .search-select,
        .search-input {
          border: none;
          outline: none;
          background: transparent;
          font-size: 0.9rem;
          color: var(--text-primary);
          width: 100%;
          padding: 8px 0;
        }

        .search-select {
          cursor: pointer;
        }

        .search-divider {
          width: 1px;
          height: 28px;
          background: var(--warm-gray-200);
          margin: 0 12px;
          flex-shrink: 0;
        }

        .search-btn {
          flex-shrink: 0;
          white-space: nowrap;
        }

        .hero-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.8rem;
        }

        /* ===== SECTIONS ===== */
        .section-title {
          text-align: center;
          margin-bottom: 8px;
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-muted);
          font-size: 1rem;
          margin-bottom: 48px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 36px;
        }

        .section-header .section-title {
          text-align: left;
          margin-bottom: 4px;
        }

        .section-header .section-subtitle {
          text-align: left;
          margin-bottom: 0;
        }

        /* ===== STEPS ===== */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .step-card {
          text-align: center;
          padding: 40px 28px;
          position: relative;
        }

        .step-number {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--burgundy-50);
          color: var(--burgundy);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .step-emoji {
          font-size: 2.5rem;
          margin-bottom: 16px;
        }

        .step-card h3 {
          font-size: 1.15rem;
          margin-bottom: 8px;
        }

        .step-card p {
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* ===== STATS ===== */
        .stats-bar {
          background: linear-gradient(135deg, var(--burgundy-900), var(--burgundy-800));
          padding: 48px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          text-align: center;
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: var(--gold);
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }

        /* ===== VENUES GRID ===== */
        .venues-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }

        /* ===== INCLUDED ===== */
        .included-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .included-card {
          text-align: center;
          padding: 36px 24px;
        }

        .included-emoji {
          font-size: 2.5rem;
          margin-bottom: 16px;
        }

        .included-card h3 {
          font-size: 1.05rem;
          margin-bottom: 8px;
        }

        .included-card p {
          font-size: 0.85rem;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonials {
          background: var(--warm-gray-50);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .testimonial-card {
          padding: 28px;
          background: white;
        }

        .testimonial-stars {
          color: var(--gold);
          font-size: 1.1rem;
          margin-bottom: 12px;
          letter-spacing: 2px;
        }

        .testimonial-text {
          font-size: 0.9rem;
          font-style: italic;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.7;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .testimonial-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--burgundy), var(--gold));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
        }

        .testimonial-name {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .testimonial-city {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* ===== CTA ===== */
        .cta-section {
          padding: 80px 0;
        }

        .cta-card {
          background: linear-gradient(135deg, var(--burgundy-900) 0%, var(--burgundy-700) 50%, var(--gold-900) 100%);
          border-radius: var(--border-radius-xl);
          padding: 64px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: rgba(212, 160, 23, 0.1);
        }

        .cta-card h2 {
          color: white;
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .cta-card p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
          margin-bottom: 32px;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .hero-search {
            flex-direction: column;
            border-radius: var(--border-radius-xl);
            padding: 16px;
            gap: 12px;
          }

          .search-divider {
            width: 100%;
            height: 1px;
            margin: 0;
          }

          .search-btn {
            width: 100%;
          }

          .steps-grid,
          .included-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .venues-grid {
            grid-template-columns: 1fr;
          }

          .cta-card {
            padding: 40px 24px;
          }

          .hero-trust {
            flex-wrap: wrap;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}
