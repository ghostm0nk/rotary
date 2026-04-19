import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { getAuth, onAuthStateChange } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import LoginForm from './components/LoginForm.jsx';
import SignupForm from './components/SignupForm.jsx';
import TaskList from './components/TaskList.jsx';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {user ? (
        <TaskList tasks={tasks} setTasks={setTasks} />
      ) : (
        <div className="w-full max-w-md mx-auto p-4">
          <LoginForm />
          <SignupForm />
        </div>
      )}
    </div>
  );
}

export default App;