import { useState } from 'react';

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskText, setTaskText] = useState(task.text);

  const handleUpdateTask = () => {
    onUpdateTask({ ...task, text: taskText });
    setIsEditing(false);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <li className="p-2 border-b border-gray-200">
      {isEditing ? (
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="p-2 border border-gray-200 rounded-md"
        />
      ) : (
        <span className="text-lg">{task.text}</span>
      )}
      {isEditing ? (
        <button
          className="bg-green-500 p-2 text-white rounded-md hover:bg-green-600"
          onClick={handleUpdateTask}
        >
          Save
        </button>
      ) : (
        <button
          className="bg-blue-500 p-2 text-white rounded-md hover:bg-blue-600"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      )}
      <button
        className="bg-red-500 p-2 text-white rounded-md hover:bg-red-600"
        onClick={handleDeleteTask}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;