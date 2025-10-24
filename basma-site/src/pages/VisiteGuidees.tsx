

function VisiteGuidees() {

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <section className="w-full py-10 md:py-14 bg-gradient-to-br from-emerald-100/60 via-teal-50/60 to-cyan-50/60">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto animate-[fadeUp_600ms_ease-out_80ms_both]">
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 shadow-[0_0_20px_rgba(20,184,166,0.35)]" />
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Visite guidées</h2>
            <p className="mt-2 text-xs md:text-sm text-neutral-600">
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

          {/* Contact Section */}
          <div className="mt-12 text-center">
            <div className="bg-white/80 rounded-xl border border-neutral-200 p-8 shadow-sm max-w-2xl mx-auto">
              <h4 className="font-serif text-xl font-semibold text-neutral-900 mb-4">Réserver votre visite</h4>
              <p className="text-sm text-neutral-600 mb-6">
                Contactez-nous pour réserver votre visite guidée ou pour toute question sur nos parcours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:visites@basma.ma" 
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 text-sm shadow hover:opacity-95 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  visites@basma.ma
                </a>
                <a 
                  href="tel:+212522123456" 
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white text-emerald-700 px-6 py-3 text-sm hover:bg-emerald-50 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +212 522 123 456
                </a>
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
    <section className="relative w-full bg-center bg-cover min-h-[260px] md:min-h-[420px]">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 size-[420px] rounded-full bg-emerald-600/30 blur-[80px]" />
        <div className="absolute -bottom-28 -right-16 size-[480px] rounded-full bg-teal-700/30 blur-[90px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 size-[360px] rounded-full bg-cyan-500/25 blur-[80px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/70 via-teal-50/70 to-cyan-50/70" />
      </div>
      
      {/* Navy tint veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000080]/85 via-[#000080]/75 to-[#000080]/85" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mr-auto px-4 md:px-6 py-6 md:py-8 text-left">
        <div className="space-y-3 md:space-y-4 rounded-xl bg-black/35 p-4 md:p-6 shadow-lg">
          <h1 className="font-serif text-3xl md:text-5xl leading-tight text-white">Visite guidées</h1>
          <p className="text-sm md:text-base text-white/85">
            Plongez dans l'univers des artistes émergents avec nos médiateurs culturels expérimentés.
          </p>
          <p className="text-xs md:text-sm text-white/75">
            Des parcours adaptés à tous les publics pour découvrir, comprendre et ressentir l'art contemporain.
          </p>
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
      bg: 'from-emerald-500 to-emerald-600',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
      dot: 'bg-emerald-500'
    },
    teal: {
      bg: 'from-teal-500 to-teal-600',
      border: 'border-teal-200',
      text: 'text-teal-700',
      dot: 'bg-teal-500'
    },
    cyan: {
      bg: 'from-cyan-500 to-cyan-600',
      border: 'border-cyan-200',
      text: 'text-cyan-700',
      dot: 'bg-cyan-500'
    }
  }

  const classes = colorClasses[color]

  return (
    <div className="group bg-white/80 rounded-xl border border-neutral-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-xl font-semibold text-neutral-900">{title}</h3>
        <div className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium bg-gradient-to-r ${classes.bg} text-white`}>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {duration}
        </div>
      </div>
      
      <p className="text-sm text-neutral-600 mb-4">{description}</p>
      
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="text-sm text-neutral-500">{capacity}</span>
      </div>
      
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${classes.dot}`}></div>
            <span className="text-xs text-neutral-600">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VisiteGuidees
