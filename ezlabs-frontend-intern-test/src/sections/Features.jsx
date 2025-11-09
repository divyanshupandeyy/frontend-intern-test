export default function Features() {
  const items = [
    { title: 'Responsive First', desc: 'Designed for mobile, tablet and desktop with fluid grids.' },
    { title: 'A11y & Performance', desc: 'Semantic HTML, ARIA, and fast by default.' },
    { title: 'Clean Aesthetics', desc: 'Typography and spacing that echo the design system.' },
  ]
  return (
    <section id="features" className="container py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Why choose us</h2>
        <p className="text-gray-600 mt-2">A quick snapshot of quality markers.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={i} className="card p-6">
            <h3 className="text-xl font-semibold">{it.title}</h3>
            <p className="text-gray-600 mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
