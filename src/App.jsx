import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AuthModal from './components/AuthModal';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();
  }, []);

  const handleSignUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) console.error(error);
    else console.log(data);
  };

  const handleSignIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) console.error(error);
    else console.log(data);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error(error);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header user={user} onSignOut={handleSignOut} />
      {user ? (
        <TaskList tasks={tasks} />
      ) : (
        <button onClick={() => setShowAuthModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </button>
      )}
      {showAuthModal && (
        <AuthModal
          onSignUp={handleSignUp}
          onSignIn={handleSignIn}
          onClose={() => setShowAuthModal(false)}
        />
      )}
    </div>
  );
}

export default App;