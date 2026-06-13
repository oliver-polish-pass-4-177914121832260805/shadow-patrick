import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css';

const STORAGE_KEY = 'coffee-tracker-data';

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

function loadData() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export default function App() {
  const [data, setData] = useState(loadData);
  const today = getToday();

  useEffect(() => {
    saveData(data);
  }, [data]);

  const addCup = () => {
    setData(prev => ({ ...prev, [today]: (prev[today] || 0) + 1 }));
  };

  const todayCups = data[today] || 0;
  const days = getLast7Days();
  const chartData = days.map(date => ({
    date,
    label: formatDayLabel(date),
    cups: data[date] || 0,
  }));

  // Find the shortest weekday name for all 7 days to keep labels consistent
  const shortLabels = days.map(date => {
    const d = new Date(date + 'T12:00:00');
    return d.toLocaleDateString('en-US', { weekday: 'short' });
  });

  const chartWithShort = chartData.map((d, i) => ({ ...d, short: shortLabels[i] }));

  return (
    <div className="app">
      <header className="header">
        <h1>☕ Coffee Tracker</h1>
      </header>

      <main className="main">
        <div className="today-card">
          <p className="today-label">Today</p>
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
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={chartWithShort}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e8e8e8" />
                <XAxis dataKey="short" tick={{ fontSize: 13, fill: '#555' }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 13, fill: '#555' }} />
                <Tooltip
                  formatter={(value) => [`${value} cup${value !== 1 ? 's' : ''}`, '']}
                  labelFormatter={(_, payload) => payload?.[0]?.payload?.label}
                />
                <Bar
                  dataKey="cups"
                  fill="#6F4E37"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={50}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
