import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AuthModal from './components/AuthModal';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchTasks(currentUser.uid);
      } else {
        setTasks([]);
      }
    });
    return unsubscribe;
  }, []);

  const fetchTasks = async (userId) => {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', userId);
    if (error) console.error(error);
    else setTasks(data);
  };

  const handleAddTask = async (task) => {
    const { data, error } = await supabase
      .from('tasks')
      .insert([{ ...task, user_id: user.uid }]);
    if (error) console.error(error);
    else setTasks([...tasks, data[0]]);
  };

  const handleUpdateTask = async (task) => {
    const { data, error } = await supabase
      .from('tasks')
      .update([{ id: task.id, ...task }]);
    if (error) console.error(error);
    else setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  const handleDeleteTask = async (taskId) => {
    const { error } = await supabase.from('tasks').delete().eq('id', taskId);
    if (error) console.error(error);
    else setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header user={user} setShowAuthModal={setShowAuthModal} />
      {user ? (
        <TaskList
          tasks={tasks}
          onAddTask={handleAddTask}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
        />
      ) : (
        <AuthModal
          show={showAuthModal}
          setShow={setShowAuthModal}
          auth={auth}
        />
      )}
    </div>
  );
}

export default App;