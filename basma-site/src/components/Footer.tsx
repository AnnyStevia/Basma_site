import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-neutral-950 text-white overflow-hidden">
      {/* top gradient line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-rose-500 to-amber-400" />
      {/* soft radial glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-rose-500/10 via-fuchsia-500/10 to-amber-400/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-3">
            <h3 className="font-serif text-xl bg-gradient-to-r from-fuchsia-400 via-rose-400 to-amber-400 bg-clip-text text-transparent">BASMA</h3>
            <p className="text-sm text-white/70">Beaux‑Arts Solidarité Maroc — révéler, accompagner et célébrer la création.</p>
          </div>

          <nav className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-8">
            <div className="space-y-2">
              <h4 className="text-xs font-semibold tracking-wider text-white/70">Découvrir</h4>
              <ul className="space-y-1 text-sm">
                <li><Link to="/" className="group inline-flex items-center gap-2"><span className="text-white/80">Accueil</span><span className="h-[2px] w-0 bg-gradient-to-r from-fuchsia-500 to-rose-500 transition-all duration-300 group-hover:w-8" /></Link></li>
                <li><Link to="/gallery" className="group inline-flex items-center gap-2"><span className="text-white/80">Galerie</span><span className="h-[2px] w-0 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-8" /></Link></li>
                <li><Link to="/themes/expo-marrakech" className="group inline-flex items-center gap-2"><span className="text-white/80">Expo de Marrakech</span><span className="h-[2px] w-0 bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-300 group-hover:w-8" /></Link></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold tracking-wider text-white/70">Programme</h4>
              <ul className="space-y-1 text-sm">
                <li><Link to="/themes/activites-workshop" className="group inline-flex items-center gap-2"><span className="text-white/80">Workshops</span><span className="h-[2px] w-0 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-8" /></Link></li>
                <li><Link to="/themes/activites-workshop" className="group inline-flex items-center gap-2"><span className="text-white/80">Ateliers • Masterclass</span><span className="h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-sky-500 transition-all duration-300 group-hover:w-8" /></Link></li>
                <li><Link to="/themes/gagnants-prix" className="group inline-flex items-center gap-2"><span className="text-white/80">Gagnants du prix</span><span className="h-[2px] w-0 bg-gradient-to-r from-rose-500 to-red-500 transition-all duration-300 group-hover:w-8" /></Link></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold tracking-wider text-white/70">À propos</h4>
              <ul className="space-y-1 text-sm">
                <li><Link to="/about" className="group inline-flex items-center gap-2"><span className="text-white/80">Notre mission</span><span className="h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-8" /></Link></li>
                <li><a href="#contact" className="group inline-flex items-center gap-2"><span className="text-white/80">Contact</span><span className="h-[2px] w-0 bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-300 group-hover:w-8" /></a></li>
                <li><a href="#soutenir" className="group inline-flex items-center gap-2"><span className="text-white/80">Soutenir</span><span className="h-[2px] w-0 bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-300 group-hover:w-8" /></a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="text-xs text-white/60">© {new Date().getFullYear()} BASMA. Tous droits réservés.</div>
          <div className="flex items-center gap-4 text-white/80">
            <a href="#" aria-label="Instagram" className="group inline-flex items-center gap-2 hover:text-fuchsia-300 transition"><span>Instagram</span><span className="h-[2px] w-0 bg-gradient-to-r from-fuchsia-500 to-rose-500 transition-all duration-300 group-hover:w-6" /></a>
            <a href="#" aria-label="Facebook" className="group inline-flex items-center gap-2 hover:text-amber-300 transition"><span>Facebook</span><span className="h-[2px] w-0 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-6" /></a>
            <a href="#" aria-label="X" className="group inline-flex items-center gap-2 hover:text-emerald-300 transition"><span>X</span><span className="h-[2px] w-0 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


