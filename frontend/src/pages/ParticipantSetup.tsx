// frontend/src/pages/ParticipantSetup.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Participant {
  id: string;
  name: string;
  role: string;
}

const ParticipantSetup: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState<{ name: string; role: string }>({ name: '', role: '' });

  useEffect(() => {
    axios
      .get<Participant[]>('/api/participants')
      .then(res => setParticipants(res.data))
      .catch(console.error);
  }, []);

  const save = () => {
    const method = editId ? 'put' : 'post';
    const url = editId ? `/api/participants/${editId}` : '/api/participants';
    axios[method]<Participant>(url, form)
      .then(() => window.location.reload())
      .catch(console.error);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Participant Setup</h1>

      <table className="min-w-full border mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {participants.map(p => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.role}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => {
                    setEditId(p.id);
                    setForm({ name: p.name, role: p.role });
                  }}
                  className="text-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    axios
                      .delete(`/api/participants/${p.id}`)
                      .then(() => window.location.reload())
                  }
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="space-y-2">
        <input
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          placeholder="Name"
          className="border p-2 rounded w-full"
        />
        <input
          value={form.role}
          onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
          placeholder="Role"
          className="border p-2 rounded w-full"
        />
        <button onClick={save} className="bg-blue-600 text-white px-4 py-2 rounded">
          {editId ? 'Update' : 'Add'} Participant
        </button>
      </div>
    </div>
  );
};

export default ParticipantSetup;