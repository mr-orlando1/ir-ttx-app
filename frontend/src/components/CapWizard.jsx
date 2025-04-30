import React, { useState } from "react";

const defaultCAPs = {
  "PR.AC-1": "Implement role-based access control policies for all sensitive systems.",
  "PR.AC-3": "Enforce least privilege principles by minimizing user access.",
  "DE.CM-1": "Deploy endpoint detection and response (EDR) across all workstations.",
  "RS.CO-2": "Maintain a legal/PR-approved breach notification template for stakeholder communication."
};

export default function CapWizard({ mapping = "PR.AC-1", onSave }) {
  const [text, setText] = useState(defaultCAPs[mapping] || "");

  const handleSave = () => {
    onSave?.(mapping, text);
  };

  return (
    <div className="bg-gray-50 border rounded p-4 mt-4 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-700 mb-1">Corrective Action Plan</h3>
      <p className="text-xs text-muted-foreground mb-2">Mapped control: {mapping}</p>
      <textarea
        className="w-full p-2 border rounded text-sm"
        rows={3}
        placeholder="Enter CAP recommendation..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="mt-2 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
      >
        Save CAP
      </button>
    </div>
  );
}