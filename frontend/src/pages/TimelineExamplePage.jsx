import React from 'react';
import TimelinePlayback from '@/components/TimelinePlayback';

const sampleInjects = [
  { title: 'Inject 1', score: 'G' },
  { title: 'Inject 2', score: 'A' },
  { title: 'Inject 3', score: 'R' },
  { title: 'Inject 4', score: 'G' },
];

export default function TimelineExamplePage() {
  return (
    <div className="timeline-container">
      <h1>Incident Timeline Playback</h1>
      <TimelinePlayback injects={sampleInjects} />
    </div>
  );
}
