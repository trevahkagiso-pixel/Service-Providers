const demoServices = ['Plumbing', 'Electrical', 'Cleaning', 'Appliance Repair', 'Gardening']

export default function Services() {
  return (
    <section>
      <h2>Popular services</h2>
      <ul>
        {demoServices.map(s => <li key={s}>{s}</li>)}
      </ul>
    </section>
  )
}