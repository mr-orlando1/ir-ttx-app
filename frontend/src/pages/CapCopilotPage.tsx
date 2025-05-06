import React, { useState, useEffect } from 'react';

// Mock component for our enhanced version - this would be your actual CAPCopilot component
const CAPCopilot = ({ injectText, systemType, onUpdate, templates, config }) => (
  <div className="border rounded p-4 bg-gray-50">
    <div className="mb-4">
      <div className="font-medium text-gray-700">System Type: {systemType}</div>
      <div className="text-sm text-gray-500">Using template: {templates?.selected || "Default"}</div>
    </div>
    <div className="border bg-white rounded p-3 min-h-32">
      <p className="text-gray-400">{injectText || "Type or select a command..."}</p>
    </div>
    <div className="mt-2 flex justify-end">
      <button 
        className="bg-blue-500 text-white px-3 py-1 text-sm rounded"
        onClick={onUpdate}
      >
        Execute
      </button>
    </div>
  </div>
);

const CapCopilotPage = () => {
  const [injectText, setInjectText] = useState("");
  const [systemType, setSystemType] = useState("default");
  const [templates, setTemplates] = useState({
    selected: "Incident Response",
    available: [
      "Incident Response",
      "Phishing Analysis",
      "Threat Hunting",
      "SIEM Query Builder",
      "Vuln Assessment"
    ]
  });
  const [commandHistory, setCommandHistory] = useState([]);
  const [showHelp, setShowHelp] = useState(false);
  const [config, setConfig] = useState({
    aiModel: "default",
    responseDetail: "standard",
    includeReferences: true
  });
  
  // Load command history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('capCopilotHistory');
    if (savedHistory) {
      setCommandHistory(JSON.parse(savedHistory));
    }
  }, []);
  
  const handleUpdate = () => {
    if (injectText.trim()) {
      const newCommand = {
        text: injectText,
        timestamp: new Date().toISOString(),
        template: templates.selected,
        systemType: systemType
      };
      
      const updatedHistory = [newCommand, ...commandHistory].slice(0, 20);
      setCommandHistory(updatedHistory);
      localStorage.setItem('capCopilotHistory', JSON.stringify(updatedHistory));
      
      console.log('Executed command:', injectText);
      // Here you would actually call the API or dispatch an action
    }
  };
  
  const applyTemplate = (template) => {
    setTemplates({...templates, selected: template});
    // In a real implementation, this would load template-specific prompts or settings
  };
  
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const handleClearHistory = () => {
    if (confirm("Are you sure you want to clear your command history?")) {
      setCommandHistory([]);
      localStorage.removeItem('capCopilotHistory');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">CAP Copilot</h1>
        <div className="flex space-x-2">
          <button 
            className="text-blue-500 hover:underline text-sm"
            onClick={() => setShowHelp(!showHelp)}
          >
            {showHelp ? 'Hide Help' : 'Show Help'}
          </button>
          <select
            className="border rounded px-2 py-1 text-sm"
            value={systemType}
            onChange={(e) => setSystemType(e.target.value)}
          >
            <option value="default">Default System</option>
            <option value="security">Security Operations</option>
            <option value="network">Network Monitoring</option>
            <option value="endpoints">Endpoint Management</option>
          </select>
        </div>
      </div>
      
      {showHelp && (
        <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
          <h2 className="font-semibold mb-2">CAP Copilot Help</h2>
          <p className="text-sm mb-2">The CAP (Cyber Assistant Protocol) Copilot helps you generate commands and queries for various security systems.</p>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>Start with a natural language description of what you want to accomplish</li>
            <li>Select the appropriate template for your task type</li>
            <li>Choose the target system type for proper command formatting</li>
            <li>Review and execute the generated command</li>
          </ul>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="mb-4">
            <div className="flex mb-3">
              <h2 className="text-lg font-semibold">Input</h2>
              <div className="ml-auto">
                <select
                  className="border rounded px-2 py-1 text-sm bg-white"
                  value={templates.selected}
                  onChange={(e) => applyTemplate(e.target.value)}
                >
                  {templates.available.map(template => (
                    <option key={template} value={template}>
                      {template}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <textarea
              className="w-full border rounded p-3 h-32"
              placeholder="Describe what you want to accomplish..."
              value={injectText}
              onChange={(e) => setInjectText(e.target.value)}
            />
            
            <div className="flex justify-end mt-2">
              <button
                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded mr-2 text-sm"
                onClick={() => setInjectText("")}
              >
                Clear
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                onClick={handleUpdate}
              >
                Generate Command
              </button>
            </div>
          </div>
          
          <div className="mt-6">
            <CAPCopilot
              injectText={injectText}
              systemType={systemType}
              onUpdate={handleUpdate}
              templates={templates}
              config={config}
            />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Command History</h2>
            {commandHistory.length > 0 && (
              <button 
                className="text-red-500 hover:underline text-xs"
                onClick={handleClearHistory}
              >
                Clear History
              </button>
            )}
          </div>
          
          <div className="border rounded overflow-hidden">
            {commandHistory.length > 0 ? (
              <div className="max-h-96 overflow-y-auto">
                {commandHistory.map((cmd, index) => (
                  <div 
                    key={index} 
                    className="p-3 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setInjectText(cmd.text)}
                  >
                    <div className="text-sm font-medium truncate">{cmd.text}</div>
                    <div className="flex text-xs text-gray-500 mt-1">
                      <span>{cmd.template}</span>
                      <span className="mx-1">•</span>
                      <span>{formatDate(cmd.timestamp)}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500 italic">
                No command history yet
              </div>
            )}
          </div>
          
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-3">Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">AI Model</label>
                <select
                  className="w-full border rounded p-2"
                  value={config.aiModel}
                  onChange={(e) => setConfig({...config, aiModel: e.target.value})}
                >
                  <option value="default">Default</option>
                  <option value="advanced">Advanced (GPT-4)</option>
                  <option value="fast">Fast (GPT-3.5)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Response Detail</label>
                <select
                  className="w-full border rounded p-2"
                  value={config.responseDetail}
                  onChange={(e) => setConfig({...config, responseDetail: e.target.value})}
                >
                  <option value="concise">Concise</option>
                  <option value="standard">Standard</option>
                  <option value="detailed">Detailed</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="includeReferences"
                  checked={config.includeReferences}
                  onChange={(e) => setConfig({...config, includeReferences: e.target.checked})}
                  className="mr-2"
                />
                <label htmlFor="includeReferences" className="text-sm">
                  Include documentation references
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapCopilotPage;