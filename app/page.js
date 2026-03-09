'use client';

import Link from 'next/link';
import { getFeaturedVenues } from '@/data/venues';
import VenueCard from '@/components/VenueCard';

export default function HomePage() {
  const featured = getFeaturedVenues();

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600" alt="Wedding Hall" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-badge animate-fade-in">🛕 South India&apos;s Trusted Wedding Booking Platform</div>
          <h1 className="hero-title animate-fade-in-up">
            Book Your <span className="gradient-text">Wedding Hall</span><br />In 3 Simple Steps
          </h1>
          <p className="hero-subtitle animate-fade-in-up delay-1">
            Select hall → Add services → Book with EMI.<br />No brokers. No surprises. Just your dream wedding.
          </p>

          {/* Search Bar */}
          <div className="search-bar animate-fade-in-up delay-2">
            <div className="search-field">
              <span className="search-icon">📍</span>
              <select className="select" defaultValue="">
                <option value="" disabled>Select City</option>
                <option>Hyderabad</option><option>Bangalore</option><option>Chennai</option>
                <option>Coimbatore</option><option>Mysore</option><option>Vizag</option>
                <option>Kochi</option><option>Madurai</option>
              </select>
            </div>
            <div className="search-field">
              <span className="search-icon">📅</span>
              <input type="date" className="input" placeholder="Wedding Date" />
            </div>
            <div className="search-field">
              <span className="search-icon">👥</span>
              <input type="number" className="input" placeholder="Guests" />
            </div>
            <Link href="/venues" className="btn btn-primary btn-lg search-btn">Search Halls ✨</Link>
          </div>

          <div className="hero-trust animate-fade-in delay-3">
            <span>🔒 Secure Booking</span>
            <span>•</span>
            <span>✅ Verified Halls</span>
            <span>•</span>
            <span>💰 Best Price Guarantee</span>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section how-it-works">
        <div className="container">
          <h2 className="section-heading">How <span className="gradient-text">Kalyan Mantap</span> Works</h2>
          <p className="section-sub">Like booking a hotel — but for your wedding</p>
          <div className="steps-grid">
            <div className="step-card animate-fade-in-up">
              <div className="step-num">1</div>
              <div className="step-icon">🏛️</div>
              <h3>Pick a Hall</h3>
              <p>Browse verified wedding halls in your city. Filter by budget, capacity, and style.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card animate-fade-in-up delay-1">
              <div className="step-num">2</div>
              <div className="step-icon">🎨</div>
              <h3>Add Services</h3>
              <p>Choose decor, catering, and photography from local vendors. Build your custom bundle.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card animate-fade-in-up delay-2">
              <div className="step-num">3</div>
              <div className="step-icon">💳</div>
              <h3>Book & Pay</h3>
              <p>See your total upfront. Pay in full or split into easy EMIs. Confirmed instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat"><span className="stat-val">10,000+</span><span className="stat-label">Families Served</span></div>
            <div className="stat"><span className="stat-val">₹0</span><span className="stat-label">Broker Fees</span></div>
            <div className="stat"><span className="stat-val">8 Cities</span><span className="stat-label">Across South India</span></div>
            <div className="stat"><span className="stat-val">500+</span><span className="stat-label">Verified Halls</span></div>
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="section">
        <div className="container">
          <h2 className="section-heading">Popular Wedding <span className="gradient-text">Halls</span></h2>
          <p className="section-sub">Handpicked venues trusted by thousands of families</p>
          <div className="featured-grid">
            {featured.map((v, i) => <VenueCard key={v.id} venue={v} index={i} />)}
          </div>
          <div className="section-cta">
            <Link href="/venues" className="btn btn-outline">View All Halls →</Link>
          </div>
        </div>
      </section>

      {/* What's bundled */}
      <section className="section bundle-section">
        <div className="container">
          <h2 className="section-heading">Build Your <span className="gradient-text">Bundle</span></h2>
          <p className="section-sub">Add these services to your hall booking — one vendor for everything</p>
          <div className="bundle-grid">
            <div className="bundle-card animate-fade-in-up">
              <span className="bundle-emoji">🎨</span>
              <h4>Decor</h4>
              <p>Region-specific themes — from traditional mandap to modern minimal</p>
            </div>
            <div className="bundle-card animate-fade-in-up delay-1">
              <span className="bundle-emoji">🍽️</span>
              <h4>Catering</h4>
              <p>Local cuisines — Hyderabadi biryani, Kerala sadya, Tamil feast & more</p>
            </div>
            <div className="bundle-card animate-fade-in-up delay-2">
              <span className="bundle-emoji">📸</span>
              <h4>Photography</h4>
              <p>From simple clicks to cinematic 4K films with drone coverage</p>
            </div>
            <div className="bundle-card animate-fade-in-up delay-3">
              <span className="bundle-emoji">💳</span>
              <h4>Easy EMI</h4>
              <p>Split your total into 3 or 6 monthly payments. Pay only 40% upfront</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-heading">What Families <span className="gradient-text">Say</span></h2>
          <div className="testimonials-grid">
            <div className="testimonial-card animate-fade-in-up">
              <div className="test-stars">★★★★★</div>
              <p>&quot;We booked our hall in Banjara Hills, added Hyderabadi catering, and paid through EMI. Everything was so easy!&quot;</p>
              <div className="test-author"><strong>Priya & Rahul</strong><span>Hyderabad</span></div>
            </div>
            <div className="testimonial-card animate-fade-in-up delay-1">
              <div className="test-stars">★★★★★</div>
              <p>&quot;The garden mandap in Whitefield was gorgeous. We added our own photographer from their list. No stress at all.&quot;</p>
              <div className="test-author"><strong>Kavitha & Suresh</strong><span>Bangalore</span></div>
            </div>
            <div className="testimonial-card animate-fade-in-up delay-2">
              <div className="test-stars">★★★★★</div>
              <p>&quot;Beach wedding on ECR! Filter coffee counter was a hit. The EMI option made it affordable for our family.&quot;</p>
              <div className="test-author"><strong>Deepika & Aravind</strong><span>Chennai</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Start Planning Your<br /><span className="gradient-text">Dream Wedding</span></h2>
          <p>Browse 500+ verified halls across South India</p>
          <Link href="/venues" className="btn btn-gold btn-lg">Explore Halls →</Link>
        </div>
      </section>

      <style jsx>{`
        .hero{position:relative;min-height:90vh;display:flex;align-items:center;overflow:hidden}
        .hero-bg{position:absolute;inset:0}
        .hero-bg img{width:100%;height:100%;object-fit:cover}
        .hero-overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(58,10,19,.82) 0%,rgba(28,24,20,.9) 100%)}
        .hero-content{position:relative;z-index:2;text-align:center;padding:100px 24px 80px}
        .hero-badge{display:inline-block;padding:8px 20px;border-radius:var(--radius-full);background:rgba(197,150,26,.15);border:1px solid rgba(197,150,26,.3);color:var(--gold-200);font-size:0.82rem;font-weight:500;margin-bottom:24px}
        .hero-title{color:#fff;font-size:clamp(2rem,6vw,3.8rem);margin-bottom:18px;line-height:1.15}
        .hero-title .gradient-text{background:linear-gradient(135deg,var(--gold),var(--gold-300));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .hero-subtitle{color:rgba(255,255,255,.7);font-size:clamp(0.9rem,2vw,1.1rem);margin-bottom:36px;line-height:1.7}

        .search-bar{display:flex;align-items:center;max-width:720px;margin:0 auto;background:#fff;border-radius:var(--radius-full);padding:6px 6px 6px 18px;box-shadow:var(--shadow-xl);gap:4px}
        .search-field{display:flex;align-items:center;gap:6px;flex:1;min-width:0}
        .search-field .input,.search-field .select{border:none;padding:12px 6px;font-size:0.88rem;background:transparent;min-width:0;flex:1}
        .search-field .input:focus,.search-field .select:focus{box-shadow:none}
        .search-icon{font-size:1rem;flex-shrink:0}
        .search-btn{flex-shrink:0;border-radius:var(--radius-full) !important}

        .hero-trust{margin-top:20px;display:flex;justify-content:center;gap:8px;font-size:0.78rem;color:rgba(255,255,255,.5);flex-wrap:wrap}

        /* How it works */
        .section-heading{text-align:center;margin-bottom:8px}
        .section-sub{text-align:center;font-size:0.9rem;margin-bottom:40px}
        .steps-grid{display:flex;align-items:center;justify-content:center;gap:16px}
        .step-card{text-align:center;flex:1;max-width:260px;padding:28px 20px;border-radius:var(--radius-lg);background:var(--bg-card);border:1px solid var(--border-color);position:relative}
        .step-num{position:absolute;top:-12px;left:50%;transform:translateX(-50%);width:28px;height:28px;border-radius:50%;background:var(--maroon);color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700}
        .step-icon{font-size:2rem;margin-bottom:12px}
        .step-card h3{font-size:1rem;margin-bottom:6px}
        .step-card p{font-size:0.82rem;line-height:1.6}
        .step-arrow{font-size:1.5rem;color:var(--gold);font-weight:700}

        /* Stats */
        .stats-section{background:linear-gradient(135deg,var(--maroon-900),var(--maroon-800));padding:32px 0}
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;text-align:center}
        .stat-val{display:block;font-family:var(--font-heading);font-size:1.8rem;font-weight:800;color:var(--gold)}
        .stat-label{font-size:0.78rem;color:rgba(255,255,255,.6)}

        /* Featured */
        .featured-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;margin-bottom:28px}
        .section-cta{text-align:center}

        /* Bundle */
        .bundle-section{background:var(--warm-50)}
        .bundle-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        .bundle-card{text-align:center;padding:28px 18px;background:var(--bg-card);border-radius:var(--radius-lg);border:1px solid var(--border-color);transition:all var(--ease-base)}
        .bundle-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg);border-color:var(--gold-200)}
        .bundle-emoji{font-size:2.5rem;display:block;margin-bottom:10px}
        .bundle-card h4{font-size:1rem;margin-bottom:6px}
        .bundle-card p{font-size:0.82rem;line-height:1.6}

        /* Testimonials */
        .testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .testimonial-card{padding:24px;background:var(--bg-card);border-radius:var(--radius-lg);border:1px solid var(--border-color)}
        .test-stars{color:var(--gold);font-size:0.9rem;margin-bottom:10px;letter-spacing:2px}
        .testimonial-card p{font-size:0.88rem;font-style:italic;line-height:1.7;margin-bottom:14px}
        .test-author{display:flex;justify-content:space-between;font-size:0.82rem}
        .test-author span{color:var(--text-muted)}

        /* CTA */
        .cta-section{background:linear-gradient(135deg,var(--maroon),var(--maroon-700));padding:72px 0}
        .cta-content{text-align:center}
        .cta-content h2{color:#fff;margin-bottom:12px;font-size:clamp(1.5rem,4vw,2.5rem)}
        .cta-content .gradient-text{background:linear-gradient(135deg,var(--gold),var(--gold-300));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .cta-content p{color:rgba(255,255,255,.6);margin-bottom:24px}

        @media(max-width:768px){
          .search-bar{flex-direction:column;border-radius:var(--radius-lg);padding:14px}
          .search-field{width:100%}
          .search-btn{width:100%}
          .steps-grid{flex-direction:column}
          .step-arrow{transform:rotate(90deg)}
          .stats-grid{grid-template-columns:repeat(2,1fr)}
          .bundle-grid{grid-template-columns:repeat(2,1fr)}
          .testimonials-grid{grid-template-columns:1fr}
        }
        @media(max-width:480px){
          .stats-grid{grid-template-columns:1fr 1fr}
          .bundle-grid{grid-template-columns:1fr}
        }
      `}</style>
    </div>
  );
}
