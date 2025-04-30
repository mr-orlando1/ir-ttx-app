import React, { useState } from 'react';
import VoiceListener from '@/components/VoiceListener';

export default function VoiceExecutionPage() {
  const [score, setScore] = useState('Not set');

  const handleCommand = (cmd) => {
    setScore(cmd === 'R' ? 'Red' : cmd === 'G' ? 'Green' : 'Amber');
  };

  return (
    <div>
      <h1>Voice Execution Mode</h1>
      <VoiceListener onCommand={handleCommand} />
      <p>Current Score: <b>{score}</b></p>
    </div>
  );
}
