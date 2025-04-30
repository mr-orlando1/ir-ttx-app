import React, { useState } from "react";
import { Button, Card, CardContent } from "@/components/ui/button";

export default function ScheduleBuilder({ injects = [], onScheduleChange }) {
  const [scheduledInjects, setScheduledInjects] = useState(injects);
  const exportSchedule = (injects) => {
  const blob = new Blob([JSON.stringify(injects, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "exercise-schedule.json";
  a.click();
  URL.revokeObjectURL(url);
};

  const exportScheduleCSV = (injects) => {
    const csvRows = [];
    const headers = ["Title", "Role", "Time"];  // CSV headers
    csvRows.push(headers.join(","));
    injects.forEach(inj => {
      const row = [inj.title, inj.role, inj.time || "Unscheduled"];
      csvRows.push(row.join(","));
    });
    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "exercise-schedule.csv";
    a.click();
    URL.revokeObjectURL(url);
  };
    const blob = new Blob([JSON.stringify(injects, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "exercise-schedule.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDrop = (e, targetIndex) => {
    const draggedIndex = e.dataTransfer.getData("index");
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
      <div className="flex gap-6">
        {scheduledInjects.map((inj, index) => (
          <Card
            key={inj.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            className="border-2 border-glacier p-4 shadow-sm bg-white"
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
      <div className="mt-6 space-y-4">          <h3 className="text-lg font-semibold">Timeline View</h3>          <div className="flex gap-4 overflow-x-auto py-4 border-t">            {scheduledInjects.map((inj, index) => (              <div key={inj.id} className="flex-shrink-0 w-48 bg-gray-100 p-4 rounded text-center">                <p className="font-semibold">{inj.title}</p>                <p className="text-sm text-gray-600">{inj.time ? `T+${inj.time}` : "Unscheduled"}</p>              
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>        
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>          <Button onClick={() => exportScheduleCSV(scheduledInjects)} className="bg-green-600 text-white px-4 py-2 rounded">Download Schedule (CSV)</Button>        </div>        </div>        
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>          <Button onClick={() => exportScheduleCSV(scheduledInjects)} className="bg-green-600 text-white px-4 py-2 rounded">Download Schedule (CSV)</Button>        </div>        </div>            ))}          
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>        
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>          <Button onClick={() => exportScheduleCSV(scheduledInjects)} className="bg-green-600 text-white px-4 py-2 rounded">Download Schedule (CSV)</Button>        </div>        </div>        
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>          <Button onClick={() => exportScheduleCSV(scheduledInjects)} className="bg-green-600 text-white px-4 py-2 rounded">Download Schedule (CSV)</Button>        </div>        </div>        
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>        
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>          <Button onClick={() => exportScheduleCSV(scheduledInjects)} className="bg-green-600 text-white px-4 py-2 rounded">Download Schedule (CSV)</Button>        </div>        </div>        
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>          <Button onClick={() => exportScheduleCSV(scheduledInjects)} className="bg-green-600 text-white px-4 py-2 rounded">Download Schedule (CSV)</Button>        </div>        </div>
    <div className="mt-6 space-y-4">          <h3 className="text-lg font-semibold">Timeline View</h3>          <div className="flex gap-4 overflow-x-auto py-4 border-t">            {scheduledInjects.map((inj, index) => (              <div key={inj.id} className="flex-shrink-0 w-48 bg-gray-100 p-4 rounded text-center">                <p className="font-semibold">{inj.title}</p>                <p className="text-sm text-gray-600">{inj.time ? `T+${inj.time}` : "Unscheduled"}</p>              
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>        
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>          <Button onClick={() => exportScheduleCSV(scheduledInjects)} className="bg-green-600 text-white px-4 py-2 rounded">Download Schedule (CSV)</Button>        </div>        </div>        
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>          <Button onClick={() => exportScheduleCSV(scheduledInjects)} className="bg-green-600 text-white px-4 py-2 rounded">Download Schedule (CSV)</Button>        </div>        </div>            ))}          
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>        
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>          <Button onClick={() => exportScheduleCSV(scheduledInjects)} className="bg-green-600 text-white px-4 py-2 rounded">Download Schedule (CSV)</Button>        </div>        </div>        
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>          <Button onClick={() => exportScheduleCSV(scheduledInjects)} className="bg-green-600 text-white px-4 py-2 rounded">Download Schedule (CSV)</Button>        </div>        </div>        
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>        
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>          <Button onClick={() => exportScheduleCSV(scheduledInjects)} className="bg-green-600 text-white px-4 py-2 rounded">Download Schedule (CSV)</Button>        </div>        </div>        
      <div className="flex justify-end gap-4 mt-4">          <Button onClick={() => exportSchedule(scheduledInjects)} className="bg-blue-600 text-white px-4 py-2 rounded">Download Schedule (JSON)</Button>          <Button onClick={() => exportScheduleCSV(scheduledInjects)} className="bg-green-600 text-white px-4 py-2 rounded">Download Schedule (CSV)</Button>        </div>        </div>
  );
}