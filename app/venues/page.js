'use client';

import { useState, useMemo } from 'react';
import { venues, cities } from '@/data/venues';
import VenueCard from '@/components/VenueCard';

export default function VenuesPage() {
  const [city, setCity] = useState('');
  const [budget, setBudget] = useState('');
  const [capacity, setCapacity] = useState('');
  const [rating, setRating] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [sort, setSort] = useState('rating');

  const filtered = useMemo(() => {
    let result = [...venues];
    if (city) result = result.filter(v => v.city === city);
    if (vegOnly) result = result.filter(v => v.vegOnly);
    if (budget) {
      const [min, max] = budget.split('-').map(Number);
      result = result.filter(v => {
        const lowest = Math.min(...v.halls.map(h => h.price));
        return lowest >= min && (!max ? true : lowest <= max);
      });
    }
    if (capacity) {
      const needs = parseInt(capacity);
      result = result.filter(v => v.halls.some(h => h.capacity >= needs));
    }
    if (rating) {
      result = result.filter(v => v.rating >= parseFloat(rating));
    }
    switch (sort) {
      case 'price-low': result.sort((a, b) => Math.min(...a.halls.map(h => h.price)) - Math.min(...b.halls.map(h => h.price))); break;
      case 'price-high': result.sort((a, b) => Math.min(...b.halls.map(h => h.price)) - Math.min(...a.halls.map(h => h.price))); break;
      case 'capacity': result.sort((a, b) => Math.max(...b.halls.map(h => h.capacity)) - Math.max(...a.halls.map(h => h.capacity))); break;
      default: result.sort((a, b) => b.rating - a.rating);
    }
    return result;
  }, [city, budget, capacity, rating, vegOnly, sort]);

  return (
    <div className="venues-page">
      <div className="container">
        <div className="venues-header">
          <div>
            <h1>Wedding <span className="gradient-text">Halls</span></h1>
            <p className="venues-count">{filtered.length} halls found</p>
          </div>
          <div className="sort-control">
            <label>Sort by:</label>
            <select className="select" value={sort} onChange={e => setSort(e.target.value)}>
              <option value="rating">Top Rated</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="capacity">Capacity</option>
            </select>
          </div>
        </div>

        <div className="venues-layout">
          <aside className="filters-sidebar">
            <h3 className="filter-title">Filters</h3>
            <div className="filter-group">
              <label className="filter-label">City</label>
              <select className="select" value={city} onChange={e => setCity(e.target.value)}>
                <option value="">All Cities</option>
                {cities.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-label">Budget</label>
              <select className="select" value={budget} onChange={e => setBudget(e.target.value)}>
                <option value="">All Budgets</option>
                <option value="0-75000">Under ₹75K</option>
                <option value="75000-150000">₹75K – ₹1.5L</option>
                <option value="150000-300000">₹1.5L – ₹3L</option>
                <option value="300000-">₹3L+</option>
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-label">Capacity</label>
              <select className="select" value={capacity} onChange={e => setCapacity(e.target.value)}>
                <option value="">Any Size</option>
                <option value="200">200+</option>
                <option value="500">500+</option>
                <option value="800">800+</option>
                <option value="1000">1000+</option>
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-label">Min Rating</label>
              <div className="rating-options">
                {['', '4', '4.3', '4.5', '4.7'].map(r => (
                  <button key={r} className={`rating-btn ${rating === r ? 'active' : ''}`}
                    onClick={() => setRating(r)}>
                    {r ? `${r}+ ★` : 'Any'}
                  </button>
                ))}
              </div>
            </div>
            <label className="veg-toggle">
              <input type="checkbox" checked={vegOnly} onChange={e => setVegOnly(e.target.checked)} />
              <span>🌿 Pure Veg Only</span>
            </label>
          </aside>

          <div className="venues-grid">
            {filtered.length > 0 ? (
              filtered.map((v, i) => <VenueCard key={v.id} venue={v} index={i} />)
            ) : (
              <div className="no-results">
                <span className="nr-icon">🔍</span>
                <h3>No halls found</h3>
                <p>Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .venues-page{padding:28px 0 80px}
        .venues-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:28px}
        .venues-header h1{margin-bottom:4px}
        .venues-count{font-size:0.85rem;color:var(--text-muted)}
        .sort-control{display:flex;align-items:center;gap:8px}
        .sort-control label{font-size:0.82rem;font-weight:500;color:var(--text-muted);white-space:nowrap}
        .sort-control .select{min-width:160px}

        .venues-layout{display:grid;grid-template-columns:240px 1fr;gap:28px;align-items:start}
        .filters-sidebar{background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:20px;position:sticky;top:calc(var(--navbar-height) + 16px)}
        .filter-title{font-size:1rem;margin-bottom:18px}
        .filter-group{margin-bottom:16px}
        .filter-label{display:block;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:.04em;color:var(--text-muted);margin-bottom:6px}
        .rating-options{display:flex;flex-wrap:wrap;gap:5px}
        .rating-btn{padding:5px 11px;border-radius:var(--radius-full);font-size:0.75rem;font-weight:500;background:var(--warm-50);color:var(--text-secondary);border:1px solid var(--border-color);cursor:pointer;transition:all var(--ease-base)}
        .rating-btn:hover{border-color:var(--gold-300)}
        .rating-btn.active{background:var(--maroon);color:#fff;border-color:var(--maroon)}
        .veg-toggle{display:flex;align-items:center;gap:8px;font-size:0.85rem;cursor:pointer;margin-top:12px;padding-top:12px;border-top:1px solid var(--border-color)}

        .venues-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px}
        .no-results{grid-column:1/-1;text-align:center;padding:60px 20px}
        .nr-icon{font-size:3rem;display:block;margin-bottom:10px}
        .no-results h3{margin-bottom:6px}
        .no-results p{font-size:0.85rem}

        @media(max-width:768px){
          .venues-layout{grid-template-columns:1fr}
          .filters-sidebar{position:static}
          .venues-header{flex-direction:column;align-items:flex-start;gap:12px}
        }
      `}</style>
    </div>
  );
}
