
import React, { useEffect, useState } from 'react';
import { fetchScenarios } from '../services/api';
import Toast from '../components/Toast';

function ScenariosPage() {
  const [scenarios, setScenarios] = useState([]);
  const [newScenario, setNewScenario] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const fetchAllScenarios = async () => {
    const data = await fetchScenarios();
    setScenarios(data.scenarios);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllScenarios();
    const interval = setInterval(fetchAllScenarios, 720000);
    return () => clearInterval(interval);
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddScenario = async () => {
    if (newScenario.trim()) {
      setSubmitting(true);
      try {
        const response = await fetch('/api/scenarios', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: newScenario.trim() })
        });
        if (response.ok) {
          await fetchAllScenarios();
          showToast('✅ Scenario added successfully!');
          setNewScenario('');
        } else {
          showToast('❌ Failed to add scenario.');
        }
      } catch (error) {
        console.error('Error adding scenario:', error);
        showToast('❌ Server error.');
      } finally {
        setSubmitting(false);
      }
    }
  };

  const handleDeleteScenario = async (idx) => {
    if (window.confirm('Are you sure you want to delete this scenario?')) {
      try {
        const title = scenarios[idx];
        const response = await fetch(`/api/scenarios`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title })
        });
        if (response.ok) {
          await fetchAllScenarios();
          showToast('🗑️ Scenario deleted!');
        } else {
          showToast('❌ Failed to delete scenario.');
        }
      } catch (error) {
        console.error('Error deleting scenario:', error);
        showToast('❌ Server error.');
      }
    }
  };

  if (loading) return <div className="text-center p-4 animate-spin text-xl">Loading...</div>;

  return (
    <div className="p-4">
      <Toast message={toast} />
      <h1 className="text-2xl font-bold mb-4">Scenarios</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newScenario}
          onChange={e => setNewScenario(e.target.value)}
          placeholder="New scenario title"
          className="border p-2 mr-2 flex-grow rounded shadow"
        />
        <button onClick={handleAddScenario} className="bg-green-500 hover:bg-green-700 text-white p-2 rounded shadow" disabled={submitting}>
          {submitting ? 'Adding...' : 'Add'}
        </button>
      </div>
      <ul>
        {scenarios.map((scenario, idx) => (
          <li key={idx} className="border-b py-2 flex justify-between items-center">
            {scenario}
            <button onClick={() => handleDeleteScenario(idx)} className="text-red-500 hover:text-red-700 hover:underline text-sm">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScenariosPage;
