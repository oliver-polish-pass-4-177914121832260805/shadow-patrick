import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css';

const DRINKS = [
  { key: 'coffee', label: '☕ Coffee', color: '#6F4E37', bg: '#faf6f2' },
  { key: 'tea',    label: '🍵 Tea',   color: '#4A7C59', bg: '#f4f8f2' },
];

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function getLast7Days() {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }
  return days;
}

function formatDayLabel(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

function loadData(drinkKey) {
  try {
    return JSON.parse(localStorage.getItem(`drink-${drinkKey}`)) || {};
  } catch {
    return {};
  }
}

function saveData(drinkKey, data) {
  localStorage.setItem(`drink-${drinkKey}`, JSON.stringify(data));
}

function DrinkSection({ drink }) {
  const [data, setData] = useState(() => loadData(drink.key));
  const today = getToday();

  useEffect(() => {
    saveData(drink.key, data);
  }, [data, drink.key]);

  const addCup = () => {
    setData(prev => ({ ...prev, [today]: (prev[today] || 0) + 1 }));
  };

  const todayCups = data[today] || 0;
  const days = getLast7Days();

  const shortLabels = days.map(date => {
    const d = new Date(date + 'T12:00:00');
    return d.toLocaleDateString('en-US', { weekday: 'short' });
  });

  const chartData = days.map((date, i) => ({
    date,
    label: formatDayLabel(date),
    short: shortLabels[i],
    cups: data[date] || 0,
  }));

  const sectionStyle = { '--drink-color': drink.color, '--drink-bg': drink.bg };

  return (
    <section className="drink-section" style={sectionStyle}>
      <div className="today-card">
        <p className="today-label">{drink.label} · Today</p>
        <p className="today-count">{todayCups}</p>
        <p className="today-sub">cup{todayCups !== 1 ? 's' : ''} so far</p>
      </div>

      <button className="add-btn" onClick={addCup}>
        <span className="add-icon">+</span>
        <span className="add-label">Add Cup</span>
      </button>

      <div className="chart-section">
        <h2>Last 7 Days</h2>
        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e8e8" />
              <XAxis dataKey="short" tick={{ fontSize: 13, fill: '#555' }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 13, fill: '#555' }} />
              <Tooltip
                formatter={(value) => [`${value} cup${value !== 1 ? 's' : ''}`, '']}
                labelFormatter={(_, payload) => payload?.[0]?.payload?.label}
              />
              <Bar
                dataKey="cups"
                fill={drink.color}
                radius={[6, 6, 0, 0]}
                maxBarSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>☕🍵 Daily Tracker</h1>
      </header>
      <main className="main">
        {DRINKS.map(drink => (
          <DrinkSection key={drink.key} drink={drink} />
        ))}
      </main>
    </div>
  );
}
