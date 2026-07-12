import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, MessageCircleQuestion, ListChecks,
  StickyNote, Trophy, Settings, Rocket
} from "lucide-react";
import "../styles/navbar.css";

const LINKS = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/subjects", label: "Subjects", icon: BookOpen },
  { to: "/ai-tutor", label: "AI Tutor", icon: MessageCircleQuestion, soon: true },
  { to: "/quizzes", label: "Quizzes", icon: ListChecks, soon: true },
  { to: "/notes", label: "Notes", icon: StickyNote, soon: true },
  { to: "/leaderboard", label: "Leaderboard", icon: Trophy, soon: true },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-mark"><Rocket size={16} /></div>
        <span>EduVision</span>
      </div>

      <nav className="sidebar-nav">
        {LINKS.map(({ to, label, icon: Icon, soon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "") + (soon ? " disabled" : "")}
            onClick={(e) => soon && e.preventDefault()}
          >
            <Icon size={17} />
            <span>{label}</span>
            {soon && <span className="badge soon" style={{ marginLeft: "auto" }}>soon</span>}
          </NavLink>
        ))}
      </nav>

      <NavLink to="/profile" className={({ isActive }) => "sidebar-link sidebar-settings" + (isActive ? " active" : "")}>
        <Settings size={17} />
        <span>Profile & Settings</span>
      </NavLink>
    </aside>
  );
}
