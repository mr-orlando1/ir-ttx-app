import React, { useState } from "react";
import { Card, CardContent, Select, SelectTrigger, SelectValue, SelectContent, SelectItem, Input, Button } from "components/ui";

export default function ParticipantTracker({ injects, setInjects }) {
  const [participants, setParticipants] = useState({});

  const assignParticipant = (role, name) => {
    setParticipants((prev) => ({ ...prev, [role]: name }));
  };

  const participantRoles = Array.from(
    new Set(injects.map((inj) => inj.role).filter(Boolean))
  );

  return (
    <div className="p-4 mt-6 bg-white rounded-xl shadow-sm border">
      <h2 className="text-xl font-semibold mb-2">Participant Tracker</h2>
      {participantRoles.length === 0 ? (
        <p className="text-sm text-muted-foreground">No roles assigned yet.</p>
      ) : (
        participantRoles.map((role) => (
          <Card key={role} className="mb-3">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-800">Role: {role}</h3>
                <p className="text-xs text-muted-foreground">Participant: {participants[role] || "Unassigned"}</p>
              </div>
              <Input
                className="w-56"
                placeholder="Assign name (e.g., Johnny)"
                value={participants[role] || ""}
                onChange={(e) => assignParticipant(role, e.target.value)}
              />
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}