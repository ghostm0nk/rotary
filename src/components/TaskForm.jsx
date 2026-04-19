import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    onAddTask({ text: taskText });
    setTaskText('');
  };

  return (
    <form onSubmit={handleAddTask} className="p-2 border-b border-gray-200">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add new task"
        className="p-2 border border-gray-200 rounded-md"
      />
      <button
        type="submit"
        className="bg-green-500 p-2 text-white rounded-md hover:bg-green-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;