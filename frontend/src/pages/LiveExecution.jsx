import React, { useState } from "react";
import CapWizard from "../components/CapWizard";

export default function LiveExecution({ injects = [] }) {
  const [startTime, setStartTime] = useState(null);
  const [responses, setResponses] = useState({});

  const getElapsed = () => {
    if (!startTime) return "T+0:00";
    const delta = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(delta / 60);
    const secs = delta % 60;
    return `T+${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleResponse = (id, status) => {
    setResponses((prev) => ({ ...prev, [id]: { ...prev[id], status } }));
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <button onClick={() => setStartTime(Date.now())} className="bg-blue-600 text-white px-4 py-2 rounded">
          Start Exercise
        </button>
        <span className="text-xl font-bold">{getElapsed()}</span>
      </div>

      {injects.map((inj) => (
        <div key={inj.id} className="p-4 border rounded shadow-sm bg-white">
          <h2 className="font-semibold">{inj.title}</h2>
          <p className="text-sm text-gray-600">Role: {inj.role} | Scheduled: T+{inj.time || "?"}</p>
          <div className="mt-2 flex gap-2">
            <button onClick={() => handleResponse(inj.id, "responded")} className="bg-green-100 px-3 py-1 rounded">
              ✅ Responded
            </button>
            <button onClick={() => handleResponse(inj.id, "missed")} className="bg-red-100 px-3 py-1 rounded">
              ❌ Missed
            </button>
          </div>
          <CapWizard mapping={inj.mappings?.[0] || "PR.AC-1"} onSave={(k, v) => console.log("CAP from Live", k, v)} />
        </div>
      ))}
    </div>
  );
}