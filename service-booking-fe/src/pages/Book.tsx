import { useState } from 'react'

export default function Book() {
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    alert(`(Mock) Booking created:\nService: ${service}\nDate: ${date}\nNotes: ${notes}`)
  }

  return (
    <section>
      <h2>Request a servicer</h2>
      <form onSubmit={submit} style={{display: 'grid', gap: 12, maxWidth: 420}}>
        <label>
          Service
          <input value={service} onChange={e => setService(e.target.value)} placeholder="e.g., Plumbing" />
        </label>
        <label>
          Preferred date
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </label>
        <label>
          Notes
          <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Brief details" />
        </label>
        <button type="submit">Submit request</button>
      </form>
    </section>
  )
}
``