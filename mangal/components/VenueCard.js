'use client';

import Link from 'next/link';
import { formatPrice } from '@/data/venues';

export default function VenueCard({ venue, index = 0 }) {
  const startingPrice = venue.packages[0].price;

  return (
    <div className="venue-card card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="venue-image-wrap">
        <img
          src={venue.images[0]}
          alt={venue.name}
          className="venue-image"
        />
        <div className="venue-image-overlay">
          {venue.featured && (
            <span className="badge badge-gold">⭐ Featured</span>
          )}
          {venue.vegOnly && (
            <span className="badge badge-success">🌿 Pure Veg</span>
          )}
        </div>
        <div className="venue-price-badge">
          From {formatPrice(startingPrice)}
        </div>
      </div>

      <div className="venue-info">
        <div className="venue-header">
          <h3 className="venue-name">{venue.name}</h3>
          <div className="venue-rating">
            <span className="stars">★</span>
            <span className="rating-value">{venue.rating}</span>
            <span className="review-count">({venue.reviews})</span>
          </div>
        </div>

        <p className="venue-location">📍 {venue.area}, {venue.city}</p>

        <div className="venue-meta">
          <span className="meta-item">👥 {venue.capacity.min}–{venue.capacity.max} guests</span>
          <span className="meta-item">🏛️ {venue.packages.length} packages</span>
        </div>

        <div className="venue-amenities">
          {venue.amenities.slice(0, 4).map(a => (
            <span key={a} className="tag">{a}</span>
          ))}
          {venue.amenities.length > 4 && (
            <span className="tag">+{venue.amenities.length - 4} more</span>
          )}
        </div>

        <div className="venue-actions">
          <Link href={`/venues/${venue.id}`} className="btn btn-primary btn-sm">
            View Details →
          </Link>
          <span className="emi-note">EMI from {formatPrice(Math.round(startingPrice / 6))}/mo</span>
        </div>
      </div>

      <style jsx>{`
        .venue-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .venue-image-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 10;
        }

        .venue-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .venue-card:hover .venue-image {
          transform: scale(1.05);
        }

        .venue-image-overlay {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          gap: 8px;
          z-index: 2;
        }

        .venue-price-badge {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          color: white;
          padding: 6px 14px;
          border-radius: var(--border-radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          z-index: 2;
        }

        .venue-info {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .venue-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
        }

        .venue-name {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 600;
          line-height: 1.3;
          color: var(--text-primary);
        }

        .venue-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-shrink: 0;
        }

        .rating-value {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .review-count {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .venue-location {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .venue-meta {
          display: flex;
          gap: 16px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .venue-amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }

        .venue-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
        }

        .emi-note {
          font-size: 0.75rem;
          color: var(--success);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
