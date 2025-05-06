// frontend/src/components/Layout.tsx
import React, { ReactNode } from 'react';
import SideNav from './SideNav';
import MobileDrawer from './MobileDrawer';
import Breadcrumbs from './Breadcrumbs';
import ToggleTheme from './ToggleTheme';
import MotionLayout from './MotionLayout';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors">
    <SideNav />
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-4 py-2 border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
        <MobileDrawer />
        <Breadcrumbs />
        <ToggleTheme />
      </header>
      <main className="flex-1 p-4">
        <MotionLayout>{children}</MotionLayout>
      </main>
    </div>
  </div>
);

export default Layout;