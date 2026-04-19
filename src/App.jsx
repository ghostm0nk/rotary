import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { supabase } from './supabase';

function App() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user);
    };
    getSession();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchTasks = async () => {
        const { data, error } = await supabase
          .from('tasks')
          .select('*')
          .eq('user_id', user.id);
        if (error) console.error(error);
        else setTasks(data);
      };
      fetchTasks();
    }
  }, [user]);

  const handleAddTask = async (task) => {
    const { data, error } = await supabase
      .from('tasks')
      .insert([{ ...task, user_id: user.id }]);
    if (error) console.error(error);
    else setTasks([...tasks, data[0]]);
  };

  const handleUpdateTask = async (task) => {
    const { data, error } = await supabase
      .from('tasks')
      .update([task]);
    if (error) console.error(error);
    else setTasks(tasks.map((t) => t.id === task.id ? task : t));
  };

  const handleDeleteTask = async (taskId) => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', taskId);
    if (error) console.error(error);
    else setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header user={user} />
      <main className="p-4">
        <TaskForm onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  );
}

export default App;