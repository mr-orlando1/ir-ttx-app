import React, { useState } from 'react';
import { Button, Textarea } from '@/components/ui/card';

export default function CAPCopilot({ injectText, systemType, onUpdate }) {
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState('');

  const getAISuggestion = async () => {
    setLoading(true);
    const res = await fetch('/api/ai/copilot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ injectText, systemType })
    });
    const data = await res.json();
    setSuggestion(data.remediation || '');
    setLoading(false);
  };

  return (
    <div className="cap-copilot">
      <Button disabled={loading} onClick={getAISuggestion}>
        {loading ? 'Thinking...' : 'Auto-Suggest Remediation'}
      </Button>
      {suggestion && (
        <>
          <Textarea
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            className="mt-2"
          />
          <Button className="mt-1" onClick={() => onUpdate(suggestion)}>
            Accept Suggestion
          </Button>
        </>
      )}
    </div>
  );
}
