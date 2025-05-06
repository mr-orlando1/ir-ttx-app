import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface Inject {
  id: string;
  time: string;
  content: string;
}

const ScheduleBuilderPage: React.FC = () => {
  const [injects, setInjects] = useState<Inject[]>([]);

  useEffect(() => {
    axios.get('/api/injects')
      .then(res => setInjects(res.data))
      .catch(console.error);
  }, []);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(injects);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);
    setInjects(items);
    // Optionally persist order to backend
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Schedule Builder</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="injects">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
              {injects.map((inj, idx) => (
                <Draggable key={inj.id} draggableId={inj.id} index={idx}>
                  {(p) => (
                    <li
                      ref={p.innerRef}
                      {...p.draggableProps}
                      {...p.dragHandleProps}
                      className="border p-4 bg-white rounded shadow"
                    >
                      <div className="font-semibold">{inj.time}</div>
                      <div>{inj.content}</div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ScheduleBuilderPage;