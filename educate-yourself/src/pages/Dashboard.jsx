import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import {
  RECENT_CONCEPTS, RECOMMENDED, BADGES, CONTINUE_LEARNING,
  TODAYS_GOAL, WEEKLY_PROGRESS, STATS
} from "../data/mockData.js";
import "../styles/dashboard.css";
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function GoalRing({ done, target }) {
  const pct = Math.min(done / target, 1);
  const r = 34, c = 2 * Math.PI * r;
  return (
    <div className="goal-ring-wrap">
      <svg width="84" height="84">
        <circle cx="42" cy="42" r={r} stroke="#253352" strokeWidth="7" fill="none" />
        <circle
          cx="42" cy="42" r={r} stroke="#e8a33d" strokeWidth="7" fill="none"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct)} strokeLinecap="round"
        />
      </svg>
      <div className="goal-ring-label">{Math.round(pct * 100)}%</div>
    </div>
  );
}

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const maxWeek = Math.max(...WEEKLY_PROGRESS);

  const handleGraphPlotting = () => {
    navigate("/graphplotting");
  };

  return (
    <div>
      <p className="eyebrow">Dashboard</p>
      <h1 className="page-title">Welcome back{user?.name ? `, ${user.name}` : ""}.</h1>
      <p className="page-sub">Here's where you left off, and what's worth exploring next.</p>

      <div className="dash-grid">
        <div className="dash-col">
          {/* Continue Learning */}
          <div className="continue-card">
            <div className="continue-orb" />
            <span className="badge">{CONTINUE_LEARNING.subject}</span>
            <h3>{CONTINUE_LEARNING.title}</h3>
            <p>Pick up the simulation right where you left the orbit.</p>
            <div className="continue-progress-row">
              <div className="bar"><div className="bar-fill" style={{ width: `${CONTINUE_LEARNING.progress}%` }} /></div>
              <span>{CONTINUE_LEARNING.progress}%</span>
            </div>
            <button className="btn primary">Continue learning</button>
          </div>

          {/* Mathematics Visualization Options */}
          <div className="card">
            <p className="section-title">Mathematics Visualization</p>
            <div className="visualization-options">
              <div className="viz-option">
                <h4>Graph Plotting</h4>
                <p>Visualize linear and quadratic functions</p>
                <button className="btn secondary" onClick={handleGraphPlotting}>
                  Open Graph Plotter
                </button>
              </div>
            </div>
          </div>

          {/* Recent Concepts */}
          <div className="card list-card">
            <p className="section-title">Recent concepts</p>
            <ul>
              {RECENT_CONCEPTS.map((c, i) => (
                <li className="list-row" key={i}>
                  <div className="list-row-main">
                    <span className="list-row-title">{c.title}</span>
                    <span className="list-row-sub">{c.subject} · {c.when}</span>
                  </div>
                  <span className="list-row-tag">Resume</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended */}
          <div className="card">
            <p className="section-title">Recommended for you</p>
            <div className="recommend-grid">
              {RECOMMENDED.map((r, i) => (
                <div className="recommend-card" key={i}>
                  <span className="list-row-tag">{r.subject}</span>
                  <h4>{r.title}</h4>
                  <p>{r.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dash-col">
          {/* XP / coins / streak */}
          <div className="card">
            <p className="section-title">Your stats</p>
            <div className="stat-row">
              <div className="stat-box"><div className="val">{STATS.xp}</div><div className="lbl">XP</div></div>
              <div className="stat-box"><div className="val">{STATS.coins}</div><div className="lbl">Coins</div></div>
              <div className="stat-box"><div className="val">{STATS.streak}</div><div className="lbl">Streak</div></div>
            </div>
          </div>

          {/* Today's goal */}
          <div className="card goal-card">
            <GoalRing done={TODAYS_GOAL.doneMinutes} target={TODAYS_GOAL.targetMinutes} />
            <div className="goal-meta">
              <p className="section-title" style={{ marginBottom: 2 }}>Today's goal</p>
              <p>{TODAYS_GOAL.doneMinutes} / {TODAYS_GOAL.targetMinutes} minutes learned</p>
            </div>
          </div>

          {/* Weekly progress (pure CSS bar chart) */}
          <div className="card">
            <p className="section-title">This week</p>
            <div className="week-bars">
              {WEEKLY_PROGRESS.map((m, i) => (
                <div className="week-bar" key={i}>
                  <div className="fill" style={{ height: `${(m / maxWeek) * 100}%` }} />
                  <span className="day">{DAYS[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="card">
            <p className="section-title">Badges</p>
            <div className="badge-row">
              {BADGES.map((b) => (
                <div className={"badge-chip" + (b.earned ? " earned" : "")} key={b.id}>
                  <div className="ring">🏅</div>
                  <span className="label">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
