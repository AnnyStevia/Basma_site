import { useEffect, useRef, useState } from 'react'
import marrakechVideo from '../assets/videos/marrakech.mp4'
// Images used in tabs and sections
import g7 from '../assets/image/marrakech/154.jpg'
import g8 from '../assets/image/marrakech/26048904lpw-26054010-article-jpg_10120230.jpg'
import g9 from '../assets/image/marrakech/26048904lpw-26054599-embed-libre-jpg_10120233.jpg'
import g10 from '../assets/image/marrakech/Capture.PNG'
import g11 from '../assets/image/marrakech/MAR.avif'
import g12 from '../assets/image/marrakech/MARR.jpg'
import hommeIcon from '../assets/image/homme.png'
import femmeIcon from '../assets/image/femme.png'

function ExpoMarrakech() {
  const heroRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState<'curation' | 'artistes' | 'expo'>('curation')

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

      {/* Artistes */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-indigo-400 via-rose-400 to-amber-400" />
            <h2 className="mt-3 font-serif text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Nos Artistes</h2>
          </div>
          {/* Liste nominative avec icône genre */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { n: 'AHNACH Mohamed', l: 'Khenifra, Maroc', g: 'M' },
              { n: 'AIT EL MALLALI Mehdi', l: 'Paris, France', g: 'M' },
              { n: 'AIT TAGADIRT Mariam', l: 'Casablanca, Maroc', g: 'F' },
              { n: 'ALIBRAHIMI Maïssane', l: 'Rabat, Maroc', g: 'F' },
              { n: 'AMRANI Ayoub', l: 'Casablanca, Maroc', g: 'M' },
              { n: 'ARAFATI Fatine', l: 'Casablanca, Maroc', g: 'F' },
              { n: 'BAZZI Naoual', l: 'Milan, Italie', g: 'F' },
              { n: 'BENSENNA El Mehdi', l: 'Casablanca, Maroc', g: 'M' },
              { n: 'BERCHICHE Fatima Zahra', l: 'Casablanca, Maroc', g: 'F' },
              { n: 'BERHIL Hamza', l: 'Laâyoune, Maroc', g: 'M' },
              { n: 'BOUALI Soukaina', l: 'Casablanca, Maroc', g: 'F' },
              { n: 'BOUDRAA Nassim', l: 'Montreuil, France', g: 'M' },
              { n: 'CHIHAD Zouhair', l: 'Casablanca, Maroc', g: 'M' },
              { n: 'CHORRIB Issam', l: 'Casablanca, Maroc', g: 'M' },
              { n: 'DEFOIN Mélanie Etbissemm', l: 'Braine-Le-Comte, Belgique', g: 'F' },
              { n: 'DOUJDID Anass', l: 'Meknès, Maroc', g: 'M' },
              { n: 'ELHASSNAOUI Mouad', l: 'Casablanca, Maroc', g: 'M' },
              { n: 'FADIL Rabie', l: 'Kénitra, Maroc', g: 'M' },
              { n: 'FADILI Rassane', l: 'Rabat, Maroc', g: 'M' },
              { n: 'FARIANE Issam', l: 'Casablanca, Maroc', g: 'M' },
              { n: 'ILANGA Djo', l: 'Rabat, Maroc', g: 'M' },
              { n: 'JOUD Aissa', l: 'Ouarzazate, Maroc', g: 'M' },
              { n: 'KACHIRI Sarah Mounia', l: 'Marrakech, Maroc', g: 'F' },
              { n: 'KEBDANI Sirine', l: 'Casablanca, Maroc', g: 'F' },
              { n: 'KHAMILY Mohamed', l: 'Tétouan, Maroc', g: 'M' },
              { n: 'LAARIBI Imane', l: 'M’diq, Maroc', g: 'F' },
              { n: 'LARGOU Karim', l: 'France', g: 'M' },
              { n: 'LEHAMAOUI Chaimae', l: 'Ifrane, Maroc', g: 'F' },
              { n: 'MAJDI Yasmine', l: 'Casablanca, Maroc', g: 'F' },
              { n: 'MARMOUCHE Hamza', l: 'Marrakech, Maroc', g: 'M' },
              { n: 'MEDIOUNI Soukaina', l: 'Rabat, Maroc', g: 'F' },
              { n: 'MOHAMMED El Hajoui', l: 'Italie', g: 'M' },
              { n: 'MOHAMMED BELMABK HOUT Belmabkhout Mohammed', l: 'El Jadida, Maroc', g: 'M' },
              { n: 'MOUNMI Mouna', l: 'Tétouan, Maroc', g: 'F' },
              { n: 'OULACHGAR Abdellah', l: 'Agadir, Maroc', g: 'M' },
              { n: 'OUSSAADAN Mourad', l: 'Tétouan, Maroc', g: 'M' },
              { n: 'RADI Mohamed', l: 'Tétouan, Maroc', g: 'M' },
              { n: 'RATBI Yanis', l: 'Épinay-sur-Seine, France', g: 'M' },
              { n: 'SEBTI Chaimae', l: 'Tanger, Maroc', g: 'F' },
              { n: 'TAJEDDINE Mohamed Amine', l: 'Casablanca, Maroc', g: 'M' }
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl ring-1 ring-neutral-200 bg-white shadow-sm">
                <img
                  src={a.g === 'F' ? femmeIcon : hommeIcon}
                  alt={a.g === 'F' ? 'femme' : 'homme'}
                  className="size-10 md:size-12 rounded-full ring-1 ring-neutral-200"
                />
                <div className="min-w-0">
                  <div className="text-sm md:text-base font-medium text-neutral-900 truncate">{a.n}</div>
                  <div className="text-[11px] md:text-xs text-neutral-600 truncate">{a.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExpoMarrakech
