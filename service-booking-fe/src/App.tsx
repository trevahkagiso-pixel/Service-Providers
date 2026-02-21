import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Book from './pages/Book'
import ProviderSignup from './pages/ProviderSignup'

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900">
      <nav style={{padding: '12px 16px', borderBottom: '1px solid #eee'}}>
        <Link to="/" style={{marginRight: 12, fontWeight: 600}}>ServiceBooking</Link>
        <Link to="/services" style={{marginRight: 12}}>Services</Link>
        <Link to="/book" style={{marginRight: 12}}>Book</Link>
        <Link to="/provider-signup">Become a Provider</Link>
      </nav>

      <main style={{padding: 16}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/provider-signup" element={<ProviderSignup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}