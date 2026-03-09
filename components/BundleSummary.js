'use client';

import { formatPriceFull, formatPrice, paymentPlans } from '@/data/venues';

export default function BundleSummary({ hall, addOns, guests, onBook }) {
    const cateringTotal = addOns.catering
        ? addOns.catering.price * Math.max(guests || addOns.catering.minPlates, addOns.catering.minPlates)
        : 0;
    const hallPrice = hall?.price || 0;
    const decorPrice = addOns.decor?.price || 0;
    const photoPrice = addOns.photography?.price || 0;
    const total = hallPrice + decorPrice + cateringTotal + photoPrice;

    const items = [
        hall && { label: `🏛️ ${hall.name}`, value: hallPrice },
        addOns.decor && { label: `🎨 ${addOns.decor.name}`, value: decorPrice },
        addOns.catering && { label: `🍽️ ${addOns.catering.name} (${Math.max(guests || addOns.catering.minPlates, addOns.catering.minPlates)} plates)`, value: cateringTotal },
        addOns.photography && { label: `📸 ${addOns.photography.name}`, value: photoPrice },
    ].filter(Boolean);

    return (
        <div className="bundle-summary">
            <h4 className="bundle-title">Your Bundle</h4>

            {items.length === 0 ? (
                <p className="bundle-empty">Select a hall and add services to build your wedding bundle</p>
            ) : (
                <>
                    <div className="bundle-items">
                        {items.map((item, i) => (
                            <div key={i} className="bundle-item">
                                <span className="bundle-item-label">{item.label}</span>
                                <span className="bundle-item-price">{formatPriceFull(item.value)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bundle-total">
                        <span>Total</span>
                        <span className="total-price">{formatPriceFull(total)}</span>
                    </div>

                    <div className="emi-preview">
                        <span className="emi-label">💳 EMI from</span>
                        <span className="emi-value">{formatPrice(Math.round(total / 6))}/month</span>
                    </div>

                    <button className="btn btn-primary btn-lg book-btn" onClick={onBook} disabled={!hall}>
                        🛕 Book Now
                    </button>

                    <div className="trust-items">
                        <span>🔒 Secure payment</span>
                        <span>✅ Instant confirmation</span>
                        <span>💯 No hidden charges</span>
                    </div>
                </>
            )}

            <style jsx>{`
        .bundle-summary{background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:22px;position:sticky;top:calc(var(--navbar-height) + 20px)}
        .bundle-title{font-size:1rem;margin-bottom:14px;display:flex;align-items:center;gap:6px}
        .bundle-empty{font-size:0.85rem;color:var(--text-muted);text-align:center;padding:20px 0;line-height:1.7}
        .bundle-items{display:flex;flex-direction:column;gap:10px;margin-bottom:14px;padding-bottom:14px;border-bottom:2px dashed var(--border-color)}
        .bundle-item{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;font-size:0.85rem}
        .bundle-item-label{color:var(--text-secondary);flex:1}
        .bundle-item-price{font-weight:600;color:var(--text-primary);flex-shrink:0}
        .bundle-total{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
        .bundle-total span:first-child{font-size:0.9rem;font-weight:600;color:var(--text-primary)}
        .total-price{font-family:var(--font-heading);font-size:1.5rem;font-weight:800;color:var(--maroon)}
        .emi-preview{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:var(--leaf-50);border-radius:var(--radius-sm);margin-bottom:16px;font-size:0.82rem}
        .emi-label{color:var(--leaf)}
        .emi-value{font-weight:700;color:var(--leaf)}
        .book-btn{width:100%;margin-bottom:14px}
        .book-btn:disabled{opacity:.5;cursor:not-allowed}
        .trust-items{display:flex;flex-direction:column;gap:5px;font-size:0.75rem;color:var(--text-muted)}
      `}</style>
        </div>
    );
}
