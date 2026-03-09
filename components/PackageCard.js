'use client';

import { formatPriceExact } from '@/data/venues';

export default function PackageCard({ pkg, selected, onSelect }) {
  const tierColors = {
    Silver: { bg: 'linear-gradient(135deg, #e8e8e8, #c0c0c0)', text: '#555', badge: '#888' },
    Gold: { bg: 'linear-gradient(135deg, var(--gold-100), var(--gold-300))', text: 'var(--gold-900)', badge: 'var(--gold)' },
    Platinum: { bg: 'linear-gradient(135deg, #e8e0f0, #c4b5d4)', text: '#4a3560', badge: '#7c5bad' },
  };

  const colors = tierColors[pkg.tier] || tierColors.Silver;

  return (
    <div className={`package-card ${selected ? 'selected' : ''}`} onClick={() => onSelect(pkg)}>
      <div className="package-header" style={{ background: colors.bg }}>
        <span className="package-tier" style={{ color: colors.text }}>{pkg.tier}</span>
        <span className="package-price">{formatPriceExact(pkg.price)}</span>
      </div>

      <div className="package-body">
        <div className="service-section">
          <div className="service-icon">🏛️</div>
          <div className="service-details">
            <h4>Hall</h4>
            <p>{pkg.hall.name} • Up to {pkg.hall.capacity} guests • {pkg.hall.hours}hrs</p>
          </div>
        </div>

        <div className="service-section">
          <div className="service-icon">🎨</div>
          <div className="service-details">
            <h4>Decor — {pkg.decor.theme}</h4>
            <ul className="includes-list">
              {pkg.decor.includes.slice(0, 4).map((item, i) => (
                <li key={i}>✓ {item}</li>
              ))}
              {pkg.decor.includes.length > 4 && (
                <li className="more">+{pkg.decor.includes.length - 4} more included</li>
              )}
            </ul>
          </div>
        </div>

        <div className="service-section">
          <div className="service-icon">🍽️</div>
          <div className="service-details">
            <h4>Catering — {pkg.catering.type}</h4>
            <p>{formatPriceExact(pkg.catering.perPlate)}/plate • Min {pkg.catering.minPlates} plates</p>
            <ul className="includes-list">
              {pkg.catering.menu.slice(0, 3).map((item, i) => (
                <li key={i}>✓ {item}</li>
              ))}
              {pkg.catering.menu.length > 3 && (
                <li className="more">+{pkg.catering.menu.length - 3} more items</li>
              )}
            </ul>
          </div>
        </div>

        <div className="service-section">
          <div className="service-icon">📸</div>
          <div className="service-details">
            <h4>Photography — {pkg.photography.team}</h4>
            <p>{pkg.photography.deliverables}</p>
            <ul className="includes-list">
              {pkg.photography.includes.slice(0, 3).map((item, i) => (
                <li key={i}>✓ {item}</li>
              ))}
              {pkg.photography.includes.length > 3 && (
                <li className="more">+{pkg.photography.includes.length - 3} more</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="package-footer">
        <button className={`btn ${selected ? 'btn-primary' : 'btn-outline'} btn-sm`} style={{ width: '100%' }}>
          {selected ? '✓ Selected' : 'Select This Package'}
        </button>
      </div>

      <style jsx>{`
        .package-card {
          background: var(--bg-card);
          border-radius: var(--border-radius-lg);
          border: 2px solid var(--border-color);
          overflow: hidden;
          transition: all var(--transition-slow);
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .package-card:hover {
          border-color: var(--gold-300);
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }

        .package-card.selected {
          border-color: var(--burgundy);
          box-shadow: 0 0 0 3px rgba(198, 38, 56, 0.15), var(--shadow-lg);
        }

        .package-header {
          padding: 20px 24px;
          text-align: center;
        }

        .package-tier {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 4px;
        }

        .package-price {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .package-body {
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        }

        .service-section {
          display: flex;
          gap: 12px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--warm-gray-50);
        }

        .service-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .service-icon {
          font-size: 1.3rem;
          flex-shrink: 0;
          width: 32px;
          text-align: center;
        }

        .service-details h4 {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .service-details p {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .includes-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .includes-list li {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .includes-list .more {
          color: var(--burgundy);
          font-weight: 500;
        }

        .package-footer {
          padding: 16px 24px 20px;
        }
      `}</style>
    </div>
  );
}
