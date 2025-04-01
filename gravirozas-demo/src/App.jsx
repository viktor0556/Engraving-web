import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Admin from './components/Admin';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="font-sans">
      <Navbar setPage={setPage} />
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'gallery' && <Gallery />}
      {page === 'about' && <About />}
      {page === 'contact' && <Contact />}
      {page === 'admin' && <Admin />}
    </div>
  );
}

export default App;
