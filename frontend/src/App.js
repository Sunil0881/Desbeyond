import React from 'react';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import '../src/pages/css/text.css';
import { AnimatePresence } from "framer-motion";
import Blogs from './pages/Blogs';
import Admin from './pages/Admin/Admin';
import Dashboard from './pages/Admin/Dashboard';
import AddBlog from './pages/Admin/AddBlog';

function App() {   
  const isLoggedIn = window.localStorage.getItem('loggedIn');   
  return (

   
    <div >
      <link rel="stylesheet" href="Desbeyond/frontend/src/pages/css/text.css"/>
      <script src="Desbeyond/frontend/src/pages/js/space.js" />

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <Router>

      {/* <div class='bg'></div> */}
        <AnimatePresence>
          <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/Service" Component={Service} />
          <Route path="/Blogs" Component={Blogs} />
          <Route path="/Admin" Component={Admin} />
          <Route path="/Dashboard" Component={isLoggedIn === 'true' ? Dashboard : Admin} />
          <Route path="/AddBlog" Component={isLoggedIn === 'true' ? AddBlog : Admin} />

          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
