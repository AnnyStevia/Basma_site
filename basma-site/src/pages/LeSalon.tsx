import { useEffect, useRef, useState } from 'react'
import sal1 from '../assets/image/salon/salon2024-15.jpg'
import sal2 from '../assets/image/salon/sal.jpg'
import sal3 from '../assets/image/salon/334539670-594847099230850-1338619726552595696-n.jpg'
import selectionImg from '../assets/image/selection.jpg'

function LeSalon() {
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel images={[sal1, sal2, sal3]} />

      {/* Le Comité */}
      <section className="w-full bg-gradient-to-b from-rose-50 to-amber-50/50 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 shadow-sm animate-[fadeUp_600ms_ease-out_60ms_both]">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="text-[11px] md:text-xs text-neutral-700 tracking-wide">Curation • Mentorat • Réseau</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Le Comité</h2>
            <p className="mt-3 text-neutral-700 animate-[fadeUp_700ms_ease-out_120ms_both]">
              Une équipe pluridisciplinaire engagée aux côtés des artistes: commissaires, mentors, partenaires
              et personnalités du monde culturel, réunis pour accompagner, éclairer et faire rayonner la création.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0,1,2,3,4,5].map((i) => (
              <CommitteeCard
                key={i}
                img={[sal1, sal2, sal3][i % 3]}
                name={["Amal Ben Youssef","Karim El Idrissi","Lina Ait Lhaj","Tarik Bennis","Nadia El Fassi","Youssef Gharbi"][i]}
                role={["Commissaire d’exposition","Mentor & artiste","Curatrice associée","Coordinateur programmes","Partenariats & mécénat","Programmation & médiation"][i]}
                bio="Fait dialoguer pratiques et publics, avec exigence et bienveillance."
              />
            ))}
          </div>
        </div>
      </section>

      {/* La sélection */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-br from-indigo-50/70 via-rose-50/50 to-amber-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 shadow-sm animate-[fadeUp_600ms_ease-out_60ms_both]">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              <span className="text-[11px] md:text-xs text-neutral-700 tracking-wide">Processus • Jury • Transparence</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">La sélection</h2>
            <p className="mt-3 text-xs md:text-sm text-neutral-600 animate-[fadeUp_700ms_ease-out_120ms_both]">
              Notre comité évalue chaque candidature avec exigence et bienveillance: singularité du geste, cohérence du parcours
              et potentiel de rencontre avec les publics.
            </p>

            <div className="mt-5">
              <a
                href="/artistes-selectionnees.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-2 text-sm shadow-sm hover:bg-neutral-800 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 3.75a.75.75 0 01.75.75v8.69l2.22-2.22a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.22 2.22V4.5a.75.75 0 01.75-.75z" />
                  <path d="M3.75 15a.75.75 0 01.75.75v1.5A3.75 3.75 0 008.25 21h7.5A3.75 3.75 0 0019.5 17.25v-1.5a.75.75 0 011.5 0v1.5A5.25 5.25 0 0115.75 22.5h-7.5A5.25 5.25 0 013 17.25v-1.5A.75.75 0 013.75 15z" />
                </svg>
                Voir les artistes sélectionné·e·s
              </a>
              <p className="mt-2 text-[11px] md:text-xs text-neutral-500">Placez votre document dans <code>public/artistes-selectionnees.pdf</code>.</p>
            </div>
          </div>

          {/* Content grid */}
          <div className="mt-10 grid md:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Image card */}
            <div className="rounded-2xl overflow-hidden ring-1 ring-neutral-200 bg-white shadow-sm animate-[fadeUp_700ms_ease-out_140ms_both]">
              <div className="relative">
                <img src={selectionImg} alt="Processus de sélection" className="w-full h-64 md:h-[360px] object-cover" />
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[11px] md:text-xs text-neutral-800 shadow">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Parcours de sélection
                </div>
              </div>
              <div className="px-4 md:px-5 py-4 md:py-5">
                <div className="flex flex-wrap gap-2">
                  {['Anonyme', 'Exigence', 'Dialogue', 'Équilibre'].map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-2.5 py-1 text-[11px] text-neutral-700 bg-white hover:border-neutral-300 transition">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Text column */}
            <div className="space-y-4 md:space-y-5 text-neutral-700">
              <div className="rounded-xl bg-white/70 ring-1 ring-neutral-200 p-4 md:p-5 shadow-sm animate-[fadeUp_700ms_ease-out_160ms_both]">
                <p className="text-xs md:text-sm text-neutral-700">
                  Les dossiers sont étudiés de manière anonyme dans un premier temps afin de privilégier les œuvres et
                  la démarche artistique. Un deuxième regard croise contexte, intentions et perspectives d’exposition.
                </p>
              </div>
              <div className="rounded-xl bg-white/70 ring-1 ring-neutral-200 p-4 md:p-5 shadow-sm animate-[fadeUp_700ms_ease-out_180ms_both]">
                <p className="text-xs md:text-sm text-neutral-700">
                  Ce premier tri met en valeur la qualité du regard et la cohérence des séries. Les notes sont croisées par
                  les membres du jury pour établir une base commune avant la phase d’échanges.
                </p>
              </div>
              <div className="rounded-xl bg-white/70 ring-1 ring-neutral-200 p-4 md:p-5 shadow-sm animate-[fadeUp_700ms_ease-out_200ms_both]">
                <p className="text-xs md:text-sm text-neutral-700">
                  Les propositions retenues présentent une cohérence entre forme et propos, ainsi qu’une capacité à dialoguer
                  avec l’espace et les publics. Les membres du comité partagent ensuite leurs observations pour arrêter une sélection
                  équilibrée et représentative de la scène actuelle.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 animate-[fadeUp_700ms_ease-out_220ms_both]">
                {[
                  { k: 'Critères clairs', c: 'Exigence formelle, pertinence du propos, maturité.' },
                  { k: 'Échanges', c: 'Entretiens pour préciser les intentions et conditions.' },
                  { k: 'Accompagnement', c: 'Éditorial, montage et réseau professionnel.' },
                  { k: 'Ouverture', c: 'Attention aux diversités des parcours et expérimentations.' },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border border-neutral-200 bg-white p-3 shadow-sm transition-transform duration-300 hover:scale-[1.01]">
                    <div className="flex items-center gap-2 text-[13px] font-medium text-neutral-900">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" /> {item.k}
                    </div>
                    <p className="mt-1 text-[11px] text-neutral-600">{item.c}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
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
    const id = setInterval(() => startSlide((index + 1) % total), 2000)
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
    // force reflow then restore transition for next slide
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    containerRef.current.offsetHeight
    containerRef.current.style.transition = 'transform 900ms cubic-bezier(0.16,1,0.3,1)'
  }

  const leftSrc = images[index]
  const rightSrc = images[nextIndex ?? index]

  return (
    <section className="relative w-full bg-center bg-cover min-h-[300px] md:min-h-[460px]">
      {/* sliding track using percentage, shows next image peeking when sliding */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full w-[200%] will-change-transform"
          style={{ transform: 'translateX(0)' }}
          ref={containerRef}
          onTransitionEnd={handleTransitionEnd}
        >
          <img src={leftSrc} alt="salon" className="w-1/2 h-full object-cover" />
          <img src={rightSrc} alt="salon" className="w-1/2 h-full object-cover" />
        </div>
      </div>

      {/* gradient veil with mask for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40" />
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(900px_420px_at_60%_30%,black,transparent)]" />

      {/* content */}
      <div className="relative z-10 max-w-4xl mr-auto px-4 md:px-6 py-6 md:py-8 text-left">
        <div className="space-y-3 md:space-y-4 rounded-xl bg-black/35 p-4 md:p-6 shadow-lg animate-[fadeUp_700ms_ease-out_100ms_both]">
          <h1 className="font-serif text-3xl md:text-5xl leading-tight text-white">Le Salon</h1>
          <p className="text-sm md:text-base text-white/85">
            Une scène exigeante et ouverte où les œuvres rencontrent leurs publics. Découvrez une programmation
            d’expositions, de rencontres et de focus thématiques, au plus près des artistes.
          </p>
          <p className="text-xs md:text-sm text-white/75">
            Ici, les pratiques se croisent et se répondent: peinture, photographie, installation, performance.
            Le Salon accompagne les regards curieux et propose des formats accessibles, pour ressentir, comprendre
            et partager l’expérience artistique.
          </p>
        </div>
      </div>
    </section>
  )
}

export default LeSalon

function CommitteeCard({ img, name, role, bio }: { img: string; name: string; role: string; bio: string }) {
  return (
    <article className="group will-animate animate-[fadeUp_600ms_ease-out_60ms_both]">
      <div className="rounded-xl bg-white/90 ring-1 ring-neutral-200 hover:ring-neutral-300 transition shadow-sm overflow-hidden aspect-square relative">
        <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="mt-3">
        <h3 className="text-base md:text-lg font-semibold text-neutral-900">{name}</h3>
        <p className="text-amber-700 text-sm md:text-[15px] mt-0.5">{role}</p>
        <p className="text-neutral-600 text-sm mt-1">{bio}</p>
      </div>
    </article>
  )
}


