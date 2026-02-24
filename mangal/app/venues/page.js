'use client';

import { useState, useMemo } from 'react';
import VenueCard from '@/components/VenueCard';
import { venues, cities, formatPrice } from '@/data/venues';

const budgetRanges = [
    { label: 'All Budgets', min: 0, max: Infinity },
    { label: 'Under ₹3L', min: 0, max: 300000 },
    { label: '₹3L – ₹5L', min: 300000, max: 500000 },
    { label: '₹5L – ₹8L', min: 500000, max: 800000 },
    { label: '₹8L – ₹12L', min: 800000, max: 1200000 },
    { label: '₹12L+', min: 1200000, max: Infinity },
];

const capacityRanges = [
    { label: 'Any Size', min: 0 },
    { label: '100–300', min: 100 },
    { label: '300–500', min: 300 },
    { label: '500–1000', min: 500 },
    { label: '1000+', min: 1000 },
];

export default function VenuesPage() {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedBudget, setSelectedBudget] = useState(0);
    const [selectedCapacity, setSelectedCapacity] = useState(0);
    const [minRating, setMinRating] = useState(0);
    const [vegOnly, setVegOnly] = useState(false);
    const [sortBy, setSortBy] = useState('rating');
    const [filtersOpen, setFiltersOpen] = useState(false);

    const filtered = useMemo(() => {
        let result = [...venues];

        if (selectedCity) result = result.filter(v => v.city === selectedCity);
        if (selectedBudget > 0) {
            const range = budgetRanges[selectedBudget];
            result = result.filter(v => v.packages[0].price >= range.min && v.packages[0].price < range.max);
        }
        if (selectedCapacity > 0) {
            const range = capacityRanges[selectedCapacity];
            result = result.filter(v => v.capacity.max >= range.min);
        }
        if (minRating > 0) result = result.filter(v => v.rating >= minRating);
        if (vegOnly) result = result.filter(v => v.vegOnly);

        if (sortBy === 'price-low') result.sort((a, b) => a.packages[0].price - b.packages[0].price);
        else if (sortBy === 'price-high') result.sort((a, b) => b.packages[0].price - a.packages[0].price);
        else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
        else if (sortBy === 'capacity') result.sort((a, b) => b.capacity.max - a.capacity.max);

        return result;
    }, [selectedCity, selectedBudget, selectedCapacity, minRating, vegOnly, sortBy]);

    const clearFilters = () => {
        setSelectedCity('');
        setSelectedBudget(0);
        setSelectedCapacity(0);
        setMinRating(0);
        setVegOnly(false);
    };

    const hasFilters = selectedCity || selectedBudget > 0 || selectedCapacity > 0 || minRating > 0 || vegOnly;

    return (
        <div className="venues-page">
            <div className="container">
                {/* Page Header */}
                <div className="page-header">
                    <div>
                        <h1>Wedding <span className="gradient-text">Venues</span></h1>
                        <p>{filtered.length} venues found {selectedCity && `in ${selectedCity}`}</p>
                    </div>
                    <div className="sort-group">
                        <label>Sort by:</label>
                        <select className="select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="rating">Top Rated</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="capacity">Capacity</option>
                        </select>
                    </div>
                </div>

                <button className="filter-toggle btn btn-outline btn-sm" onClick={() => setFiltersOpen(!filtersOpen)}>
                    🔍 {filtersOpen ? 'Hide' : 'Show'} Filters
                </button>

                <div className="venues-layout">
                    {/* Filters Sidebar */}
                    <aside className={`filters-sidebar ${filtersOpen ? 'open' : ''}`}>
                        <div className="filter-header">
                            <h3>Filters</h3>
                            {hasFilters && (
                                <button className="btn btn-ghost btn-sm" onClick={clearFilters}>Clear All</button>
                            )}
                        </div>

                        <div className="filter-group">
                            <label>City</label>
                            <select className="select" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                                <option value="">All Cities</option>
                                {cities.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>

                        <div className="filter-group">
                            <label>Budget (Starting Package)</label>
                            <select className="select" value={selectedBudget} onChange={(e) => setSelectedBudget(Number(e.target.value))}>
                                {budgetRanges.map((r, i) => <option key={i} value={i}>{r.label}</option>)}
                            </select>
                        </div>

                        <div className="filter-group">
                            <label>Capacity</label>
                            <select className="select" value={selectedCapacity} onChange={(e) => setSelectedCapacity(Number(e.target.value))}>
                                {capacityRanges.map((r, i) => <option key={i} value={i}>{r.label}</option>)}
                            </select>
                        </div>

                        <div className="filter-group">
                            <label>Min Rating</label>
                            <div className="rating-btns">
                                {[0, 4, 4.3, 4.5, 4.7].map(r => (
                                    <button
                                        key={r}
                                        className={`rating-btn ${minRating === r ? 'active' : ''}`}
                                        onClick={() => setMinRating(r)}
                                    >
                                        {r === 0 ? 'Any' : `${r}+ ★`}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="filter-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={vegOnly}
                                    onChange={(e) => setVegOnly(e.target.checked)}
                                />
                                <span className="checkbox-custom"></span>
                                🌿 Pure Veg Only
                            </label>
                        </div>
                    </aside>

                    {/* Results Grid */}
                    <div className="results">
                        {filtered.length === 0 ? (
                            <div className="no-results">
                                <div className="no-results-emoji">🏛️</div>
                                <h3>No venues found</h3>
                                <p>Try adjusting your filters to see more results.</p>
                                <button className="btn btn-outline" onClick={clearFilters}>Clear Filters</button>
                            </div>
                        ) : (
                            <div className="results-grid">
                                {filtered.map((venue, i) => (
                                    <VenueCard key={venue.id} venue={venue} index={i} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .venues-page {
          padding: 32px 0 80px;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 24px;
        }

        .page-header h1 {
          margin-bottom: 4px;
        }

        .page-header p {
          font-size: 0.9rem;
        }

        .sort-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sort-group label {
          font-size: 0.85rem;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .sort-group .select {
          min-width: 180px;
        }

        .filter-toggle {
          display: none;
          margin-bottom: 16px;
        }

        .venues-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 32px;
          align-items: start;
        }

        /* Filters */
        .filters-sidebar {
          background: var(--bg-card);
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border-color);
          padding: 24px;
          position: sticky;
          top: calc(var(--navbar-height) + 20px);
        }

        .filter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .filter-header h3 {
          font-size: 1.1rem;
        }

        .filter-group {
          margin-bottom: 20px;
        }

        .filter-group > label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .filter-group .select {
          width: 100%;
        }

        .rating-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .rating-btn {
          padding: 6px 12px;
          border-radius: var(--border-radius-full);
          font-size: 0.78rem;
          font-weight: 500;
          background: var(--warm-gray-50);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          transition: all var(--transition-base);
        }

        .rating-btn:hover {
          border-color: var(--gold-300);
        }

        .rating-btn.active {
          background: var(--burgundy);
          color: white;
          border-color: var(--burgundy);
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500 !important;
          text-transform: none !important;
          letter-spacing: 0 !important;
        }

        .checkbox-label input {
          width: 18px;
          height: 18px;
          accent-color: var(--burgundy);
        }

        /* Results */
        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        .no-results {
          text-align: center;
          padding: 80px 24px;
        }

        .no-results-emoji {
          font-size: 3rem;
          margin-bottom: 16px;
          opacity: 0.5;
        }

        .no-results h3 {
          margin-bottom: 8px;
        }

        .no-results p {
          margin-bottom: 20px;
        }

        @media (max-width: 900px) {
          .venues-layout {
            grid-template-columns: 1fr;
          }

          .filter-toggle {
            display: inline-flex;
          }

          .filters-sidebar {
            display: none;
            position: static;
          }

          .filters-sidebar.open {
            display: block;
          }

          .page-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .results-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
}
