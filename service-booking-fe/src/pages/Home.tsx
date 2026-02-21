import { Link } from 'react-router-dom'

export default function Home() {
  const features = [
    {
      icon: '⚡',
      title: 'Fast & Easy',
      description: 'Request a service in minutes, not hours'
    },
    {
      icon: '⭐',
      title: 'Trusted Providers',
      description: 'All providers are verified and rated'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees, clear upfront quotes'
    },
    {
      icon: '🛡️',
      title: 'Secure & Safe',
      description: 'Your data and transactions are protected'
    }
  ]

  return (
    <section>
      <div className="hero">
        <h1>Find Trusted Service Providers Near You</h1>
        <p>Plumbers, electricians, cleaners, and more — request a service in minutes and connect with verified professionals</p>
        <div className="hero-buttons">
          <Link to="/services" className="btn btn-primary">Browse Services</Link>
          <Link to="/book" className="btn btn-secondary">Book Now</Link>
        </div>
      </div>

      <div className="grid grid-4" style={{marginTop: 'var(--spacing-2xl)'}}
      >
        {features.map((feature) => (
          <div key={feature.title} className="card">
            <div className="card-icon">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="card" style={{marginTop: 'var(--spacing-2xl)', background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)', color: 'white', textAlign: 'center', padding: 'var(--spacing-2xl)'}}
      >
        <h2 style={{color: 'white', marginBottom: 'var(--spacing-md)'}}>Become a Service Provider</h2>
        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: 'var(--spacing-lg)'}}>Grow your business by joining our platform of trusted professionals</p>
        <Link to="/provider-signup" className="btn" style={{backgroundColor: 'white', color: '#0066cc'}}>
          Get Started Today
        </Link>
      </div>
    </section>
  )
}
