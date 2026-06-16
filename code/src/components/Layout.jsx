import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Layout() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="layout">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="site-logo">
            <span className="logo-mark">H</span> Horizon
          </NavLink>
          <button
            className={`site-menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
          <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="footer-brand">
            <span className="logo-mark">H</span> Horizon
          </div>
          <p>© {new Date().getFullYear()} Horizon Studio. Crafted with intention.</p>
        </div>
      </footer>
    </div>
  )
}
