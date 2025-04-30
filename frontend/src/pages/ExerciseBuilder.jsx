import PlaybackTimeline from '../components/PlaybackTimeline';

import ParticipantTracker from '../components/ParticipantTracker';

import InjectFeedback from '../components/InjectFeedback';

import {
  Card, CardContent, Button, Select, SelectTrigger, SelectValue,
  SelectContent, SelectItem, Input
} from "components/ui";

import ParticipantTracker from '../components/ParticipantTracker';

import InjectFeedback from '../components/InjectFeedback';

import { useScenarioContext } from "../context/ScenarioContext";

import ParticipantTracker from '../components/ParticipantTracker';

import InjectFeedback from '../components/InjectFeedback';

import { PDFDownloadLink } from "@react-pdf/renderer";
import ExercisePDF from "../pdf/ExercisePDF";

import ParticipantTracker from '../components/ParticipantTracker';

import InjectFeedback from '../components/InjectFeedback';

import { downloadJSON } from "../utils/exportJSON";

export default function ExerciseBuilder() {
  const { selectedScenarios, setSelectedScenarios } = useScenarioContext();
  const injects = selectedScenarios;

  const updateField = (id, field, value) => {
    setSelectedScenarios((prev) =>
      prev.map((inj) =>
        inj.id === id ? { ...inj, [field]: value } : inj
      )
    );
  };

  const moveInject = (index, direction) => {
    const newInjects = [...injects];
    const [removed] = newInjects.splice(index, 1);
    newInjects.splice(index + direction, 0, removed);
    setSelectedScenarios(newInjects);
  };

  return (
    <div className="mb-6">
      <CoverageHeatmap injects={injects} />
    </div>
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Exercise Builder</h1>
      </div>

      {injects.map((inj, index) => (
        <Card key={inj.id} className="border-glacier border-l-4">
          <CardContent className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{inj.title}</h2>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" disabled={index === 0} onClick={() => moveInject(index, -1)}>↑</Button>
                <Button size="sm" variant="ghost" disabled={index === injects.length - 1} onClick={() => moveInject(index, 1)}>↓</Button>
              </div>
            </div>

            <div className="text-sm text-surf">{inj.mappings?.join(", ")}</div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Assign Role</label>
                <Select onValueChange={(val) => updateField(inj.id, "role", val)} value={inj.role}>
                  <SelectTrigger><SelectValue placeholder="Choose role" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CISO">CISO</SelectItem>
                    <SelectItem value="SOC Analyst">SOC Analyst</SelectItem>
                    <SelectItem value="IT Admin">IT Admin</SelectItem>
                    <SelectItem value="End User">End User</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Timing</label>
                <Select onValueChange={(val) => updateField(inj.id, "time", val)} value={inj.time}>
                  <SelectTrigger><SelectValue placeholder="When to run" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="T+0">T+0</SelectItem>
                    <SelectItem value="T+5">T+5</SelectItem>
                    <SelectItem value="T+15">T+15</SelectItem>
                    <SelectItem value="T+30">T+30</SelectItem>
                    <SelectItem value="T+60">T+60</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Objective</label>
                <Input value={inj.objective} onChange={(e) => updateField(inj.id, "objective", e.target.value)} placeholder="Test response timing..." />
              </div>
            </div>
          {/* Feedback Panel */}
<InjectFeedback injectId={inj.id} onSave={(id, feedback) => console.log("Inject", id, feedback)} />
<CapWizard mapping={inj.mappings?.[0] || "PR.AC-1"} onSave={(k, v) => console.log("CAP saved", k, v)} />
</CardContent>
        </Card>
      ))}

      {injects.length > 0 && (
        <div className="pt-6 flex justify-end gap-4">
          <Button variant="outline" onClick={() => downloadJSON(injects)}>Export as JSON</Button>
          <PDFDownloadLink document={<ExercisePDF injects={injects} />} fileName="ttx-exercise-plan.pdf">
            {({ loading }) => (
              <Button variant="default">{loading ? "Generating PDF..." : "Export PDF"}</Button>
            )}
          </PDFDownloadLink>
        </div>
      )}
    </div>

      <ParticipantTracker injects={injects} setInjects={setSelectedScenarios} />
      <PlaybackTimeline injects={injects} />
    );
}