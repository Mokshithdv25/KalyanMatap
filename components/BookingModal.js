'use client';

import { useState } from 'react';
import { formatPriceFull, formatPrice, paymentPlans } from '@/data/venues';

export default function BookingModal({ venue, hall, addOns, guests, isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [guestCount, setGuestCount] = useState(guests || 200);
  const [selectedPlan, setSelectedPlan] = useState(null);

  if (!isOpen || !hall) return null;

  const cateringTotal = addOns.catering
    ? addOns.catering.price * Math.max(guestCount, addOns.catering.minPlates)
    : 0;
  const total = hall.price + (addOns.decor?.price || 0) + cateringTotal + (addOns.photography?.price || 0);
  const discount = selectedPlan?.discount ? total * selectedPlan.discount : 0;
  const finalTotal = total - discount;

  const steps = [
    { num: 1, label: 'Date' },
    { num: 2, label: 'EMI Plan' },
    { num: 3, label: 'Confirm' },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {/* Progress */}
        <div className="modal-progress">
          {steps.map(s => (
            <div key={s.num} className={`step ${step >= s.num ? 'active' : ''} ${step === s.num ? 'current' : ''}`}>
              <div className="step-num">{step > s.num ? '✓' : s.num}</div>
              <span className="step-label">{s.label}</span>
            </div>
          ))}
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {/* Step 1 — Date */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2>Select Your Wedding Date</h2>
              <p className="step-desc">Pick the perfect day for your celebration</p>
              <div className="input-group" style={{ maxWidth: 340, marginTop: 24 }}>
                <label>Wedding Date</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} className="input" />
              </div>
              <div className="input-group" style={{ maxWidth: 340, marginTop: 16 }}>
                <label>Expected Guests</label>
                <input type="number" value={guestCount} onChange={e => setGuestCount(+e.target.value)} className="input" placeholder="e.g. 500" />
              </div>
            </div>
          )}

          {/* Step 2 — Payment Plan */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h2>Choose Payment Plan</h2>
              <p className="step-desc">Pick what works best for your budget</p>
              <div className="plans">
                {paymentPlans.map(plan => (
                  <div key={plan.id} className={`plan-card ${selectedPlan?.id === plan.id ? 'selected' : ''}`}
                    onClick={() => setSelectedPlan(plan)}>
                    <div className="plan-icon">{plan.icon}</div>
                    <div className="plan-info">
                      <h4>{plan.name}</h4>
                      <p>{plan.description}</p>
                      {plan.discount > 0 && <span className="badge badge-success">{plan.discount * 100}% OFF</span>}
                    </div>
                    <div className="plan-amount">
                      {plan.installments === 1
                        ? formatPriceFull(Math.round(total * (1 - plan.discount)))
                        : `${formatPrice(Math.round(total / plan.installments))}/mo`
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 — Confirm */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h2>Booking Summary</h2>
              <p className="step-desc">Review your bundle before confirming</p>
              <div className="confirm-card">
                <div className="confirm-venue">
                  <span className="confirm-icon">🛕</span>
                  <div>
                    <strong>{venue.name}</strong>
                    <p>{hall.name} • {venue.city}</p>
                  </div>
                </div>
                <div className="confirm-details">
                  <div className="cd-row"><span>📅 Date</span><strong>{date ? new Date(date + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' }) : '-'}</strong></div>
                  <div className="cd-row"><span>👥 Guests</span><strong>{guestCount}</strong></div>
                </div>
                <div className="confirm-items">
                  <div className="ci-row"><span>🏛️ {hall.name}</span><span>{formatPriceFull(hall.price)}</span></div>
                  {addOns.decor && <div className="ci-row"><span>🎨 {addOns.decor.name}</span><span>{formatPriceFull(addOns.decor.price)}</span></div>}
                  {addOns.catering && <div className="ci-row"><span>🍽️ {addOns.catering.name}</span><span>{formatPriceFull(cateringTotal)}</span></div>}
                  {addOns.photography && <div className="ci-row"><span>📸 {addOns.photography.name}</span><span>{formatPriceFull(addOns.photography.price)}</span></div>}
                </div>
                {discount > 0 && <div className="ci-row discount"><span>🎉 Full Payment Discount</span><span>-{formatPriceFull(Math.round(discount))}</span></div>}
                <div className="confirm-total">
                  <span>Total</span>
                  <span className="total-big">{formatPriceFull(Math.round(finalTotal))}</span>
                </div>
                {selectedPlan && <div className="plan-badge">{selectedPlan.icon} {selectedPlan.name}</div>}
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="modal-nav">
          {step > 1 && <button className="btn btn-ghost" onClick={() => setStep(step - 1)}>← Back</button>}
          <div style={{ flex: 1 }}></div>
          {step < 3 && (
            <button className="btn btn-primary" onClick={() => setStep(step + 1)}
              disabled={(step === 1 && !date) || (step === 2 && !selectedPlan)}>
              Continue →
            </button>
          )}
          {step === 3 && (
            <button className="btn btn-gold btn-lg" onClick={() => { alert('🎉 Booking Confirmed! We will send you a confirmation shortly.'); onClose(); }}>
              ✨ Confirm Booking
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .modal-overlay{position:fixed;inset:0;z-index:2000;background:rgba(0,0,0,.6);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn .2s ease}
        .modal{background:#fff;border-radius:var(--radius-xl);width:100%;max-width:560px;max-height:90vh;overflow-y:auto;display:flex;flex-direction:column}
        .modal-progress{display:flex;align-items:center;gap:20px;padding:22px 28px;border-bottom:1px solid var(--border-color)}
        .step{display:flex;align-items:center;gap:6px}
        .step-num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.78rem;font-weight:700;background:var(--warm-100);color:var(--warm-400);transition:all var(--ease-base)}
        .step.active .step-num{background:var(--maroon);color:#fff}
        .step-label{font-size:0.8rem;color:var(--text-muted)}
        .step.current .step-label{color:var(--maroon);font-weight:600}
        .modal-close{margin-left:auto;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1rem;background:var(--warm-50);color:var(--text-muted);transition:all var(--ease-base)}
        .modal-close:hover{background:var(--error-light);color:var(--error)}
        .modal-body{padding:28px;flex:1}
        .modal-body h2{font-size:1.3rem;margin-bottom:4px}
        .step-desc{font-size:0.85rem;margin-bottom:0}
        /* Plans */
        .plans{display:flex;flex-direction:column;gap:10px;margin-top:20px}
        .plan-card{display:flex;align-items:center;gap:14px;padding:16px 18px;border:2px solid var(--border-color);border-radius:var(--radius-md);cursor:pointer;transition:all var(--ease-base)}
        .plan-card:hover{border-color:var(--gold-300)}
        .plan-card.selected{border-color:var(--leaf);background:var(--leaf-50)}
        .plan-icon{font-size:1.5rem}
        .plan-info{flex:1}
        .plan-info h4{font-size:0.9rem;font-weight:600;margin-bottom:2px}
        .plan-info p{font-size:0.78rem;color:var(--text-muted);line-height:1.4}
        .plan-amount{font-weight:800;font-size:1rem;color:var(--maroon);white-space:nowrap}
        /* Confirm */
        .confirm-card{background:var(--sand);border-radius:var(--radius-md);padding:20px;margin-top:18px}
        .confirm-venue{display:flex;align-items:center;gap:10px;margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid var(--warm-100)}
        .confirm-icon{font-size:1.8rem}
        .confirm-venue strong{font-size:0.95rem;display:block}
        .confirm-venue p{font-size:0.78rem;color:var(--text-muted);margin:0}
        .confirm-details{display:flex;gap:20px;margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid var(--warm-100)}
        .cd-row{display:flex;flex-direction:column;gap:2px;font-size:0.82rem}
        .cd-row span{color:var(--text-muted);font-size:0.72rem}
        .confirm-items{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}
        .ci-row{display:flex;justify-content:space-between;font-size:0.85rem;color:var(--text-secondary)}
        .ci-row span:last-child{font-weight:600;color:var(--text-primary)}
        .ci-row.discount{color:var(--leaf)}
        .ci-row.discount span:last-child{color:var(--leaf)}
        .confirm-total{display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:2px dashed var(--warm-200)}
        .confirm-total span:first-child{font-size:0.9rem;font-weight:600}
        .total-big{font-family:var(--font-heading);font-size:1.5rem;font-weight:800;color:var(--maroon)}
        .plan-badge{display:inline-flex;align-items:center;gap:6px;margin-top:10px;padding:6px 14px;border-radius:var(--radius-full);background:var(--gold-50);color:var(--gold-900);font-size:0.78rem;font-weight:600}
        /* Nav */
        .modal-nav{display:flex;align-items:center;padding:16px 28px;border-top:1px solid var(--border-color)}
        .modal-nav .btn:disabled{opacity:.4;cursor:not-allowed}
        @media(max-width:480px){.modal{max-width:100%;margin:8px;border-radius:var(--radius-lg)}.modal-body{padding:20px}.modal-nav{padding:12px 20px}}
      `}</style>
    </div>
  );
}
