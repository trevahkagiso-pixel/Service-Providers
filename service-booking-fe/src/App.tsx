import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Book from './pages/Book'
import ProviderSignup from './pages/ProviderSignup'

export default function App() {
  return (
    <>
      <nav>
        <div className="nav-container">
          <Link to="/" className="nav-brand">🔧 ServiceHub</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/book">Book Service</Link>
            <Link to="/provider-signup" className="cta-btn">Become a Provider</Link>
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

      <footer style={{backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)', padding: 'var(--spacing-xl)', textAlign: 'center', color: 'var(--color-text-light)'}}
      >
        <p>&copy; 2026 ServiceHub. All rights reserved.</p>
      </footer>
    </>
  )
}