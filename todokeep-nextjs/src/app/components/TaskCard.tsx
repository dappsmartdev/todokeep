'use client';

import { useState } from 'react';

interface TaskProps {
  task: {
    _id: string;
    title: string;
    content: string;
    boardId: string;
  };
  onUpdate: (task: any) => void;
}

export default function TaskCard({ task, onUpdate }: TaskProps) {
  const [content, setContent] = useState(task.content);

  const handleSave = async () => {
    const res = await fetch('/api/tasks', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: task._id, content }),
    });
    const updated = await res.json();
    onUpdate(updated);
  };

  return (
    <div className="border p-2 mb-2">
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}