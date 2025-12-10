import { useEffect, useRef, useState } from 'react'
import workshopVideo from '../assets/videos/3864185-hd_1920_1080_25fps.mp4'
// Images 2025 - Expo + Ateliers (existants)
import atelier1 from '../assets/image/expo + ateliers/IMG-20251205-WA0012.jpg'
import atelier2 from '../assets/image/expo + ateliers/IMG-20251205-WA0015.jpg'
import atelier3 from '../assets/image/expo + ateliers/IMG-20251205-WA0016.jpg'
import atelier4 from '../assets/image/expo + ateliers/IMG-20251205-WA0017.jpg'
import atelier5 from '../assets/image/expo + ateliers/IMG-20251205-WA0018.jpg'
import atelier6 from '../assets/image/expo + ateliers/1.jpg'
import atelier7 from '../assets/image/expo + ateliers/2.jpg'
import atelier8 from '../assets/image/expo + ateliers/3.jpg'
import atelier9 from '../assets/image/expo + ateliers/4.jpg'
import atelier10 from '../assets/image/expo + ateliers/5.jpg'
import atelier11 from '../assets/image/expo + ateliers/6.jpg'
import atelier12 from '../assets/image/expo + ateliers/7.jpg'
import atelier13 from '../assets/image/expo + ateliers/8.jpg'

