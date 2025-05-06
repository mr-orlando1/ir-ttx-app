// frontend/src/components/Breadcrumbs.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes, RouteDef } from '../routes';

const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const parts = pathname.split('/').filter(Boolean);
  const crumbs = parts.map((_, i) => '/' + parts.slice(0, i + 1).join('/'));

  return (
    <nav className="text-sm breadcrumbs mb-2">
      <ol className="flex space-x-2 text-neutral-500">
        <li><Link to="/">Home</Link></li>
        {crumbs.map((path) => {
          const route = routes.find((r: RouteDef) => r.path === path);
          return route ? (
            <li key={path} className="flex items-center">
              <span className="mx-1">/</span>
              <Link to={path}>{route.name}</Link>
            </li>
          ) : null;
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
