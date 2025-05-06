import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';
import Tooltip from './Tooltip';

const SideNav = () => (
  <aside className="bg-neutral-900 text-white w-56 hidden md:block h-screen">
    <nav className="flex flex-col space-y-1 p-4">
      {routes.map((r) => (
        <Tooltip key={r.path} text={r.name}>
          <NavLink
            to={r.path}
            className={({ isActive }) =>
              'rounded px-3 py-2 hover:bg-neutral-700 ' +
              (isActive ? 'bg-neutral-800 font-semibold' : '')
            }
          >
            {r.name.charAt(0)}
          </NavLink>
        </Tooltip>
      ))}
    </nav>
  </aside>
);

export default SideNav;
