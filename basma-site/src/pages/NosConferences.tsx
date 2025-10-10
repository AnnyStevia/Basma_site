import { useEffect, useRef, useState } from 'react'
import c1 from '../assets/image/conferences/bandeau.jpg'
import c2 from "../assets/image/conferences/466669245_10162136551208234_8953480339713461583_n (1).jpg"
import c3 from '../assets/image/conferences/466042041_10162118159033234_2174382713487770106_n.jpg'
import c4 from '../assets/image/conferences/465907119_10162118159058234_699258427212432563_n.jpg'
import c5 from '../assets/image/conferences/465740229_10162118158743234_1854284088801059865_n.jpg'
import c6 from '../assets/image/conferences/Conf 2 carré AAI.png'
import c7 from '../assets/image/conferences/bandeau.jpg'
import c8 from '../assets/image/conferences/466042041_10162118159033234_2174382713487770106_n.jpg'

function NosConferences() {
  const images = [c1, c2, c3, c4, c5, c6, c7, c8]
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [isRsvpOpen, setIsRsvpOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel images={images} />

      <section className="w-full py-10 md:py-14 bg-gradient-to-br from-indigo-100/60 via-rose-50/60 to-amber-50/60">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto animate-[fadeUp_600ms_ease-out_80ms_both]">
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-indigo-400 via-rose-400 to-amber-400 shadow-[0_0_20px_rgba(244,114,182,0.35)]" />
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-indigo-700 via-rose-600 to-amber-600 bg-clip-text text-transparent">Nos conférences</h2>
            <p className="mt-2 text-xs md:text-sm text-neutral-600">
              Rencontres, débats et partages d’expériences avec des artistes et professionnel·le·s. Une programmation qui ouvre des perspectives et nourrit le regard.
            </p>
            
          </div>

          {/* Accordion */}
          <div className="mt-8 max-w-6xl mx-auto divide-y divide-neutral-200 border border-neutral-200 rounded-xl bg-white/90 shadow-[0_10px_30px_rgba(2,6,23,0.06)] backdrop-blur supports-[backdrop-filter]:bg-white/70 ring-1 ring-transparent [background-image:linear-gradient(white,white),linear-gradient(to_right,theme(colors.indigo.200),theme(colors.rose.200),theme(colors.amber.200))] [background-origin:border-box] [background-clip:padding-box,border-box]">
            <AccordionItem
              title="Conférence 1"
              image={c3}
              isOpen={activeIndex === 0}
              onToggle={() => setActiveIndex(activeIndex === 0 ? null : 0)}
            >
              Exploration croisée entre pratiques artistiques et technologies émergentes. Cette rencontre met en lumière des
              retours d’expérience concrets, des outils et des méthodes pour articuler démarche et innovation.
              <br className="hidden md:block" />
              Nous aborderons les cycles de prototypage, la place de l’expérimentation dans le processus créatif et les enjeux
              éthiques liés à l’usage d’outils numériques. Des études de cas montreront comment transformer une intuition en
              dispositif sensible et partageable.
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                <img src={c1} alt="visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={c2} alt="visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={c4} alt="visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={c5} alt="visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
              </div>
            </AccordionItem>
            <AccordionItem
              title="Conférence 2"
              image={c6}
              isOpen={activeIndex === 1}
              onToggle={() => setActiveIndex(activeIndex === 1 ? null : 1)}
            >
              Dialogue autour de la médiation: comment accompagner les publics, ouvrir des espaces de compréhension et nourrir l’échange
              sans appauvrir la complexité des œuvres. Nous présenterons des formats d’accueil, des dispositifs de lecture et des
              modalités d’accessibilité adaptées à différents contextes (scolaires, publics éloignés, professionnel·le·s). L’accent
              sera mis sur l’écoute, la reformulation et la co‑construction d’expériences pour faire circuler les idées.
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                <img src={c6} alt="visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={c7} alt="visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={c8} alt="visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={c3} alt="visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
              </div>
            </AccordionItem>
            <AccordionItem
              title="Conférence 3"
              image={c5}
              isOpen={activeIndex === 2}
              onToggle={() => setActiveIndex(activeIndex === 2 ? null : 2)}
            >
              Parcours d’artistes et études de cas: trajectoires, bifurcations et alliances qui rendent possibles les projets,
              entre ateliers, institutions et réseaux de solidarité. Nous évoquerons le financement, les résidences, la relation
              aux lieux et au temps de production, ainsi que la constitution d’équipes. Des retours d’expérience détailleront
              comment structurer un projet, documenter les étapes clés et créer des conditions durables pour la recherche.
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                <img src={c4} alt="visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={c5} alt="visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={c1} alt="visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
                <img src={c2} alt="visuel" className="w-full h-24 md:h-28 object-cover rounded-xl ring-1 ring-neutral-200 shadow-sm" />
              </div>
            </AccordionItem>
          </div>
        </div>
      </section>

      

      {isRsvpOpen && (
        <RsvpModal onClose={() => setIsRsvpOpen(false)} />)
      }
    </div>
  )
}

function HeroCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState<number | null>(null)
  const [isSliding, setIsSliding] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const total = images.length

  useEffect(() => {
    if (total === 0) return
    const id = setInterval(() => startSlide((index + 1) % total), 2500)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, total])

  function startSlide(target: number) {
    if (total === 0) return
    const normalized = (target + total) % total
    if (normalized === index) return
    setNextIndex(normalized)
    setIsSliding(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!containerRef.current) return
        containerRef.current.style.transition = 'transform 900ms cubic-bezier(0.16,1,0.3,1)'
        containerRef.current.style.transform = 'translateX(-50%)'
      })
    })
  }

  function handleTransitionEnd() {
    if (!isSliding || nextIndex === null || !containerRef.current) return
    setIndex(nextIndex)
    setNextIndex(null)
    setIsSliding(false)
    containerRef.current.style.transition = 'none'
    containerRef.current.style.transform = 'translateX(0)'
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    containerRef.current.offsetHeight
    containerRef.current.style.transition = 'transform 900ms cubic-bezier(0.16,1,0.3,1)'
  }

  const leftSrc = images[index]
  const rightSrc = images[nextIndex ?? index]

  return (
    <section className="relative w-full bg-center bg-cover min-h-[260px] md:min-h-[420px]">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full w-[200%] will-change-transform"
          style={{ transform: 'translateX(0)' }}
          ref={containerRef}
          onTransitionEnd={handleTransitionEnd}
        >
          <img src={leftSrc} alt="conférence" className="w-1/2 h-full object-cover" />
          <img src={rightSrc} alt="conférence" className="w-1/2 h-full object-cover" />
        </div>
      </div>

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 max-w-4xl mr-auto px-4 md:px-6 py-6 md:py-8 text-left">
        <div className="space-y-3 md:space-y-4 rounded-xl bg-black/35 p-4 md:p-6 shadow-lg">
          <h1 className="font-serif text-3xl md:text-5xl leading-tight text-white">Nos Conférences</h1>
          <p className="text-sm md:text-base text-white/85">
            Espace de transmission et d’échange, nos conférences rassemblent des voix issues de la création et de la recherche.
          </p>
          <p className="text-xs md:text-sm text-white/75">
            Entre études de cas, retours d’expérience et dialogues interdisciplinaires, elles éclairent les enjeux contemporains de l’art.
          </p>
        </div>
      </div>
    </section>
  )
}

export default NosConferences

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
            <div className="text-sm md:text-base text-neutral-700">
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

function RsvpModal({ onClose }: { onClose: () => void }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [conference, setConference] = useState('Conférence 1')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!fullName || !email) return
    // In a real app, send to backend here
    // For now, close modal after a fake submit
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50">
      <button aria-label="Fermer" onClick={onClose} className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-lg rounded-xl bg-white shadow-[0_20px_60px_rgba(2,6,23,0.18)] ring-1 ring-neutral-200 animate-[fadeUp_400ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
            <h4 className="font-serif text-lg md:text-xl font-semibold text-neutral-900">Réserver votre place</h4>
            <button onClick={onClose} className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50 transition-colors">
              <span className="text-lg">×</span>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="px-5 py-4 space-y-4">
            <div>
              <label className="block text-sm text-neutral-700">Nom complet</label>
              <input value={fullName} onChange={e => setFullName(e.target.value)} required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-700">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700">Téléphone</label>
                <input value={phone} onChange={e => setPhone(e.target.value)} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-neutral-700">Conférence</label>
              <select value={conference} onChange={e => setConference(e.target.value)} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600">
                <option>Conférence 1</option>
                <option>Conférence 2</option>
                <option>Conférence 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-neutral-700">Message (optionnel)</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} rows={3} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" />
            </div>
            <div className="flex items-center justify-between pt-2">
              <button type="button" onClick={onClose} className="inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-50">Annuler</button>
              <button type="submit" className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-rose-600 px-4 py-2 text-sm text-white shadow hover:opacity-95">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


