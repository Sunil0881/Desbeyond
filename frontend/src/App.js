import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Navbar from './components/navbar';
import About from './pages/about';
import Service from './pages/service';
import Contact from './pages/contact';

function App() {
  return (
    <div className="bg-gradient-to-b from-orange-500 via-gray-400 to-blue-500 ">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={ <Home />} 
            />
            <Route 
              path="/about" 
              element={ <About />} 
            />
            <Route 
              path="/service" 
              element={ <Service />} 
            />
            <Route 
              path="/contact" 
              element={ <Contact />} 
            />
          </Routes>
          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
