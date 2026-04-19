import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;