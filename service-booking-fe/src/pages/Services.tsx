import { Link } from 'react-router-dom'
import { SERVICES } from '../constants/services'

export default function Services() {
  return (
    <section>
      <div className="page-header">
        <h1>Browse Our Services</h1>
        <p>Expert professionals ready to handle any project. Browse, compare, and book instantly.</p>
      </div>

      <div className="grid grid-3">
        {SERVICES.map((service) => (
          <div key={service.name} className="card">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-md)'}}>
              <div className="card-icon" style={{margin: 0, fontSize: '2.5rem'}}>{service.icon}</div>
              <div style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', fontWeight: 700}}>
                ⭐ {service.rating}
              </div>
            </div>
            <h3 style={{marginBottom: 'var(--spacing-sm)', fontSize: '1.25rem'}}>{service.name}</h3>
            <p style={{marginBottom: 'var(--spacing-md)', fontSize: '0.9rem'}}>{service.description}</p>
            <p style={{marginBottom: 'var(--spacing-lg)', fontSize: '0.85rem', color: 'var(--color-text-light)', fontWeight: 500}}>
              {service.services}
            </p>
            <Link to="/book" className="btn btn-primary" style={{width: '100%', textAlign: 'center', display: 'block'}}>
              Book {service.name}
            </Link>
          </div>
        ))}
      </div>

      <div style={{marginTop: 'var(--spacing-2xl)', textAlign: 'center', padding: 'var(--spacing-xl)', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(16, 185, 129, 0.05))', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(226, 232, 240, 0.8)'}}>
        <h3 style={{marginBottom: 'var(--spacing-md)'}}>Don't see what you need? 🔍</h3>
        <p style={{marginBottom: 'var(--spacing-lg)', color: 'var(--color-text-light)'}}>
          Post a custom request and we'll find qualified professionals to match your exact needs
        </p>
        <Link to="/book" className="btn btn-secondary">Post a Request</Link>
      </div>
    </section>
  )
}
