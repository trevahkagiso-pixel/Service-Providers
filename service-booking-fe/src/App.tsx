import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Book from './pages/Book'
import ProviderSignup from './pages/ProviderSignup'

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme-mode')
    return saved ? saved === 'dark' : false
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme-mode', 'dark')
    } else {
      root.removeAttribute('data-theme')
      localStorage.setItem('theme-mode', 'light')
    }
  }, [isDark])

  return (
    <>
      <nav>
        <div className="nav-container">
          <Link to="/" className="nav-brand">🔧 ServiceHub</Link>
          <div className="nav-links">
            <Link to="/services">Services</Link>
            <Link to="/book">Book</Link>
            <Link to="/provider-signup" className="cta-btn">Become a Provider</Link>
            <button 
              onClick={() => setIsDark(!isDark)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.3rem',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/provider-signup" element={<ProviderSignup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer style={{borderTop: '1px solid var(--color-border)', padding: 'var(--spacing-2xl) var(--spacing-xl)', textAlign: 'center', color: 'var(--color-text-light)', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.02) 0%, rgba(16, 185, 129, 0.02) 100%)'}}
      >
        <p style={{marginBottom: 'var(--spacing-sm)'}}>© 2026 ServiceHub. All rights reserved.</p>
        <p style={{fontSize: '0.9rem', margin: 0}}>Built for connecting customers with trusted professionals</p>
      </footer>
    </>
  )
}