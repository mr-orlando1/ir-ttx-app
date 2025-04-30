import { createContext, useContext, useState } from 'react';

const ScenarioContext = createContext();

export function ScenarioProvider({ children }) {
  const [selectedScenarios, setSelectedScenarios] = useState([]);

  const toggleScenario = (scenario) => {
    setSelectedScenarios((prev) =>
      prev.find((s) => s.id === scenario.id)
        ? prev.filter((s) => s.id !== scenario.id)
        : [...prev, scenario]
    );
  };

  return (
    <ScenarioContext.Provider value={{ selectedScenarios, setSelectedScenarios, toggleScenario }}>
      {children}
    </ScenarioContext.Provider>
  );
}

export const useScenarioContext = () => useContext(ScenarioContext);