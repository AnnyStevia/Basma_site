// Import des images
import heroImage from '../assets/image/conferences/466669245_10162136551208234_8953480339713461583_n (1).jpg'
// Images atelier
import atelier1 from '../assets/image/atelier/486871050_1088886459922164_4966030406835988211_n.jpg'
import atelier2 from '../assets/image/atelier/486805115_1088360563308087_7628630968930271535_n.jpg'
import atelier3 from '../assets/image/atelier/486611008_1088360486641428_6290542586408835721_n.jpg'
import atelier4 from '../assets/image/atelier/486610315_1088360936641383_2690010386236441209_n.jpg'
import atelier5 from '../assets/image/atelier/466167879_10162118159108234_8757469431173656918_n.jpg'
// Images prix
import prix1 from '../assets/image/prix/487533430_1088360623308081_7059243365164167540_n.jpg'
import prix2 from '../assets/image/prix/487496900_1088360913308052_8246974907603960931_n.jpg'
import prix3 from '../assets/image/prix/487446306_1088360519974758_4535856675029917714_n.jpg'
import prix4 from '../assets/image/prix/487324208_1088360846641392_1135837011246611117_n.jpg'
import prix5 from '../assets/image/prix/487065614_1088360506641426_1653589812142729089_n.jpg'

function VisiteGuidees() {

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        {/* Artistic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 via-purple-50/60 to-orange-50/80" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-pink-300/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" 
               style={{ transform: 'rotate(45deg) scale(1.2)' }} />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-orange-300/20 to-yellow-400/20 rounded-full blur-2xl animate-pulse delay-1000" 
               style={{ transform: 'rotate(-30deg) scale(0.8)' }} />
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-500" 
               style={{ transform: 'rotate(60deg) scale(1.1)' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Artistic divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full transform rotate-1" />
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse" />
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full transform -rotate-1" />
            </div>
            
            <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent italic">
                Visite guidées
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-light italic max-w-3xl mx-auto">
              Découvrez les œuvres et les artistes à travers des parcours thématiques et des médiations adaptées. 
              Une approche immersive pour comprendre et ressentir l'art contemporain.
            </p>
          </div>

          {/* Visite Types Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VisiteCard
              title="Visite générale"
              duration="1h30"
              capacity="15 personnes"
              description="Parcours complet à travers toutes les expositions avec présentation des artistes et des œuvres."
              features={["Présentation des artistes", "Contexte des œuvres", "Questions-réponses", "Découverte des techniques"]}
              color="emerald"
            />
            <VisiteCard
              title="Visite thématique"
              duration="1h"
              capacity="12 personnes"
              description="Focus sur une thématique spécifique : techniques, matériaux, ou problématiques contemporaines."
              features={["Approche thématique", "Analyse approfondie", "Échanges", "Perspectives critiques"]}
              color="teal"
            />
            <VisiteCard
              title="Visite famille"
              duration="45min"
              capacity="20 personnes"
              description="Adaptée aux enfants et aux familles avec des activités interactives et ludiques."
              features={["Activités interactives", "Jeux d'observation", "Ateliers créatifs", "Langage adapté"]}
              color="cyan"
            />
          </div>

          {/* Schedule Section */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-neutral-900">Horaires et réservation</h3>
              <p className="mt-2 text-sm text-neutral-600">Réservez votre visite guidée selon vos disponibilités</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Schedule */}
              <div className="bg-white/80 rounded-xl border border-neutral-200 p-6 shadow-sm">
                <h4 className="font-semibold text-lg text-neutral-900 mb-4">Horaires disponibles</h4>
                <div className="space-y-3">
                  {[
                    { day: "Mardi", hours: "14h00 - 15h30" },
                    { day: "Mercredi", hours: "10h00 - 11h30, 15h00 - 16h30" },
                    { day: "Jeudi", hours: "14h00 - 15h30" },
                    { day: "Vendredi", hours: "10h00 - 11h30, 15h00 - 16h30" },
                    { day: "Samedi", hours: "10h00 - 11h30, 14h00 - 15h30, 16h00 - 17h30" },
                    { day: "Dimanche", hours: "10h00 - 11h30, 14h00 - 15h30" }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-b-0">
                      <span className="font-medium text-neutral-900">{schedule.day}</span>
                      <span className="text-sm text-neutral-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Info */}
              <div className="bg-white/80 rounded-xl border border-neutral-200 p-6 shadow-sm">
                <h4 className="font-semibold text-lg text-neutral-900 mb-4">Informations pratiques</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                    <div>
                      <p className="font-medium text-neutral-900">Réservation</p>
                      <p className="text-sm text-neutral-600">Recommandée 48h à l'avance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <div>
                      <p className="font-medium text-neutral-900">Tarifs</p>
                      <p className="text-sm text-neutral-600">Gratuit pour les visiteurs du salon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                    <div>
                      <p className="font-medium text-neutral-900">Langues</p>
                      <p className="text-sm text-neutral-600">Français, Arabe, Anglais</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                    <div>
                      <p className="font-medium text-neutral-900">Accessibilité</p>
                      <p className="text-sm text-neutral-600">Visites adaptées sur demande</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
                Découvrez nos <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">activités</span>
              </h3>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Explorez nos ateliers, expositions et événements à travers ces moments capturés
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[atelier1, atelier2, atelier3, atelier4, atelier5, prix1, prix2, prix3, prix4, prix5].map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl aspect-square">
                  <img 
                    src={image} 
                    alt={`Activité ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section - Artistic */}
          <div id="reservation" className="mt-24">
            <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-pink-600 via-purple-700 to-orange-600 p-12 md:p-16 text-center text-white">
              {/* Organic background effects */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" 
                     style={{ transform: 'rotate(45deg) scale(1.3)' }} />
                <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-yellow-500/20 rounded-full blur-2xl animate-pulse delay-1000" 
                     style={{ transform: 'rotate(-30deg) scale(0.9)' }} />
                <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-500" 
                     style={{ transform: 'rotate(60deg) scale(1.1)' }} />
              </div>
              
              <div className="relative z-10 max-w-5xl mx-auto">
                {/* Artistic badge */}
                <div className="inline-block mb-8">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full blur-lg animate-pulse" />
                    <div className="relative inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3 text-sm text-white shadow-lg">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-pink-300 animate-pulse" />
                        <span className="h-2 w-2 rounded-full bg-purple-300 animate-pulse delay-300" />
                        <span className="h-2 w-2 rounded-full bg-orange-300 animate-pulse delay-700" />
                      </div>
                      <span className="font-bold italic">C'est gratuit !</span>
                    </div>
                  </div>
                </div>
                
                {/* Artistic title */}
                <h3 className="font-serif text-4xl md:text-6xl font-bold mb-8 italic">
                  <span className="block transform -rotate-1">Vous souhaitez :</span>
                </h3>
                
                {/* Artistic list */}
                <div className="space-y-6 mb-12 text-xl md:text-2xl">
                  <div className="flex items-center justify-center gap-4 group">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-300 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
                    <span className="font-light italic group-hover:text-pink-200 transition-colors duration-300">
                      profiter d'une visite privée avec vos collègues ou vos amis ?
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-4 group">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-300 to-orange-400 group-hover:scale-125 transition-transform duration-300" />
                    <span className="font-light italic group-hover:text-purple-200 transition-colors duration-300">
                      organiser la visite d'un groupe de touristes
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-4 group">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-300 to-pink-400 group-hover:scale-125 transition-transform duration-300" />
                    <span className="font-light italic group-hover:text-orange-200 transition-colors duration-300">
                      Amener les élèves de votre institution ?
                    </span>
                  </div>
                </div>
                
                {/* Artistic contact card */}
                <div className="relative bg-white/20 backdrop-blur-sm rounded-[2rem] p-8 mb-8 border border-white/30 group hover:bg-white/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <h4 className="text-3xl md:text-4xl font-bold mb-4 italic transform group-hover:-rotate-1 transition-transform duration-500">
                      C'est gratuit !
                    </h4>
                    <p className="text-xl text-white/90 mb-8 font-light italic">
                      Contactez-nous dès maintenant pour organiser votre visite personnalisée
                    </p>
                    
                    <div className="flex justify-center">
                      <a 
                        href="mailto:l.khatar@fondation-almada.ma" 
                        className="group/btn relative inline-block"
                      >
                        <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full blur-lg group-hover/btn:blur-xl transition-all duration-500" />
                        <div className="relative bg-white text-purple-700 px-10 py-5 text-xl font-bold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-500 hover:scale-105 transform hover:-rotate-1">
                          <span className="flex items-center gap-4">
                            <svg className="w-6 h-6 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            l.khatar@fondation-almada.ma
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Artistic footer */}
                <div className="text-base text-white/80 font-light italic">
                  <p>Réponse garantie sous 24h • Visites sur mesure • Accompagnement personnalisé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[700px] overflow-hidden">
      {/* Background image with artistic overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Visite guidée" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-pink-800/50 to-orange-600/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>
      
      {/* Organic floating shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-gradient-to-br from-pink-400/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" 
             style={{ transform: 'rotate(45deg) scale(1.2)' }} />
        <div className="absolute bottom-1/4 right-1/5 w-32 h-48 bg-gradient-to-br from-orange-400/25 to-red-500/25 rounded-full blur-2xl animate-pulse delay-1000" 
             style={{ transform: 'rotate(-30deg) scale(0.8)' }} />
        <div className="absolute top-1/2 right-1/3 w-24 h-36 bg-gradient-to-br from-yellow-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-500" 
             style={{ transform: 'rotate(60deg) scale(1.1)' }} />
        <div className="absolute top-1/3 left-1/2 w-28 h-28 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-700" 
             style={{ transform: 'rotate(-45deg) scale(0.9)' }} />
      </div>
      
      {/* Content with artistic layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Artistic text */}
          <div className="space-y-8">
            {/* Artistic badge */}
            <div className="inline-block">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-lg animate-pulse" />
                <div className="relative inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-6 py-3 text-sm text-white shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
                    <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse delay-300" />
                    <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse delay-700" />
                  </div>
                  <span className="font-medium tracking-wide italic">L'art vous attend</span>
                </div>
              </div>
            </div>
            
            {/* Artistic title */}
            <div className="space-y-4">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.8] text-white">
                <span className="block font-light italic">Visite</span>
                <span className="block font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent transform -rotate-1">
                  guidées
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full transform rotate-1" />
            </div>
            
            {/* Artistic subtitle */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic max-w-lg">
              Plongez dans l'univers des artistes émergents avec nos médiateurs culturels expérimentés
            </p>
            
            {/* Artistic description */}
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-md">
              Des parcours adaptés à tous les publics pour découvrir, comprendre et ressentir l'art contemporain
            </p>
          </div>
          
          {/* Right side - Artistic elements */}
          <div className="relative">
            {/* Floating artistic elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-yellow-500/20 rounded-full blur-xl animate-pulse delay-1000" />
            
            {/* Artistic CTA */}
            <div className="relative z-10 pt-8">
              <a 
                href="#reservation" 
                className="group relative inline-block"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-500" />
                <div className="relative bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 transform hover:-rotate-1">
                  <span className="flex items-center gap-3">
                    <span>Réserver maintenant</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function VisiteCard({ title, duration, capacity, description, features, color }: {
  title: string
  duration: string
  capacity: string
  description: string
  features: string[]
  color: 'emerald' | 'teal' | 'cyan'
}) {
  const colorClasses = {
    emerald: {
      bg: 'from-pink-500 to-purple-600',
      bgLight: 'from-pink-50/80 to-purple-50/80',
      border: 'border-pink-200/50',
      text: 'text-pink-700',
      textDark: 'text-purple-900',
      dot: 'bg-pink-500',
      shadow: 'shadow-pink-500/20',
      accent: 'from-pink-400 to-purple-500'
    },
    teal: {
      bg: 'from-orange-500 to-red-600',
      bgLight: 'from-orange-50/80 to-red-50/80',
      border: 'border-orange-200/50',
      text: 'text-orange-700',
      textDark: 'text-red-900',
      dot: 'bg-orange-500',
      shadow: 'shadow-orange-500/20',
      accent: 'from-orange-400 to-red-500'
    },
    cyan: {
      bg: 'from-yellow-500 to-pink-600',
      bgLight: 'from-yellow-50/80 to-pink-50/80',
      border: 'border-yellow-200/50',
      text: 'text-yellow-700',
      textDark: 'text-pink-900',
      dot: 'bg-yellow-500',
      shadow: 'shadow-yellow-500/20',
      accent: 'from-yellow-400 to-pink-500'
    }
  }

  const classes = colorClasses[color]

  return (
    <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl border border-white/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:rotate-1 overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0">
        <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${classes.accent} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`} 
             style={{ transform: 'rotate(45deg) scale(1.1)' }} />
        <div className={`absolute -bottom-6 -left-6 w-32 h-20 bg-gradient-to-br ${classes.accent} rounded-full blur-xl opacity-15 group-hover:opacity-30 transition-opacity duration-700`} 
             style={{ transform: 'rotate(-30deg) scale(0.9)' }} />
      </div>
      
      {/* Artistic border glow */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${classes.bg} rounded-3xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
      
      <div className="relative z-10">
        {/* Artistic header */}
        <div className="flex items-start justify-between mb-8">
          <div className="space-y-2">
            <h3 className={`font-serif text-3xl font-bold ${classes.textDark} group-hover:scale-105 transition-transform duration-500 italic`}>
              {title}
            </h3>
            <div className={`w-16 h-1 bg-gradient-to-r ${classes.accent} rounded-full transform rotate-1 group-hover:rotate-3 transition-transform duration-500`} />
          </div>
          <div className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold bg-gradient-to-r ${classes.bg} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 transform group-hover:-rotate-2`}>
            <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </div>
        </div>
        
        {/* Artistic description */}
        <p className="text-lg text-neutral-700 mb-8 leading-relaxed group-hover:text-neutral-800 transition-colors duration-500 font-light italic">
          {description}
        </p>
        
        {/* Artistic capacity section */}
        <div className="flex items-center gap-4 mb-8 p-4 rounded-2xl bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm border border-white/50 group-hover:from-white/80 group-hover:to-white/60 transition-all duration-500">
          <div className={`p-3 rounded-full bg-gradient-to-r ${classes.bg} shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <span className="text-base font-semibold text-neutral-700 group-hover:text-neutral-900 transition-colors duration-500">{capacity}</span>
        </div>
        
        {/* Artistic features */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 group/feature">
              <div className={`w-3 h-3 rounded-full ${classes.dot} group-hover/feature:scale-150 group-hover/feature:rotate-45 transition-all duration-500`}></div>
              <span className="text-base text-neutral-600 group-hover:text-neutral-800 transition-colors duration-500 font-light">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Artistic overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
      </div>
    </div>
  )
}

export default VisiteGuidees
