import { useEffect, useState } from 'react';
import PixelIcon from '../PixelIcon';

export const SLOTS = [
  { id: 'about', label: 'About', icon: 'head' },
  { id: 'skills', label: 'Skills', icon: 'chest' },
  { id: 'quests', label: 'Experience', icon: 'pickaxe' },
  { id: 'achievements', label: 'Achievements', icon: 'shield' },
  { id: 'education', label: 'Education', icon: 'book' },
  { id: 'contact', label: 'Contact', icon: 'sign' },
];

export default function Hotbar() {
  const [active, setActive] = useState(null);
  const [visible, setVisible] = useState(false);
  const [flash, setFlash] = useState(null);

  useEffect(() => {
    const els = SLOTS.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));

    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.6;
      setVisible(past);
      if (!past) setActive(null);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Number keys 1-6 jump to a slot, like a real hotbar.
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest('input, textarea') || e.metaKey || e.ctrlKey || e.altKey) return;
      const n = Number(e.key);
      if (n >= 1 && n <= SLOTS.length) go(SLOTS[n - 1].id);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setFlash(id);
    setTimeout(() => setFlash(null), 1400);
  };

  const label = SLOTS.find((s) => s.id === (flash || active))?.label;

  return (
    <nav className={`hotbar-wrap ${visible ? 'show' : ''}`} aria-label="Section navigation">
      <div className={`hotbar-label ${label ? 'on' : ''}`}>{label}</div>
      <div className="hotbar">
        {SLOTS.map((s, i) => (
          <button
            key={s.id}
            className={`hotbar-slot ${active === s.id ? 'selected' : ''}`}
            onClick={() => go(s.id)}
            aria-label={`${i + 1}: ${s.label}`}
            aria-current={active === s.id ? 'true' : undefined}
          >
            <PixelIcon name={s.icon} size={30} />
            <span className="slot-num">{i + 1}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
