
import React, { useState } from 'react';
import InjectCard from '../components/InjectCard';

const ScenarioBuilder = () => {
  const [injects, setInjects] = useState([]);
  const [provider, setProvider] = useState('openai');
  const [promptType, setPromptType] = useState('standard');

  const suggestInject = async () => {
    const res = await fetch('/api/injects/suggest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        scenario: 'Phishing',
        phase: 'Containment',
        provider,
        prompt_type: promptType
      })
    });
    const data = await res.json();
    setInjects([...injects, data]);
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <label>AI Provider:</label>
        <select value={provider} onChange={(e) => setProvider(e.target.value)}>
          <option value="openai">OpenAI</option>
          <option value="huggingface">Hugging Face</option>
        </select>
        <label>Prompt Template:</label>
        <select value={promptType} onChange={(e) => setPromptType(e.target.value)}>
          <option value="standard">Standard IR Inject</option>
          <option value="finance">High-Risk Financial</option>
          <option value="insider">Insider Threat Escalation</option>
          <option value="client_breach">Client-Facing Breach</option>
        </select>
        <button onClick={suggestInject} className="comic-button ml-4">🧠 Suggest Next Step</button>
      </div>
      <div className="grid gap-4">
        {injects.map((i, index) => (
          <InjectCard key={index} title={i.title} content={i.inject} />
        ))}
      </div>
    </div>
  );
};

export default ScenarioBuilder;
