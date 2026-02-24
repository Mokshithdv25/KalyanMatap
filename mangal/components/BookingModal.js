'use client';

import { useState } from 'react';
import { formatPriceExact } from '@/data/venues';

export default function BookingModal({ venue, isOpen, onClose }) {
    const [step, setStep] = useState(1);
    const [selectedPkg, setSelectedPkg] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [guests, setGuests] = useState('');

    if (!isOpen || !venue) return null;

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const canProceed = () => {
        if (step === 1) return selectedDate !== '';
        if (step === 2) return selectedPkg !== null;
        if (step === 3) return selectedPlan !== null;
        return true;
    };

    const handleConfirm = () => {
        setStep(4);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>

                {/* Progress Bar */}
                <div className="progress-bar">
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s} className={`progress-step ${step >= s ? 'active' : ''} ${step === s ? 'current' : ''}`}>
                            <div className="step-circle">{step > s ? '✓' : s}</div>
                            <span className="step-label">
                                {s === 1 && 'Date'}
                                {s === 2 && 'Package'}
                                {s === 3 && 'Payment'}
                                {s === 4 && 'Confirm'}
                            </span>
                        </div>
                    ))}
                    <div className="progress-line">
                        <div className="progress-fill" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
                    </div>
                </div>

                {/* Step 1: Date Selection */}
                {step === 1 && (
                    <div className="step-content animate-fade-in">
                        <h3>Select Your Wedding Date</h3>
                        <p>Choose the perfect date for your special day</p>
                        <div className="date-input-group">
                            <input
                                type="date"
                                className="input date-input"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                min={new Date().toISOString().split('T')[0]}
                            />
                            <div className="input-group" style={{ marginTop: 16 }}>
                                <label>Expected Guests</label>
                                <input
                                    type="number"
                                    className="input"
                                    placeholder="e.g. 500"
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Package Selection */}
                {step === 2 && (
                    <div className="step-content animate-fade-in">
                        <h3>Choose Your Package</h3>
                        <p>All-inclusive bundles — hall, decor, catering & photography</p>
                        <div className="packages-grid">
                            {venue.packages.map((pkg) => (
                                <div
                                    key={pkg.id}
                                    className={`mini-package ${selectedPkg?.id === pkg.id ? 'selected' : ''}`}
                                    onClick={() => setSelectedPkg(pkg)}
                                >
                                    <div className="mini-pkg-tier">{pkg.tier}</div>
                                    <div className="mini-pkg-price">{formatPriceExact(pkg.price)}</div>
                                    <div className="mini-pkg-details">
                                        <span>🏛️ {pkg.hall.name}</span>
                                        <span>🎨 {pkg.decor.theme}</span>
                                        <span>🍽️ {formatPriceExact(pkg.catering.perPlate)}/plate</span>
                                        <span>📸 {pkg.photography.team}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 3: Payment Plan */}
                {step === 3 && (
                    <div className="step-content animate-fade-in">
                        <h3>Select Payment Plan</h3>
                        <p>Flexible options to suit your budget</p>
                        <div className="payment-plans">
                            {venue.paymentPlans.map((plan) => {
                                const amt = selectedPkg ? selectedPkg.price : 0;
                                const emiAmt = plan.installments > 1 ? Math.round(amt / plan.installments) : amt;
                                const discountedTotal = plan.discount ? Math.round(amt * 0.95) : amt;

                                return (
                                    <div
                                        key={plan.id}
                                        className={`plan-card ${selectedPlan?.id === plan.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedPlan(plan)}
                                    >
                                        <div className="plan-name">{plan.name}</div>
                                        <div className="plan-desc">{plan.description}</div>
                                        {plan.installments === 1 ? (
                                            <div className="plan-amount">
                                                <span className="plan-total">{formatPriceExact(discountedTotal)}</span>
                                                {plan.discount && <span className="plan-discount badge badge-success">{plan.discount}</span>}
                                            </div>
                                        ) : (
                                            <div className="plan-amount">
                                                <span className="plan-emi">{formatPriceExact(emiAmt)}</span>
                                                <span className="plan-freq"> × {plan.installments} months</span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Step 4: Confirmation */}
                {step === 4 && (
                    <div className="step-content animate-scale-in confirmation-step">
                        <div className="confirm-icon">🎉</div>
                        <h3>Booking Confirmed!</h3>
                        <p>Your dream wedding is locked in</p>

                        <div className="confirm-summary">
                            <div className="confirm-row">
                                <span className="confirm-label">Venue</span>
                                <span className="confirm-value">{venue.name}</span>
                            </div>
                            <div className="confirm-row">
                                <span className="confirm-label">Date</span>
                                <span className="confirm-value">{selectedDate ? new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '—'}</span>
                            </div>
                            <div className="confirm-row">
                                <span className="confirm-label">Package</span>
                                <span className="confirm-value">{selectedPkg?.tier} — {formatPriceExact(selectedPkg?.price || 0)}</span>
                            </div>
                            <div className="confirm-row">
                                <span className="confirm-label">Payment</span>
                                <span className="confirm-value">{selectedPlan?.name}</span>
                            </div>
                            {guests && (
                                <div className="confirm-row">
                                    <span className="confirm-label">Guests</span>
                                    <span className="confirm-value">{guests}</span>
                                </div>
                            )}
                        </div>

                        <div className="confirm-note">
                            <p>📧 Confirmation details will be sent to your email</p>
                            <p>📱 You can track your booking in the Dashboard</p>
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="modal-footer">
                    {step > 1 && step < 4 && (
                        <button className="btn btn-ghost" onClick={handleBack}>← Back</button>
                    )}
                    {step < 3 && (
                        <button
                            className="btn btn-primary"
                            onClick={handleNext}
                            disabled={!canProceed()}
                            style={{ marginLeft: 'auto' }}
                        >
                            Continue →
                        </button>
                    )}
                    {step === 3 && (
                        <button
                            className="btn btn-gold btn-lg"
                            onClick={handleConfirm}
                            disabled={!canProceed()}
                            style={{ marginLeft: 'auto' }}
                        >
                            🔒 Confirm & Book
                        </button>
                    )}
                    {step === 4 && (
                        <button
                            className="btn btn-primary"
                            onClick={onClose}
                            style={{ marginLeft: 'auto' }}
                        >
                            Go to Dashboard
                        </button>
                    )}
                </div>
            </div>

            <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }

        .modal-content {
          background: white;
          border-radius: var(--border-radius-xl);
          width: 100%;
          max-width: 600px;
          max-height: 85vh;
          overflow-y: auto;
          padding: 32px;
          position: relative;
          animation: scaleIn 0.3s ease;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--warm-gray-50);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          color: var(--text-secondary);
          transition: all var(--transition-base);
          z-index: 10;
        }

        .modal-close:hover {
          background: var(--burgundy);
          color: white;
        }

        /* Progress Bar */
        .progress-bar {
          display: flex;
          justify-content: space-between;
          position: relative;
          margin-bottom: 32px;
          padding: 0 8px;
        }

        .progress-line {
          position: absolute;
          top: 16px;
          left: 40px;
          right: 40px;
          height: 3px;
          background: var(--warm-gray-100);
          border-radius: 2px;
          z-index: 0;
        }

        .progress-fill {
          height: 100%;
          background: var(--burgundy);
          border-radius: 2px;
          transition: width var(--transition-slow);
        }

        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          z-index: 1;
        }

        .step-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--warm-gray-100);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: all var(--transition-slow);
        }

        .progress-step.active .step-circle {
          background: var(--burgundy);
          color: white;
        }

        .progress-step.current .step-circle {
          box-shadow: 0 0 0 4px rgba(198, 38, 56, 0.2);
        }

        .step-label {
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .progress-step.active .step-label {
          color: var(--burgundy);
        }

        /* Step Content */
        .step-content {
          min-height: 300px;
        }

        .step-content h3 {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          margin-bottom: 8px;
        }

        .step-content > p {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 24px;
        }

        .date-input {
          width: 100%;
          font-size: 1.1rem;
          padding: 14px 16px;
        }

        /* Packages in modal */
        .packages-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mini-package {
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 16px 20px;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .mini-package:hover {
          border-color: var(--gold-300);
          background: var(--gold-50);
        }

        .mini-package.selected {
          border-color: var(--burgundy);
          background: var(--burgundy-50);
        }

        .mini-pkg-tier {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .mini-pkg-price {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--burgundy);
          margin: 4px 0 8px;
        }

        .mini-pkg-details {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .mini-pkg-details span {
          background: var(--warm-gray-50);
          padding: 3px 10px;
          border-radius: var(--border-radius-full);
        }

        /* Payment Plans */
        .payment-plans {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .plan-card {
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 16px 20px;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .plan-card:hover {
          border-color: var(--gold-300);
        }

        .plan-card.selected {
          border-color: var(--burgundy);
          background: var(--burgundy-50);
        }

        .plan-name {
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 4px;
        }

        .plan-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .plan-amount {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .plan-total, .plan-emi {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .plan-freq {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .plan-discount {
          font-size: 0.7rem;
        }

        /* Confirmation */
        .confirmation-step {
          text-align: center;
        }

        .confirm-icon {
          font-size: 3rem;
          margin-bottom: 8px;
          animation: float 2s ease infinite;
        }

        .confirm-summary {
          background: var(--warm-gray-50);
          border-radius: var(--border-radius-md);
          padding: 20px;
          margin: 24px 0;
          text-align: left;
        }

        .confirm-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid var(--warm-gray-100);
        }

        .confirm-row:last-child {
          border-bottom: none;
        }

        .confirm-label {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .confirm-value {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .confirm-note {
          margin-top: 16px;
        }

        .confirm-note p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin: 6px 0;
        }

        /* Footer */
        .modal-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--border-color);
        }

        .modal-footer button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          pointer-events: none;
        }

        @media (max-width: 600px) {
          .modal-content {
            padding: 20px;
            border-radius: var(--border-radius-lg);
          }

          .step-label {
            display: none;
          }
        }
      `}</style>
        </div>
    );
}
