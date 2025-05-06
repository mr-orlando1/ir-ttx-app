import React from 'react';

const riskLevels = [
  ['Low', 'Low', 'Medium', 'High', 'Critical'],
  ['Low', 'Medium', 'High', 'Critical', 'Critical'],
  ['Medium', 'High', 'High', 'Critical', 'Critical'],
  ['High', 'High', 'Critical', 'Critical', 'Critical'],
  ['Critical', 'Critical', 'Critical', 'Critical', 'Critical'],
];

const colors = {
  Low: '#8BC34A',
  Medium: '#FFEB3B',
  High: '#FF9800',
  Critical: '#F44336',
};

export default function RiskMatrix() {
  return (
    <div style={{ display: 'inline-block', border: '1px solid #ccc', padding: 16 }}>
      <div style={{ marginBottom: 8, fontWeight: 'bold' }}>Risk Matrix</div>
      <table>
        <tbody>
          {riskLevels.map((row, i) => (
            <tr key={i}>
              {row.map((level, j) => (
                <td
                  key={j}
                  style={{
                    background: colors[level],
                    color: '#222',
                    width: 60,
                    height: 40,
                    textAlign: 'center',
                    border: '1px solid #fff',
                  }}
                >
                  {level}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 8, fontSize: 12 }}>
        <b>Y:</b> Likelihood &nbsp; <b>X:</b> Impact
      </div>
    </div>
  );
}