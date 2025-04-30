import React, { useEffect, useState } from 'react';

export default function VoiceListener({ onCommand }) {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) return;

    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      setTranscript(finalTranscript);
      if (finalTranscript.includes('score red')) onCommand('R');
      if (finalTranscript.includes('score green')) onCommand('G');
      if (finalTranscript.includes('score amber')) onCommand('A');
    };

    if (listening) recognition.start();
    return () => recognition.stop();
  }, [listening, onCommand]);

  return (
    <div className="voice-listener">
      <button onClick={() => setListening(!listening)}>
        {listening ? 'Stop Listening' : 'Start Voice Input'}
      </button>
      <div className="transcript mt-2">{transcript && `Heard: ${transcript}`}</div>
    </div>
  );
}
