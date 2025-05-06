import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TimelinePlayback({ injects }) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (playing && current < injects.length) {
      interval = setInterval(() => {
        setCurrent((prev) => prev + 1);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [playing, current, injects.length]);

  const reset = () => {
    setPlaying(false);
    setCurrent(0);
  };

  return (
    <div className="timeline-playback">
      <div className="controls mb-2">
        <button onClick={() => setPlaying(!playing)}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="timeline-bar">
        {injects.map((inj, i) => (
          <motion.div
            key={i}
            className={`inject-step ${i <= current ? 'active' : ''}`}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: i <= current ? 1 : 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="step-label">
              <b>{inj.title}</b>
              <div>Score: {inj.score}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
