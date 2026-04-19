import React from 'react';
import LogoutButton from './LogoutButton';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Dashboard</h1>
        <LogoutButton />
      </div>
      {/* Dashboard content here */}
    </div>
  );
};

export default Dashboard;