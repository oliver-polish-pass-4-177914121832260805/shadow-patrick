import { Outlet, NavLink, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="layout">
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            port<span>.</span>folio
          </Link>
          <ul className="nav-links">
            <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
          </ul>
        </div>
      </nav>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} portfolio. Built with React &amp; Vite.</p>
      </footer>
    </div>
  )
}
