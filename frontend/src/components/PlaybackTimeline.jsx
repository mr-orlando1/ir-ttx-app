import React, { useState, useEffect } from "react";
import { Card, CardContent, Button } from "components/ui";

export default function PlaybackTimeline({ injects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [roleFilter, setRoleFilter] = useState("");

  const filteredInjects = injects.filter(inj => !roleFilter || inj.role === roleFilter);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < filteredInjects.length - 1) return prev + 1;
        setPlaying(false);
        return prev;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [playing, filteredInjects.length]);

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-xl font-bold text-gray-800">Playback Timeline</h2>
        <select
          value={roleFilter}
          onChange={(e) => {
            setRoleFilter(e.target.value);
            setCurrentIndex(0);
          }}
          className="text-sm px-3 py-1 rounded border"
        >
          <option value="">All Roles</option>
          {[...new Set(injects.map(i => i.role).filter(Boolean))].map(role => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
        <Button onClick={() => setPlaying(!playing)} variant="default">
          {playing ? "Pause" : "Play"}
        </Button>
      </div>

      <div className="space-y-2">
        {filteredInjects.map((inj, idx) => (
          <Card
            key={inj.id}
            className={`transition-all duration-300 ${
              idx === currentIndex
                ? "border-l-4 border-glacier bg-blue-50 shadow-md"
                : "bg-white"
            }`}
          >
            <CardContent className="p-4">
              <div className="text-sm text-gray-600">
                <span className="font-bold">{inj.time || "T+?"}</span> —{" "}
                <span className="text-gray-800">{inj.title}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Role: {inj.role || "Unassigned"} | Objective: {inj.objective || "None"}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}