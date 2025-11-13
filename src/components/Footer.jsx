export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-slate-600">
        <div>
          <div className="font-semibold text-slate-900">TRI</div>
          <p className="mt-3">Testing, Research & Inspection</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Company</div>
          <ul className="mt-3 space-y-2">
            <li><a href="/about" className="hover:text-slate-900">About</a></li>
            <li><a href="/blogs" className="hover:text-slate-900">Blogs</a></li>
            <li><a href="/contact" className="hover:text-slate-900">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Legal</div>
          <ul className="mt-3 space-y-2">
            <li><a href="/privacy" className="hover:text-slate-900">Privacy</a></li>
            <li><a href="/terms" className="hover:text-slate-900">Terms</a></li>
            <li><a href="/shipping" className="hover:text-slate-900">Shipping</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Newsletter</div>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="Email" className="flex-1 rounded-md border border-slate-300 px-3 py-2" />
            <button className="px-4 py-2 rounded-md bg-sky-600 text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} TRI. All rights reserved.</div>
    </footer>
  )
}
