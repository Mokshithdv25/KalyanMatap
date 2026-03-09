'use client';

import { useState } from 'react';
import { formatPriceFull } from '@/data/venues';

export default function AddOnSelector({ addOns, selected, onSelect }) {
    const [activeTab, setActiveTab] = useState('decor');
    const tabs = [
        { key: 'decor', label: '🎨 Decor', options: addOns.decor },
        { key: 'catering', label: '🍽️ Catering', options: addOns.catering },
        { key: 'photography', label: '📸 Photography', options: addOns.photography },
    ];

    return (
        <div className="addon-selector">
            <h3 className="addon-title">Add Services</h3>
            <p className="addon-desc">Pick your preferred vendors — mix and match to build your bundle</p>

            <div className="addon-tabs">
                {tabs.map(tab => (
                    <button key={tab.key} className={`addon-tab ${activeTab === tab.key ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.key)}>
                        {tab.label}
                        {selected[tab.key] && <span className="tab-check">✓</span>}
                    </button>
                ))}
            </div>

            <div className="addon-options animate-fade-in">
                {tabs.find(t => t.key === activeTab).options.map(option => {
                    const isSelected = selected[activeTab]?.id === option.id;
                    const isCatering = activeTab === 'catering';

                    return (
                        <div key={option.id} className={`addon-option ${isSelected ? 'selected' : ''}`}
                            onClick={() => onSelect(activeTab, isSelected ? null : option)}>
                            <div className="addon-option-top">
                                <div className="addon-option-info">
                                    <h4 className="addon-option-name">{option.name}</h4>
                                    <p className="addon-option-desc">{option.description || (isCatering ? (option.type + ' • Min ' + option.minPlates + ' plates') : (option.team || ''))}</p>
                                </div>
                                <div className="addon-option-price">
                                    <span className="price-val">
                                        {isCatering
                                            ? `${formatPriceFull(option.price)}/plate`
                                            : formatPriceFull(option.price)
                                        }
                                    </span>
                                    {isSelected
                                        ? <span className="select-btn remove">Remove</span>
                                        : <span className="select-btn add">+ Add</span>
                                    }
                                </div>
                            </div>
                            <div className="addon-includes">
                                {(option.includes || option.highlights || []).map((item, i) => (
                                    <span key={i} className="include-item">✓ {item}</span>
                                ))}
                            </div>
                            {isCatering && option.type && (
                                <span className={`food-type ${option.type === 'Pure Veg' ? 'veg' : ''}`}>{option.type === 'Pure Veg' ? '🌿' : '🍗'} {option.type}</span>
                            )}
                            {activeTab === 'photography' && option.team && (
                                <div className="photo-meta">
                                    <span>📷 {option.team}</span>
                                    <span>📤 {option.deliverables}</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <style jsx>{`
        .addon-selector{margin-bottom:24px}
        .addon-title{font-size:1.3rem;margin-bottom:4px}
        .addon-desc{font-size:0.85rem;color:var(--text-muted);margin-bottom:18px}
        .addon-tabs{display:flex;gap:4px;background:var(--warm-50);padding:4px;border-radius:var(--radius-md);margin-bottom:18px}
        .addon-tab{flex:1;padding:10px 14px;border:none;background:transparent;border-radius:var(--radius-sm);font-size:0.85rem;font-weight:500;cursor:pointer;color:var(--text-secondary);transition:all var(--ease-base);display:flex;align-items:center;justify-content:center;gap:6px}
        .addon-tab.active{background:#fff;color:var(--maroon);box-shadow:var(--shadow-sm);font-weight:600}
        .addon-tab:hover:not(.active){color:var(--maroon)}
        .tab-check{background:var(--leaf);color:#fff;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.6rem;font-weight:700}
        .addon-options{display:flex;flex-direction:column;gap:10px}
        .addon-option{padding:16px 18px;border:2px solid var(--border-color);border-radius:var(--radius-md);cursor:pointer;transition:all var(--ease-base);background:var(--bg-card)}
        .addon-option:hover{border-color:var(--gold-300);box-shadow:var(--shadow-sm)}
        .addon-option.selected{border-color:var(--leaf);background:var(--leaf-50)}
        .addon-option-top{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}
        .addon-option-name{font-size:0.95rem;font-weight:600;margin-bottom:2px}
        .addon-option-desc{font-size:0.78rem;color:var(--text-muted);line-height:1.5}
        .addon-option-price{text-align:right;flex-shrink:0}
        .price-val{display:block;font-size:1rem;font-weight:800;color:var(--maroon);margin-bottom:4px}
        .select-btn{display:inline-block;padding:4px 14px;border-radius:var(--radius-full);font-size:0.72rem;font-weight:600;transition:all var(--ease-base)}
        .select-btn.add{background:var(--maroon-50);color:var(--maroon)}
        .select-btn.remove{background:var(--error-light);color:var(--error)}
        .addon-includes{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
        .include-item{font-size:0.72rem;color:var(--text-muted);background:var(--warm-50);padding:2px 10px;border-radius:var(--radius-full)}
        .addon-option.selected .include-item{background:rgba(45,106,79,0.08);color:var(--leaf)}
        .food-type{font-size:0.72rem;display:inline-block;margin-top:8px;padding:2px 10px;border-radius:var(--radius-full);background:var(--warm-50);color:var(--text-muted)}
        .food-type.veg{background:var(--leaf-50);color:var(--leaf)}
        .photo-meta{display:flex;gap:14px;margin-top:8px;font-size:0.72rem;color:var(--text-muted)}
        @media(max-width:480px){.addon-option-top{flex-direction:column;gap:8px}.addon-option-price{text-align:left}}
      `}</style>
        </div>
    );
}
