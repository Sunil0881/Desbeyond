import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {
  return (

    <div className="bg-gradient-to-b from-orange-500 via-gray-400 to-blue-500 ">
      <BrowserRouter>
        <Navbar />
        <div className="pages">

    <div className="bg-gradient-to-b from-orange-500 via-gray-400 to-blue-500">
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
