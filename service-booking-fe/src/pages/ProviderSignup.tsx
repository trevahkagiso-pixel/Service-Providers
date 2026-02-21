import { Link } from 'react-router-dom'

export default function ProviderSignup() {
  const benefits = [
    '✓ Access to verified customer requests',
    '✓ Flexible scheduling and pricing',
    '✓ Enhanced visibility and ratings',
    '✓ Secure payment processing',
    '✓ Customer support and resources'
  ]

  return (
    <section>
      <div style={{maxWidth: '600px', margin: '0 auto'}}>
        <div className="card" style={{background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)', color: 'white', textAlign: 'center', marginBottom: 'var(--spacing-xl)', padding: 'var(--spacing-xl)'}}
        >
          <h1 style={{color: 'white', marginBottom: 'var(--spacing-md)'}}>Join as a Service Provider</h1>
          <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: 0}}>Build your business with access to verified customers</p>
        </div>

        <div className="card" style={{marginBottom: 'var(--spacing-xl)'}}
        >
          <h3 style={{marginBottom: 'var(--spacing-lg)'}}>Benefits of joining</h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            {benefits.map((benefit) => (
              <li key={benefit} style={{marginBottom: 'var(--spacing-md)', fontSize: '1.05rem', color: 'var(--color-text)'}}
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="card" style={{marginBottom: 'var(--spacing-xl)'}}
        >
          <h3 style={{marginBottom: 'var(--spacing-lg)'}}>Getting Started</h3>
          <div style={{marginBottom: 'var(--spacing-lg)'}}
          >
            <div style={{display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)'}}
            >
              <div style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}
              >
                1
              </div>
              <div>
                <h4>Create Profile</h4>
                <p>Set up your business profile and services</p>
              </div>
            </div>
            <div style={{display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)'}}
            >
              <div style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}
              >
                2
              </div>
              <div>
                <h4>Verify Information</h4>
                <p>We'll verify your credentials and experience</p>
              </div>
            </div>
            <div style={{display: 'flex', gap: 'var(--spacing-md)'}}
            >
              <div style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}
              >
                3
              </div>
              <div>
                <h4>Start Receiving Requests</h4>
                <p>Get connected with customers immediately</p>
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-primary" style={{width: '100%', padding: 'var(--spacing-lg)', fontSize: '1.1rem', marginBottom: 'var(--spacing-md)'}}
        >
          Create Provider Account
        </button>
        <p style={{textAlign: 'center', color: 'var(--color-text-light)'}}>
          Already a provider? <Link to="/">Sign in here</Link>
        </p>
      </div>
    </section>
  )
}