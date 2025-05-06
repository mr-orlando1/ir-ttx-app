import React, { useEffect, useState } from 'react';

const AfterActionReport = () => {
  const [pdfUrl, setPdfUrl] = useState('');
  const [reportHistory, setReportHistory] = useState([]);
  const [selectedReport, setSelectedReport] = useState('latest');
  const [annotations, setAnnotations] = useState([]);
  const [newAnnotation, setNewAnnotation] = useState('');
  const [loading, setLoading] = useState(true);
  const [compareMode, setCompareMode] = useState(false);
  const [secondaryPdfUrl, setSecondaryPdfUrl] = useState('');

  useEffect(() => {
    // Simulate fetching report history
    setLoading(true);
    const fetchReportHistory = async () => {
      // Replace with actual API call
      const mockHistory = [
        { id: 'latest', name: 'Current Report (May 2025)', date: '2025-05-01' },
        { id: 'apr2025', name: 'April 2025', date: '2025-04-15' },
        { id: 'mar2025', name: 'March 2025', date: '2025-03-20' },
        { id: 'feb2025', name: 'February 2025', date: '2025-02-10' }
      ];
      setReportHistory(mockHistory);
      setLoading(false);
    };
    
    fetchReportHistory();
  }, []);

  useEffect(() => {
    // Load the selected report
    setPdfUrl(`/api/reports/${selectedReport}`);
    
    // Fetch annotations for this report
    // Replace with actual API call
    const mockAnnotations = [
      { id: 1, text: 'Critical vulnerability identified on page 3', timestamp: '2025-05-02T14:32:00Z' },
      { id: 2, text: 'Response time improved from previous month', timestamp: '2025-05-03T09:15:00Z' }
    ];
    setAnnotations(mockAnnotations);
  }, [selectedReport]);

  useEffect(() => {
    if (compareMode && selectedReport !== 'latest') {
      setSecondaryPdfUrl('/api/reports/latest');
    } else {
      setSecondaryPdfUrl('');
    }
  }, [compareMode, selectedReport]);

  const handleReportChange = (e) => {
    setSelectedReport(e.target.value);
    setCompareMode(false);
  };

  const handleAddAnnotation = () => {
    if (newAnnotation.trim()) {
      const newItem = {
        id: annotations.length + 1,
        text: newAnnotation,
        timestamp: new Date().toISOString()
      };
      setAnnotations([...annotations, newItem]);
      setNewAnnotation('');
    }
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

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">After Action Report</h1>
        <div className="flex space-x-4">
          <select 
            className="border rounded px-3 py-2 bg-white"
            onChange={handleReportChange}
            value={selectedReport}
            disabled={loading}
          >
            {reportHistory.map(report => (
              <option key={report.id} value={report.id}>
                {report.name}
              </option>
            ))}
          </select>
          
          <button 
            className={`px-4 py-2 rounded ${compareMode ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setCompareMode(!compareMode)}
            disabled={selectedReport === 'latest' || loading}
          >
            {compareMode ? 'Exit Compare' : 'Compare with Latest'}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg">Loading reports...</p>
        </div>
      ) : (
        <div className={`${compareMode ? 'grid grid-cols-2 gap-4' : 'block'}`}>
          <div className="border rounded shadow">
            <div className="bg-gray-100 p-2 font-medium border-b">
              {compareMode ? selectedReport !== 'latest' ? 
                reportHistory.find(r => r.id === selectedReport)?.name : 'Current Report' : ''}
            </div>
            <iframe 
              src={pdfUrl} 
              className="w-full h-screen border-0" 
              title="AAR PDF"
            />
          </div>
          
          {compareMode && (
            <div className="border rounded shadow">
              <div className="bg-gray-100 p-2 font-medium border-b">Current Report</div>
              <iframe 
                src={secondaryPdfUrl} 
                className="w-full h-screen border-0" 
                title="Comparison PDF"
              />
            </div>
          )}
        </div>
      )}
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Report Annotations</h2>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow border rounded px-3 py-2 mr-2"
            placeholder="Add a new annotation..."
            value={newAnnotation}
            onChange={(e) => setNewAnnotation(e.target.value)}
          />
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleAddAnnotation}
          >
            Add
          </button>
        </div>
        
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {annotations.length > 0 ? (
            annotations.map(note => (
              <div key={note.id} className="bg-gray-50 p-3 rounded border">
                <p>{note.text}</p>
                <p className="text-xs text-gray-500 mt-1">{formatDate(note.timestamp)}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No annotations yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AfterActionReport;