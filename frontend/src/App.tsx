import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import emailjs from 'emailjs-com';
import HomePage from './HomePage';
import Layout from './Layout';

const App = () => {
  useEffect(() => {
    // Initialize EmailJS only if the key exists
    const emailJsKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    if (emailJsKey) {
      emailjs.init(emailJsKey);
      console.log('EmailJS initialized successfully');
    } else {
      console.warn('EmailJS Public Key not found in environment variables');
    }
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