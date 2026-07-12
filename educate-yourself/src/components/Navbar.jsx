import { Search, Flame, Coins, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";
import { STATS } from "../data/mockData.js";
import "../styles/navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={16} />
        <input placeholder="Search concepts, subjects, animations…" />
      </div>

      <div className="topbar-stats">
        <span className="stat-pill"><Flame size={14} /> {STATS.streak}-day streak</span>
        <span className="stat-pill"><Coins size={14} /> {STATS.coins}</span>
      </div>

      <div className="topbar-user">
        <div className="avatar">{(user?.name || "?").slice(0, 1).toUpperCase()}</div>
        <div className="topbar-user-meta">
          <span className="topbar-user-name">{user?.name || "Guest"}</span>
          <span className="topbar-user-email">{user?.email}</span>
        </div>
        <button className="btn ghost" onClick={logout} title="Log out">
          <LogOut size={16} />
        </button>
      </div>
    </header>
  );
}
