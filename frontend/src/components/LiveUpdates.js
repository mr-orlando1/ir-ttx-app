import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

function LiveUpdates() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('risk_update', (data) => {
      setMessages(prev => [...prev, data]);
    });

    return () => {
      socket.off('risk_update');
    };
  }, []);

  return (
    <div>
      <h2 className="comic-heading mb-4">Live Updates 🛰️</h2>
      <div className="comic-bubble h-48 overflow-y-scroll p-4">
        {messages.length === 0 && <p>No updates yet...</p>}
        {messages.map((msg, idx) => (
          <p key={idx}>💬 {msg}</p>
        ))}
      </div>
    </div>
  );
}

export default LiveUpdates;
