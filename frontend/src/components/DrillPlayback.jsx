import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function DrillPlayback({ injects = [] }) {
  const [startTime, setStartTime] = useState(null);
  const [currentInjectIndex, setCurrentInjectIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const getElapsed = () => {
    if (!startTime) return "T+0:00";
    const delta = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(delta / 60);
    const secs = delta % 60;
    return `T+${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    if (!playing) {
      setStartTime(Date.now());
    }
    setPlaying(!playing);
  };

  const handleNextInject = () => {
    if (currentInjectIndex < injects.length - 1) {
      setCurrentInjectIndex(currentInjectIndex + 1);
    }
  };

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setCurrentInjectIndex((prevIndex) => {
        if (prevIndex < injects.length - 1) {
          return prevIndex + 1;
        }
        setPlaying(false);
        return prevIndex;
      });
    }, 3000); // 3 seconds for each inject

    return () => clearInterval(timer);
  }, [playing, injects.length]);

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center gap-4 mb-2">
  <img src="/assets/flacco-mode-emblem.png" alt="Flacco Mode" className="w-12 h-12"/>
  <h2 className="text-xl font-bold">Drill Playback</h2>
</div>
      <div className="flex justify-between items-center">
        <Button onClick={handlePlayPause} variant="default">
          {playing ? "Pause" : "Play"}
        </Button>
        <span className="text-xl font-bold">{getElapsed()}</span>
<img src="/assets/retro-icons.png" alt="Inject Icons" className="w-32 h-auto ml-4" />
      </div>

      <div className="space-y-4">
        {injects.map((inj, index) => (
          <div
            key={inj.id}
            className={`p-4 border rounded shadow-sm ${
              index === currentInjectIndex ? "bg-blue-50" : "bg-white"
            }`}
          >
            <h3 className="font-semibold">{inj.title}</h3>
            <p className="text-sm text-gray-600">{inj.role} | T+{inj.time || "?"}</p>
            <div className="flex gap-2">
              <Button
                onClick={handleNextInject}
                disabled={index === injects.length - 1}
                className="bg-blue-600 text-white"
              >
                Next Inject
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}