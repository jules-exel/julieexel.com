import { useEffect, useState } from 'react';
import TitleScreen from './components/TitleScreen';
import Hotbar from './components/Hotbar';
import { About, Achievements, Contact, Education, Footer, Quests, Skills } from './components/Sections';

function loadNight() {
  try {
    const v = localStorage.getItem('night');
    if (v !== null) return v === '1';
  } catch {}
  const h = new Date().getHours();
  return h < 6 || h >= 20;
}

export default function App() {
  const [night, setNight] = useState(loadNight);

  useEffect(() => {
    try {
      localStorage.setItem('night', night ? '1' : '0');
    } catch {}
  }, [night]);

  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <TitleScreen night={night} onToggleNight={() => setNight((n) => !n)} />
      <main>
        <About />
        <Skills />
        <Quests />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Hotbar />
    </>
  );
}
