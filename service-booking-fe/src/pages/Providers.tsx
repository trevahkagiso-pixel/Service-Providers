import { SERVICES } from '../constants/services'

const PROVIDERS = [
  { id: 1, name: 'John Martinez', service: 'Plumbing', rating: 4.9, reviews: 127, experience: '8 years', avatar: '👨🏽🔧', price: '$80-120/hr', specialties: ['Emergency repairs', 'Installations', 'Leak detection'] },
  { id: 2, name: 'Sarah Chen', service: 'Electrical', rating: 4.8, reviews: 94, experience: '6 years', avatar: '👩🏻🔧', price: '$90-130/hr', specialties: ['Wiring', 'Panel upgrades', 'Smart home'] },
  { id: 3, name: 'Mike Johnson', service: 'Cleaning', rating: 4.9, reviews: 203, experience: '5 years', avatar: '🧑🏿💼', price: '$60-90/hr', specialties: ['Deep cleaning', 'Move-out', 'Commercial'] },
  { id: 4, name: 'Lisa Anderson', service: 'Appliance Repair', rating: 4.7, reviews: 81, experience: '10 years', avatar: '👩🏾🔧', price: '$75-110/hr', specialties: ['Refrigerators', 'Washers', 'Ovens'] },
  { id: 5, name: 'David Kim', service: 'Gardening', rating: 4.8, reviews: 156, experience: '7 years', avatar: '👨🏻🌾', price: '$70-100/hr', specialties: ['Landscaping', 'Maintenance', 'Design'] },
  { id: 6, name: 'Emma Wilson', service: 'Painting', rating: 4.9, reviews: 142, experience: '9 years', avatar: '👩🏿🎨', price: '$65-95/hr', specialties: ['Interior', 'Exterior', 'Decorative'] },
  { id: 7, name: 'Carlos Rodriguez', service: 'HVAC', rating: 4.8, reviews: 118, experience: '12 years', avatar: '👨🏽🔧', price: '$95-140/hr', specialties: ['Installation', 'Maintenance', 'Repair'] },
  { id: 8, name: 'Rachel Brown', service: 'Carpentry', rating: 4.9, reviews: 167, experience: '11 years', avatar: '👩🏾🔧', price: '$85-125/hr', specialties: ['Custom furniture', 'Repairs', 'Remodeling'] }
]

export default function Providers() {
  const getServiceIcon = (serviceName: string) => {
    return SERVICES.find(s => s.name === serviceName)?.icon || '🔧'
  }

  return (
    <section>
      <div className="page-header">
        <h1>Browse Service Providers</h1>
        <p>Connect with verified professionals. View profiles, ratings, and book directly.</p>
      </div>

      <div className="grid grid-2">
        {PROVIDERS.map((provider) => (
          <div key={provider.id} className="card" style={{padding: 'var(--spacing-xl)'}}>
            <div style={{display: 'flex', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)'}}>
              <div style={{
                fontSize: '3.5rem',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(16, 185, 129, 0.1))',
                borderRadius: 'var(--radius-lg)',
                flexShrink: 0
              }}>
                {provider.avatar}
              </div>
              <div style={{flex: 1}}>
                <h3 style={{marginBottom: 'var(--spacing-xs)', fontSize: '1.3rem'}}>{provider.name}</h3>
                <div style={{display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)'}}>
                  <span style={{fontSize: '1.1rem'}}>{getServiceIcon(provider.service)}</span>
                  <span style={{color: 'var(--color-text-light)', fontWeight: 600}}>{provider.service}</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', flexWrap: 'wrap'}}>
                  <div style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: 'white', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: 700}}>
                    ⭐ {provider.rating}
                  </div>
                  <span style={{fontSize: '0.85rem', color: 'var(--color-text-light)'}}>{provider.reviews} reviews</span>
                  <span style={{fontSize: '0.85rem', color: 'var(--color-text-light)'}}>• {provider.experience}</span>
                </div>
              </div>
            </div>

            <div style={{marginBottom: 'var(--spacing-lg)'}}>
              <p style={{fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-sm)', fontWeight: 600}}>
                Specialties:
              </p>
              <ul style={{margin: 0, paddingLeft: 'var(--spacing-lg)', fontSize: '0.9rem'}}>
                {provider.specialties.map((specialty, idx) => (
                  <li key={idx} style={{marginBottom: 'var(--spacing-xs)'}}>{specialty}</li>
                ))}
              </ul>
            </div>

            <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingTop: 'var(--spacing-md)', borderTop: '1px solid var(--color-border)'}}>
              <button className="btn btn-primary">
                💬 Chat With {provider.name.split(' ')[0]}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
