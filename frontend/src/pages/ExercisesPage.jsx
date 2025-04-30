
import React, { useEffect, useState } from 'react';
import { fetchExercises } from '../services/api';
import Toast from '../components/Toast';

function ExercisesPage() {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const fetchAllExercises = async () => {
    const data = await fetchExercises();
    setExercises(data.exercises);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllExercises();
    const interval = setInterval(fetchAllExercises, 720000);
    return () => clearInterval(interval);
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddExercise = async () => {
    if (newExercise.trim()) {
      setSubmitting(true);
      try {
        const response = await fetch('/api/exercises', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: newExercise.trim() })
        });
        if (response.ok) {
          await fetchAllExercises();
          showToast('✅ Exercise added successfully!');
          setNewExercise('');
        } else {
          showToast('❌ Failed to add exercise.');
        }
      } catch (error) {
        console.error('Error adding exercise:', error);
        showToast('❌ Server error.');
      } finally {
        setSubmitting(false);
      }
    }
  };

  const handleDeleteExercise = async (idx) => {
    if (window.confirm('Are you sure you want to delete this exercise?')) {
      try {
        const name = exercises[idx];
        const response = await fetch(`/api/exercises`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name })
        });
        if (response.ok) {
          await fetchAllExercises();
          showToast('🗑️ Exercise deleted!');
        } else {
          showToast('❌ Failed to delete exercise.');
        }
      } catch (error) {
        console.error('Error deleting exercise:', error);
        showToast('❌ Server error.');
      }
    }
  };

  if (loading) return <div className="text-center p-4 animate-spin text-xl">Loading...</div>;

  return (
    <div className="p-4">
      <Toast message={toast} />
      <h1 className="text-2xl font-bold mb-4">Exercises</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newExercise}
          onChange={e => setNewExercise(e.target.value)}
          placeholder="New exercise name"
          className="border p-2 mr-2 flex-grow rounded shadow"
        />
        <button onClick={handleAddExercise} className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded shadow" disabled={submitting}>
          {submitting ? 'Adding...' : 'Add'}
        </button>
      </div>
      <ul>
        {exercises.map((exercise, idx) => (
          <li key={idx} className="border-b py-2 flex justify-between items-center">
            {exercise}
            <button onClick={() => handleDeleteExercise(idx)} className="text-red-500 hover:text-red-700 hover:underline text-sm">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExercisesPage;
