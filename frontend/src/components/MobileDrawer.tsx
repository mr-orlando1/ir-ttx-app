// frontend/src/components/MobileDrawer.tsx
import React, { useState, FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { routes, RouteDef } from '../routes';

const MobileDrawer: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center">
      <button
        className="p-2"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setOpen(false)}
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            className="absolute left-0 top-0 h-full w-64 bg-neutral-900 text-white p-4 space-y-2"
          >
            {routes.map((r: RouteDef) => (
              <NavLink
                key={r.path}
                to={r.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded px-3 py-2 hover:bg-neutral-700 ${
                    isActive ? 'bg-neutral-800 font-semibold' : ''
                  }`
                }
              >
                {r.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileDrawer;