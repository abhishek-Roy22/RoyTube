import React from 'react';
import PageHeader from '../layouts/PageHeader';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Layout = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === 'light' ? 'light-theme' : 'dark-theme'
      }`}
    >
      <nav
        className={`sticky top-0 z-10 mb-6 lg:mx-4 ${
          theme === 'light' ? 'bg-neutral-200' : 'bg-slate-900'
        }`}
      >
        <PageHeader />
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
