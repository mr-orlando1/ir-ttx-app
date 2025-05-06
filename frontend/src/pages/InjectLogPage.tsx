import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Inject {
  id: string;
  timestamp: string;
  content: string;
}

const InjectLogPage: React.FC = () => {
  const [injects, setInjects] = useState<Inject[]>([]);

  useEffect(() => {
    axios.get('/api/injects')
      .then(res => setInjects(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inject Log</h1>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Time</th>
            <th className="p-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {injects.map(i => (
            <tr key={i.id} className="border-t">
              <td className="p-2">{new Date(i.timestamp).toLocaleString()}</td>
              <td className="p-2">{i.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InjectLogPage;