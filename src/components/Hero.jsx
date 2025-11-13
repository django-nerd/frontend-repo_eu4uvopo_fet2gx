import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/40 rounded-2xl p-6 md:p-10 shadow-xl max-w-2xl text-center pointer-events-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">TRI – Testing, Research & Inspection</h1>
          <p className="mt-4 text-slate-700 md:text-lg">Modern, scalable platform for services, e-commerce, and admin operations.</p>
          <div className="mt-6 flex gap-3 justify-center">
            <a href="#services" className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition">Explore Services</a>
            <a href="#downloads" className="px-5 py-2.5 rounded-lg bg-white/80 hover:bg-white text-sky-700 border border-sky-200 transition">Downloads</a>
          </div>
        </div>
      </div>
    </section>
  );
}
