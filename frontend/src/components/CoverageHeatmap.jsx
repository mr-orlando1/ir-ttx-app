import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const defaultMappings = [
  "ID", "PR", "DE", "RS", "RC"
];

export default function CoverageHeatmap({ injects = [] }) {
  const [schema, setSchema] = useState("NIST");

  const labelSets = {
    NIST: ["ID", "PR", "DE", "RS", "RC"],
    CIS: ["IG1", "IG2", "IG3"]
  };
  const controlCounts = injects.reduce((acc, inj) => {
    (inj.mappings || []).forEach(map => {
      const key = map.split(".")[0];
      acc[key] = (acc[key] || 0) + 1;
    });
    return acc;
  }, {});

  const labels = labelSets[schema];
  const data = {
    labels,
    datasets: [{
      label: "Control Coverage",
      data: labels.map(label => controlCounts[label] || 0),
      backgroundColor: "rgba(34,150,221,0.2)",
      borderColor: "#2296DD",
      borderWidth: 2
    }]
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        suggestedMax: 5,
        ticks: { stepSize: 1 }
      }
    },
    plugins: {
      legend: { position: "top" }
    }
  };

  return (
  <div className="flex justify-end mb-2">
    <select value={schema} onChange={(e) => setSchema(e.target.value)} className="text-sm border rounded px-2 py-1">
      <option value="NIST">NIST CSF</option>
      <option value="CIS">CIS IGs</option>
    </select>
  </div>
    <div className="p-6 bg-white rounded shadow-sm">
      <h2 className="text-lg font-semibold text-surf mb-4">Control Coverage Heatmap</h2>
      <Radar data={data} options={options} />
    </div>
  );
}