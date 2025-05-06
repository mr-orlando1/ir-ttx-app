// frontend/src/components/EnhancedLayout.tsx
import React, { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  FileText,
  Users,
  CalendarDays,
  ClipboardList,
  BarChart2,
  Bell,
  UserCircle,
} from 'lucide-react';
import { routes, RouteDef } from '../routes';
import ToggleTheme from './ToggleTheme';
import Logo from '../assets/agio-logo.svg';

const navIcons: Record<string, React.ReactNode> = {
  Dashboard: <Home size={18} />,
  'Scenario Library': <FileText size={18} />,
  'Participant Setup': <Users size={18} />,
  'Schedule Builder': <CalendarDays size={18} />,
  'Inject Log': <ClipboardList size={18} />,
  Settings: <UserCircle size={18} />,
};

export default function EnhancedLayout({ children }: { children: ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    \`flex items-center gap-2 px-4 py-2 rounded hover:bg-neutral-700 transition-colors \${isActive ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-300'}\`;

  return (
    <div className="flex h-screen bg-neutral-900 text-neutral-100 font-inter">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 bg-neutral-950 border-r border-neutral-800">
        <header className="flex items-center gap-2 p-4 text-lg font-bold tracking-wide">
          <img src={Logo} alt="Agio logo" className="h-6" /> IR TTX
        </header>
        <nav className="flex flex-col gap-1 p-2 flex-1 overflow-y-auto">
          {routes.map((r: RouteDef) => (
            <NavLink key={r.path} to={r.path} className={linkClasses} end>
              {navIcons[r.name] ?? <span className="w-4" />} <span>{r.name}</span>
            </NavLink>
          ))}
        </nav>
        <footer className="p-4 border-t border-neutral-800 text-xs text-neutral-500 flex items-center gap-2">
          <BarChart2 size={14} /> v3.1 • build {import.meta.env.VITE_GIT_SHA?.slice(0, 7) || 'dev'}
        </footer>
      </aside>

      {/* Mobile Drawer Button */}
      <button
        onClick={() => setDrawerOpen(true)}
        className="md:hidden absolute top-3 left-3 p-2 rounded hover:bg-neutral-800"
        aria-label="Open navigation"
      >
        <Menu />
      </button>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setDrawerOpen(false)}>
          <aside
            onClick={(e) => e.stopPropagation()}
            className="w-64 h-full bg-neutral-950 border-r border-neutral-800 shadow-lg p-4 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <img src={Logo} alt="Agio logo" className="h-6" />
              <button onClick={() => setDrawerOpen(false)} className="p-2 rounded hover:bg-neutral-800" aria-label="Close navigation">
                <X />
              </button>
            </div>
            {routes.map((r: RouteDef) => (
              <NavLink key={r.path} to={r.path} className={linkClasses} end onClick={() => setDrawerOpen(false)}>
                {navIcons[r.name] ?? <span className="w-4" />} <span>{r.name}</span>
              </NavLink>
            ))}
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="flex items-center justify-between gap-4 px-6 py-3 border-b border-neutral-800 bg-neutral-950 shadow-sm">
          <div className="flex items-center gap-2 md:hidden">
            <img src={Logo} alt="Agio" className="h-5" />
            <span className="font-semibold tracking-wide">IR TTX</span>
          </div>
          <div className="flex-1 max-w-sm relative">
            <input
              type="search"
              placeholder="Quick search…"
              className="w-full rounded-md bg-neutral-800 text-sm placeholder-neutral-500 py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <span className="absolute right-3 top-2.5 text-neutral-500 text-xs">⌘K</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setNotifOpen(!notifOpen)} className="p-2 hover:bg-neutral-800 rounded">
              <Bell size={18} />
            </button>
            <ToggleTheme />
          </div>
        </header>
        {/* Notification Panel */}
        {notifOpen && (
          <aside className="absolute right-4 top-16 w-80 bg-white dark:bg-neutral-800 shadow-lg rounded-md p-4 z-50">
            <h4 className="font-semibold mb-2">Notifications</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">No new alerts</p>
          </aside>
        )}
        <section className="flex-1 overflow-y-auto p-6 bg-neutral-50 dark:bg-neutral-900 transition-colors">
          {children}
        </section>
      </main>
    </div>
  );
}
