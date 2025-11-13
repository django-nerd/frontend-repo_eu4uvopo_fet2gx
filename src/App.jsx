import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <Hero />

      <main className="mx-auto max-w-7xl px-4">
        <section id="services" className="py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Services</h2>
          <p className="mt-2 text-slate-600">Construction • Certification • Failure Analysis • Project Management • R&D • Testing</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Construction', desc: 'Quality-focused construction solutions.' },
              { title: 'Certification', desc: 'Industry-standard certifications.' },
              { title: 'Failure Analysis', desc: 'Root-cause analysis and reporting.' },
              { title: 'Project Management', desc: 'Plan, track, and deliver effectively.' },
              { title: 'R&D', desc: 'Research-driven product development.' },
              { title: 'Testing', desc: 'Comprehensive testing services.' },
            ].map((s) => (
              <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-lg font-medium text-slate-900">{s.title}</div>
                <div className="mt-2 text-slate-600 text-sm">{s.desc}</div>
                <a href="/services" className="inline-block mt-4 text-sky-600 hover:text-sky-700 text-sm">Learn more →</a>
              </div>
            ))}
          </div>
        </section>

        <section id="downloads" className="py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Downloads</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a href="#" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">Brochure.pdf</a>
            <a href="#" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">Service-Catalogue.pdf</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
