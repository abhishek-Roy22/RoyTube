import React from 'react';
import PageHeader from '../layouts/PageHeader';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
