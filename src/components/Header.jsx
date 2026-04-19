import React from 'react';

const Header = ({ user, onSignOut }) => {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Rotary</h1>
        {user ? (
          <div className="flex items-center">
            <span className="mr-4">{user.email}</span>
            <button onClick={onSignOut} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Sign Out
            </button>
          </div>
        ) : (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;