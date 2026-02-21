const demoServices = [
  { name: 'Plumbing', icon: '🚰', description: 'Repairs, installations, and maintenance' },
  { name: 'Electrical', icon: '⚡', description: 'Wiring, repairs, and upgrades' },
  { name: 'Cleaning', icon: '🧹', description: 'Home and office cleaning services' },
  { name: 'Appliance Repair', icon: '🔧', description: 'All major appliance repairs' },
  { name: 'Gardening', icon: '🌿', description: 'Landscaping and yard maintenance' },
  { name: 'Painting', icon: '🎨', description: 'Interior and exterior painting' },
  { name: 'HVAC', icon: '❄️', description: 'Heating and cooling systems' },
  { name: 'Carpentry', icon: '🪵', description: 'Custom woodwork and repairs' }
]

export default function Services() {
  return (
    <section>
      <div style={{textAlign: 'center', marginBottom: 'var(--spacing-2xl)'}}
      >
        <h1>Popular Services</h1>
        <p style={{fontSize: '1.1rem', marginBottom: 0}}>Find the service you need from our network of verified professionals</p>
      </div>

      <div className="grid grid-3">
        {demoServices.map((service) => (
          <div key={service.name} className="card">
            <div className="card-icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <button className="btn btn-primary" style={{width: '100%', marginTop: 'var(--spacing-md)'}}
            >
              Request {service.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}