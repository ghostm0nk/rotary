import React, { useState, useEffect } from 'react';
import { supabase } from '../App.jsx';

const TaskList = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await supabase.from('tasks').select('*');
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    const { data } = await supabase.from('tasks').insert([{ task: newTask }]);
    setTasks([...tasks, data[0]]);
    setNewTask('');
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Task List</h2>
      <form onSubmit={handleAddTask}>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add task
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;