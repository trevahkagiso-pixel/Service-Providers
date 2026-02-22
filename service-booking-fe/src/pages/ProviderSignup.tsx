import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'

const benefits = [
  { icon: '💼', title: 'Customer Access', description: 'Connect with verified customer requests instantly' },
  { icon: '🕐', title: 'Flexible Work', description: 'Set your own schedule and rates' },
  { icon: '⭐', title: 'Build Reputation', description: 'Establish ratings and grow your business' },
  { icon: '💳', title: 'Safe Payments', description: 'Secure payment processing with zero fees' },
  { icon: '📊', title: 'Business Tools', description: 'Analytics and growth resources included' },
  { icon: '🎓', title: '24/7 Support', description: 'Expert support team always available' }
]

const steps = [
  { num: 1, title: 'Create Your Profile', description: 'Set up your business profile with services offered' },
  { num: 2, title: 'Verify Your Credentials', description: 'Quick verification ensures customer trust' },
  { num: 3, title: 'Start Getting Jobs', description: 'Receive customer requests and grow your earnings' }
]

const stats = [
  { number: '10k+', label: 'Active Professionals' },
  { number: '50k+', label: 'Happy Customers' },
  { number: '4.8★', label: 'Average Rating' }
]

export default function ProviderSignup() {
  return (
    <section>
      <div style={{maxWidth: '900px', margin: '0 auto'}}>
        <div className="card gradient-bg" style={{
          color: 'white',
          textAlign: 'center',
          marginBottom: 'var(--spacing-2xl)',
          padding: 'var(--spacing-2xl)',
          border: 'none',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{position: 'relative', zIndex: 1}}>
            <h1 style={{color: 'white', marginBottom: 'var(--spacing-md)', fontSize: '2.5rem'}}>Turn Your Skills Into Income</h1>
            <p style={{color: 'rgba(255,255,255,0.95)', marginBottom: 0, fontSize: '1.1rem'}}>Join our community of successful service professionals</p>
          </div>
        </div>

        <div className="grid grid-3" style={{marginBottom: 'var(--spacing-2xl)'}}>
          {stats.map((stat) => (
            <div key={stat.label} className="card feature-card">
              <div className="gradient-text" style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)'}}>
                {stat.number}
              </div>
              <p style={{margin: 0, color: 'var(--color-text-light)', fontWeight: 500}}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div style={{marginBottom: 'var(--spacing-2xl)'}}>
          <h2 style={{textAlign: 'center', marginBottom: 'var(--spacing-xl)'}}>Why Professionals Choose Us</h2>
          <div className="grid grid-2">
            {benefits.map((benefit) => (
              <FeatureCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>

        <div style={{marginBottom: 'var(--spacing-2xl)'}}>
          <h2 style={{textAlign: 'center', marginBottom: 'var(--spacing-xl)'}}>Simple Onboarding Process</h2>
          <div style={{display: 'grid', gap: 'var(--spacing-lg)'}}>
            {steps.map((step) => (
              <div key={step.num} className="card" style={{display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'flex-start'}}>
                <div style={{
                  minWidth: '60px',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                  boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
                }}>
                  {step.num}
                </div>
                <div>
                  <h4 style={{marginBottom: 'var(--spacing-sm)', fontSize: '1.2rem'}}>{step.title}</h4>
                  <p style={{margin: 0, color: 'var(--color-text-light)'}}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(99, 102, 241, 0.05))', textAlign: 'center', padding: 'var(--spacing-xl)', border: '2px solid rgba(16, 185, 129, 0.3)', marginBottom: 'var(--spacing-xl)'}}>
          <h3 style={{marginBottom: 'var(--spacing-md)'}}>Ready to Get Started? 🎯</h3>
          <p style={{color: 'var(--color-text-light)', marginBottom: 'var(--spacing-lg)', fontSize: '1rem'}}>
            Join in minutes. No hidden fees or long contracts. Earn from day one.
          </p>
          <button className="btn btn-success" style={{padding: 'var(--spacing-lg)', fontSize: '1.05rem', fontWeight: '700', letterSpacing: '0.5px'}} onClick={() => alert('Provider signup coming soon!')}>
            Create Your Free Account
          </button>
        </div>

        <p style={{textAlign: 'center', color: 'var(--color-text-light)'}}>
          Looking for services? <Link to="/" style={{fontWeight: '600', color: '#6366f1'}}>Browse services here</Link>
        </p>
      </div>
    </section>
  )
}
