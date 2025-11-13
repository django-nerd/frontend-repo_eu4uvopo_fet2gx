import { useState } from 'react'
import { Menu, ShoppingCart, User, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="font-semibold text-slate-900">TRI</a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-slate-700 hover:text-slate-900">{n.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="/cart" className="relative inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
          </a>
          <a href="/login" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
            <User size={18} />
            <span className="hidden sm:inline">Login</span>
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-slate-700">{n.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