function ActivitesWorkshop() {
  const heroRef = useRef<HTMLElement>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  // Form state for Google Sheets webhook
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [level, setLevel] = useState('Débutant')
  const [workshopSelected, setWorkshopSelected] = useState('')
  const [message, setMessage] = useState('')

  const workshops = [
    { id: 1, title: "Peinture Contemporaine", image: atelier1, description: "Explorez les techniques modernes de peinture et développez votre style artistique unique.", duration: "3 heures", level: "Tous niveaux" },
    { id: 2, title: "Sculpture sur Argile", image: atelier2, description: "Créez des œuvres en trois dimensions et découvrez l'art de la sculpture traditionnelle.", duration: "4 heures", level: "Débutant" },
    { id: 3, title: "Photographie Artistique", image: atelier3, description: "Maîtrisez l'art de la composition et de la lumière pour créer des images captivantes.", duration: "5 heures", level: "Intermédiaire" },
    { id: 4, title: "Art Numérique", image: atelier4, description: "Découvrez les outils numériques pour créer des œuvres d'art contemporaines.", duration: "3 heures", level: "Tous niveaux" },
    { id: 5, title: "Calligraphie Arabe", image: atelier5, description: "Apprenez l'art ancestral de la calligraphie arabe et ses techniques traditionnelles.", duration: "2 heures", level: "Débutant" },
    { id: 6, title: "Céramique & Poterie", image: atelier6, description: "Créez des pièces uniques en céramique et explorez les techniques de poterie.", duration: "4 heures", level: "Tous niveaux" },
    { id: 7, title: "Mosaïque Artistique", image: atelier7, description: "Composez des œuvres colorées en assemblant des tesselles selon votre inspiration.", duration: "3 heures", level: "Débutant" },
    { id: 8, title: "Gravure & Estampe", image: atelier8, description: "Découvrez les techniques de gravure et créez vos propres estampes originales.", duration: "4 heures", level: "Intermédiaire" },
    { id: 9, title: "Art Textile", image: atelier9, description: "Explorez le tissage, la broderie et les textures pour concevoir des pièces contemporaines.", duration: "3 heures", level: "Tous niveaux" },
    { id: 10, title: "Sculpture sur Bois", image: atelier10, description: "Transformez le bois en œuvres d'art avec des techniques de sculpture fines.", duration: "5 heures", level: "Intermédiaire" },
    { id: 11, title: "Peinture à l'Huile", image: atelier11, description: "Maîtrisez les effets de matière et les glacis pour enrichir vos toiles.", duration: "4 heures", level: "Avancé" },
    { id: 12, title: "Installation Artistique", image: atelier12, description: "Créez des installations immersives et explorez l'art de l'espace.", duration: "6 heures", level: "Avancé" },
  ]

  const galleryImages = [
    atelier1, atelier2, atelier3, atelier4, atelier5,
    atelier6, atelier7, atelier8, atelier9, atelier10,
    atelier11, atelier12, atelier13,
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.will-animate')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])



  return (
    <div className="font-serif">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[65vh] md:h-[85vh] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={workshopVideo} type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/70 via-pink-500/60 to-rose-400/70" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white/15 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-white/8 rounded-full animate-pulse"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-8">
          <div className="text-center max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white shadow-lg animate-[fadeUp_600ms_ease-out_100ms_both]">
              <span>🎨 ATELIERS CRÉATIFS</span>
              <span className="h-1 w-1 rounded-full bg-yellow-300" />
              <span>BASMA 2025</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl lg:text-8xl leading-tight text-white mt-6 md:mt-8 animate-[fadeUp_700ms_ease-out_200ms_both]">
              Créez, <span className="underline decoration-yellow-300/80 underline-offset-4">Inspirez</span>, Évoluez
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mt-4 md:mt-6 max-w-3xl mx-auto leading-relaxed animate-[fadeUp_700ms_ease-out_300ms_both]">
              Plongez dans l'univers de la création artistique avec nos ateliers exceptionnels. 
              Découvrez de nouvelles techniques, développez votre talent et rencontrez d'autres passionnés.
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-8 animate-[fadeUp_700ms_ease-out_400ms_both]">
              <button 
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center rounded-full bg-white text-purple-600 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium shadow-xl hover:bg-white/90 hover:scale-105 transition-all duration-300"
              >
                S'inscrire maintenant
              </button>
              <a href="#ateliers" className="inline-flex items-center rounded-full border border-white/50 bg-white/10 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300">
                Découvrir les ateliers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops grid */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-br from-indigo-50 via-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto animate-[fadeUp_600ms_ease-out_80ms_both]">
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-indigo-400 via-rose-400 to-amber-400 shadow-[0_0_20px_rgba(244,114,182,0.35)]" />
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-indigo-700 via-rose-600 to-amber-600 bg-clip-text text-transparent">Workshops & créations</h2>
            <p className="mt-3 text-sm md:text-base text-neutral-600">
              Immersions, pratique et rencontres : parcourez nos ateliers et découvrez l’énergie des sessions BASMA.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workshops.map((w) => (
              <div key={w.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(2,6,23,0.08)] ring-1 ring-neutral-200/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(2,6,23,0.12)]">
                <div className="relative h-56 overflow-hidden">
                  <img src={w.image} alt={w.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">{w.level}</span>
                    <span className="text-xs font-semibold bg-white/15 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">{w.duration}</span>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-serif text-xl text-neutral-900">{w.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{w.description}</p>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-rose-600 transition-colors"
                  >
                    Je m’inscris
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Photo gallery */}
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-neutral-900">Moments d’atelier</h3>
                <p className="text-sm text-neutral-600">Une sélection de nos sessions 2025 — expo + ateliers et visites de groupes.</p>
              </div>
              <a href="#workshop" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-rose-600 transition-colors">
                Voir le programme
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {galleryImages.map((image, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-xl aspect-[4/5] bg-neutral-100">
                  <img src={image} alt={`atelier ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-400">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8 will-animate">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Prêt à Libérer Votre Créativité ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté d'artistes passionnés et transformez votre vision en réalité. 
            Nos ateliers vous attendent !
          </p>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center rounded-full bg-white text-purple-600 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium shadow-xl hover:bg-white/90 hover:scale-105 transition-all duration-300"
          >
            Commencer mon parcours artistique
          </button>
        </div>
      </section>

      {/* Registration Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(2,6,23,0.18)] ring-1 ring-neutral-200">
            <div className="px-6 md:px-8 py-5 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-purple-50 to-rose-50">
              <h3 className="font-serif text-xl md:text-2xl text-neutral-900">Inscription Atelier</h3>
              <button
                aria-label="Fermer"
                onClick={() => setIsFormOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form
              className="px-6 md:px-8 py-6 space-y-5"
              onSubmit={async (e) => {
                e.preventDefault()
                if (!fullName || !email) return
                setIsSubmitting(true)
                const payload = { fullName, email, phone, level, workshop: workshopSelected, message }
                try {
                  await fetch('https://script.google.com/macros/s/AKfycbzRtKFxBWEiQJc5uOUaplsezxjjfaAffANZLLWerBt2siv9vAIEALuqeoAlDfhzw6uK/exec', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                  })
                  setIsFormOpen(false)
                  setFullName(''); setEmail(''); setPhone(''); setLevel('Débutant'); setWorkshopSelected(''); setMessage('')
                  setShowSuccess(true)
                  setTimeout(() => setShowSuccess(false), 3000)
                } catch {
                  alert('Erreur lors de l\'envoi')
                } finally {
                  setIsSubmitting(false)
                }
              }}
            >
              <p className="text-sm text-neutral-600">
                Remplissez ce formulaire pour réserver votre place. Nous vous contacterons par email pour la confirmation.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1.5">Nom complet</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e)=>setFullName(e.target.value)}
                    required
                    className="w-full rounded-xl border border-neutral-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-neutral-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1.5">Téléphone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    className="w-full rounded-xl border border-neutral-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1.5">Niveau d'expérience</label>
                  <select
                    value={level}
                    onChange={(e)=>setLevel(e.target.value)}
                    className="w-full rounded-xl border border-neutral-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option>Débutant</option>
                    <option>Intermédiaire</option>
                    <option>Avancé</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-800 mb-1.5">Atelier souhaité</label>
                <select
                  value={workshopSelected}
                  onChange={(e)=>setWorkshopSelected(e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Sélectionner un atelier</option>
                  {workshops.map((w) => (
                    <option key={w.id} value={w.title}>
                      {w.title}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-800 mb-1.5">Message (optionnel)</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Ce qui vous intéresse..."
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="inline-flex items-center rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 hover:bg-neutral-50"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-rose-600 px-5 py-2.5 text-sm text-white shadow hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Envoi...
                    </span>
                  ) : (
                    'Confirmer l\'inscription'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 animate-[slideIn_300ms_ease-out]">
          <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
              <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-green-900">Inscription envoyée !</p>
              <p className="text-xs text-green-700">Nous vous contacterons bientôt.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ActivitesWorkshop
