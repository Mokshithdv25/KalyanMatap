'use client';

import { formatPriceFull } from '@/data/venues';

export default function HallCard({ hall, selected, onSelect }) {
    return (
        <div className={`hall-card ${selected ? 'selected' : ''}`} onClick={() => onSelect(hall)}>
            <div className="hall-img-wrap">
                <img src={hall.image} alt={hall.name} className="hall-img" />
                {selected && <div className="selected-check">✓</div>}
            </div>
            <div className="hall-info">
                <h4 className="hall-name">{hall.name}</h4>
                <div className="hall-meta">
                    <span>👥 {hall.capacity} guests</span>
                    <span>⏱️ {hall.hours}hrs</span>
                    <span className="hall-type">{hall.type}</span>
                </div>
                <div className="hall-price">{formatPriceFull(hall.price)}</div>
            </div>
            <style jsx>{`
        .hall-card{display:flex;gap:14px;padding:14px;border:2px solid var(--border-color);border-radius:var(--radius-md);cursor:pointer;transition:all var(--ease-base);background:var(--bg-card)}
        .hall-card:hover{border-color:var(--gold-300);box-shadow:var(--shadow-md)}
        .hall-card.selected{border-color:var(--maroon);background:var(--maroon-50);box-shadow:0 0 0 3px rgba(139,26,43,0.1)}
        .hall-img-wrap{position:relative;width:120px;height:85px;flex-shrink:0;border-radius:var(--radius-sm);overflow:hidden}
        .hall-img{width:100%;height:100%;object-fit:cover}
        .selected-check{position:absolute;top:6px;right:6px;width:24px;height:24px;border-radius:50%;background:var(--maroon);color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700}
        .hall-info{display:flex;flex-direction:column;justify-content:center;gap:4px;flex:1;min-width:0}
        .hall-name{font-family:var(--font-heading);font-size:0.95rem;font-weight:600}
        .hall-meta{display:flex;gap:10px;font-size:0.75rem;color:var(--text-muted);flex-wrap:wrap}
        .hall-type{background:var(--warm-50);padding:1px 8px;border-radius:var(--radius-full);border:1px solid var(--warm-100)}
        .hall-price{font-size:1.1rem;font-weight:800;color:var(--maroon)}
        @media(max-width:480px){.hall-img-wrap{width:90px;height:70px}}
      `}</style>
        </div>
    );
}
