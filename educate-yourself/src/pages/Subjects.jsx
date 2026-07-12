import { Atom, Orbit, HeartPulse, Sigma, Binary, Globe2 } from "lucide-react";
import { SUBJECTS } from "../data/mockData.js";
import "../styles/subjects.css";

const ICONS = {
  physics: Orbit,
  chemistry: Atom,
  biology: HeartPulse,
  mathematics: Sigma,
  "computer-science": Binary,
  geography: Globe2,
};

export default function Subjects() {
  return (
    <div>
      <p className="eyebrow">Explore</p>
      <h1 className="page-title">Subjects</h1>
      <p className="page-sub">Six subjects, each built from chapters full of things you can touch.</p>

      <div className="subject-grid">
        {SUBJECTS.map((s) => {
          const Icon = ICONS[s.id];
          return (
            <div className="subject-card" key={s.id} style={{ "--subject-color": s.color }}>
              <div className="subject-card-glow" />
              <div className="subject-card-icon"><Icon size={20} /></div>
              <h3>{s.name}</h3>
              <p>{s.blurb}</p>
              <div className="subject-card-footer">
                <div className="bar"><div className="bar-fill" style={{ width: `${s.progress}%` }} /></div>
                <span>{s.chapters} chapters</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
