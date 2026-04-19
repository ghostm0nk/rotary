import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    onAddTask({ text: taskText });
    setTaskText('');
  };

  return (
    <form onSubmit={handleAddTask} className="p-4 border-b border-gray-200">
      <label
        htmlFor="task"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Add new task
      </label>
      <input
        type="text"
        id="task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="block w-full p-2 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        type="submit"
        className="mt-4 bg-blue-500 p-2 text-white rounded-md hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;