import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [activitesOpen, setActivitesOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 z-50 p-3 md:p-4">
      {/* Floating hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="relative h-11 w-11 inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white/80 hover:bg-white/95 backdrop-blur shadow-lg transition duration-300 ease-out hover:shadow-[0_8px_24px_rgba(2,6,23,0.18)]"
        aria-label="Ouvrir le menu"
      >
        <span className="absolute block h-[2px] w-6 bg-neutral-900 transition-transform duration-300 ease-out"
          style={{ transform: open ? 'rotate(45deg) translateY(0px)' : 'translateY(-7px)' }} />
        <span className="absolute block h-[2px] w-6 bg-neutral-900 transition-opacity duration-200"
          style={{ opacity: open ? 0 : 1 }} />
        <span className="absolute block h-[2px] w-6 bg-neutral-900 transition-transform duration-300 ease-out"
          style={{ transform: open ? 'rotate(-45deg) translateY(0px)' : 'translateY(7px)' }} />
      </button>

      {/* Slide-over menu */}
      <div className={`fixed inset-y-0 right-0 z-40 w-64 sm:w-72 md:w-80 transform transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/60 to-neutral-900/50 backdrop-blur-xl border-l border-white/10 shadow-2xl text-white">
          <div className="relative flex items-center justify-between px-5 py-3">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-rose-400/60 via-indigo-400/60 to-amber-400/60" />
            <span className="text-sm tracking-wide text-white/80">Menu</span>
            <button aria-label="Fermer le menu" onClick={() => setOpen(false)} className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="px-5 py-5 space-y-2">
            <ColoredLink index={0} isOpen={open} to="/" label="Accueil" colors="from-neutral-600 to-neutral-600" onClick={() => setOpen(false)} />
            <ColoredLink index={1} isOpen={open} to="/LeSalon" label="Le Salon" colors="from-fuchsia-600 to-rose-600" onClick={() => setOpen(false)} />
            <ColoredLink index={2} isOpen={open} to="/le-prix" label="Le Prix" colors="from-amber-600 to-orange-600" onClick={() => setOpen(false)} />

            {/* ACTIVITES with submenu */}
            <div
              className={`group block px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300 ease-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0'}`}
              style={{ transitionDelay: `${3 * 70}ms`, transform: open ? 'translateY(0) translateX(0)' : `translateY(${(3 + 1) * 6}px) translateX(${(3) * 4}px)` }}
            >
              <button
                onClick={() => setActivitesOpen(!activitesOpen)}
                className="w-full flex items-center justify-between text-white"
              >
                <span>ACTIVITÉS</span>
                <span className={`ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/10 ${activitesOpen ? 'rotate-180' : ''} transition-transform`}>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ease-out ${activitesOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="mt-2 ml-2 space-y-1 rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                  <SubLink to="/themes/activites-workshop" label="Les Workshops" onClick={() => { setOpen(false); setActivitesOpen(false) }} />
                  <SubLink to="/themes/activites-workshop" label="Les Ateliers et Masterclass" onClick={() => { setOpen(false); setActivitesOpen(false) }} />
                  <SubLink to="/NosConferences" label="Les Conférences" onClick={() => { setOpen(false); setActivitesOpen(false) }} />
                </div>
              </div>
            </div>

            <ColoredLink index={4} isOpen={open} to="/themes/expo-marrakech" label={`Ce Geste vient d'ailleurs 1.54 Marrakech`} colors="from-violet-600 to-indigo-600" onClick={() => setOpen(false)} />
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <button aria-label="Close menu" onClick={() => setOpen(false)} className="fixed inset-0 z-30 bg-black/30 transition-opacity" />
      )}
    </header>
  )
}

function ColoredLink({ to, label, colors, onClick, isOpen, index }: { to: string; label: string; colors: string; onClick: () => void; isOpen: boolean; index: number }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`group block px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0'} `}
      style={{
        transitionDelay: `${index * 70}ms`,
        transform: isOpen ? 'translateY(0) translateX(0)' : `translateY(${(index + 1) * 6}px) translateX(${(index) * 4}px)`
      }}
    >
      <span className="inline-flex items-center gap-2 text-white">
        <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${colors}`} />
        {label}
      </span>
      <span className={`block h-[2px] w-0 bg-gradient-to-r ${colors} transition-all duration-500 group-hover:w-full`} />
    </Link>
  )
}

function SubLink({ to, label, onClick }: { to: string; label: string; onClick: () => void }) {
  return (
    <Link to={to} onClick={onClick} className="block px-3 py-1.5 rounded-md text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors">
      {label}
    </Link>
  )
}

export default Navbar


