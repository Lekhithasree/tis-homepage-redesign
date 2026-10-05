import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="logo">
          <span className="logo-main">TIS</span>
          <span className="logo-sub">Tulas International School</span>
        </a>

        <nav className="desktop-nav">
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#campus">Campus</a>
          <a href="#admissions">Admissions</a>

          <a href="#admissions" className="apply-button">
            Apply Now
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {menuOpen && (
        <nav className="mobile-nav">
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#academics" onClick={() => setMenuOpen(false)}>
            Academics
          </a>

          <a href="#campus" onClick={() => setMenuOpen(false)}>
            Campus
          </a>

          <a href="#admissions" onClick={() => setMenuOpen(false)}>
            Admissions
          </a>

          <a
            href="#admissions"
            className="mobile-apply-button"
            onClick={() => setMenuOpen(false)}
          >
            Apply Now
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar