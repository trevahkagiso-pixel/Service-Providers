import { Link } from 'react-router-dom'

export default function Home() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Get matched with verified providers in minutes'
    },
    {
      icon: '⭐',
      title: 'Top Rated Pros',
      description: 'Only professionals with proven track records'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Transparent pricing with zero hidden fees'
    },
    {
      icon: '🛡️',
      title: 'Fully Secured',
      description: 'Bank-grade protection for your data'
    }
  ]

  const benefits = [
    { icon: '📱', title: 'Mobile Ready', text: 'Book anytime, anywhere with one tap' },
    { icon: '🕐', title: 'Instant Scheduling', text: 'Same-day or weeks ahead—your choice' },
    { icon: '💳', title: 'Secure Payments', text: 'Multiple payment options, guaranteed safe' },
    { icon: '📞', title: '24/7 Support', text: 'We\'re here whenever you need us' },
    { icon: '✅', title: 'Quality Guarantee', text: 'Satisfaction guaranteed or your money back' },
    { icon: '🌟', title: 'Best Value', text: 'Premium quality at competitive rates' }
  ]

  return (
    <section>
      <div className="hero">
        <h1>Your Trusted Service Marketplace</h1>
        <p>Connect with verified professionals for plumbing, electrical, cleaning, and more. Experience hassle-free booking with guaranteed quality and competitive pricing.</p>
        <div className="hero-buttons">
          <Link to="/services" className="btn btn-primary">Browse Services</Link>
          <Link to="/book" className="btn btn-secondary">Book Now</Link>
        </div>
      </div>

      <div className="grid grid-4" style={{marginTop: 'var(--spacing-2xl)', marginBottom: 'var(--spacing-2xl)'}}>
        {features.map((feature) => (
          <div key={feature.title} className="card">
            <div className="card-icon">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div style={{marginBottom: 'var(--spacing-2xl)'}}>        
        <h2 style={{textAlign: 'center', marginBottom: 'var(--spacing-2xl)'}}>Why Choose Us?</h2>
        <div className="grid grid-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="card">
              <div style={{fontSize: '2.5rem', marginBottom: 'var(--spacing-md)'}}>{benefit.icon}</div>
              <h4 style={{marginBottom: 'var(--spacing-sm)'}}>{benefit.title}</h4>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #10b981 100%)',
        color: 'white',
        textAlign: 'center',
        padding: 'var(--spacing-2xl)',
        marginBottom: 'var(--spacing-2xl)',
        border: 'none',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{position: 'relative', zIndex: 1}}>
          <h2 style={{color: 'white', marginBottom: 'var(--spacing-md)'}}>Are You a Service Provider?</h2>
          <p style={{color: 'rgba(255,255,255,0.95)', marginBottom: 'var(--spacing-lg)', fontSize: '1.1rem'}}>Join thousands of professionals earning steady income with a continuous stream of verified clients</p>
          <Link to="/provider-signup" className="btn" style={{backgroundColor: 'white', color: '#6366f1', fontWeight: 700, boxShadow: '0 4px 15px rgba(0,0,0,0.2)'}}>
            Become a Partner
          </Link>
        </div>
      </div>

      <div style={{textAlign: 'center', marginTop: 'var(--spacing-2xl)'}}>        
        <h2 style={{marginBottom: 'var(--spacing-xl)'}}>How It Works</h2>
        <div className="grid grid-3">
          <div className="card" style={{position: 'relative'}}>
            <div style={{fontSize: '3rem', marginBottom: 'var(--spacing-md)', fontWeight: 'bold', background: 'linear-gradient(135deg, #6366f1, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>1</div>
            <h4>Post Your Request</h4>
            <p>Describe what you need and set your budget</p>
          </div>
          <div className="card" style={{position: 'relative'}}>
            <div style={{fontSize: '3rem', marginBottom: 'var(--spacing-md)', fontWeight: 'bold', background: 'linear-gradient(135deg, #6366f1, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>2</div>
            <h4>Get Quotes</h4>
            <p>Receive offers from qualified professionals</p>
          </div>
          <div className="card" style={{position: 'relative'}}>
            <div style={{fontSize: '3rem', marginBottom: 'var(--spacing-md)', fontWeight: 'bold', background: 'linear-gradient(135deg, #6366f1, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>3</div>
            <h4>Book & Enjoy</h4>
            <p>Choose the best fit and relax</p>
          </div>
        </div>
      </div>
    </section>
  )
}
