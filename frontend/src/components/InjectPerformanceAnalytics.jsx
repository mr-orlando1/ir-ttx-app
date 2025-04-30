import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function InjectPerformanceAnalytics({ responses = [], injects = [] }) {
  const totalInjects = injects.length;
  const respondedInjects = responses.filter(res => res.status === "responded").length;
  const missedInjects = totalInjects - respondedInjects;

  const responseTimeStats = responses.reduce(
    (acc, response) => {
      const timeTaken = response.time - response.startTime;
      acc.push(timeTaken);
      return acc;
    },
    []
  );

  const averageResponseTime = responseTimeStats.length
    ? (responseTimeStats.reduce((a, b) => a + b, 0) / responseTimeStats.length).toFixed(2)
    : "N/A";

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Inject Performance Analytics</h2>
      
      <Card className="p-4 mb-4">
        <CardContent>
          <h3 className="text-lg font-semibold">Response Summary</h3>
          <div className="flex justify-between mt-2">
            <div>
              <p className="text-sm">Total Injects: {totalInjects}</p>
              <p className="text-sm">Responded: {respondedInjects}</p>
              <p className="text-sm">Missed: {missedInjects}</p>
            </div>
            <div>
              <p className="text-sm">Average Response Time: {averageResponseTime}s</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}