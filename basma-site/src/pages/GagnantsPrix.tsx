import { useEffect, useRef } from 'react'
import img1 from '../assets/image/486110377_1083915340419276_6818340185519594510_n.jpg'
import img2 from '../assets/image/486611008_1088360486641428_6290542586408835721_n.jpg'
import img3 from '../assets/image/487496900_1088360913308052_8246974907603960931_n.jpg'
import img4 from '../assets/image/487053924_1088360626641414_5215291366757117172_n.jpg'
import img5 from '../assets/image/486610315_1088360936641383_2690010386236441209_n.jpg'
import img6 from '../assets/image/487324208_1088360846641392_1135837011246611117_n.jpg'
import img7 from '../assets/image/487446306_1088360519974758_4535856675029917714_n.jpg'
import img8 from '../assets/image/487533430_1088360623308081_7059243365164167540_n.jpg'
import img9 from '../assets/image/486840221_1088360849974725_5511276874634025115_n.jpg'
import img10 from '../assets/image/487065614_1088360506641426_1653589812142729089_n.jpg'
import img11 from '../assets/image/486805115_1088360563308087_7628630968930271535_n.jpg'
import img12 from '../assets/image/469354977_10162472028448234_4641629484451026544_n.jpg'

function GagnantsPrix() {
  const heroRef = useRef<HTMLElement>(null)

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

  const winners = [
    {
      id: 1,
      name: "Fatima Zahra Alami",
      artwork: "L'Écho des Traditions",
      category: "Peinture Contemporaine",
      image: img1,
      description: "Une œuvre qui réinvente les motifs traditionnels marocains à travers une palette contemporaine vibrante."
    },
    {
      id: 2,
      name: "Youssef Benali",
      artwork: "Métamorphoses Urbaines",
      category: "Sculpture & Installation",
      image: img2,
      description: "Installation immersive qui questionne l'évolution des espaces urbains marocains."
    },
    {
      id: 3,
      name: "Aicha El Mansouri",
      artwork: "Rêves Numériques",
      category: "Art Numérique",
      image: img3,
      description: "Expérience interactive qui fusionne technologie et patrimoine culturel marocain."
    },
    {
      id: 4,
      name: "Omar Tazi",
      artwork: "Lumières d'Atlas",
      category: "Photographie",
      image: img4,
      description: "Série photographique capturant la beauté sauvage des montagnes de l'Atlas."
    },
    {
      id: 5,
      name: "Khadija Benslimane",
      artwork: "Mémoires Textiles",
      category: "Art Textile",
      image: img5,
      description: "Exploration contemporaine des techniques de tissage traditionnelles berbères."
    },
    {
      id: 6,
      name: "Mehdi Chraibi",
      artwork: "Fragments de Mémoire",
      category: "Média Mixte",
      image: img6,
      description: "Collage multimédia explorant l'identité marocaine contemporaine."
    }
  ]

  return (
    <div className="font-serif">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[80vh] overflow-hidden bg-gradient-to-br from-neutral-900 via-slate-800 to-neutral-900">
        {/* Background Images Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-4 grid-rows-3 h-full">
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${img2})` }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${img4})` }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${img5})` }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${img6})` }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${img7})` }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${img8})` }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${img9})` }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${img10})` }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${img11})` }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${img12})` }}></div>
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-8">
          <div className="text-center max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 backdrop-blur-sm px-4 py-2 text-sm text-amber-300 shadow-lg animate-[fadeUp_600ms_ease-out_100ms_both]">
              <span>🏆 PRIX BASMA 2024</span>
              <span className="h-1 w-1 rounded-full bg-amber-400" />
              <span>EXCELLENCE ARTISTIQUE</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-white mt-8 animate-[fadeUp_700ms_ease-out_200ms_both]">
              Les <span className="underline decoration-amber-400/80 underline-offset-4">Étoiles</span> de l'Art
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mt-6 max-w-3xl mx-auto leading-relaxed animate-[fadeUp_700ms_ease-out_300ms_both]">
              Découvrez les talents exceptionnels qui ont marqué l'année 2024. 
              Ces artistes visionnaires redéfinissent les frontières de la création contemporaine marocaine.
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-8 animate-[fadeUp_700ms_ease-out_400ms_both]">
              <a href="#gagnants" className="inline-flex items-center rounded-full bg-amber-400 text-black px-6 py-3 text-sm font-medium shadow-lg hover:bg-amber-300 transition">
                Voir les gagnants
              </a>
              <a href="#ceremonie" className="inline-flex items-center rounded-full border border-white/50 bg-white/10 backdrop-blur-sm text-white px-6 py-3 text-sm hover:bg-white/20 transition">
                Cérémonie de remise
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Winners Gallery */}
      <section id="gagnants" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 will-animate">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
              Nos Lauréats d'Exception
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Chaque gagnant incarne l'excellence artistique et l'innovation créative. 
              Leurs œuvres transcendent les conventions et inspirent la nouvelle génération.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 will-animate">
            {winners.map((winner) => (
              <div key={winner.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={winner.image} 
                    alt={winner.artwork}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-amber-400 text-black px-3 py-1 rounded-full text-xs font-medium">
                    #{winner.id}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-amber-600 text-sm font-medium mb-2">{winner.category}</div>
                  <h3 className="font-serif text-xl text-neutral-900 mb-2">{winner.name}</h3>
                  <h4 className="text-lg text-neutral-700 mb-3 font-medium">{winner.artwork}</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">{winner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceremony Section */}
      <section id="ceremonie" className="py-16 md:py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 will-animate">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-4">
              Cérémonie de Remise des Prix
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Un moment magique où l'art rencontre la reconnaissance, dans une atmosphère 
              d'élégance et de célébration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center will-animate">
            <div>
              <h3 className="font-serif text-2xl text-neutral-900 mb-6">
                Une Nuit Mémorable
              </h3>
              <p className="text-neutral-600 mb-6">
                La cérémonie de remise des prix BASMA 2024 s'est déroulée dans un cadre 
                exceptionnel, réunissant artistes, collectionneurs, critiques d'art et 
                amateurs d'art pour célébrer l'excellence créative.
              </p>
              <p className="text-neutral-600 mb-6">
                Chaque lauréat a été honoré pour sa contribution unique à l'art contemporain 
                marocain, recevant non seulement une reconnaissance, mais aussi une plateforme 
                pour faire rayonner son travail.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 rounded-full p-3">
                  <span className="text-amber-600 text-2xl">🏆</span>
                </div>
                <div>
                  <div className="font-medium text-neutral-900">Prix d'Excellence</div>
                  <div className="text-sm text-neutral-600">Reconnaissance artistique</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="text-sm font-medium text-neutral-900">6 Catégories</div>
                  <div className="text-xs text-neutral-600">Art contemporain</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl mb-2">👥</div>
                  <div className="text-sm font-medium text-neutral-900">200+ Invités</div>
                  <div className="text-xs text-neutral-600">Professionnels de l'art</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl mb-2">📅</div>
                  <div className="text-sm font-medium text-neutral-900">15 Novembre</div>
                  <div className="text-xs text-neutral-600">Cérémonie 2024</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl mb-2">📍</div>
                  <div className="text-sm font-medium text-neutral-900">Rabat</div>
                  <div className="text-xs text-neutral-600">Palais des Arts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-amber-400 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8 will-animate">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Rejoignez la Prochaine Édition
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Vous êtes artiste ? Participez au Prix BASMA 2025 et faites rayonner votre talent 
            sur la scène artistique marocaine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#participation" className="inline-flex items-center rounded-full bg-white text-amber-600 px-8 py-3 text-sm font-medium shadow-lg hover:bg-white/90 transition">
              Participer au concours
            </a>
            <a href="#criteria" className="inline-flex items-center rounded-full border border-white/50 bg-white/10 backdrop-blur-sm text-white px-8 py-3 text-sm hover:bg-white/20 transition">
              Critères de sélection
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GagnantsPrix
