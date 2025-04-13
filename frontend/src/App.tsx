import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import emailjs from 'emailjs-com';
import HomePage from './HomePage';
import Layout from './Layout';

const App = () => {
  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;