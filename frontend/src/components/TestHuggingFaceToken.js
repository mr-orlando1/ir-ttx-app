
import React, { useState } from 'react';

function TestHuggingFaceToken() {
  const [status, setStatus] = useState(null);

  const testToken = async () => {
    try {
      const res = await fetch('/api/injects/test-huggingface');
      const data = await res.json();
      if (res.ok) {
        setStatus('✅ Connected to Hugging Face (phi-2)');
      } else {
        setStatus('❌ Failed to connect: ' + data.error);
      }
    } catch (err) {
      setStatus('❌ Request failed.');
    }
  };

  return (
    <div className="my-4">
      <button onClick={testToken} className="comic-button">
        🔍 Test Hugging Face Connection
      </button>
      {status && <p className="mt-2 font-mono">{status}</p>}
    </div>
  );
}

export default TestHuggingFaceToken;
