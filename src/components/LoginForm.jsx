import React, { useState } from 'react';
import { supabase } from '../supabase';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) console.error(error);
  };

  return (
    <form onSubmit={handleLogin} className="p-4 border border-gray-200 rounded-md">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full p-2 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700 mt-4 mb-2"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full p-2 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        type="submit"
        className="mt-4 bg-blue-500 p-2 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;