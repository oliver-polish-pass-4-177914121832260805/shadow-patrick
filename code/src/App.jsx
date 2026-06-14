import { useState, useEffect, useRef } from 'react';
import './App.css';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function loadHabits() {
  try {
    return JSON.parse(localStorage.getItem('habits')) || [];
  } catch {
    return [];
  }
}

function saveHabits(habits) {
  localStorage.setItem('habits', JSON.stringify(habits));
}

function getWeekKey() {
  const d = new Date();
  const day = d.getDay();
  // Monday = start of week
  const monday = new Date(d);
  monday.setDate(d.getDate() - ((day + 6) % 7));
  return monday.toISOString().slice(0, 10);
}

export default function App() {
  const [habits, setHabits] = useState(loadHabits);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    saveHabits(habits);
  }, [habits]);

  // Reset checkboxes when the week changes
  const weekKey = getWeekKey();
  const [lastWeekKey, setLastWeekKey] = useState(() => weekKey);

  useEffect(() => {
    if (weekKey !== lastWeekKey) {
      setLastWeekKey(weekKey);
      setHabits(prev => prev.map(h => ({ ...h, checked: Array(7).fill(false) })));
    }
  }, [weekKey, lastWeekKey]);

  const addHabit = () => {
    const name = input.trim();
    if (!name) return;
    if (habits.some(h => h.name.toLowerCase() === name.toLowerCase())) {
      setInput('');
      return;
    }
    setHabits(prev => [...prev, { id: Date.now(), name, checked: Array(7).fill(false) }]);
    setInput('');
    inputRef.current?.focus();
  };

  const toggleDay = (habitId, dayIdx) => {
    setHabits(prev =>
      prev.map(h => {
        if (h.id !== habitId) return h;
        const next = [...h.checked];
        next[dayIdx] = !next[dayIdx];
        return { ...h, checked: next };
      })
    );
  };

  const removeHabit = (habitId) => {
    setHabits(prev => prev.filter(h => h.id !== habitId));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Habit Tracker</h1>
      </header>

      <form
        className="add-form"
        onSubmit={e => {
          e.preventDefault();
          addHabit();
        }}
      >
        <input
          ref={inputRef}
          className="add-input"
          type="text"
          placeholder="Add a habit…"
          value={input}
          onChange={e => setInput(e.target.value)}
          maxLength={60}
        />
        <button className="add-btn" type="submit" disabled={!input.trim()}>
          +
        </button>
      </form>

      {habits.length === 0 && (
        <p className="empty-hint">Start by adding a habit above.</p>
      )}

      <div className="habit-list">
        {habits.map(habit => (
          <div key={habit.id} className="habit-row">
            <div className="habit-name-wrap">
              <span className="habit-name">{habit.name}</span>
              <button
                className="habit-remove"
                onClick={() => removeHabit(habit.id)}
                title="Remove"
              >
                ×
              </button>
            </div>
            <div className="habit-checks">
              {DAYS.map((day, idx) => (
                <label key={idx} className="check-label">
                  <input
                    type="checkbox"
                    checked={habit.checked[idx]}
                    onChange={() => toggleDay(habit.id, idx)}
                  />
                  <span className="check-box" />
                  <span className="check-day">{day}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}