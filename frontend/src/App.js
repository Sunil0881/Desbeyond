import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {    
  return (
    <div className='bg-gradient-to-r from-blue-600 via-sky-300 to-sky-400'>
      <Router>
          <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/Service" Component={Service} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
