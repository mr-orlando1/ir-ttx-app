import React from "react";
import CoverageHeatmap from "../components/CoverageHeatmap";
// Optional: import scenario context when connected
// import { useScenarioContext } from "@/context/ScenarioProvider";

export default function Dashboard() {
  // Replace this with real data if available
  // const { injects } = useScenarioContext();
  const injects = [
    { id: 1, title: "Phishing Attack", mappings: ["PR.AC-1", "DE.CM-1"] },
    { id: 2, title: "Backup Failure", mappings: ["RC.CO-1", "RC.IM-1"] },
    { id: 3, title: "Unauthorized Access", mappings: ["ID.AM-1", "PR.AC-3"] }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
        <img src="/assets/agio-plus-logo.png" alt="Agio+ logo" className="w-28 h-auto" />
      </div>

      <img
        src="/assets/process-overview.png"
        alt="Visual representation of incident response process"
        className="w-full h-auto mb-6 rounded shadow"
      />

      <div className="text-sm text-gray-600 mb-4">
        Showing {injects.length} injects mapped across control domains
      </div>

      <CoverageHeatmap injects={injects} />
    </div>
  );
}