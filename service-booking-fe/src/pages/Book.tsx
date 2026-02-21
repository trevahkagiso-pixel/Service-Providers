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
      <div style={{maxWidth: '600px', margin: '0 auto'}}>
        <h1>Request a Service</h1>
        <p style={{fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)'}}>Fill out the form below and we'll connect you with a trusted provider</p>

        {submitted && (
          <div className="card" style={{backgroundColor: 'var(--color-primary-light)', border: `2px solid var(--color-secondary)`, marginBottom: 'var(--spacing-lg)'}}>
            <p style={{color: 'var(--color-secondary-dark)', margin: 0, fontSize: '1.1rem', fontWeight: '600'}}>✓ Request submitted successfully! We'll match you with available providers shortly.</p>
          </div>
        )}

        <form onSubmit={submit} className="card">
          <div className="form-group">
            <label htmlFor="service">Service Required *</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select a service</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical">Electrical</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Appliance Repair">Appliance Repair</option>
              <option value="Gardening">Gardening</option>
              <option value="Painting">Painting</option>
              <option value="HVAC">HVAC</option>
              <option value="Carpentry">Carpentry</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Preferred Date *</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Service Address *</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Additional Details</label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Describe what you need..."
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{width: '100%', padding: 'var(--spacing-lg)', fontSize: '1.1rem'}}>
            Submit Request
          </button>
        </form>
      </div>
    </section>
  )
}