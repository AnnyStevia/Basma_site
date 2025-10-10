import { useEffect, useRef, useState } from 'react'
import workshopVideo from '../assets/videos/3864185-hd_1920_1080_25fps.mp4'
import atelier1 from '../assets/image/atelier/486871050_1088886459922164_4966030406835988211_n.jpg'
import atelier2 from '../assets/image/atelier/486610315_1088360936641383_2690010386236441209_n.jpg'
import atelier3 from '../assets/image/atelier/486805115_1088360563308087_7628630968930271535_n.jpg'
import atelier4 from '../assets/image/atelier/486611008_1088360486641428_6290542586408835721_n.jpg'
import atelier5 from '../assets/image/atelier/466167879_10162118159108234_8757469431173656918_n.jpg'
import atelier6 from '../assets/image/atelier/486871050_1088886459922164_4966030406835988211_n.jpg'
import atelier7 from '../assets/image/atelier/486610315_1088360936641383_2690010386236441209_n.jpg'
import atelier8 from '../assets/image/atelier/486805115_1088360563308087_7628630968930271535_n.jpg'
import atelier9 from '../assets/image/atelier/486611008_1088360486641428_6290542586408835721_n.jpg'
import atelier10 from '../assets/image/atelier/466167879_10162118159108234_8757469431173656918_n.jpg'
import atelier11 from '../assets/image/atelier/486871050_1088886459922164_4966030406835988211_n.jpg'
import atelier12 from '../assets/image/atelier/486610315_1088360936641383_2690010386236441209_n.jpg'

