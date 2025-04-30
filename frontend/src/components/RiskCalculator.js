import React, { useState } from 'react';

function RiskCalculator() {
  const [size, setSize] = useState('Small');
  const [industry, setIndustry] = useState('Finance');
  const [controls, setControls] = useState([]);
  const [risk, setRisk] = useState(null);

  const handleCalculate = () => {
    let base = size === 'Large' ? 80 : size === 'Medium' ? 50 : 30;
    if (industry === 'Healthcare') base += 10;
    if (controls.includes('MFA')) base -= 10;
    if (controls.includes('Encryption')) base -= 10;
    if (controls.includes('Monitoring')) base -= 10;
    if (base < 10) base = 10;
    setRisk(base);
  };

  const toggleControl = (control) => {
    setControls(prev =>
      prev.includes(control) ? prev.filter(c => c !== control) : [...prev, control]
    );
  };

  return (
    <div>
      <h2 className="comic-heading mb-4">Risk Calculator 🧮</h2>
      <div className="space-y-4">
        <div>
          <label>Company Size:</label>
          <select value={size} onChange={e => setSize(e.target.value)} className="comic-input">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <div>
          <label>Industry Type:</label>
          <select value={industry} onChange={e => setIndustry(e.target.value)} className="comic-input">
            <option>Finance</option>
            <option>Healthcare</option>
            <option>Retail</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label>Security Controls:</label><br />
          {['MFA', 'Encryption', 'Monitoring'].map(control => (
            <label key={control} className="mr-4">
              <input type="checkbox" checked={controls.includes(control)} onChange={() => toggleControl(control)} /> {control}
            </label>
          ))}
        </div>
        <button onClick={handleCalculate} className="comic-button">Calculate Risk</button>
        {risk !== null && (
          <div className="comic-bubble mt-4">
            Suggested Risk Score: <strong>{risk}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default RiskCalculator;
