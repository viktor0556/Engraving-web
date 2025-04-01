const Navbar = ({ setPage }) => (
  <nav className="bg-gray-800 text-white p-4 flex gap-4 justify-center">
    <button onClick={() => setPage('home')}>Főoldal</button>
    <button onClick={() => setPage('gallery')}>Galéria</button>
    <button onClick={() => setPage('about')}>Rólam</button>
    <button onClick={() => setPage('contact')}>Kapcsolat</button>
    <button onClick={() => setPage('admin')}>Admin</button>
  </nav>
);

export default Navbar;