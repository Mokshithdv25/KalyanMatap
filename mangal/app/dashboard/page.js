'use client';

import Link from 'next/link';
import { mockBookings, formatPriceExact, formatPrice } from '@/data/venues';

export default function DashboardPage() {
    return (
        <div className="dashboard">
            <div className="container">
                <div className="dashboard-header">
                    <div>
                        <h1>My <span className="gradient-text">Bookings</span></h1>
                        <p>Track your wedding bookings and payment status</p>
                    </div>
                    <Link href="/venues" className="btn btn-primary">
                        + Book New Venue
                    </Link>
                </div>

                {/* Stats Cards */}
                <div className="stats-row">
                    <div className="stat-card card">
                        <div className="stat-card-icon">🏛️</div>
                        <div className="stat-card-info">
                            <span className="stat-card-value">{mockBookings.length}</span>
                            <span className="stat-card-label">Active Bookings</span>
                        </div>
                    </div>
                    <div className="stat-card card">
                        <div className="stat-card-icon">💰</div>
                        <div className="stat-card-info">
                            <span className="stat-card-value">{formatPrice(mockBookings.reduce((s, b) => s + b.paidAmount, 0))}</span>
                            <span className="stat-card-label">Total Paid</span>
                        </div>
                    </div>
                    <div className="stat-card card">
                        <div className="stat-card-icon">📅</div>
                        <div className="stat-card-info">
                            <span className="stat-card-value">{formatPrice(mockBookings.reduce((s, b) => s + (b.totalAmount - b.paidAmount), 0))}</span>
                            <span className="stat-card-label">Pending</span>
                        </div>
                    </div>
                    <div className="stat-card card">
                        <div className="stat-card-icon">🎉</div>
                        <div className="stat-card-info">
                            <span className="stat-card-value">{mockBookings.filter(b => b.status === 'confirmed').length}</span>
                            <span className="stat-card-label">Confirmed</span>
                        </div>
                    </div>
                </div>

                {/* Bookings List */}
                <div className="bookings-list">
                    {mockBookings.map((booking, i) => {
                        const progress = Math.round((booking.paidAmount / booking.totalAmount) * 100);
                        const daysLeft = Math.ceil((new Date(booking.date) - new Date()) / (1000 * 60 * 60 * 24));

                        return (
                            <div key={booking.id} className="booking-card card animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="booking-card-left">
                                    <div className="booking-status">
                                        <span className={`status-dot ${booking.status}`}></span>
                                        <span className="status-text">{booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}</span>
                                    </div>
                                    <h3 className="booking-venue-name">{booking.venueName}</h3>
                                    <p className="booking-city">📍 {booking.city}</p>

                                    <div className="booking-details">
                                        <div className="detail-item">
                                            <span className="detail-label">Wedding Date</span>
                                            <span className="detail-value">
                                                {new Date(booking.date).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })}
                                            </span>
                                            <span className="days-countdown">{daysLeft > 0 ? `${daysLeft} days away` : 'Past event'}</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">Package</span>
                                            <span className="detail-value">{booking.packageTier}</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">Guests</span>
                                            <span className="detail-value">{booking.guests}</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">Booked On</span>
                                            <span className="detail-value">{new Date(booking.bookedOn).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="booking-card-right">
                                    <div className="payment-section">
                                        <h4>Payment Progress</h4>
                                        <div className="payment-bar">
                                            <div className="payment-bar-fill" style={{ width: `${progress}%` }}></div>
                                        </div>
                                        <div className="payment-info">
                                            <span>Paid: <strong>{formatPriceExact(booking.paidAmount)}</strong></span>
                                            <span>Total: <strong>{formatPriceExact(booking.totalAmount)}</strong></span>
                                        </div>
                                        <span className="payment-percent">{progress}% paid</span>
                                    </div>

                                    <div className="plan-info">
                                        <span className="badge badge-burgundy">{booking.paymentPlan}</span>
                                    </div>

                                    {booking.nextPaymentDate && (
                                        <div className="next-payment">
                                            <span className="next-label">Next Payment</span>
                                            <span className="next-amount">{formatPriceExact(booking.nextPaymentAmount)}</span>
                                            <span className="next-date">Due: {new Date(booking.nextPaymentDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                        </div>
                                    )}

                                    <div className="booking-actions">
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
        .dashboard {
          padding: 32px 0 80px;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 32px;
        }

        .dashboard-header h1 {
          margin-bottom: 4px;
        }

        .dashboard-header p {
          font-size: 0.9rem;
        }

        /* Stats Row */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 36px;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
        }

        .stat-card-icon {
          font-size: 2rem;
          width: 52px;
          height: 52px;
          border-radius: var(--border-radius-md);
          background: var(--burgundy-50);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-card-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .stat-card-label {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Bookings */
        .bookings-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .booking-card {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 32px;
          padding: 28px;
        }

        .booking-status {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .status-dot.confirmed {
          background: var(--success);
          box-shadow: 0 0 8px rgba(42, 157, 92, 0.4);
        }

        .status-dot.pending {
          background: var(--warning);
        }

        .status-text {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--success);
        }

        .booking-venue-name {
          font-size: 1.3rem;
          margin-bottom: 4px;
        }

        .booking-city {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .booking-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .detail-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-muted);
        }

        .detail-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .days-countdown {
          font-size: 0.75rem;
          color: var(--burgundy);
          font-weight: 500;
        }

        /* Payment */
        .booking-card-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .payment-section h4 {
          font-size: 0.85rem;
          font-family: var(--font-body);
          margin-bottom: 8px;
        }

        .payment-bar {
          height: 10px;
          background: var(--warm-gray-100);
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .payment-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--burgundy), var(--gold));
          border-radius: 5px;
          transition: width 1s ease;
        }

        .payment-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .payment-percent {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--success);
        }

        .next-payment {
          background: var(--warning-light);
          border-radius: var(--border-radius-sm);
          padding: 12px 16px;
        }

        .next-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 2px;
        }

        .next-amount {
          display: block;
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .next-date {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .booking-actions {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        @media (max-width: 900px) {
          .stats-row {
            grid-template-columns: repeat(2, 1fr);
          }

          .booking-card {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }

        @media (max-width: 480px) {
          .stats-row {
            grid-template-columns: 1fr;
          }

          .booking-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
}
