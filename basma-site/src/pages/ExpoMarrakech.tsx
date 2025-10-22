import { useEffect, useRef, useState } from 'react'
import marrakechVideo from '../assets/videos/marrakech.mp4'
// Images used in tabs and sections
import g7 from '../assets/image/marrakech/154.jpg'
import g8 from '../assets/image/marrakech/26048904lpw-26054010-article-jpg_10120230.jpg'
import g9 from '../assets/image/marrakech/26048904lpw-26054599-embed-libre-jpg_10120233.jpg'
import g10 from '../assets/image/marrakech/Capture.PNG'
import g11 from '../assets/image/marrakech/MAR.avif'
import g12 from '../assets/image/marrakech/MARR.jpg'
 

function ExpoMarrakech() {
  const heroRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState<'curation' | 'artistes' | 'expo'>('curation')

  // Load all artist images from the artistes directory
  const artistImages = (import.meta as unknown as { glob: any }).glob(
    '../assets/image/artistes/*',
    { eager: true, import: 'default' }
  ) as Record<string, string>

  function getFileNameFromPath(path: string): string {
    const parts = path.split('/')
    return parts[parts.length - 1] || path
  }

  function toTitleCase(input: string): string {
    return input
      .split(' ')
      .filter(Boolean)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  }

  function deriveArtistNameFromFilename(filename: string): string {
    const base = filename.replace(/\.[^.]+$/, '')
    const cleaned = base
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[_.]+/g, ' ')
      .replace(/\s*\(.*?\)\s*/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim()
    const parts = cleaned.split('-').map(s => s.trim()).filter(Boolean)
    const picked = parts.length > 0 ? parts.reduce((a, b) => (b.length > a.length ? b : a)) : cleaned
    return toTitleCase(picked.toLowerCase())
  }

  function normalizeForMatch(input: string): string {
    return input
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim()
  }

  const locationList: { n: string; l: string }[] = [
    { n: 'AHNACH Mohamed', l: 'Khenifra, Maroc' },
    { n: 'AIT EL MALLALI Mehdi', l: 'Paris, France' },
    { n: 'AIT TAGADIRT Mariam', l: 'Casablanca, Maroc' },
    { n: 'ALIBRAHIMI Maïssane', l: 'Rabat, Maroc' },
    { n: 'AMRANI Ayoub', l: 'Casablanca, Maroc' },
    { n: 'ARAFATI Fatine', l: 'Casablanca, Maroc' },
    { n: 'BAZZI Naoual', l: 'Milan, Italie' },
    { n: 'BENSENNA El Mehdi', l: 'Casablanca, Maroc' },
    { n: 'BERCHICHE Fatima zahra', l: 'Casablanca, Maroc' },
    { n: 'BERHIL Hamza', l: 'Laâyoune, Maroc' },
    { n: 'BOUALI Soukaina', l: 'Casablanca, Maroc' },
    { n: 'BOUDRAA Nassim', l: 'Montreuil, France' },
    { n: 'CHIHAD Zouhair', l: 'Casablanca, Maroc' },
    { n: 'CHORRIB ISSAM', l: 'Casablanca, Maroc' },
    { n: 'DEFOIN Mélanie Etbissemm', l: 'Braine-Le-Comte, Belgique' },
    { n: 'DOUJDID anass', l: 'Meknes, Maroc' },
    { n: 'ELHASSNAOUI mouad', l: 'Casablanca, Maroc' },
    { n: 'FADIL RABIE', l: 'Kenitra, Maroc' },
    { n: 'FADILI Rassane', l: 'Rabat, Maroc' },
    { n: 'FARIANE Issam', l: 'Casablanca, Maroc' },
    { n: 'ILANGA Djo', l: 'Rabat, Maroc' },
    { n: 'JOUD Aissa', l: 'Ouarzazate , Maroc' },
    { n: 'KACHIRI Sarah Mounia', l: 'Marrakech, Maroc' },
    { n: 'KEBDANI sirine', l: 'Casablanca, Maroc' },
    { n: 'KHAMILY MOHAMED', l: 'Tetouan, Maroc' },
    { n: 'LAARIBI Imane', l: 'Mdiq, Maroc' },
    { n: 'LARGOU Karim', l: 'France' },
    { n: 'LEHAMAOUI Chaimae', l: 'Ifrane, Maroc' },
    { n: 'MAJDI Yasmine', l: 'Casablanca, Maroc' },
    { n: 'MARMOUCHE Hamza', l: 'Marrakech, Maroc' },
    { n: 'MEDIOUNI Soukaina', l: 'Rabat, Maroc' },
    { n: 'MOHAMMED EL Hajoui', l: 'Italie' },
    { n: 'MOHAMMED BELMABKHOUT Belmabkhout mohammed', l: 'El jadida, Maroc' },
    { n: 'MOUNMI Mouna', l: 'Tetouan, Maroc' },
    { n: 'OULACHGAR Abdellah', l: 'Agadir, Maroc' },
    { n: 'OUSSAADAN Mourad', l: 'Tetouan, Maroc' },
    { n: 'RADI Mohamed', l: 'Tetouan, Maroc' },
    { n: 'RATBI Yanis', l: 'Epinay-sur-seine, France' },
    { n: 'SEBTI Chaimae', l: 'Tanger, Maroc' },
    { n: 'TAJEDDINE mohamed amine', l: 'Casablanca, Maroc' },
  ]

  function findLocationForName(displayName: string): string | undefined {
    const dn = normalizeForMatch(displayName)
    for (const entry of locationList) {
      const en = normalizeForMatch(entry.n)
      if (dn.includes(en) || en.includes(dn)) return entry.l
      // Try reversing first/last order
      const parts = en.split(' ')
      if (parts.length >= 2) {
        const rev = normalizeForMatch(parts.slice(1).join(' ') + ' ' + parts[0])
        if (dn.includes(rev) || rev.includes(dn)) return entry.l
      }
    }
    return undefined
  }

  // image matching no longer needed; deriving directly from filenames

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

  // removed legacy list (now reading directly from artistes directory)

  return (
    <div className="font-serif">
      {/* Hero Section with Video */}
      <section ref={heroRef} className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={marrakechVideo} type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/45" />
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(1000px_520px_at_60%_30%,black,transparent)]" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-8">
          <div className="text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white shadow-lg animate-[fadeUp_600ms_ease-out_100ms_both]">
              <span>EXPOSITION</span>
              <span className="h-1 w-1 rounded-full bg-amber-400" />
              <span>MARRAKECH 2024</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight text-white mt-6 md:mt-8 animate-[fadeUp_700ms_ease-out_200ms_both]">
              Ce Geste vient <span className="underline decoration-amber-400/80 underline-offset-4">D'ailleurs</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mt-4 md:mt-6 max-w-2xl mx-auto leading-relaxed animate-[fadeUp_700ms_ease-out_300ms_both]">
              Une immersion dans l'univers créatif de la nouvelle génération d'artistes marocains. 
              Découvrez des œuvres qui racontent notre époque, nos rêves et nos aspirations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 md:mt-8 animate-[fadeUp_700ms_ease-out_400ms_both]">
              <a href="#exposition" className="inline-flex items-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium shadow-lg hover:bg-white/90 transition w-full sm:w-auto justify-center">
                Explorer l'exposition
              </a>
              <a href="#artistes" className="inline-flex items-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm text-white px-6 py-3 text-sm hover:bg-white/20 transition w-full sm:w-auto justify-center">
                Découvrir les artistes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs: Curation, Artistes, L'expo */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-indigo-50/60 via-rose-50/50 to-amber-50/50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-center">
            {[
              { id: 'curation', label: 'Curation' },
              { id: 'artistes', label: 'Artistes' },
              { id: 'expo', label: "L'expo" },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as typeof activeTab)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition shadow-sm border ${activeTab === t.id ? 'bg-gradient-to-r from-indigo-600 to-rose-600 text-white border-transparent' : 'bg-white text-neutral-900 border-neutral-200 hover:bg-neutral-50'}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab Panels */}
          <div className="mt-10">
            {activeTab === 'curation' && (
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-4">Une Exposition Exceptionnelle</h3>
                  <p className="text-neutral-600 mb-6">
                    Cette exposition met en lumière le talent émergent du Maroc contemporain, dialoguant entre tradition et modernité.
                  </p>
                  <p className="text-neutral-600">
                    Des peintures aux installations, découvrez une diversité artistique qui reflète la richesse culturelle du Maroc d'aujourd'hui.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-neutral-200">
                  <img src={g7} alt="Marrakech" className="w-full h-56 md:h-72 object-cover" />
                  <div className="px-4 py-4">
                    <h4 className="font-serif text-xl text-neutral-900 mb-2">Direction artistique</h4>
                    <p className="text-neutral-600 text-sm">
                      Une curation attentive aux croisements de pratiques, aux récits sensibles et aux gestes singuliers qui transforment nos regards.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'artistes' && (
              <div className="grid md:grid-cols-3 gap-6">
                {[g8,g9,g10].map((src, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-neutral-200">
                    <div className="w-full h-48 rounded-xl mb-4 overflow-hidden">
                      <img src={src} alt={`artiste-${i+1}`} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-serif text-xl text-neutral-900 mb-1">Artiste {i+1}</h3>
                    <p className="text-neutral-600 text-sm mb-2">Pratique contemporaine</p>
                    <p className="text-neutral-500 text-sm">Démarche singulière, regard sensible et matériaux choisis pour raconter notre époque.</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'expo' && (
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-neutral-200">
                  <img src={g11} alt="Parcours" className="w-full h-56 md:h-72 object-cover" />
                  <div className="px-6 py-5">
                    <h4 className="font-serif text-xl text-neutral-900 mb-3">Informations pratiques</h4>
                    <div className="space-y-3 text-neutral-600 text-sm">
                      <div className="flex justify-between"><span>Date :</span><span>15 - 30 Novembre 2024</span></div>
                      <div className="flex justify-between"><span>Lieu :</span><span>Palais des Congrès, Marrakech</span></div>
                      <div className="flex justify-between"><span>Horaires :</span><span>10h - 18h (tous les jours)</span></div>
                      <div className="flex justify-between"><span>Tarif :</span><span>Entrée libre</span></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-neutral-900 mb-4">Parcours</h3>
                  <p className="text-neutral-600 mb-4">Un parcours fluide favorisant la rencontre entre œuvres, espaces et publics.</p>
                  <div className="rounded-2xl overflow-hidden ring-1 ring-neutral-200 shadow-sm">
                    <img src={g12} alt="Itinéraire" className="w-full h-56 md:h-72 object-cover" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-200"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white px-6 py-2">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full animate-pulse shadow-lg"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-4 h-4 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.6s' }}></div>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Artistes */}
      <section className="py-14 bg-gradient-to-br from-neutral-50 via-white to-amber-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Decorative Elements - More Visible */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-300/40 to-amber-500/40 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-indigo-300/40 to-rose-300/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-rose-300/40 to-amber-300/40 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-indigo-300/30 to-purple-300/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="mb-6 md:mb-8">
            <div className="flex items-end justify-between">
              <div>
                <div className="mx-0 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-400 via-rose-400 to-amber-400" />
                <h2 className="mt-3 font-serif text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Nos Artistes</h2>
              </div>
              <div className="text-neutral-500 text-sm md:text-base"><span className="font-medium text-neutral-800">{(0 + 1).toString().padStart(2,'0')}</span>/<span>{'12'}</span></div>
            </div>
          </div>

          {/* Carrousel d'artistes */}
          <ArtistCarousel
            artists={Object.entries(artistImages)
              .map(([path, url]) => {
                const name = deriveArtistNameFromFilename(getFileNameFromPath(path))
                const location = findLocationForName(name)
                console.log('Artist:', { path, url, name, location }) // Debug log
                return {
                  name,
                  imageUrl: url as string,
                  location,
                }
              })}
          />
        </div>
      </section>
    </div>
  )
}

export default ExpoMarrakech

type CarouselArtist = { name: string; imageUrl: string; location?: string }

function ArtistCarousel({ artists }: { artists: CarouselArtist[] }) {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const count = artists.length
  const clamp = (n: number) => (n < 0 ? 0 : n >= count ? count - 1 : n)

  function centerCard(i: number) {
    const node = containerRef.current
    if (!node) return
    const card = node.querySelector<HTMLDivElement>(`[data-idx="${i}"]`)
    if (!card) return
    const cardCenter = card.offsetLeft + card.offsetWidth / 2
    const targetLeft = Math.max(0, cardCenter - node.clientWidth / 2)
    node.scrollTo({ left: targetLeft, behavior: 'smooth' })
  }

  function goTo(i: number) {
    const next = clamp(i)
    setIndex(next)
    centerCard(next)
  }
  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  // Autoplay
  useEffect(() => {
    if (count <= 1) return
    const id = setInterval(() => {
      const n = index + 1 >= count ? 0 : index + 1
      setIndex(n)
      centerCard(n)
    }, 3500)
    return () => clearInterval(id)
  }, [index, count])

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative">
      {/* Carousel Background Elements - More Visible */}
      <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-amber-300/50 to-amber-500/50 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-br from-indigo-300/50 to-rose-300/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 -left-8 w-32 h-32 bg-gradient-to-br from-rose-300/40 to-purple-300/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 -right-8 w-36 h-36 bg-gradient-to-br from-amber-300/40 to-orange-300/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div
        ref={containerRef}
        className="flex items-center gap-4 md:gap-8 overflow-hidden scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {artists.map((a, i) => {
          const isCenter = i === index
          const delay = isVisible ? i * 100 : 0
          return (
            <div
              key={`${a.name}-${i}`}
              data-idx={i}
              className={
                `flex-none relative rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 ring-1 ring-neutral-200 shadow-xl hover:shadow-2xl transition-all duration-700 hover:ring-2 hover:ring-amber-400/50 hover:scale-105 transform ` +
                (isCenter ? 'w-64 sm:w-72 md:w-96 h-80 md:h-[28rem] scale-100' : 'w-40 sm:w-48 md:w-56 h-60 md:h-72 scale-95 opacity-90') +
                (isVisible ? ' animate-fade-in' : ' opacity-0')
              }
              style={{
                animationDelay: `${delay}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <img 
                src={a.imageUrl} 
                alt={a.name} 
                className="absolute inset-0 w-full h-full object-cover" 
                onError={(e) => {
                  console.error('Image failed to load:', a.imageUrl, a.name)
                  e.currentTarget.style.display = 'none'
                }}
                onLoad={() => console.log('Image loaded successfully:', a.name)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-radial from-black/40 via-transparent to-transparent" />
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '20px 20px'
              }} />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent font-serif text-2xl md:text-4xl tracking-tight font-bold drop-shadow-xl">{a.name}</div>
                {a.location && (
                  <div className="text-white/90 text-xs md:text-sm mt-1 drop-shadow-lg font-medium">{a.location}</div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Arrows */}
      <button
        aria-label="Précédent"
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-neutral-900 shadow-lg hover:bg-white hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <span className="text-xl font-bold">‹</span>
      </button>
      <button
        aria-label="Suivant"
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-neutral-900 shadow-lg hover:bg-white hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <span className="text-xl font-bold">›</span>
      </button>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            aria-label={`Aller à ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index 
                ? 'w-8 bg-gradient-to-r from-amber-400 to-amber-600 shadow-lg animate-pulse' 
                : 'w-3 bg-neutral-400 hover:bg-neutral-500 hover:scale-110'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
