import React from 'react';
import Header from './components/navbar/Header';
import { ThemeProvider } from './contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
}

const Layout = ({ children, hideHeader = false }: LayoutProps) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
        {!hideHeader && <Header />}
        <main className={!hideHeader ? "pt-24" : ""}>{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;