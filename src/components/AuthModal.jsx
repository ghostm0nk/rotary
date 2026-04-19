import React, { useState } from 'react';

const AuthModal = ({ onSignUp, onSignIn, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleSignUp = () => {
    onSignUp(email, password);
  };

  const handleSignIn = () => {
    onSignIn(email, password);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold">{isSigningUp ? 'Sign Up' : 'Sign In'}</h2>
        <form>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block p-2 mb-4" />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block p-2 mb-4" />
          </label>
          {isSigningUp ? (
            <button onClick={handleSignUp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          ) : (
            <button onClick={handleSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          )}
          <button onClick={() => setIsSigningUp(!isSigningUp)} className="text-blue-500 hover:text-blue-700">
            {isSigningUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
          </button>
        </form>
        <button onClick={onClose} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthModal;