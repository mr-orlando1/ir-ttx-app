import React from 'react';
import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}