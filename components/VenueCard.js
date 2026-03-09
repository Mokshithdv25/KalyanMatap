'use client';

import Link from 'next/link';
import { formatPrice } from '@/data/venues';

export default function VenueCard({ venue, index = 0 }) {
  const lowestHall = venue.halls.reduce((min, h) => h.price < min.price ? h : min, venue.halls[0]);
  const maxCap = Math.max(...venue.halls.map(h => h.capacity));

  return (
    <div className="venue-card card animate-fade-in-up" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="venue-img-wrap">
        <img src={venue.images[0]} alt={venue.name} className="venue-img" />
        <div className="venue-badges">
          {venue.featured && <span className="badge badge-gold">⭐ Featured</span>}
          {venue.vegOnly && <span className="badge badge-success">🌿 Pure Veg</span>}
        </div>
        <div className="venue-price-tag">From {formatPrice(lowestHall.price)}</div>
      </div>
      <div className="venue-body">
        <div className="venue-top">
          <h3 className="venue-name">{venue.name}</h3>
          <div className="venue-rating"><span className="stars">★</span> {venue.rating} <span className="rc">({venue.reviews})</span></div>
        </div>
        <p className="venue-loc">📍 {venue.area}, {venue.city}</p>
        <div className="venue-meta">
          <span>👥 Up to {maxCap}</span>
          <span>🏛️ {venue.halls.length} halls</span>
        </div>
        <div className="venue-tags">
          {venue.amenities.slice(0, 3).map(a => <span key={a} className="tag">{a}</span>)}
          {venue.amenities.length > 3 && <span className="tag">+{venue.amenities.length - 3}</span>}
        </div>
        <div className="venue-footer">
          <Link href={`/venues/${venue.id}`} className="btn btn-primary btn-sm">Select Hall →</Link>
          <span className="emi">EMI from {formatPrice(Math.round(lowestHall.price / 6))}/mo</span>
        </div>
      </div>
      <style jsx>{`
        .venue-card{display:flex;flex-direction:column;height:100%}
        .venue-img-wrap{position:relative;overflow:hidden;aspect-ratio:16/10}
        .venue-img{width:100%;height:100%;object-fit:cover;transition:transform var(--ease-slow)}
        .venue-card:hover .venue-img{transform:scale(1.04)}
        .venue-badges{position:absolute;top:10px;left:10px;display:flex;gap:6px;z-index:2}
        .venue-price-tag{position:absolute;bottom:10px;right:10px;background:rgba(0,0,0,.72);backdrop-filter:blur(6px);color:#fff;padding:5px 12px;border-radius:var(--radius-full);font-size:0.82rem;font-weight:600}
        .venue-body{padding:16px 18px;display:flex;flex-direction:column;gap:8px;flex:1}
        .venue-top{display:flex;justify-content:space-between;align-items:flex-start;gap:6px}
        .venue-name{font-family:var(--font-heading);font-size:1.05rem;font-weight:600;line-height:1.3}
        .venue-rating{display:flex;align-items:center;gap:3px;flex-shrink:0;font-weight:700;font-size:0.85rem}
        .rc{font-weight:400;font-size:0.75rem;color:var(--text-muted)}
        .venue-loc{font-size:0.82rem;color:var(--text-secondary)}
        .venue-meta{display:flex;gap:14px;font-size:0.78rem;color:var(--text-muted)}
        .venue-tags{display:flex;flex-wrap:wrap;gap:5px}
        .venue-footer{display:flex;align-items:center;justify-content:space-between;margin-top:auto;padding-top:10px;border-top:1px solid var(--border-color)}
        .emi{font-size:0.72rem;color:var(--leaf);font-weight:500}
      `}</style>
    </div>
  );
}
