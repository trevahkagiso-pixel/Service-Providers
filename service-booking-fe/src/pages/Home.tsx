import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'

const features = [
  { icon: '⚡', title: 'Lightning Fast', description: 'Get matched with verified providers in minutes' },
  { icon: '⭐', title: 'Top Rated Pros', description: 'Only professionals with proven track records' },
  { icon: '💰', title: 'Best Prices', description: 'Transparent pricing with zero hidden fees' },
  { icon: '🛡️', title: 'Fully Secured', description: 'Bank-grade protection for your data' }
]

const benefits = [
  { icon: '📱', title: 'Mobile Ready', description: 'Book anytime, anywhere with one tap' },
  { icon: '🕐', title: 'Instant Scheduling', description: 'Same-day or weeks ahead—your choice' },
  { icon: '💳', title: 'Secure Payments', description: 'Multiple payment options, guaranteed safe' },
  { icon: '📞', title: '24/7 Support', description: 'We\'re here whenever you need us' },
  { icon: '✅', title: 'Quality Guarantee', description: 'Satisfaction guaranteed or your money back' },
  { icon: '🌟', title: 'Best Value', description: 'Premium quality at competitive rates' }
]

const steps = [
  { num: 1, title: 'Post Your Request', description: 'Describe what you need and set your budget' },
  { num: 2, title: 'Get Quotes', description: 'Receive offers from qualified professionals' },
  { num: 3, title: 'Book & Enjoy', description: 'Choose the best fit and relax' }
]

export default function Home() {
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
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      <div style={{marginBottom: 'var(--spacing-2xl)'}}>        
        <h2 style={{textAlign: 'center', marginBottom: 'var(--spacing-2xl)'}}>Why Choose Us?</h2>
        <div className="grid grid-3">
          {benefits.map((benefit) => (
            <FeatureCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>

      <div className="card gradient-bg" style={{
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
          {steps.map((step) => (
            <div key={step.num} className="card" style={{position: 'relative'}}>
              <div className="gradient-text" style={{fontSize: '3rem', marginBottom: 'var(--spacing-md)', fontWeight: 'bold'}}>{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
