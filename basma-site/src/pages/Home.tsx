import img1 from '../assets/image/salon/sal1.jpg'
import img2 from '../assets/image/salon/sal2.jpg'
import img3 from '../assets/image/salon/sal3.jpg'
import img4 from '../assets/image/salon/sal4.jpg'
import img5 from '../assets/image/salon/sal5.jpg'
// img7 removed (file missing); using img8 instead
import img8 from '../assets/image/pexels-jplenio-1114883.jpg'
import at1 from '../assets/image/atelier/486871050_1088886459922164_4966030406835988211_n.jpg'
import at2 from '../assets/image/atelier/486610315_1088360936641383_2690010386236441209_n.jpg'
import at3 from '../assets/image/atelier/486805115_1088360563308087_7628630968930271535_n.jpg'
import at4 from '../assets/image/atelier/486611008_1088360486641428_6290542586408835721_n.jpg'
import at5 from '../assets/image/atelier/466167879_10162118159108234_8757469431173656918_n.jpg'
import at6 from '../assets/image/atelier/486871050_1088886459922164_4966030406835988211_n.jpg'
// Fallback hero image to an existing asset to fix missing import
import b1 from '../assets/image/469354977_10162472028448234_4641629484451026544_n.jpg'
import b2 from '../assets/image/487065614_1088360506641426_1653589812142729089_n.jpg'
import b3 from '../assets/image/487324208_1088360846641392_1135837011246611117_n.jpg'
import b4 from '../assets/image/pexels-daiangan-102127.jpg'
import b5 from '../assets/image/pexels-heftiba-1194420.jpg'
import b6 from '../assets/image/pexels-paduret-1193743.jpg'
// Conférences images (nouveaux fichiers)
import conf1 from '../assets/image/conferences/bandeau.jpg'
import conf2 from "../assets/image/conferences/466669245_10162136551208234_8953480339713461583_n (1).jpg"
import conf3 from '../assets/image/conferences/466042041_10162118159033234_2174382713487770106_n.jpg'
import conf4 from '../assets/image/conferences/465907119_10162118159058234_699258427212432563_n.jpg'
import conf5 from '../assets/image/conferences/465740229_10162118158743234_1854284088801059865_n.jpg'
import conf6 from '../assets/image/conferences/Conf 2 carré AAI.png'
// Marrakech images
import mk1 from '../assets/image/marrakech/154.jpg'
import mk2 from '../assets/image/marrakech/26048904lpw-26054010-article-jpg_10120230.jpg'
import mk3 from '../assets/image/marrakech/26048904lpw-26054599-embed-libre-jpg_10120233.jpg'
import mk4 from '../assets/image/marrakech/Capture.PNG'
import mk5 from '../assets/image/marrakech/MAR.avif'
import mk6 from '../assets/image/marrakech/MARR.jpg'
// Removed PNG import due to TS resolution issues; using 5 images
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// Le Prix images
// (prix images available if needed later)
// Atelier images for Le Prix slider override
import atl1 from '../assets/image/atelier/486871050_1088886459922164_4966030406835988211_n.jpg'
import atl2 from '../assets/image/atelier/486610315_1088360936641383_2690010386236441209_n.jpg'
import atl3 from '../assets/image/atelier/486805115_1088360563308087_7628630968930271535_n.jpg'
import atl4 from '../assets/image/atelier/486611008_1088360486641428_6290542586408835721_n.jpg'
import atl5 from '../assets/image/atelier/466167879_10162118159108234_8757469431173656918_n.jpg'

