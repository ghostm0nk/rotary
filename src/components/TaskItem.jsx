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
    <li className="py-4 px-6 bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors">
      {isEditing ? (
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="block w-full p-2 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      ) : (
        <span className="text-lg text-gray-700">{task.text}</span>
      )}
      <div className="mt-4 flex justify-end space-x-4">
        {isEditing ? (
          <button
            className="bg-green-500 p-2 text-white rounded-md hover:bg-green-600 transition-colors"
            onClick={handleUpdateTask}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-blue-500 p-2 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="bg-red-500 p-2 text-white rounded-md hover:bg-red-600 transition-colors"
          onClick={handleDeleteTask}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;