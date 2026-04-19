import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
const Header = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e) => {
      const toggleBtn = document.querySelector('.menu-toggle');
      const menuContent = document.querySelector('.menu-content');
      if (
        !e.target.closest('.menu-content') &&
        e.target !== toggleBtn
      ) {
        setShowMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error(error);
  };
  return (
    <header className="bg-white p-4 border-b border-gray-200">
      <nav className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-700">Rotary</h1>
        {user ? (
          <div className="relative">
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200" onClick={() => setShowMenu(!showMenu)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {showMenu && (
              <ul className="absolute top-full right-0 bg-white p-2 border border-gray-200 rounded-md menu-content">
                <li>
                  <button className="block p-2 hover:bg-gray-100" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className="flex space-x-4">
            {/* Removed login and signup links */}
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;