function Home() {
  const observedRefs = useRef<HTMLElement[]>([])
  const setObserved = (index: number) => (el: HTMLElement | null) => {
    if (el) observedRefs.current[index] = el
  }

  useEffect(() => {
    const elements = observedRefs.current
    if (!elements || elements.length === 0) return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.remove('will-animate')
            e.target.classList.add('fade-up')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    elements.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="font-serif min-h-screen relative bg-white overflow-x-hidden">
      {/* Removed noise overlay for light theme */}
      <section className="relative w-full min-h-[140px] md:min-h-[240px] overflow-hidden">
        {/* Background carousel (slides left → right) */}
        <BackgroundCarousel images={[b1, b2, b3, b4, b5, b6]} />
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(1200px_600px_at_60%_30%,black,transparent)]" />
        <div className="relative z-10 w-full max-w-4xl mr-auto px-3 md:px-6 py-3 md:py-4 text-left">
      <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300/70 bg-white/80 px-3 py-1 text-xs text-neutral-700 shadow-sm animate-[fadeUp_600ms_ease-out_100ms_both] transition-colors duration-300 hover:bg-white">
            <span>BASMA</span>
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            <span className="hidden sm:inline">Arts & Communauté</span>
            <span className="sm:hidden">Art</span>
          </div>
          <div className="mt-3 md:mt-4 space-y-3 md:space-y-4 rounded-xl bg-black/50 p-3 md:p-5 shadow-lg animate-[fadeUp_700ms_ease-out_150ms_both]">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl leading-tight text-white animate-[fadeUp_700ms_ease-out_200ms_both]">
              Bienvenue sur <span className="underline decoration-amber-400/80 underline-offset-4"><span>Beaux‑Arts</span> <span>Solidarité</span> <span>Maroc</span></span>
            </h1>
            <p className="text-sm md:text-lg text-white/90 bg-black px-2 md:px-3 py-1.5 md:py-2 rounded-md animate-[fadeUp_700ms_ease-out_250ms_both]">
              Nous révélons, accompagnons et célébrons la nouvelle génération d’artistes au Maroc. 
              À travers expositions, ateliers et workshops, nous offrons des opportunités concrètes pour faire rayonner 
              leurs œuvres et rencontrer des publics et des professionnels.
            </p>
            <p className="text-xs md:text-sm text-white/80 animate-[fadeUp_700ms_ease-out_280ms_both] hidden sm:block">
              Notre équipe réunit artistes, curateurs et mentors engagés. Ensemble, nous tissons des ponts entre
              disciplines, territoires et publics pour faire circuler les idées et révéler des trajectoires singulières.
            </p>
            <div className="flex items-center gap-2 animate-[fadeUp_700ms_ease-out_300ms_both]">
              <a href="#explorer" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-4 py-1.5 text-xs md:text-sm shadow-sm hover:bg-neutral-800 transition">Explorer</a>
              <a href="#ateliers" className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-xs md:text-sm text-neutral-900 hover:bg-neutral-50 transition">Nos ateliers</a>
            </div>
          </div>
        </div>
      </section>

      {/* Le salon */}
      <section ref={setObserved(0)} className="w-full bg-white py-6 md:py-12 will-animate">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 gap-3 md:gap-8 items-center">
          {/* Left text */}
          <div className="col-span-2 md:col-span-1 order-1 md:order-1">
            <h2 className="font-serif text-lg md:text-4xl font-semibold tracking-tight text-neutral-900">Le salon</h2>
            <p className="mt-2 md:mt-4 text-xs md:text-base text-neutral-700 leading-relaxed">
              Un espace vivant où les idées circulent, les œuvres dialoguent et les regards se rencontrent.
              Entre discussions, présentations et coups de cœur, le salon invite à découvrir autrement et à partager
              l'expérience artistique, en toute proximité avec les créateur·rice·s.
            </p>
            <p className="mt-2 md:mt-3 text-neutral-600 text-xs md:text-sm">
              Chaque semaine, une sélection d'œuvres, de formats courts et de focus thématiques pour nourrir la curiosité.
            </p>
            <p className="mt-2 md:mt-3 text-neutral-600 text-xs md:text-sm">
              Découvrez des talents émergents, des parcours singuliers et des collaborations inédites qui font vibrer la scène locale.
              Le salon met en avant les voix et les gestes d'aujourd'hui, avec un regard généreux et exigeant.
            </p>
            <div className="mt-3 md:mt-5">
              <Link to="/LeSalon" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-3 py-1 md:px-5 md:py-2 text-xs md:text-sm shadow-sm hover:bg-neutral-800 transition">
                En savoir plus
              </Link>
              </div>
              </div>

          {/* Right mini slider */}
          <div className="col-span-2 md:col-span-1 md:justify-self-end w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0 transition-transform duration-500 ease-out will-change-transform hover:scale-[1.01] order-2 md:order-2">
            <MiniSlider images={[img1, img2, img3, img4, img5]} />
                </div>
                </div>
      </section>

      {/* Le Prix */}
      <section ref={setObserved(1)} className="w-full bg-white py-6 md:py-12 will-animate">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 gap-3 md:gap-8 items-center">
          {/* Left text */}
          <div className="col-span-2 md:col-span-1 md:pl-4 order-1 md:order-2">
            <h2 className="font-serif text-lg md:text-4xl font-semibold tracking-tight text-neutral-900">Le Prix</h2>
            <p className="mt-2 md:mt-4 text-xs md:text-base text-neutral-700 leading-relaxed">
              Un appel à projets qui valorise l'audace, la maîtrise et la singularité des démarches.
              Le Prix BASMA accompagne les lauréat·e·s avec une visibilité renforcée, un mentorat dédié et des
              opportunités d'expositions.
            </p>
            <p className="mt-2 md:mt-3 text-neutral-600 text-xs md:text-sm">
              Ouvert aux artistes émergent·e·s, il encourage les croisements de pratiques et la prise de risque,
              pour faire émerger des trajectoires nouvelles et fédérer une communauté engagée.
            </p>
            <div className="mt-3 md:mt-5">
              <a href="/le-prix" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-3 py-1 md:px-5 md:py-2 text-xs md:text-sm shadow-sm hover:bg-neutral-800 transition">
                En savoir plus
              </a>
            </div>
          </div>

          {/* Right mini slider */}
          <div className="col-span-2 md:col-span-1 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0 order-2 md:order-1">
            <MiniSlider images={[atl1, atl2, atl3, atl4, atl5]} />
          </div>
        </div>
      </section>

      {/* Les Workshop */}
      <section ref={setObserved(2)} className="w-full bg-white py-6 md:py-12 will-animate">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 gap-3 md:gap-8 items-center">
          {/* Left text */}
          <div className="col-span-2 md:col-span-1 md:pr-4 order-1 md:order-1">
            <h2 className="font-serif text-lg md:text-4xl font-semibold tracking-tight text-neutral-900">Les Workshop</h2>
            <p className="mt-2 md:mt-4 text-xs md:text-base text-neutral-700 leading-relaxed">
              Des formats courts et intensifs pour expérimenter, se perfectionner et faire émerger des projets concrets.
              Encadrés par des artistes et mentors, les workshops favorisent la pratique, l'échange et le feedback exigeant
              dans une atmosphère bienveillante.
            </p>
            <p className="mt-2 md:mt-3 text-neutral-600 text-xs md:text-sm">
              Techniques mixtes, photographie, édition, textiles, recherche ou performance — choisissez votre terrain de jeu
              et développez votre signature tout en enrichissant votre réseau.
            </p>
            <div className="mt-3 md:mt-5">
              <Link to="/themes/activites-workshop" className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-3 py-1 md:px-5 md:py-2 text-xs md:text-sm text-neutral-900 hover:bg-neutral-50 transition">
                En savoir plus
              </Link>
            </div>
          </div>

          {/* Right mini slider */}
          <div className="col-span-2 md:col-span-1 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0 md:justify-self-end transition-transform duration-500 ease-out will-change-transform hover:scale-[1.01] order-2 md:order-2">
            <MiniSlider images={[at1, at2, at3, at4, at5, at6]} />
          </div>
        </div>
      </section>

      {/* Les conférences */}
      <section ref={setObserved(3)} className="w-full bg-white py-6 md:py-12 will-animate">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 gap-3 md:gap-8 items-center">
          {/* Left text */}
          <div className="col-span-2 md:col-span-1 md:pl-4 order-1 md:order-2">
            <h2 className="font-serif text-lg md:text-4xl font-semibold tracking-tight text-neutral-900">Les conférences</h2>
            <p className="mt-2 md:mt-4 text-xs md:text-base text-neutral-700 leading-relaxed">
              Espace de transmission et de débat, les conférences rassemblent artistes, chercheur·euse·s et professionnel·le·s
              autour de questions esthétiques, sociales et techniques. Elles donnent des clés de lecture, ouvrent des perspectives
              et nourrissent des échanges éclairés avec le public.
            </p>
            <p className="mt-2 md:mt-3 text-neutral-600 text-xs md:text-sm">
              Entre études de cas, retours d'expérience, démarches de création et dialogues interdisciplinaires, ces rencontres
              mettent en lumière les trajectoires et les enjeux d'aujourd'hui. Rejoignez-nous pour confronter les idées et
              enrichir votre regard.
            </p>
            <div className="mt-3 md:mt-5">
              <Link to="/NosConferences" className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-3 py-1 md:px-5 md:py-2 text-xs md:text-sm text-neutral-900 hover:bg-neutral-50 transition">
                Nos conférences
              </Link>
            </div>
          </div>

          {/* Right mini slider */}
          <div className="col-span-2 md:col-span-1 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0 md:justify-self-start transition-transform duration-500 ease-out will-change-transform hover:scale-[1.01] order-2 md:order-1">
            <MiniSlider images={[conf1, conf2, conf3, conf4, conf5, conf6]} />
          </div>
        </div>
      </section>

      {/* Le Grand Public */}
      <section ref={setObserved(4)} className="w-full bg-white py-6 md:py-12 will-animate">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 gap-3 md:gap-8 items-center">
          {/* Left text */}
            <div className="col-span-2 md:col-span-1 order-1 md:order-1">
            <h2 className="font-serif text-lg md:text-4xl font-semibold tracking-tight text-neutral-900">Le Grand Public</h2>
            <p className="mt-2 md:mt-4 text-xs md:text-base text-neutral-700 leading-relaxed">
              Une programmation accessible et généreuse pour tous les publics: visites guidées, rencontres, formats courts et
              moments festifs. L'objectif: partager l'art et susciter la curiosité, quel que soit l'âge ou le niveau de pratique.
            </p>
            <p className="mt-2 md:mt-3 text-neutral-600 text-xs md:text-sm">
              En famille, entre ami·e·s ou en solo, découvrez une sélection d'expériences pensées pour ouvrir des portes et
              donner envie de revenir. Parce que l'art se vit, se discute et se transmet.
            </p>
            <div className="mt-3 md:mt-5">
              <a href="#grand-public" className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-3 py-1 md:px-5 md:py-2 text-xs md:text-sm text-neutral-900 hover:bg-neutral-50 transition">
                Télécharger
              </a>
            </div>
          </div>

          {/* Right mini slider */}
          <div className="col-span-2 md:col-span-1 md:justify-self-end w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0 transition-transform duration-500 ease-out will-change-transform hover:scale-[1.01] order-2 md:order-2">
            <MiniSlider images={[img2, img3, img4, img5, img8]} />
          </div>
        </div>
      </section>

      {/* Le Geste vient d'ailleurs 1.54 Marrakech */}
      <section ref={setObserved(5)} className="w-full bg-white py-6 md:py-12 will-animate">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 gap-3 md:gap-8 items-center">
          {/* Left text */}
          <div className="col-span-2 md:col-span-1 md:pl-4 order-1 md:order-2">
            <h2 className="font-serif text-lg sm:text-xl md:text-4xl font-semibold tracking-tight text-neutral-900">Ce Geste vient d'ailleurs 1.54 Marrakech</h2>
            <p className="mt-2 md:mt-4 text-xs md:text-base text-neutral-700 leading-relaxed">
              Un rendez-vous dédié aux gestes, aux matières et aux circulations culturelles qui traversent la scène
              artistique contemporaine. À l'occasion de 1.54 Marrakech, ce focus met en lumière des pratiques hybrides,
              des dialogues entre territoires et des histoires sensibles portées par les artistes.
            </p>
            <p className="mt-2 md:mt-3 text-neutral-600 text-xs md:text-sm">
              Performances, installations, rencontres et partages d'expériences articulent un parcours vivant, pour
              comprendre d'où vient le geste et comment il se réinvente.
            </p>
            <div className="mt-3 md:mt-5">
              <Link to="/themes/expo-marrakech" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-3 py-1 md:px-5 md:py-2 text-xs md:text-sm shadow-sm hover:bg-neutral-800 transition">
                En savoir plus
              </Link>
            </div>
          </div>

          {/* Right mini slider */}
          <div className="col-span-2 md:col-span-1 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0 md:justify-self-start transition-transform duration-500 ease-out will-change-transform hover:scale-[1.01] order-2 md:order-1">
            <MiniSlider images={[mk1, mk2, mk3, mk4, mk5, mk6]} />
          </div>
        </div>
      </section>

    </div>
  )
}

function BackgroundCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    if (images.length === 0) return
    const id = setInterval(() => setIdx(i => (i + 1) % images.length), 3500)
    return () => clearInterval(id)
  }, [images.length])
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="flex h-full will-change-transform"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${idx * (100 / images.length)}%)`,
          transition: 'transform 900ms cubic-bezier(0.16,1,0.3,1)'
        }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt="banner" className="h-full w-full object-cover flex-shrink-0" style={{ width: `${100 / images.length}%` }} />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/25" />
    </div>
  )
}

function MiniSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState<number | null>(null)
  const [isSliding, setIsSliding] = useState(false)
  const [forwardOrder, setForwardOrder] = useState(true)
  const [translatePx, setTranslatePx] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const total = images.length
  const PEEK_PX = 0
  const GAP_PX = 0

  useEffect(() => {
    if (!containerRef.current) return
    function recalc() {
      const node = containerRef.current
      if (!node) return
      setSlideWidth(Math.max(0, node.clientWidth - PEEK_PX))
    }
    recalc()
    const onResize = () => recalc()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (total === 0) return
    const id = setInterval(() => {
      startSlide((index + 1) % total)
    }, 3000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, total, slideWidth])

  function startSlide(target: number) {
    if (total === 0 || slideWidth === 0) return
    const normalized = (target + total) % total
    if (normalized === index) return
    const isForward = (normalized === (index + 1) % total) || (normalized > index && !(index === 0 && normalized === total - 1))
    setForwardOrder(isForward)
    setNextIndex(normalized)
    setIsSliding(true)
    setTranslatePx(0)
    const distance = slideWidth + GAP_PX
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setTranslatePx(-distance))
    })
  }

  function handleTransitionEnd() {
    if (!isSliding || nextIndex === null) return
    setIndex(nextIndex)
    setNextIndex(null)
    setIsSliding(false)
    setTranslatePx(0)
  }

  const goTo = (i: number) => startSlide(i)

  const leftSrc = forwardOrder ? images[index] : images[nextIndex ?? index]
  const rightSrc = forwardOrder ? images[nextIndex ?? index] : images[index]

  return (
    <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm group" ref={containerRef}>
      <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <div
          className="flex h-full"
          style={{
            width: slideWidth > 0 ? `${slideWidth * 2 + GAP_PX}px` : undefined,
            gap: `${GAP_PX}px`,
            transform: `translateX(${translatePx}px)`,
            transition: isSliding ? 'transform 500ms cubic-bezier(0.22,1,0.36,1)' : 'none',
            paddingRight: '0px',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          <img src={leftSrc} alt="slide" style={{ width: `${slideWidth}px` }} className="h-full object-cover" />
          <img src={rightSrc} alt="slide" style={{ width: `${slideWidth}px` }} className="h-full object-cover" />
        </div>
              </div>

      <button
        type="button"
        aria-label="Précédent"
        onClick={() => goTo(index - 1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-neutral-900 shadow hover:bg-white transition-colors duration-200"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Suivant"
        onClick={() => goTo(index + 1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-neutral-900 shadow hover:bg-white transition-colors duration-200"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/70 px-2 py-1 rounded-full backdrop-blur-sm transition-all">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={
              'h-2.5 w-2.5 rounded-full transition ' +
              (i === index ? 'bg-neutral-900 w-5' : 'bg-neutral-400 hover:bg-neutral-500')
            }
          />
        ))}
      </div>
    </div>
  )
}

export default Home



 