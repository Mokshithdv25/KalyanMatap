'use client';

import { useState } from 'react';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function AvailabilityCalendar({ availability = {}, selectedDate, onSelectDate }) {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const goNext = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const goPrev = () => {
        const now = new Date();
        if (currentYear === now.getFullYear() && currentMonth === now.getMonth()) return;
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const isBeforeToday = (day) => {
        const d = new Date(currentYear, currentMonth, day);
        const t = new Date();
        t.setHours(0, 0, 0, 0);
        return d < t;
    };

    const getDateKey = (day) => {
        const d = new Date(currentYear, currentMonth, day);
        return d.toISOString().split('T')[0];
    };

    const getStatus = (day) => {
        if (isBeforeToday(day)) return 'past';
        const key = getDateKey(day);
        return availability[key] || 'available';
    };

    const handleDayClick = (day) => {
        const status = getStatus(day);
        if (status === 'past' || status === 'booked') return;
        const key = getDateKey(day);
        onSelectDate && onSelectDate(key);
    };

    const days = [];
    for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} className="cal-day empty"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        const status = getStatus(day);
        const dateKey = getDateKey(day);
        const isSelected = selectedDate === dateKey;

        days.push(
            <div
                key={day}
                className={`cal-day ${status} ${isSelected ? 'selected' : ''}`}
                onClick={() => handleDayClick(day)}
            >
                <span className="day-num">{day}</span>
                {status === 'available' && <span className="dot available-dot"></span>}
                {status === 'booked' && <span className="dot booked-dot"></span>}
                {status === 'tentative' && <span className="dot tentative-dot"></span>}
            </div>
        );
    }

    return (
        <div className="calendar">
            <div className="cal-header">
                <button className="cal-nav" onClick={goPrev}>←</button>
                <h4 className="cal-title">{MONTHS[currentMonth]} {currentYear}</h4>
                <button className="cal-nav" onClick={goNext}>→</button>
            </div>

            <div className="cal-weekdays">
                {DAYS.map(d => <div key={d} className="cal-weekday">{d}</div>)}
            </div>

            <div className="cal-grid">
                {days}
            </div>

            <div className="cal-legend">
                <span className="legend-item"><span className="dot available-dot"></span> Available</span>
                <span className="legend-item"><span className="dot tentative-dot"></span> Limited</span>
                <span className="legend-item"><span className="dot booked-dot"></span> Booked</span>
                <span className="legend-item"><span className="dot selected-dot"></span> Selected</span>
            </div>

            <style jsx>{`
        .calendar {
          background: var(--bg-card);
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border-color);
          padding: 24px;
        }

        .cal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .cal-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 600;
        }

        .cal-nav {
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
        }

        .cal-nav:hover {
          background: var(--burgundy);
          color: white;
        }

        .cal-weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
          margin-bottom: 8px;
        }

        .cal-weekday {
          text-align: center;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px;
        }

        .cal-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }

        .cal-day {
          aspect-ratio: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          border-radius: var(--border-radius-sm);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          position: relative;
        }

        .cal-day.empty {
          cursor: default;
        }

        .cal-day.past {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .cal-day.available:hover {
          background: var(--success-light);
        }

        .cal-day.tentative:hover {
          background: var(--warning-light);
        }

        .cal-day.booked {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .cal-day.selected {
          background: var(--gold) !important;
          color: white;
          font-weight: 700;
          box-shadow: 0 0 12px rgba(212, 160, 23, 0.4);
        }

        .cal-day.selected .dot {
          background: white !important;
        }

        .day-num {
          font-weight: 500;
        }

        .dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }

        .available-dot { background: var(--available); }
        .booked-dot { background: var(--booked); }
        .tentative-dot { background: var(--warning); }
        .selected-dot { background: var(--gold); }

        .cal-legend {
          display: flex;
          gap: 16px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border-color);
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
      `}</style>
        </div>
    );
}
