import { useEffect, useRef, useState } from 'react';
import PixelIcon from '../PixelIcon';
import { achievements, education, jobs, profile, skillGroups } from '../data';

function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

function Layer({ id, texture, depth, title, children }) {
  return (
    <section id={id} className={`layer tex-${texture}`}>
      <div className="layer-inner">
        <div className="layer-head">
          <h2 className="section-title">{title}</h2>
          <span className="depth">Y: {depth}</span>
        </div>
        {children}
      </div>
    </section>
  );
}

/* ---------- About ---------- */

function Hearts({ count = 10 }) {
  return (
    <div className="stat-row" aria-label="Health: full">
      {Array.from({ length: count }, (_, i) => (
        <PixelIcon key={i} name="heart" size={20} />
      ))}
    </div>
  );
}

export function About() {
  const [ref, seen] = useInView();
  return (
    <Layer id="about" texture="dirt" depth="64" title="Character">
      <div className="gui panel about-grid" ref={ref}>
        <div className="player-card">
          <div className="avatar">
            <PixelIcon name="head" size={120} title="Pixel avatar" />
          </div>
          <div className="player-name">{profile.fullName}</div>
          <div className="player-class">{profile.title}</div>
          <Hearts />
          <div className="xp">
            <div className="xp-level">{profile.years}+</div>
            <div className="xp-bar">
              <div className="xp-fill" style={{ width: seen ? '88%' : '0%' }} />
            </div>
            <div className="xp-caption">Years of experience</div>
          </div>
          <div className="biomes">
            <div className="label">Biomes explored</div>
            <div className="chips">
              {profile.industries.map((b) => (
                <span className="chip" key={b}>{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="about-text">
          {profile.summary.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </Layer>
  );
}

/* ---------- Skills ---------- */

export function Skills() {
  const [tip, setTip] = useState(null); // {text, sub, x, y}

  const show = (e, text, sub) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTip({ text, sub, x: r.left + r.width / 2, y: r.top });
  };

  return (
    <Layer id="skills" texture="stone" depth="32" title="Inventory">
      <div className="gui panel">
        <p className="gui-caption">Hover or tap an item to inspect it.</p>
        <div className="inventory">
          {skillGroups.map((g) => (
            <div className="inv-group" key={g.name}>
              <div className="inv-group-head">
                <PixelIcon name={g.icon} size={28} />
                <h3>{g.name}</h3>
              </div>
              <ul className="slots">
                {g.items.map((s) => (
                  <li key={s}>
                    <button
                      className="slot"
                      onMouseEnter={(e) => show(e, s, g.name)}
                      onMouseLeave={() => setTip(null)}
                      onFocus={(e) => show(e, s, g.name)}
                      onBlur={() => setTip(null)}
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {tip && (
        <div className="mc-tooltip" style={{ left: tip.x, top: tip.y }} role="tooltip">
          <div className="tip-title">{tip.text}</div>
          <div className="tip-sub">{tip.sub}</div>
        </div>
      )}
    </Layer>
  );
}

/* ---------- Experience ---------- */

function QuestCard({ job, index }) {
  const [ref, seen] = useInView();
  const [open, setOpen] = useState(index < 3);
  const y = 16 - index * 8;
  return (
    <li className={`quest ${seen ? 'in' : ''}`} ref={ref} style={{ '--delay': `${(index % 3) * 60}ms` }}>
      <div className={`ore-block tex-ore-${job.ore}`} aria-hidden="true" />
      <div className="gui quest-card">
        <div className="quest-top">
          <div>
            <h3 className="quest-company">{job.company}</h3>
            <div className="quest-role">{job.role}</div>
          </div>
          <div className="quest-meta">
            <div className="quest-dates">{job.dates}</div>
            <div className="quest-loc">{job.location}</div>
          </div>
        </div>
        {open && (
          <ul className="quest-list">
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        <div className="quest-foot">
          <button className="mc-btn small" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
            {open ? 'Hide loot' : `Show loot (${job.bullets.length})`}
          </button>
          <span className="quest-y">Y: {y}</span>
        </div>
      </div>
    </li>
  );
}

export function Quests() {
  return (
    <Layer id="quests" texture="deepslate" depth="0" title="Quest Log">
      <p className="layer-lede">Every job is a mining expedition. The deeper you dig, the further back in time.</p>
      <ol className="quests">
        {jobs.map((j, i) => (
          <QuestCard key={j.company + j.dates} job={j} index={i} />
        ))}
      </ol>
    </Layer>
  );
}

/* ---------- Achievements ---------- */

export function Achievements() {
  const [ref, seen] = useInView({ threshold: 0.2 });
  return (
    <Layer id="achievements" texture="deepslate" depth="-48" title="Advancements">
      <ul className={`toasts ${seen ? 'in' : ''}`} ref={ref}>
        {achievements.map((a, i) => (
          <li className={`toast ${a.rare ? 'rare' : ''}`} key={a.title} style={{ '--i': i }}>
            <div className="toast-icon">
              <PixelIcon name={a.icon} size={36} />
            </div>
            <div>
              <div className="toast-kicker">{a.rare ? 'Challenge Complete!' : 'Advancement Made!'}</div>
              <div className="toast-title">{a.title}</div>
              <div className="toast-desc">{a.desc}</div>
              {a.link && (
                <a className="toast-link" href={a.link} target="_blank" rel="noreferrer">
                  View credential ↗
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Layer>
  );
}

/* ---------- Education ---------- */

export function Education() {
  return (
    <Layer id="education" texture="obsidian" depth="-56" title="Enchanting Table">
      <div className="books">
        {education.map((e) => (
          <article className="gui book-card" key={e.school}>
            <PixelIcon name="book" size={44} />
            <div>
              <h3>{e.school}</h3>
              <div className="book-program">{e.program}</div>
              <div className="book-dates">{e.dates}</div>
              <p className="book-notes">{e.notes}</p>
            </div>
          </article>
        ))}
        <article className="gui book-card cert">
          <PixelIcon name="pearl" size={44} />
          <div>
            <h3>AWS Certified Solutions Architect</h3>
            <div className="book-program">Associate</div>
            <p className="book-notes">Certification</p>
            <a className="mc-btn small cert-link" href={profile.awsBadge} target="_blank" rel="noreferrer">
              Verify badge ↗
            </a>
          </div>
        </article>
      </div>
    </Layer>
  );
}

/* ---------- Contact ---------- */

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <Layer id="contact" texture="bedrock" depth="-64" title="Join Server">
      <div className="sign-wrap">
        <div className="sign">
          <p className="sign-line">Let's build</p>
          <p className="sign-line">something</p>
          <p className="sign-line">together!</p>
          <p className="sign-line small">— Julie</p>
        </div>
        <div className="sign-post" aria-hidden="true" />
      </div>
      <div className="gui panel server-list">
        <div className="server">
          <PixelIcon name="map" size={40} />
          <div className="server-info">
            <div className="server-name">Email</div>
            <a className="server-addr" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <button className="mc-btn small" onClick={copy}>{copied ? 'Copied!' : 'Copy'}</button>
        </div>
        <div className="server">
          <PixelIcon name="chest" size={40} />
          <div className="server-info">
            <div className="server-name">GitHub</div>
            <a className="server-addr" href={profile.github} target="_blank" rel="noreferrer">github.com/jules-exel</a>
          </div>
          <a className="mc-btn small" href={profile.github} target="_blank" rel="noreferrer">Join</a>
        </div>
        <div className="server">
          <PixelIcon name="head" size={40} />
          <div className="server-info">
            <div className="server-name">LinkedIn</div>
            <a className="server-addr" href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
            </a>
          </div>
          <a className="mc-btn small" href={profile.linkedin} target="_blank" rel="noreferrer">Join</a>
        </div>
      </div>
    </Layer>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <p>You've reached bedrock. Thanks for digging!</p>
      <a className="mc-btn small" href="#top">Back to surface ↑</a>
      <p className="fine">
        © {new Date().getFullYear()} Julie Exel · Not affiliated with Mojang or Microsoft. All pixel art is original.
      </p>
    </footer>
  );
}
