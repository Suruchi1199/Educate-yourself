export const SUBJECTS = [
  { id: "physics", name: "Physics", chapters: 12, progress: 64, color: "#e8a33d", blurb: "Forces, motion, energy and gravity — visualized in real time." },
  { id: "chemistry", name: "Chemistry", chapters: 9, progress: 41, color: "#4fd1c5", blurb: "Atoms, bonds and reactions you can rotate and rebuild." },
  { id: "biology", name: "Biology", chapters: 14, progress: 22, color: "#e8615c", blurb: "Explore the human body, cell by cell, chamber by chamber." },
  { id: "mathematics", name: "Mathematics", chapters: 16, progress: 78, color: "#8f7ee8", blurb: "Plot equations and watch the graph animate as you type." },
  { id: "computer-science", name: "Computer Science", chapters: 10, progress: 55, color: "#5ee6d9", blurb: "Step through data structures and algorithms one move at a time." },
  { id: "geography", name: "Geography", chapters: 8, progress: 12, color: "#6fb1e8", blurb: "Spin the globe through day, night, and every climate zone." },
];

export const RECENT_CONCEPTS = [
  { subject: "Physics", title: "Newton's Law of Gravitation", when: "2 hours ago" },
  { subject: "Chemistry", title: "Electron Shells & Ions", when: "Yesterday" },
  { subject: "Mathematics", title: "Plotting y = x²", when: "2 days ago" },
];

export const RECOMMENDED = [
  { subject: "Biology", title: "How the Heart Pumps Blood", reason: "Next in your Biology path" },
  { subject: "Computer Science", title: "Binary Search Trees", reason: "Builds on Linked Lists" },
  { subject: "Geography", title: "Earth's Climate Zones", reason: "Popular this week" },
];

export const BADGES = [
  { id: 1, label: "First Orbit", earned: true },
  { id: 2, label: "Atom Architect", earned: true },
  { id: 3, label: "7-Day Streak", earned: true },
  { id: 4, label: "Quiz Master", earned: false },
  { id: 5, label: "Deep Diver", earned: false },
];

export const CONTINUE_LEARNING = {
  subject: "Physics",
  title: "Gravity & Orbital Motion",
  progress: 64,
};

export const TODAYS_GOAL = { targetMinutes: 30, doneMinutes: 18 };

export const WEEKLY_PROGRESS = [40, 65, 30, 80, 55, 70, 45]; // minutes, Mon–Sun

export const STATS = { xp: 3420, coins: 860, streak: 7 };
