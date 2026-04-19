import React from 'react';
import { supabase } from '../supabase';

const LogoutButton = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error(error);
  };

  return (
    <button 
      className="bg-red-500 p-2 text-white rounded-md hover:bg-red-600 transition-colors"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;