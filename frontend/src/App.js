import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import Contact from './pages/contact';

function App() {    
  return (
    
      <Router>
          <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/Service" Component={Service} />
          </Routes>
      </Router>
  );
}

export default App;
