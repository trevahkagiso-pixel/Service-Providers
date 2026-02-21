import { useState } from 'react'

export default function Book() {
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [address, setAddress] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!service || !date || !address) {
      alert('Please fill in all required fields')
      return
    }
    console.log({service, date, address, notes})
    setSubmitted(true)
    setTimeout(() => {
      setService('')
      setDate('')
      setAddress('')
      setNotes('')
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section>
      <div style={{maxWidth: '700px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: 'var(--spacing-2xl)'}}>
          <h1 style={{marginBottom: 'var(--spacing-md)'}}>Request a Service</h1>
          <p style={{fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: 0}}>
            Get matched with verified professionals in minutes
          </p>
        </div>

        {submitted && (
          <div className="card" style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%)',
            border: '2px solid #10b981',
            marginBottom: 'var(--spacing-lg)',
            animation: 'slideDown 0.3s ease-out'
          }}>
            <div style={{display: 'flex', gap: 'var(--spacing-md)', alignItems: 'flex-start'}}>
              <div style={{fontSize: '2rem'}}>✨</div>
              <div>
                <p style={{color: '#059669', margin: 0, fontSize: '1.1rem', fontWeight: '600'}}>Request submitted successfully!</p>
                <p style={{color: '#10b981', margin: 'var(--spacing-sm) 0 0 0', fontSize: '0.95rem'}}>We'll match you with available providers and you'll hear from them shortly.</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={submit} className="card" style={{padding: 'var(--spacing-xl)'}}>
          <div className="form-group">
            <label htmlFor="service" style={{color: 'var(--color-dark)', fontWeight: '700'}}>What service do you need? *</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select a service</option>
              <option value="Plumbing">🚰 Plumbing</option>
              <option value="Electrical">⚡ Electrical</option>
              <option value="Cleaning">✨ Cleaning</option>
              <option value="Appliance Repair">🔧 Appliance Repair</option>
              <option value="Gardening">🌿 Gardening</option>
              <option value="Painting">🎨 Painting</option>
              <option value="HVAC">❄️ HVAC</option>
              <option value="Carpentry">🪵 Carpentry</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date" style={{color: 'var(--color-dark)', fontWeight: '700'}}>When do you need it done? *</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" style={{color: 'var(--color-dark)', fontWeight: '700'}}>Where should we go? *</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="123 Main St, City, State 12345"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes" style={{color: 'var(--color-dark)', fontWeight: '700'}}>Tell us more about your project</label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Example: I need my kitchen sink fixed. It has been leaking for 2 days..."
              style={{minHeight: '150px'}}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{width: '100%', padding: 'var(--spacing-lg)', fontSize: '1.05rem', fontWeight: '700', letterSpacing: '0.5px'}}>
            🚀 Find a Professional
          </button>
        </form>

        <div className="grid grid-3" style={{marginTop: 'var(--spacing-2xl)'}}>
          <div className="card" style={{textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', marginBottom: 'var(--spacing-md)'}}>⚡</div>
            <h4>Lightning Fast</h4>
            <p style={{fontSize: '0.9rem'}}>Responses within minutes</p>
          </div>
          <div className="card" style={{textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', marginBottom: 'var(--spacing-md)'}}>✅</div>
            <h4>Verified Pros</h4>
            <p style={{fontSize: '0.9rem'}}>All checked and rated</p>
          </div>
          <div className="card" style={{textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', marginBottom: 'var(--spacing-md)'}}>💰</div>
            <h4>Best Prices</h4>
            <p style={{fontSize: '0.9rem'}}>Compare multiple quotes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
