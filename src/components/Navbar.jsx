import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarInner}>
        <div className={styles.brand}>
          <div className={styles.logo} />
          <span>Arbitrum Pulse</span>
        </div>

        <button
          type="button"
          className={styles.toggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="navbar-links"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav id="navbar-links" className={`${styles.navlinks} ${open ? styles.open : ''}`}>
          <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/concepts" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>
            Concepts
          </NavLink>
          <NavLink to="/live-prices" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>
            Live Prices
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>
            Portfolio
          </NavLink>
          <NavLink to="/block-simulator" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>
            Block Simulator
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
