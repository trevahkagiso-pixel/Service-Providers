import { useState, useEffect } from 'react'
import { SERVICES } from '../constants/services'

const PROVIDERS = [
  { id: 1, name: 'John Martinez', service: 'Plumbing', rating: 4.9, reviews: 127, experience: '8 years', avatar: '👨🏽🔧', price: '$80-120/hr', specialties: ['Emergency repairs', 'Installations', 'Leak detection'], verified: true },
  { id: 2, name: 'Sarah Chen', service: 'Electrical', rating: 4.8, reviews: 94, experience: '6 years', avatar: '👩🏻🔧', price: '$90-130/hr', specialties: ['Wiring', 'Panel upgrades', 'Smart home'] },
  { id: 3, name: 'Mike Johnson', service: 'Cleaning', rating: 4.9, reviews: 203, experience: '5 years', avatar: '🧑🏿💼', price: '$60-90/hr', specialties: ['Deep cleaning', 'Move-out', 'Commercial'] },
  { id: 4, name: 'Lisa Anderson', service: 'Appliance Repair', rating: 4.7, reviews: 81, experience: '10 years', avatar: '👩🏾🔧', price: '$75-110/hr', specialties: ['Refrigerators', 'Washers', 'Ovens'] },
  { id: 5, name: 'David Kim', service: 'Gardening', rating: 4.8, reviews: 156, experience: '7 years', avatar: '👨🏻🌾', price: '$70-100/hr', specialties: ['Landscaping', 'Maintenance', 'Design'], verified: true },
  { id: 6, name: 'Emma Wilson', service: 'Painting', rating: 4.9, reviews: 142, experience: '9 years', avatar: '👩🏿🎨', price: '$65-95/hr', specialties: ['Interior', 'Exterior', 'Decorative'] },
  { id: 7, name: 'Carlos Rodriguez', service: 'HVAC', rating: 4.8, reviews: 118, experience: '12 years', avatar: '👨🏽🔧', price: '$95-140/hr', specialties: ['Installation', 'Maintenance', 'Repair'] },
  { id: 8, name: 'Rachel Brown', service: 'Carpentry', rating: 4.9, reviews: 167, experience: '11 years', avatar: '👩🏾🔧', price: '$85-125/hr', specialties: ['Custom furniture', 'Repairs', 'Remodeling'] },
  { id: 9, name: 'James Thompson', service: 'Plumbing & Electrical', rating: 4.9, reviews: 215, experience: '15 years', avatar: '👨🏿🔧', price: '$100-150/hr', specialties: ['Plumbing repairs', 'Electrical wiring', 'Emergency services', 'Home renovations'], verified: true },
  { id: 10, name: 'Maria Garcia', service: 'Cleaning & Gardening', rating: 4.8, reviews: 189, experience: '9 years', avatar: '👩🏽🌿', price: '$70-110/hr', specialties: ['Deep cleaning', 'Lawn care', 'Garden design', 'Seasonal maintenance'] },
  { id: 11, name: 'Kevin Patel', service: 'Painting & Carpentry', rating: 4.9, reviews: 234, experience: '13 years', avatar: '👨🏾🎨', price: '$80-130/hr', specialties: ['Interior painting', 'Custom woodwork', 'Furniture building', 'Home finishing'] },
  { id: 12, name: 'Aisha Mohammed', service: 'HVAC & Electrical & Plumbing', rating: 4.9, reviews: 278, experience: '16 years', avatar: '👩🏿🔧', price: '$110-160/hr', specialties: ['HVAC installation', 'Electrical systems', 'Plumbing repairs', 'Climate control', 'Emergency services'], verified: true },
  { id: 13, name: 'Tom Chen', service: 'Carpentry & Painting & Appliance Repair', rating: 4.8, reviews: 192, experience: '11 years', avatar: '👨🏻🔨', price: '$85-135/hr', specialties: ['Custom carpentry', 'Interior/exterior painting', 'Appliance diagnostics', 'Home repairs', 'Furniture restoration'] }
]

