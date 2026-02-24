'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getVenueById, formatPrice, formatPriceExact } from '@/data/venues';
import PackageCard from '@/components/PackageCard';
import AvailabilityCalendar from '@/components/AvailabilityCalendar';
import BookingModal from '@/components/BookingModal';

export default function VenueDetailPage() {
    const params = useParams();
    const venue = getVenueById(params.id);
    const [selectedPkg, setSelectedPkg] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const [bookingOpen, setBookingOpen] = useState(false);

    if (!venue) {
        return (
            <div className="not-found container" style={{ padding: '120px 24px', textAlign: 'center' }}>
                <h2>Venue Not Found</h2>
                <p>The venue you&apos;re looking for doesn&apos;t exist.</p>
                <Link href="/venues" className="btn btn-primary" style={{ marginTop: 20 }}>← Back to Venues</Link>
            </div>
        );
    }

    return (
        <div className="venue-detail">
            <div className="container">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/venues">Venues</Link>
                    <span>/</span>
                    <span className="current">{venue.name}</span>
                </div>

                {/* Image Gallery */}
                <div className="gallery">
                    <div className="gallery-main">
                        <img src={venue.images[activeImage]} alt={venue.name} className="main-image" />
                        {venue.featured && <span className="badge badge-gold gallery-badge">⭐ Featured</span>}
                    </div>
                    <div className="gallery-thumbs">
                        {venue.images.map((img, i) => (
                            <div
                                key={i}
                                className={`thumb ${activeImage === i ? 'active' : ''}`}
                                onClick={() => setActiveImage(i)}
                            >
                                <img src={img} alt={`${venue.name} ${i + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="detail-grid">
                    {/* Left Column — Venue Info */}
                    <div className="detail-left">
                        <div className="venue-title-block">
                            <h1>{venue.name}</h1>
                            <div className="venue-meta-row">
                                <span className="venue-rating">
                                    <span className="stars">★</span> {venue.rating}
                                    <span className="reviews-count">({venue.reviews} reviews)</span>
                                </span>
                                <span className="meta-sep">•</span>
                                <span>📍 {venue.area}, {venue.city}</span>
                                <span className="meta-sep">•</span>
                                <span>👥 {venue.capacity.min}–{venue.capacity.max} guests</span>
                            </div>
                            {venue.vegOnly && <span className="badge badge-success" style={{ marginTop: 8 }}>🌿 Pure Vegetarian Venue</span>}
                        </div>

                        <p className="venue-description">{venue.description}</p>

                        {/* Amenities */}
                        <div className="section-block">
                            <h3>Amenities</h3>
                            <div className="amenities-list">
                                {venue.amenities.map(a => (
                                    <span key={a} className="tag">{a}</span>
                                ))}
                            </div>
                        </div>

                        {/* Packages */}
                        <div className="section-block">
                            <h3>Choose Your Package</h3>
                            <p className="section-desc">All-inclusive bundles — hall, decor, catering & photography</p>
                            <div className="packages-grid">
                                {venue.packages.map(pkg => (
                                    <PackageCard
                                        key={pkg.id}
                                        pkg={pkg}
                                        selected={selectedPkg?.id === pkg.id}
                                        onSelect={setSelectedPkg}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Reviews */}
                        <div className="section-block">
                            <h3>Reviews</h3>
                            <div className="reviews-list">
                                {venue.reviewsList.map((review, i) => (
                                    <div key={i} className="review-card">
                                        <div className="review-header">
                                            <div className="review-avatar">{review.name.charAt(0)}</div>
                                            <div>
                                                <div className="review-name">{review.name}</div>
                                                <div className="review-date">{new Date(review.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long' })}</div>
                                            </div>
                                            <div className="review-rating">
                                                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                            </div>
                                        </div>
                                        <p className="review-text">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column — Booking Sidebar */}
                    <aside className="detail-right">
                        <div className="booking-card card">
                            <div className="booking-card-header">
                                <div className="price-from">
                                    <span className="price-label">Starting from</span>
                                    <span className="price-value">{formatPrice(venue.packages[0].price)}</span>
                                </div>
                                <span className="emi-badge">EMI from {formatPrice(Math.round(venue.packages[0].price / 6))}/mo</span>
                            </div>

                            <div className="booking-card-body">
                                <h4 style={{ marginBottom: 16, fontSize: '0.95rem' }}>📅 Check Availability</h4>
                                <AvailabilityCalendar
                                    availability={venue.availability}
                                    selectedDate={selectedDate}
                                    onSelectDate={setSelectedDate}
                                />

                                {selectedDate && (
                                    <div className="selected-date-info animate-fade-in">
                                        <span>✅ Selected: <strong>{new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</strong></span>
                                    </div>
                                )}

                                <button
                                    className="btn btn-primary btn-lg"
                                    style={{ width: '100%', marginTop: 20 }}
                                    onClick={() => setBookingOpen(true)}
                                >
                                    🪷 Book This Venue
                                </button>

                                <div className="trust-items">
                                    <span>🔒 Secure booking</span>
                                    <span>✅ Instant confirmation</span>
                                    <span>💯 No hidden charges</span>
                                    <span>💳 EMI available</span>
                                </div>
                            </div>
                        </div>

                        {/* Payment Plans Preview */}
                        <div className="payment-plans-preview card">
                            <h4>💳 Flexible Payment Plans</h4>
                            {venue.paymentPlans.map(plan => (
                                <div key={plan.id} className="plan-preview">
                                    <span className="plan-name">{plan.name}</span>
                                    <span className="plan-desc">{plan.description}</span>
                                    {plan.discount && <span className="badge badge-success" style={{ fontSize: '0.65rem' }}>{plan.discount}</span>}
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>

            <BookingModal
                venue={venue}
                isOpen={bookingOpen}
                onClose={() => setBookingOpen(false)}
            />

            <style jsx>{`
        .venue-detail {
          padding: 24px 0 80px;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .breadcrumb a {
          color: var(--text-muted);
          transition: color var(--transition-base);
        }

        .breadcrumb a:hover {
          color: var(--burgundy);
        }

        .breadcrumb .current {
          color: var(--text-primary);
          font-weight: 500;
        }

        /* Gallery */
        .gallery {
          margin-bottom: 36px;
        }

        .gallery-main {
          position: relative;
          border-radius: var(--border-radius-xl);
          overflow: hidden;
          aspect-ratio: 21 / 9;
          margin-bottom: 12px;
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .gallery-badge {
          position: absolute;
          top: 16px;
          left: 16px;
        }

        .gallery-thumbs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
        }

        .thumb {
          width: 100px;
          height: 68px;
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          cursor: pointer;
          border: 3px solid transparent;
          transition: all var(--transition-base);
          flex-shrink: 0;
        }

        .thumb:hover {
          border-color: var(--gold-300);
        }

        .thumb.active {
          border-color: var(--burgundy);
        }

        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Detail Grid */
        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 40px;
          align-items: start;
        }

        /* Left */
        .venue-title-block {
          margin-bottom: 20px;
        }

        .venue-title-block h1 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 8px;
        }

        .venue-meta-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          flex-wrap: wrap;
        }

        .venue-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .reviews-count {
          font-weight: 400;
          color: var(--text-muted);
        }

        .meta-sep {
          color: var(--warm-gray-300);
        }

        .venue-description {
          font-size: 0.95rem;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .section-block {
          margin-bottom: 40px;
        }

        .section-block h3 {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }

        .section-desc {
          font-size: 0.9rem;
          margin-bottom: 20px;
        }

        .amenities-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }

        /* Packages */
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
        }

        /* Reviews */
        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .review-card {
          background: var(--warm-gray-50);
          border-radius: var(--border-radius-md);
          padding: 20px;
        }

        .review-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .review-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--burgundy), var(--gold));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        .review-name {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .review-date {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .review-rating {
          margin-left: auto;
          color: var(--gold);
          letter-spacing: 2px;
        }

        .review-text {
          font-size: 0.9rem;
          line-height: 1.7;
        }

        /* Right Sidebar */
        .detail-right {
          position: sticky;
          top: calc(var(--navbar-height) + 20px);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .booking-card {
          padding: 0;
          overflow: hidden;
        }

        .booking-card-header {
          background: linear-gradient(135deg, var(--burgundy-900), var(--burgundy-700));
          padding: 20px 24px;
          color: white;
        }

        .price-label {
          display: block;
          font-size: 0.8rem;
          opacity: 0.7;
          margin-bottom: 2px;
        }

        .price-value {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
        }

        .emi-badge {
          display: inline-block;
          margin-top: 8px;
          font-size: 0.8rem;
          background: rgba(255, 255, 255, 0.15);
          padding: 4px 12px;
          border-radius: var(--border-radius-full);
        }

        .booking-card-body {
          padding: 24px;
        }

        .selected-date-info {
          margin-top: 12px;
          padding: 10px 16px;
          background: var(--success-light);
          border-radius: var(--border-radius-sm);
          font-size: 0.85rem;
          color: var(--success);
        }

        .trust-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 16px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Payment Plans Preview */
        .payment-plans-preview {
          padding: 20px 24px;
        }

        .payment-plans-preview h4 {
          font-size: 0.95rem;
          margin-bottom: 16px;
        }

        .plan-preview {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid var(--warm-gray-50);
        }

        .plan-preview:last-child {
          border-bottom: none;
        }

        .plan-preview .plan-name {
          font-weight: 600;
          font-size: 0.85rem;
          width: 100%;
        }

        .plan-preview .plan-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .detail-grid {
            grid-template-columns: 1fr;
          }

          .detail-right {
            position: static;
          }

          .gallery-main {
            aspect-ratio: 16 / 9;
          }
        }

        @media (max-width: 600px) {
          .packages-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
}
