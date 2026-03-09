'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getVenueById, getAddOns, formatPriceFull } from '@/data/venues';
import HallCard from '@/components/HallCard';
import AddOnSelector from '@/components/AddOnSelector';
import BundleSummary from '@/components/BundleSummary';
import AvailabilityCalendar from '@/components/AvailabilityCalendar';
import BookingModal from '@/components/BookingModal';

export default function VenueDetailPage() {
  const params = useParams();
  const venue = getVenueById(params.id);
  const [selectedHall, setSelectedHall] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState({ decor: null, catering: null, photography: null });
  const [selectedDate, setSelectedDate] = useState(null);
  const [guests, setGuests] = useState(300);
  const [activeImage, setActiveImage] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);

  if (!venue) {
    return (
      <div className="container" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h2>Venue Not Found</h2>
        <p>The venue you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/venues" className="btn btn-primary" style={{ marginTop: 20 }}>← Back to Halls</Link>
      </div>
    );
  }

  const addOns = getAddOns(venue.city);

  const handleAddOnSelect = (type, option) => {
    setSelectedAddOns(prev => ({ ...prev, [type]: option }));
  };

  return (
    <div className="venue-detail">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/">Home</Link><span>/</span>
          <Link href="/venues">Halls</Link><span>/</span>
          <span className="current">{venue.name}</span>
        </div>

        {/* Gallery */}
        <div className="gallery">
          <div className="gallery-main">
            <img src={venue.images[activeImage]} alt={venue.name} className="main-img" />
            {venue.featured && <span className="badge badge-gold gallery-badge">⭐ Featured</span>}
          </div>
          <div className="gallery-thumbs">
            {venue.images.map((img, i) => (
              <div key={i} className={`thumb ${activeImage === i ? 'active' : ''}`} onClick={() => setActiveImage(i)}>
                <img src={img} alt={`${venue.name} ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="detail-grid">
          <div className="detail-left">
            {/* Venue Info */}
            <div className="venue-info">
              <h1>{venue.name}</h1>
              <div className="venue-meta">
                <span className="stars">★</span> <strong>{venue.rating}</strong>
                <span className="rc">({venue.reviews} reviews)</span>
                <span className="sep">•</span>
                <span>📍 {venue.area}, {venue.city}</span>
                {venue.vegOnly && <span className="badge badge-success" style={{ marginLeft: 8 }}>🌿 Pure Veg</span>}
              </div>
              <p className="venue-desc">{venue.description}</p>
              <div className="venue-amenities">
                {venue.amenities.map(a => <span key={a} className="tag">{a}</span>)}
              </div>
            </div>

            <hr className="divider" />

            {/* Step 1: Pick a Hall */}
            <div className="section-block">
              <h3>🏛️ Step 1: Pick Your Hall</h3>
              <p className="section-desc">Select the hall that fits your guest count and budget</p>
              <div className="halls-list">
                {venue.halls.map(hall => (
                  <HallCard key={hall.id} hall={hall} selected={selectedHall?.id === hall.id} onSelect={setSelectedHall} />
                ))}
              </div>
            </div>

            <hr className="divider" />

            {/* Step 2: Add Services */}
            <div className="section-block">
              <h3>🎨 Step 2: Add Services</h3>
              <AddOnSelector addOns={addOns} selected={selectedAddOns} onSelect={handleAddOnSelect} />
            </div>

            <hr className="divider" />

            {/* Availability Calendar */}
            <div className="section-block">
              <h3>📅 Check Availability</h3>
              <div className="calendar-wrap">
                <AvailabilityCalendar
                  availability={venue.availability}
                  selectedDate={selectedDate}
                  onSelectDate={setSelectedDate}
                />
              </div>
            </div>

            <hr className="divider" />

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
                      <div className="review-stars">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                    </div>
                    <p className="review-text">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar — Bundle Summary */}
          <aside className="detail-right">
            <BundleSummary
              hall={selectedHall}
              addOns={selectedAddOns}
              guests={guests}
              onBook={() => setBookingOpen(true)}
            />
          </aside>
        </div>
      </div>

      <BookingModal
        venue={venue}
        hall={selectedHall}
        addOns={selectedAddOns}
        guests={guests}
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      <style jsx>{`
        .venue-detail{padding:24px 0 80px}
        .breadcrumb{display:flex;align-items:center;gap:8px;font-size:0.82rem;color:var(--text-muted);margin-bottom:20px}
        .breadcrumb a{color:var(--text-muted);transition:color var(--ease-base)}
        .breadcrumb a:hover{color:var(--maroon)}
        .breadcrumb .current{color:var(--text-primary);font-weight:500}

        .gallery{margin-bottom:28px}
        .gallery-main{position:relative;border-radius:var(--radius-xl);overflow:hidden;aspect-ratio:21/9;margin-bottom:10px}
        .main-img{width:100%;height:100%;object-fit:cover}
        .gallery-badge{position:absolute;top:14px;left:14px}
        .gallery-thumbs{display:flex;gap:6px;overflow-x:auto}
        .thumb{width:90px;height:60px;border-radius:var(--radius-sm);overflow:hidden;cursor:pointer;border:3px solid transparent;transition:all var(--ease-base);flex-shrink:0}
        .thumb:hover{border-color:var(--gold-300)}
        .thumb.active{border-color:var(--maroon)}
        .thumb img{width:100%;height:100%;object-fit:cover}

        .detail-grid{display:grid;grid-template-columns:1fr 340px;gap:36px;align-items:start}

        .venue-info h1{font-size:clamp(1.4rem,3vw,1.9rem);margin-bottom:8px}
        .venue-meta{display:flex;align-items:center;gap:6px;font-size:0.85rem;color:var(--text-secondary);flex-wrap:wrap;margin-bottom:14px}
        .venue-meta strong{color:var(--text-primary)}
        .rc{font-weight:400;color:var(--text-muted)}
        .sep{color:var(--warm-300)}
        .venue-desc{font-size:0.9rem;line-height:1.8;margin-bottom:14px}
        .venue-amenities{display:flex;flex-wrap:wrap;gap:6px}

        .section-block{margin:8px 0}
        .section-block h3{font-size:1.15rem;margin-bottom:6px}
        .section-desc{font-size:0.82rem;color:var(--text-muted);margin-bottom:14px}
        .halls-list{display:flex;flex-direction:column;gap:10px}
        .calendar-wrap{max-width:400px}

        .reviews-list{display:flex;flex-direction:column;gap:12px}
        .review-card{background:var(--warm-50);border-radius:var(--radius-md);padding:18px}
        .review-header{display:flex;align-items:center;gap:10px;margin-bottom:8px}
        .review-avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--maroon),var(--gold));color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0}
        .review-name{font-weight:600;font-size:0.85rem}
        .review-date{font-size:0.72rem;color:var(--text-muted)}
        .review-stars{margin-left:auto;color:var(--gold);letter-spacing:1px;font-size:0.85rem}
        .review-text{font-size:0.85rem;line-height:1.7}

        @media(max-width:900px){.detail-grid{grid-template-columns:1fr}.gallery-main{aspect-ratio:16/9}}
      `}</style>
    </div>
  );
}
