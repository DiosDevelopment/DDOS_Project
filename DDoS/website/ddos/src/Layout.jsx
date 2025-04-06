import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router';
function Layout() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Header />
        <main className="w-full h-full">
          <Outlet /> 
        </main>
        <Footer />
      </div>
    );
}

export default Layout;