import { Link } from 'react-router-dom'

const demoServices = [
  { 
    name: 'Plumbing', 
    icon: '🚰', 
    description: 'Expert repairs, installations, and preventive maintenance',
    rating: '4.9',
    services: 'Leaks, Fixtures, Unclogging'
  },
  { 
    name: 'Electrical', 
    icon: '⚡', 
    description: 'Safe wiring, repairs, and system upgrades by licensed technicians',
    rating: '4.8',
    services: 'Installations, Repairs, Upgrades'
  },
  { 
    name: 'Cleaning', 
    icon: '✨', 
    description: 'Thorough professional cleaning for homes and offices',
    rating: '4.9',
    services: 'Deep Clean, Regular, Commercial'
  },
  { 
    name: 'Appliance Repair', 
    icon: '🔧', 
    description: 'Quick fixes for refrigerators, washers, ovens, and more',
    rating: '4.7',
    services: 'Washer, Dryer, Oven, Fridge'
  },
  { 
    name: 'Gardening', 
    icon: '🌿', 
    description: 'Transform your outdoor space with professional landscaping',
    rating: '4.8',
    services: 'Landscaping, Maintenance, Design'
  },
  { 
    name: 'Painting', 
    icon: '🎨', 
    description: 'Professional interior and exterior painting with premium finishes',
    rating: '4.9',
    services: 'Interior, Exterior, Specialty'
  },
  { 
    name: 'HVAC', 
    icon: '❄️', 
    description: 'Expert heating and cooling system maintenance and repair',
    rating: '4.8',
    services: 'Installation, Service, Repair'
  },
  { 
    name: 'Carpentry', 
    icon: '🪵', 
    description: 'Custom woodwork, furniture, and structural repairs',
    rating: '4.9',
    services: 'Custom Work, Repairs, Design'
  }
]

export default function Services() {
  return (
    <section>
      <div style={{textAlign: 'center', marginBottom: 'var(--spacing-2xl)'}}>
        <h1 style={{marginBottom: 'var(--spacing-md)'}}>Browse Our Services</h1>
        <p style={{fontSize: '1.1rem', marginBottom: 0, maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)'}}>
          Expert professionals ready to handle any project. Browse, compare, and book instantly.
        </p>
      </div>

      <div className="grid grid-3">
        {demoServices.map((service) => (
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
