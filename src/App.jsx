import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Loader reveal timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app-root ${isLoading ? 'loading-active' : ''}`}>
      
      {/* ==========================================
         Simple Opening Animation / Loader
         ========================================== */}
      <div className={`loader-screen ${!isLoading ? 'hidden' : ''}`}>
        <div className="loader-logo">KAVINDU CHIRATH</div>
        <div className="loader-bar"></div>
      </div>

      {!isLoading && (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;