export default function Providers() {
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [verifiedFilter, setVerifiedFilter] = useState(false)
  const [longServiceFilter, setLongServiceFilter] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getServiceIcon = (serviceName: string) => {
    return SERVICES.find(s => s.name === serviceName)?.icon || '🔧'
  }

  const filteredProviders = PROVIDERS.filter(provider => {
    const matchesCategory = categoryFilter === 'All' || provider.service.includes(categoryFilter)
    const matchesVerified = !verifiedFilter || provider.verified
    const matchesLongService = !longServiceFilter || parseInt(provider.experience) >= 5
    return matchesCategory && matchesVerified && matchesLongService
  })

  return (
    <section>
      <div className="page-header">
        <h1>Browse Service Providers</h1>
        <p>Connect with verified professionals. View profiles, ratings, and book directly.</p>
      </div>

      <div style={{marginBottom: 'var(--spacing-xl)', display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap'}}>
        <select 
          value={categoryFilter} 
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{padding: 'var(--spacing-sm) var(--spacing-md)', borderRadius: 'var(--radius-md)', border: '2px solid var(--color-border)', fontSize: '0.9rem', cursor: 'pointer', height: '38px', transition: 'all var(--transition-fast)', background: 'white', flex: '1 1 auto', minWidth: '150px'}}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6366f1'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
        >
          <option value="All">All Services</option>
          {SERVICES.map(s => (
            <option key={s.name} value={s.name}>{s.icon} {s.name}</option>
          ))}
        </select>

        <label style={{display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer', padding: 'var(--spacing-sm) var(--spacing-md)', background: verifiedFilter ? 'rgba(16, 185, 129, 0.1)' : 'transparent', borderRadius: 'var(--radius-md)', border: '2px solid var(--color-border)', fontSize: '0.9rem', height: '38px', transition: 'all var(--transition-fast)', flex: '1 1 auto', minWidth: '140px', justifyContent: 'center'}} onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'}}>
          <input 
            type="checkbox" 
            checked={verifiedFilter} 
            onChange={(e) => setVerifiedFilter(e.target.checked)}
            style={{cursor: 'pointer', margin: 0}}
          />
          ✓ Verified Only
        </label>

        <label style={{display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer', padding: 'var(--spacing-sm) var(--spacing-md)', background: longServiceFilter ? 'rgba(99, 102, 241, 0.1)' : 'transparent', borderRadius: 'var(--radius-md)', border: '2px solid var(--color-border)', fontSize: '0.9rem', height: '38px', transition: 'all var(--transition-fast)', flex: '1 1 auto', minWidth: '140px', justifyContent: 'center'}} onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'}}>
          <input 
            type="checkbox" 
            checked={longServiceFilter} 
            onChange={(e) => setLongServiceFilter(e.target.checked)}
            style={{cursor: 'pointer', margin: 0}}
          />
          5+ Years Experience
        </label>
      </div>

      <div className="grid grid-2">
        {filteredProviders.map((provider, index) => (
          <div key={provider.id} className="card" style={{padding: isMobile ? 'var(--spacing-md)' : 'var(--spacing-xl)', cursor: 'pointer', transition: 'all var(--transition-base)', animationDelay: `${index * 0.1}s`}} onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = ''}}>
            <div style={{display: 'flex', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start'}}>
              <div style={{
                fontSize: '3.5rem',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(16, 185, 129, 0.1))',
                borderRadius: 'var(--radius-lg)',
                flexShrink: 0,
                transition: 'all var(--transition-base)'
              }}
              onMouseEnter={(e) => {e.currentTarget.style.transform = 'rotate(5deg) scale(1.1)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(16, 185, 129, 0.2))'}} 
              onMouseLeave={(e) => {e.currentTarget.style.transform = 'rotate(0deg) scale(1)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(16, 185, 129, 0.1))'}}>
                {provider.avatar}
              </div>
              <div style={{flex: 1, textAlign: isMobile ? 'center' : 'left'}}>
                <h3 style={{marginBottom: 'var(--spacing-xs)', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', justifyContent: isMobile ? 'center' : 'flex-start'}}>
                  {provider.name}
                  {provider.verified && <span style={{fontSize: '1rem', color: '#10b981'}} title="Verified Provider">✓</span>}
                </h3>
                <div style={{display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)', justifyContent: isMobile ? 'center' : 'flex-start'}}>
                  <span style={{fontSize: '1.1rem'}}>{getServiceIcon(provider.service)}</span>
                  <span style={{color: 'var(--color-text-light)', fontWeight: 600}}>{provider.service}</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-start'}}>
                  <div style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: 'white', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: 700, whiteSpace: 'nowrap', transition: 'all var(--transition-fast)'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    ⭐ {provider.rating}
                  </div>
                  <span style={{fontSize: '0.85rem', color: 'var(--color-text-light)', whiteSpace: 'nowrap'}}>{provider.reviews} reviews • {provider.experience}</span>
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
              <button className="btn btn-primary" style={{transition: 'all var(--transition-fast)', width: isMobile ? '100%' : 'auto'}} onMouseEnter={(e) => {e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.4)'}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = ''}}>
                💬 Chat With {provider.name.split(' ')[0]}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
