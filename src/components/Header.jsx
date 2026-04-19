import { useState } from 'react';
import { signOut } from 'firebase/auth';

const Header = ({ user, setShowAuthModal }) => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="bg-white shadow-sm navbar">
      <nav className="container mx-auto px-6 py-3 flex justify-between">
        <h1 className="text-lg font-bold">Rotary</h1>
        {user ? (
          <button
            onClick={handleLogout}
            className="py-2 px-4 bg-red-500 text-white rounded-lg"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setShowAuthModal(true)}
            className="py-2 px-4 bg-blue-500 text-white rounded-lg"
          >
            Login
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;