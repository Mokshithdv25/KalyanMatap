'use client';

import Link from 'next/link';
import { mockBookings, formatPriceFull, formatPrice } from '@/data/venues';

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="dash-header">
          <div>
            <h1>My <span className="gradient-text">Bookings</span></h1>
            <p>Track your wedding bookings and payments</p>
          </div>
          <Link href="/venues" className="btn btn-primary">+ Book New Venue</Link>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-card card">
            <span className="stat-icon">🏛️</span>
            <div><span className="stat-val">{mockBookings.length}</span><span className="stat-lab">Active</span></div>
          </div>
          <div className="stat-card card">
            <span className="stat-icon">💰</span>
            <div><span className="stat-val">{formatPrice(mockBookings.reduce((s, b) => s + b.paidAmount, 0))}</span><span className="stat-lab">Paid</span></div>
          </div>
          <div className="stat-card card">
            <span className="stat-icon">📅</span>
            <div><span className="stat-val">{formatPrice(mockBookings.reduce((s, b) => s + (b.totalAmount - b.paidAmount), 0))}</span><span className="stat-lab">Pending</span></div>
          </div>
          <div className="stat-card card">
            <span className="stat-icon">🎉</span>
            <div><span className="stat-val">{mockBookings.filter(b => b.status === 'confirmed').length}</span><span className="stat-lab">Confirmed</span></div>
          </div>
        </div>

        {/* Booking Cards */}
        <div className="bookings-list">
          {mockBookings.map((booking, i) => {
            const progress = Math.round((booking.paidAmount / booking.totalAmount) * 100);
            const daysLeft = Math.ceil((new Date(booking.date) - new Date()) / 86400000);

            return (
              <div key={booking.id} className="booking-card card animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="bc-left">
                  <div className="bc-status">
                    <span className={`status-dot ${booking.status}`}></span>
                    <span className="status-label">{booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}</span>
                  </div>
                  <h3>{booking.venueName}</h3>
                  <p className="bc-city">📍 {booking.city}</p>

                  <div className="bc-details">
                    <div className="bc-detail"><span className="bc-dl">Wedding Date</span><strong>{new Date(booking.date).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })}</strong><span className="bc-days">{daysLeft > 0 ? `${daysLeft} days away` : 'Past event'}</span></div>
                    <div className="bc-detail"><span className="bc-dl">Guests</span><strong>{booking.guests}</strong></div>
                  </div>

                  {/* Bundle Breakdown */}
                  <div className="bc-bundle">
                    <h4>Bundle Breakdown</h4>
                    <div className="bundle-row"><span>🏛️ {booking.hall.name}</span><span>{formatPriceFull(booking.hall.price)}</span></div>
                    <div className="bundle-row"><span>🎨 {booking.decor.name}</span><span>{formatPriceFull(booking.decor.price)}</span></div>
                    <div className="bundle-row"><span>🍽️ {booking.catering.name} ({booking.catering.plates} plates)</span><span>{formatPriceFull(booking.catering.total)}</span></div>
                    <div className="bundle-row"><span>📸 {booking.photography.name}</span><span>{formatPriceFull(booking.photography.price)}</span></div>
                  </div>
                </div>

                <div className="bc-right">
                  <div className="payment-section">
                    <h4>Payment</h4>
                    <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }}></div></div>
                    <div className="payment-stats">
                      <span>Paid: <strong>{formatPriceFull(booking.paidAmount)}</strong></span>
                      <span>Total: <strong>{formatPriceFull(booking.totalAmount)}</strong></span>
                    </div>
                    <span className="progress-percent">{progress}% paid</span>
                  </div>
                  <span className="badge badge-maroon">{booking.paymentPlan}</span>
                  {booking.nextPaymentDate && (
                    <div className="next-payment">
                      <span className="np-label">Next Payment</span>
                      <span className="np-amount">{formatPriceFull(booking.nextPaymentAmount)}</span>
                      <span className="np-date">Due: {new Date(booking.nextPaymentDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                  )}
                  <div className="bc-actions">
                    <Link href={`/venues/${booking.venueId}`} className="btn btn-outline btn-sm">View Venue</Link>
                    <button className="btn btn-primary btn-sm">Pay Now →</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .dashboard{padding:28px 0 80px}
        .dash-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:28px}
        .dash-header p{font-size:0.85rem;color:var(--text-muted)}
        .stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:32px}
        .stat-card{display:flex;align-items:center;gap:14px;padding:18px 20px}
        .stat-icon{font-size:1.8rem}
        .stat-val{display:block;font-family:var(--font-heading);font-size:1.3rem;font-weight:800}
        .stat-lab{font-size:0.72rem;color:var(--text-muted)}
        .bookings-list{display:flex;flex-direction:column;gap:18px}
        .booking-card{display:grid;grid-template-columns:1fr 300px;gap:28px;padding:24px}
        .bc-status{display:flex;align-items:center;gap:6px;margin-bottom:6px}
        .status-dot{width:8px;height:8px;border-radius:50%}
        .status-dot.confirmed{background:var(--leaf);box-shadow:0 0 8px rgba(45,106,79,.4)}
        .status-dot.pending{background:var(--warning)}
        .status-label{font-size:0.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.04em;color:var(--leaf)}
        .booking-card h3{font-size:1.15rem;margin-bottom:2px}
        .bc-city{font-size:0.82rem;color:var(--text-muted);margin-bottom:12px}
        .bc-details{display:flex;gap:24px;margin-bottom:14px}
        .bc-detail{display:flex;flex-direction:column;gap:2px}
        .bc-dl{font-size:0.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.04em;color:var(--text-muted)}
        .bc-detail strong{font-size:0.85rem}
        .bc-days{font-size:0.72rem;color:var(--maroon);font-weight:500}
        .bc-bundle{margin-top:8px;padding-top:12px;border-top:1px solid var(--border-color)}
        .bc-bundle h4{font-size:0.82rem;font-family:var(--font-body);font-weight:600;margin-bottom:8px;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.04em}
        .bundle-row{display:flex;justify-content:space-between;font-size:0.82rem;padding:3px 0;color:var(--text-secondary)}
        .bundle-row span:last-child{font-weight:600;color:var(--text-primary)}
        .bc-right{display:flex;flex-direction:column;gap:12px}
        .payment-section h4{font-size:0.82rem;font-family:var(--font-body);margin-bottom:6px}
        .progress-bar{height:8px;background:var(--warm-100);border-radius:4px;overflow:hidden;margin-bottom:6px}
        .progress-fill{height:100%;background:linear-gradient(90deg,var(--maroon),var(--gold));border-radius:4px}
        .payment-stats{display:flex;justify-content:space-between;font-size:0.75rem;color:var(--text-muted)}
        .progress-percent{font-size:0.78rem;font-weight:600;color:var(--leaf)}
        .next-payment{background:var(--gold-50);border-radius:var(--radius-sm);padding:10px 14px}
        .np-label{display:block;font-size:0.7rem;font-weight:600;text-transform:uppercase;color:var(--text-muted)}
        .np-amount{display:block;font-size:1.05rem;font-weight:800;color:var(--text-primary)}
        .np-date{font-size:0.75rem;color:var(--text-muted)}
        .bc-actions{display:flex;gap:8px;margin-top:auto}
        @media(max-width:768px){.stats-row{grid-template-columns:repeat(2,1fr)}.booking-card{grid-template-columns:1fr}.dash-header{flex-direction:column;align-items:flex-start;gap:12px}}
      `}</style>
    </div>
  );
}
