import React from 'react';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import { AnimatePresence } from "framer-motion";

function App() {    
  return (
    <div className='bg-gradient-to-r from-blue-600 via-sky-300 to-sky-400'>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <Router>
        <AnimatePresence>
          <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/Service" Component={Service} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
