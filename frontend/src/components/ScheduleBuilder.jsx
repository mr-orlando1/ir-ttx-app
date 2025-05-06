import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ScheduleBuilder({ injects = [], onScheduleChange }) {
  const [scheduledInjects, setScheduledInjects] = useState(injects);

  const exportSchedule = (data, format = "json") => {
    const filename = `exercise-schedule.${format}`;
    let blob;

    if (format === "json") {
      blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    } else {
      const csvRows = [["Title", "Role", "Time"]];
      data.forEach((inj) => {
        csvRows.push([inj.title, inj.role, inj.time || "Unscheduled"]);
      });
      const csvString = csvRows.map(row => row.join(",")).join("\n");
      blob = new Blob([csvString], { type: "text/csv" });
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDrop = (e, targetIndex) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("index"), 10);
    const draggedInject = scheduledInjects[draggedIndex];
    const updatedInjects = [...scheduledInjects];
    updatedInjects.splice(draggedIndex, 1);
    updatedInjects.splice(targetIndex, 0, draggedInject);
    setScheduledInjects(updatedInjects);
    onScheduleChange(updatedInjects);
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Exercise Schedule Builder</h2>

      <div className="flex gap-6 flex-wrap">
        {scheduledInjects.map((inj, index) => (
          <Card
            key={inj.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            className="border-2 border-glacier p-4 shadow-sm bg-white w-60"
          >
            <CardContent className="space-y-2">
              <h3 className="text-lg font-semibold">{inj.title}</h3>
              <p className="text-sm">{inj.role}</p>
              <p className="text-xs text-gray-500">Scheduled: T+{inj.time || "?"}</p>
              <Button onClick={() => onScheduleChange(inj.id)} className="text-xs">
                Set Timing
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <h3 className="text-lg font-semibold">Timeline View</h3>
        <div className="flex gap-4 overflow-x-auto py-4 border-t">
          {scheduledInjects.map((inj) => (
            <div key={inj.id} className="flex-shrink-0 w-48 bg-gray-100 p-4 rounded text-center">
              <p className="font-semibold">{inj.title}</p>
              <p className="text-sm text-gray-600">{inj.time ? `T+${inj.time}` : "Unscheduled"}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-4">
        <Button
          onClick={() => exportSchedule(scheduledInjects, "json")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Download Schedule (JSON)
        </Button>
        <Button
          onClick={() => exportSchedule(scheduledInjects, "csv")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Download Schedule (CSV)
        </Button>
      </div>
    </div>
  );
}