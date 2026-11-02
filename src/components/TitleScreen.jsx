import { useEffect, useState } from 'react';
import { profile, splashes } from '../data';

const MENU = [
  { label: 'Singleplayer', sub: 'About me', href: '#about' },
  { label: 'Inventory', sub: 'Skills', href: '#skills' },
  { label: 'Quest Log', sub: 'Experience', href: '#quests' },
  { label: 'Multiplayer', sub: 'Contact', href: '#contact' },
];

const GROUND_COLS = 48;

export default function TitleScreen({ night, onToggleNight }) {
  const [splash, setSplash] = useState(() => splashes[Math.floor(Math.random() * splashes.length)]);
  const [cracks, setCracks] = useState({}); // col -> damage 1..3
  const [mined, setMined] = useState(0);

  const nextSplash = () => {
    let s = splash;
    while (s === splash) s = splashes[Math.floor(Math.random() * splashes.length)];
    setSplash(s);
  };

  // Mined blocks grow back after a moment.
  useEffect(() => {
    const broken = Object.entries(cracks).filter(([, d]) => d >= 4);
    if (!broken.length) return;
    const t = setTimeout(() => {
      setCracks((c) => {
        const n = { ...c };
        broken.forEach(([k]) => delete n[k]);
        return n;
      });
    }, 2500);
    return () => clearTimeout(t);
  }, [cracks]);

  const hit = (i) => {
    const d = (cracks[i] || 0) + 1;
    if (d > 4) return;
    if (d === 4) setMined((m) => m + 1);
    setCracks((c) => ({ ...c, [i]: d }));
  };

  return (
    <header className={`title-screen ${night ? 'is-night' : ''}`} id="top">
      <div className="sky" aria-hidden="true">
        {night && <div className="stars" />}
        <div className={night ? 'moon' : 'sun'} />
        <div className="cloud c1" />
        <div className="cloud c2" />
        <div className="cloud c3" />
      </div>

      <button
        className="mc-btn small day-toggle"
        onClick={onToggleNight}
        aria-label={night ? 'Switch to day' : 'Switch to night'}
      >
        {night ? '☀ Day' : '☾ Night'}
      </button>

      <div className="title-wrap">
        <h1 className="logo">
          <span className="logo-line">{profile.name.split(' ')[0].toUpperCase()}</span>
          <span className="logo-line">{profile.name.split(' ')[1].toUpperCase()}</span>
        </h1>
        <button className="splash" onClick={nextSplash} title="Click for another">
          {splash}
        </button>
        <p className="edition">{profile.title} Edition</p>

        <nav className="menu" aria-label="Main menu">
          {MENU.map((m) => (
            <a key={m.href} className="mc-btn" href={m.href}>
              {m.label}
              <span className="btn-sub">{m.sub}</span>
            </a>
          ))}
          <div className="menu-row">
            <a className="mc-btn half" href="#achievements">Achievements</a>
            <a className="mc-btn half" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </nav>
      </div>

      <div className="ground" aria-label="Grass blocks. Click to mine them.">
        {Array.from({ length: GROUND_COLS }, (_, i) => {
          const d = cracks[i] || 0;
          return (
            <button
              key={i}
              className={`block grass ${d >= 4 ? 'mined' : ''}`}
              data-crack={Math.min(d, 3)}
              onClick={() => hit(i)}
              tabIndex={-1}
              aria-hidden="true"
            />
          );
        })}
      </div>
      {mined > 0 && <div className="mined-count">Blocks mined: {mined}</div>}
      <div className="version">julieexel.com · v18.0</div>
    </header>
  );
}
