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
      {/* Enhanced Hero Section */}
      <section className="relative w-full min-h-[200px] md:min-h-[400px] overflow-hidden">
        {/* Background carousel with enhanced effects */}
        <BackgroundCarousel images={[b1, b2, b3, b4, b5, b6]} />
        
        {/* Enhanced overlay with gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
          <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(1200px_600px_at_60%_30%,black,transparent)]" />
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-12 text-center">
          {/* Enhanced brand badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-4 py-2 text-sm text-white shadow-lg animate-[fadeUp_600ms_ease-out_100ms_both] transition-all duration-300 hover:bg-white/20 hover:scale-105">
            <span className="font-semibold tracking-wide">BASMA</span>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 animate-pulse" />
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse delay-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 animate-pulse delay-700" />
            </div>
            <span className="hidden sm:inline font-medium">Arts & Communauté</span>
            <span className="sm:hidden font-medium">Art</span>
          </div>
          
          {/* Enhanced main content */}
          <div className="mt-6 md:mt-8 space-y-4 md:space-y-6 rounded-2xl bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-sm p-6 md:p-8 shadow-2xl animate-[fadeUp_700ms_ease-out_150ms_both] border border-white/10">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight text-white animate-[fadeUp_700ms_ease-out_200ms_both]">
              Bienvenue sur{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-bold">
                  Beaux‑Arts Solidarité Maroc
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/80 via-orange-500/80 to-red-500/80 rounded-full animate-pulse" />
              </span>
            </h1>
            
            <p className="text-base md:text-xl text-white/95 bg-gradient-to-r from-black/40 to-black/60 px-4 md:px-6 py-3 md:py-4 rounded-xl animate-[fadeUp_700ms_ease-out_250ms_both] backdrop-blur-sm border border-white/10">
              Nous révélons, accompagnons et célébrons la nouvelle génération d'artistes au Maroc. 
              À travers expositions, ateliers et workshops, nous offrons des opportunités concrètes pour faire rayonner 
              leurs œuvres et rencontrer des publics et des professionnels.
            </p>
            
            <p className="text-sm md:text-base text-white/85 animate-[fadeUp_700ms_ease-out_280ms_both] hidden sm:block max-w-4xl mx-auto">
              Notre équipe réunit artistes, curateurs et mentors engagés. Ensemble, nous tissons des ponts entre
              disciplines, territoires et publics pour faire circuler les idées et révéler des trajectoires singulières.
            </p>
            
            {/* Enhanced navigation buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 animate-[fadeUp_700ms_ease-out_300ms_both]">
              <a href="#salon" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neutral-900 to-black text-white px-4 py-2.5 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-neutral-800">
                <span>Le Salon</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#prix" className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white px-4 py-2.5 text-sm font-medium hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
                <span>Le Prix</span>
                <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </a>
              <a href="#workshop" className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white px-4 py-2.5 text-sm font-medium hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
                <span>Workshop</span>
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </a>
              <a href="#conferences" className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white px-4 py-2.5 text-sm font-medium hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
                <span>Conférences</span>
                <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 9h6m-6 4h6m-6 4h4" />
                </svg>
              </a>
              <a href="#grand-public" className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white px-4 py-2.5 text-sm font-medium hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
                <span>Grand Public</span>
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </a>
              <a href="#marrakech" className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white px-4 py-2.5 text-sm font-medium hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
                <span>Marrakech</span>
                <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Le salon - Enhanced */}
      <section id="salon" ref={setObserved(0)} className="relative w-full py-8 md:py-16 will-animate overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-2xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left text */}
          <div className="order-1 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-xs text-blue-700 shadow-sm mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="font-medium">Espace de découverte</span>
            </div>
            <h2 className="font-serif text-2xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-4">
              Le salon
            </h2>
            <div className="space-y-4">
              <p className="text-sm md:text-lg text-neutral-700 leading-relaxed bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
                Un espace vivant où les idées circulent, les œuvres dialoguent et les regards se rencontrent.
                Entre discussions, présentations et coups de cœur, le salon invite à découvrir autrement et à partager
                l'expérience artistique, en toute proximité avec les créateur·rice·s.
              </p>
              <p className="text-xs md:text-sm text-neutral-600 bg-white/40 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                Chaque semaine, une sélection d'œuvres, de formats courts et de focus thématiques pour nourrir la curiosité.
              </p>
              <p className="text-xs md:text-sm text-neutral-600 bg-white/40 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                Découvrez des talents émergents, des parcours singuliers et des collaborations inédites qui font vibrer la scène locale.
                Le salon met en avant les voix et les gestes d'aujourd'hui, avec un regard généreux et exigeant.
              </p>
            </div>
            <div className="mt-6">
              <Link to="/LeSalon" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-indigo-700">
                <span>En savoir plus</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right mini slider */}
          <div className="order-2 lg:order-2 w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-1 shadow-xl">
                <MiniSlider images={[img1, img2, img3, img4, img5]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Prix - Enhanced */}
      <section id="prix" ref={setObserved(1)} className="relative w-full py-8 md:py-16 will-animate overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-orange-50/60 to-red-50/80" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-amber-400/10 to-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-r from-red-400/10 to-pink-500/10 rounded-full blur-2xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Right mini slider */}
          <div className="order-2 lg:order-1 w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-1 shadow-xl">
                <MiniSlider images={[atl1, atl2, atl3, atl4, atl5]} />
              </div>
            </div>
          </div>

          {/* Left text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs text-amber-700 shadow-sm mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span className="font-medium">Reconnaissance & Excellence</span>
            </div>
            <h2 className="font-serif text-2xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-900 via-orange-800 to-red-800 bg-clip-text text-transparent mb-4">
              Le Prix
            </h2>
            <div className="space-y-4">
              <p className="text-sm md:text-lg text-neutral-700 leading-relaxed bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
                Un appel à projets qui valorise l'audace, la maîtrise et la singularité des démarches.
                Le Prix BASMA accompagne les lauréat·e·s avec une visibilité renforcée, un mentorat dédié et des
                opportunités d'expositions.
              </p>
              <p className="text-xs md:text-sm text-neutral-600 bg-white/40 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                Ouvert aux artistes émergent·e·s, il encourage les croisements de pratiques et la prise de risque,
                pour faire émerger des trajectoires nouvelles et fédérer une communauté engagée.
              </p>
            </div>
            <div className="mt-6">
              <a href="/le-prix" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-amber-700 hover:to-orange-700">
                <span>En savoir plus</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Les Workshop - Enhanced */}
      <section id="workshop" ref={setObserved(2)} className="relative w-full py-8 md:py-16 will-animate overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-teal-50/60 to-cyan-50/80" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-60 h-60 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-44 h-44 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-2xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left text */}
          <div className="order-1 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs text-emerald-700 shadow-sm mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="font-medium">Apprentissage & Création</span>
            </div>
            <h2 className="font-serif text-2xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-800 bg-clip-text text-transparent mb-4">
              Les Workshop
            </h2>
            <div className="space-y-4">
              <p className="text-sm md:text-lg text-neutral-700 leading-relaxed bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
                Des formats courts et intensifs pour expérimenter, se perfectionner et faire émerger des projets concrets.
                Encadrés par des artistes et mentors, les workshops favorisent la pratique, l'échange et le feedback exigeant
                dans une atmosphère bienveillante.
              </p>
              <p className="text-xs md:text-sm text-neutral-600 bg-white/40 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                Techniques mixtes, photographie, édition, textiles, recherche ou performance — choisissez votre terrain de jeu
                et développez votre signature tout en enrichissant votre réseau.
              </p>
            </div>
            <div className="mt-6">
              <Link to="/themes/activites-workshop" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-emerald-700 hover:to-teal-700">
                <span>En savoir plus</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right mini slider */}
          <div className="order-2 lg:order-2 w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-1 shadow-xl">
                <MiniSlider images={[at1, at2, at3, at4, at5, at6]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les conférences - Enhanced */}
      <section id="conferences" ref={setObserved(3)} className="relative w-full py-8 md:py-16 will-animate overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-purple-50/60 to-pink-50/80" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-52 h-52 bg-gradient-to-r from-indigo-400/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-400/10 to-rose-500/10 rounded-full blur-2xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Right mini slider */}
          <div className="order-2 lg:order-1 w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-1 shadow-xl">
                <MiniSlider images={[conf1, conf2, conf3, conf4, conf5, conf6]} />
              </div>
            </div>
          </div>

          {/* Left text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs text-indigo-700 shadow-sm mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              <span className="font-medium">Transmission & Débat</span>
            </div>
            <h2 className="font-serif text-2xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 bg-clip-text text-transparent mb-4">
              Les conférences
            </h2>
            <div className="space-y-4">
              <p className="text-sm md:text-lg text-neutral-700 leading-relaxed bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
                Espace de transmission et de débat, les conférences rassemblent artistes, chercheur·euse·s et professionnel·le·s
                autour de questions esthétiques, sociales et techniques. Elles donnent des clés de lecture, ouvrent des perspectives
                et nourrissent des échanges éclairés avec le public.
              </p>
              <p className="text-xs md:text-sm text-neutral-600 bg-white/40 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                Entre études de cas, retours d'expérience, démarches de création et dialogues interdisciplinaires, ces rencontres
                mettent en lumière les trajectoires et les enjeux d'aujourd'hui. Rejoignez-nous pour confronter les idées et
                enrichir votre regard.
              </p>
            </div>
            <div className="mt-6">
              <Link to="/NosConferences" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-indigo-700 hover:to-purple-700">
                <span>Nos conférences</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Le Grand Public - Enhanced */}
      <section id="grand-public" ref={setObserved(4)} className="relative w-full py-8 md:py-16 will-animate overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 via-pink-50/60 to-fuchsia-50/80" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-56 h-56 bg-gradient-to-r from-rose-400/10 to-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-fuchsia-400/10 to-purple-500/10 rounded-full blur-2xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left text */}
          <div className="order-1 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-xs text-rose-700 shadow-sm mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="font-medium">Accessibilité & Partage</span>
            </div>
            <h2 className="font-serif text-2xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-rose-900 via-pink-800 to-fuchsia-800 bg-clip-text text-transparent mb-4">
              Le Grand Public
            </h2>
            <div className="space-y-4">
              <p className="text-sm md:text-lg text-neutral-700 leading-relaxed bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
                Une programmation accessible et généreuse pour tous les publics: visites guidées, rencontres, formats courts et
                moments festifs. L'objectif: partager l'art et susciter la curiosité, quel que soit l'âge ou le niveau de pratique.
              </p>
              <p className="text-xs md:text-sm text-neutral-600 bg-white/40 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                En famille, entre ami·e·s ou en solo, découvrez une sélection d'expériences pensées pour ouvrir des portes et
                donner envie de revenir. Parce que l'art se vit, se discute et se transmet.
              </p>
            </div>
            <div className="mt-6">
              <a href="#grand-public" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-rose-700 hover:to-pink-700">
                <span>Télécharger</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right mini slider */}
          <div className="order-2 lg:order-2 w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-1 shadow-xl">
                <MiniSlider images={[img2, img3, img4, img5, img8]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Geste vient d'ailleurs 1.54 Marrakech - Enhanced */}
      <section id="marrakech" ref={setObserved(5)} className="relative w-full py-8 md:py-16 will-animate overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/80 via-purple-50/60 to-indigo-50/80" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-gradient-to-r from-violet-400/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-44 h-44 bg-gradient-to-r from-indigo-400/10 to-blue-500/10 rounded-full blur-2xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Right mini slider */}
          <div className="order-2 lg:order-1 w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-1 shadow-xl">
                <MiniSlider images={[mk1, mk2, mk3, mk4, mk5, mk6]} />
              </div>
            </div>
          </div>

          {/* Left text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1 text-xs text-violet-700 shadow-sm mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              <span className="font-medium">Circulation Culturelle</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-violet-900 via-purple-800 to-indigo-800 bg-clip-text text-transparent mb-4">
              Ce Geste vient d'ailleurs 1.54 Marrakech
            </h2>
            <div className="space-y-4">
              <p className="text-sm md:text-lg text-neutral-700 leading-relaxed bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
                Un rendez-vous dédié aux gestes, aux matières et aux circulations culturelles qui traversent la scène
                artistique contemporaine. À l'occasion de 1.54 Marrakech, ce focus met en lumière des pratiques hybrides,
                des dialogues entre territoires et des histoires sensibles portées par les artistes.
              </p>
              <p className="text-xs md:text-sm text-neutral-600 bg-white/40 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                Performances, installations, rencontres et partages d'expériences articulent un parcours vivant, pour
                comprendre d'où vient le geste et comment il se réinvente.
              </p>
            </div>
            <div className="mt-6">
              <Link to="/themes/expo-marrakech" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-violet-700 hover:to-indigo-700">
                <span>En savoir plus</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
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



 