function ActivitesWorkshop() {
  const heroRef = useRef<HTMLElement>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  // Form state for Google Sheets webhook
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [level, setLevel] = useState('Débutant')
  const [workshopSelected, setWorkshopSelected] = useState('')
  const [message, setMessage] = useState('')

  const workshops = [
    {
      id: 1,
      title: "Peinture Contemporaine",
      image: atelier1,
      description: "Explorez les techniques modernes de peinture et développez votre style artistique unique.",
      duration: "3 heures",
      level: "Tous niveaux",
      
    },
    {
      id: 2,
      title: "Sculpture sur Argile",
      image: atelier2,
      description: "Créez des œuvres en trois dimensions et découvrez l'art de la sculpture traditionnelle.",
      duration: "4 heures",
      level: "Débutant",
      
    },
    {
      id: 3,
      title: "Photographie Artistique",
      image: atelier3,
      description: "Maîtrisez l'art de la composition et de la lumière pour créer des images captivantes.",
      duration: "5 heures",
      level: "Intermédiaire",
      
    },
    {
      id: 4,
      title: "Art Numérique",
      image: atelier4,
      description: "Découvrez les outils numériques pour créer des œuvres d'art contemporaines.",
      duration: "3 heures",
      level: "Tous niveaux",
      
    },
    {
      id: 5,
      title: "Calligraphie Arabe",
      image: atelier5,
      description: "Apprenez l'art ancestral de la calligraphie arabe et ses techniques traditionnelles.",
      duration: "2 heures",
      level: "Débutant",
      
    },
    {
      id: 6,
      title: "Céramique & Poterie",
      image: atelier6,
      description: "Créez des pièces uniques en céramique et explorez les techniques de poterie.",
      duration: "4 heures",
      level: "Tous niveaux",
      
    },
    {
      id: 7,
      title: "Mosaïque Artistique",
      image: atelier7,
      description: "Composez des œuvres colorées en assemblant des tesselles selon votre inspiration.",
      duration: "3 heures",
      level: "Débutant",
      
    },
    {
      id: 8,
      title: "Gravure & Estampe",
      image: atelier8,
      description: "Découvrez les techniques de gravure et créez vos propres estampes originales.",
      duration: "4 heures",
      level: "Intermédiaire",
      
    },
    {
      id: 9,
      title: "Art Textile",
      image: atelier9,
      description: "Explorez le tissage, la broderie et les techniques textiles traditionnelles.",
      duration: "3 heures",
      level: "Tous niveaux",
      
    },
    {
      id: 10,
      title: "Sculpture sur Bois",
      image: atelier10,
      description: "Transformez le bois en œuvres d'art avec les techniques de sculpture traditionnelle.",
      duration: "5 heures",
      level: "Intermédiaire",
      
    },
    {
      id: 11,
      title: "Peinture à l'Huile",
      image: atelier11,
      description: "Maîtrisez les techniques de la peinture à l'huile et ses effets de matière.",
      duration: "4 heures",
      level: "Avancé",
      
    },
    {
      id: 12,
      title: "Installation Artistique",
      image: atelier12,
      description: "Créez des installations immersives et explorez l'art de l'espace.",
      duration: "6 heures",
      level: "Avancé",
      
    }
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
      <section ref={heroRef} className="relative w-full h-[85vh] overflow-hidden">
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
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-white mt-8 animate-[fadeUp_700ms_ease-out_200ms_both]">
              Créez, <span className="underline decoration-yellow-300/80 underline-offset-4">Inspirez</span>, Évoluez
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mt-6 max-w-3xl mx-auto leading-relaxed animate-[fadeUp_700ms_ease-out_300ms_both]">
              Plongez dans l'univers de la création artistique avec nos ateliers exceptionnels. 
              Découvrez de nouvelles techniques, développez votre talent et rencontrez d'autres passionnés.
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-8 animate-[fadeUp_700ms_ease-out_400ms_both]">
              <button 
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center rounded-full bg-white text-purple-600 px-8 py-4 text-lg font-medium shadow-xl hover:bg-white/90 hover:scale-105 transition-all duration-300"
              >
                S'inscrire maintenant
              </button>
              <a href="#ateliers" className="inline-flex items-center rounded-full border border-white/50 bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300">
                Découvrir les ateliers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Accordion */}
      <section className="w-full py-10 md:py-14 bg-gradient-to-br from-indigo-100/60 via-rose-50/60 to-amber-50/60">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto animate-[fadeUp_600ms_ease-out_80ms_both]">
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-indigo-400 via-rose-400 to-amber-400 shadow-[0_0_20px_rgba(244,114,182,0.35)]" />
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-indigo-700 via-rose-600 to-amber-600 bg-clip-text text-transparent">Nos workshops</h2>
            <p className="mt-2 text-xs md:text-sm text-neutral-600">
              Découvrez notre sélection d’ateliers: formats immersifs, échanges et pratique pour faire évoluer votre geste.
            </p>
          </div>
          
          <div className="mt-8 max-w-6xl mx-auto divide-y divide-neutral-200 border border-neutral-200 rounded-xl bg-white/90 shadow-[0_10px_30px_rgba(2,6,23,0.06)] backdrop-blur supports-[backdrop-filter]:bg-white/70 ring-1 ring-transparent [background-image:linear-gradient(white,white),linear-gradient(to_right,theme(colors.indigo.200),theme(colors.rose.200),theme(colors.amber.200))] [background-origin:border-box] [background-clip:padding-box,border-box]">
            <AccordionItem
              title="Workshop — introduction"
              image={atelier1}
              isOpen={activeIndex === 0}
              onToggle={() => setActiveIndex(activeIndex === 0 ? null : 0)}
            >
              Mise en contexte des workshops: objectifs, déroulé et méthodes. Nous abordons les outils de préparation,
              l’importance des références et de l’expérimentation, ainsi que la valorisation des résultats (portfolio, présentation).
              Vous repartirez avec un plan de travail clair, des ressources méthodologiques et des pistes d’entraînement pour
              consolider votre pratique entre les sessions. Nous verrons aussi comment documenter efficacement vos progrès.

              <div className="mt-4 space-y-3">
                <h4 className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-neutral-900">Construire sa pratique</h4>
                <p className="text-sm md:text-base text-neutral-700">
                  Méthodes pour structurer vos ateliers: objectifs clairs, étapes de production, documentation et retours. Conseils pour optimiser le temps, les matériaux et la qualité d’exécution.
                </p>
                <p className="text-sm md:text-base text-neutral-700">
                  Exemples concrets, références et pistes d’action pour adapter les approches à votre niveau et à vos ambitions, tout en cultivant l’exigence et le plaisir de la pratique.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 pt-2">
                  <img src={atelier2} alt="atelier visuel 1" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm hover:scale-[1.02] transition-transform duration-300" />
                  <img src={atelier3} alt="atelier visuel 2" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm hover:scale-[1.02] transition-transform duration-300" />
                  <img src={atelier4} alt="atelier visuel 3" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm hover:scale-[1.02] transition-transform duration-300" />
                  <img src={atelier5} alt="atelier visuel 4" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm hover:scale-[1.02] transition-transform duration-300" />
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              title="Atelier 1"
              image={atelier2}
              isOpen={activeIndex === 1}
              onToggle={() => setActiveIndex(activeIndex === 1 ? null : 1)}
            >
              Focus pratique avec démonstrations guidées, exercices progressifs et retours personnalisés. L’accent est mis sur
              l’acquisition de gestes sûrs et l’exploration de variations pour construire votre langage visuel. Un temps de
              questions-réponses permet d’affiner votre posture, de corriger les erreurs courantes et d’optimiser vos outils.
              Des mini‑projets vous aideront à appliquer immédiatement les techniques abordées.
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                <img src={atelier6} alt="atelier visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={atelier7} alt="atelier visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={atelier8} alt="atelier visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={atelier9} alt="atelier visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
              </div>
            </AccordionItem>
            <AccordionItem
              title="Atelier 2"
              image={atelier3}
              isOpen={activeIndex === 2}
              onToggle={() => setActiveIndex(activeIndex === 2 ? null : 2)}
            >
              Approfondissements techniques et compositionnels: du repérage au rendu final. Études de cas et partage
              d’expériences pour consolider votre autonomie et gagner en précision. Nous travaillerons la gestion du temps,
              la planification des étapes, et des critères d’auto‑évaluation pour gagner en cohérence. Vous constituerez un
              corpus d’essais comparatifs afin d’identifier vos préférences et axes d’amélioration.
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                <img src={atelier10} alt="atelier visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={atelier11} alt="atelier visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={atelier12} alt="atelier visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={atelier1} alt="atelier visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
              </div>
            </AccordionItem>
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
            className="inline-flex items-center rounded-full bg-white text-purple-600 px-8 py-4 text-lg font-medium shadow-xl hover:bg-white/90 hover:scale-105 transition-all duration-300"
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

              <div className="grid md:grid-cols-2 gap-4">
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

function AccordionItem({ title, image, children, isOpen, onToggle }: { title: string; image: string; children: React.ReactNode; isOpen: boolean; onToggle: () => void }) {
  const panelId = `${title.replace(/\s+/g, '-')}-panel`
  return (
    <div className="group/acc border-b last:border-b-0 border-neutral-200">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 md:px-6 py-4 md:py-5 bg-white/60 backdrop-blur-sm hover:bg-white transition-colors"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="text-base md:text-lg font-semibold text-neutral-900 tracking-tight">{title}</span>
        <span
          className={`ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 bg-white shadow-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 md:px-6 pb-5">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-start">
            <div className="text-sm md:text-base text-neutral-700 will-change-transform transition duration-500 ${isOpen ? '' : ''}">
              {children}
            </div>
            <div className="rounded-xl overflow-hidden ring-1 ring-neutral-200 bg-white shadow-sm will-change-transform transition-transform duration-500 ease-out group-hover/acc:scale-[1.01]">
              <img src={image} alt={title} className="w-full h-40 md:h-48 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
