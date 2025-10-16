 
import affiche from '../assets/image/Affiche A3 Emerging-HD.jpg'
import selectionImg from '../assets/image/selection.jpg'
import hommeIcon from '../assets/image/homme.png'
import femmeIcon from '../assets/image/femme.png'
import artistsXlsx from '../assets/Liste artistes 2025 simple.xlsx'

function LeSalon() {
  return (
    <div className="min-h-screen bg-white">
      <HeroImage />

      {/* Le Comité */}
      <section id="committee" className="w-full bg-gradient-to-b from-[#000080]/8 via-blue-50/60 to-cyan-50/40 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 shadow-sm animate-[fadeUp_600ms_ease-out_60ms_both]">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-[11px] md:text-xs text-neutral-700 tracking-wide">Curation • Mentorat • Réseau</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Le Comité</h2>
            <p className="mt-3 text-neutral-700 animate-[fadeUp_700ms_ease-out_120ms_both]">
              Une équipe pluridisciplinaire engagée aux côtés des artistes: commissaires, mentors, partenaires
              et personnalités du monde culturel, réunis pour accompagner, éclairer et faire rayonner la création.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Ousseynou WADE', g: 'M' },
              { name: 'Fatima Zahra LAKRISSA', g: 'F' },
              { name: 'Ibtissam GHAZOUL', g: 'F' },
              { name: 'Kenza AMROUK', g: 'F' },
              { name: 'Nabil BAHYA', g: 'M' },
              { name: 'Ilyass ALAMI AFILAL', g: 'M' },
              { name: 'Farah MAAKEL', g: 'F' },
              { name: 'Mustapha AKRIM', g: 'M' },
              { name: 'Sanaa ZAGHOUD', g: 'F' },
            ].map((m, i) => (
              <CommitteeCard
                key={i}
                img={m.g === 'F' ? femmeIcon : hommeIcon}
                name={m.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* La sélection */}
      <section id="selection" className="w-full py-12 md:py-16 bg-gradient-to-br from-blue-50/70 via-cyan-50/60 to-indigo-50/70">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 shadow-sm animate-[fadeUp_600ms_ease-out_60ms_both]">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-[11px] md:text-xs text-neutral-700 tracking-wide">Processus • Jury • Transparence</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">La sélection</h2>
            <p className="mt-3 text-xs md:text-sm text-neutral-600 animate-[fadeUp_700ms_ease-out_120ms_both]">
              Notre comité évalue chaque candidature avec exigence et bienveillance: singularité du geste, cohérence du parcours
              et potentiel de rencontre avec les publics.
            </p>

            <div className="mt-5">
              <a
                href={artistsXlsx}
                download
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-2 text-sm shadow-sm hover:bg-neutral-800 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 3.75a.75.75 0 01.75.75v8.69l2.22-2.22a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.22 2.22V4.5a.75.75 0 01.75-.75z" />
                  <path d="M3.75 15a.75.75 0 01.75.75v1.5A3.75 3.75 0 008.25 21h7.5A3.75 3.75 0 0019.5 17.25v-1.5a.75.75 0 011.5 0v1.5A5.25 5.25 0 0115.75 22.5h-7.5A5.25 5.25 0 013 17.25v-1.5A.75.75 0 013.75 15z" />
                </svg>
                Télécharger la liste des artistes sélectionné·e·s
              </a>
            </div>
          </div>

          {/* Content grid */}
          <div className="mt-10 grid md:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Image card */}
            <div className="rounded-2xl overflow-hidden ring-1 ring-neutral-200 bg-white shadow-sm animate-[fadeUp_700ms_ease-out_140ms_both]">
              <div className="relative">
                <img src={selectionImg} alt="Processus de sélection" className="w-full h-64 md:h-[360px] object-cover" />
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[11px] md:text-xs text-neutral-800 shadow">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Parcours de sélection
                </div>
              </div>
              <div className="px-4 md:px-5 py-4 md:py-5">
                <div className="flex flex-wrap gap-2">
                  {['Anonyme', 'Exigence', 'Dialogue', 'Équilibre'].map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 rounded-full border border-blue-100 px-2.5 py-1 text-[11px] text-neutral-700 bg-white hover:border-blue-200 transition">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />{t}
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
                  <div key={i} className="rounded-lg border border-blue-100 bg-white p-3 shadow-sm transition-transform duration-300 hover:scale-[1.01]">
                    <div className="flex items-center gap-2 text-[13px] font-medium text-neutral-900">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> {item.k}
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

function HeroImage() {
  return (
    <section className="relative w-full min-h-[360px] md:min-h-[560px] overflow-hidden">
      {/* Colorful background */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 size-[420px] rounded-full bg-blue-600/30 blur-[80px]" />
        <div className="absolute -bottom-28 -right-16 size-[480px] rounded-full bg-indigo-700/30 blur-[90px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 size-[360px] rounded-full bg-cyan-500/25 blur-[80px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-indigo-50/70 to-cyan-50/70" />
      </div>
      {/* Navy tint veil (#000080) for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000080]/85 via-[#000080]/75 to-[#000080]/85" />
      {/* Layout: image left, text right */}
      <div className="relative z-10 max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-8 py-8 md:py-12 items-center">
        {/* Left image - show entire poster */}
        <div className="relative h-64 md:h-[480px] rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-lg bg-white/80 flex items-center justify-center p-3 md:p-4">
          <img src={affiche} alt="Affiche" className="max-h-full max-w-full object-contain" />
          <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(1000px_600px_at_80%_40%,black,transparent)]" />
        </div>

        {/* Right content */}
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1 text-[11px] md:text-xs text-white shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> 2e édition • 2025
          </div>
          <h1 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-white">
            Le Salon – Émergence
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/90">
            Un rendez‑vous dédié aux artistes contemporains émergents, ouvert aux publics et aux
            professionnels. Une programmation exigeante et généreuse au cœur de Casablanca.
          </p>
          <div className="mt-4 space-y-2 text-white/85 text-xs md:text-sm">
            <p>• Expositions, conférences, masterclasses et ateliers grand public.</p>
            <p>• 40 artistes sélectionné·e·s et 5 invité·e·s d’Afrique de l’Ouest.</p>
            <p>• Du 4 novembre au 24 décembre 2025 – Villa des Arts de Casablanca.</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#committee" className="inline-flex items-center rounded-full bg-white text-neutral-900 px-5 py-2.5 text-sm shadow hover:bg-white/90 transition">Découvrir le comité</a>
            <a href="#selection" className="inline-flex items-center rounded-full border border-white/70 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 text-sm hover:bg-white/20 transition">Voir la sélection</a>
          </div>
        </div>
      </div>
      {/* Soft vignette edges */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(1200px_720px_at_50%_45%,black,transparent)]" />
    </section>
  )
}

export default LeSalon

function CommitteeCard({ img, name }: { img: string; name: string }) {
  const [firstName, ...lastParts] = name.split(' ')
  const lastName = lastParts.join(' ')

  return (
    <article className="h-full group will-animate animate-[fadeUp_600ms_ease-out_60ms_both]">
      {/* Gradient frame */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-200/70 via-cyan-200/70 to-indigo-200/70 transition-transform duration-300 group-hover:-translate-y-0.5">
        {/* Glow on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 [mask-image:radial-gradient(200px_140px_at_50%_0%,black,transparent)] bg-gradient-to-b from-white/40 to-transparent" />

        {/* Card body */}
        <div className="relative h-full flex flex-col items-center text-center rounded-[14px] bg-white/85 backdrop-blur-sm ring-1 ring-blue-50 shadow-sm hover:shadow-lg transition-shadow p-5">
          {/* Avatar with gradient ring */}
          <div className="p-[3px] rounded-full bg-gradient-to-br from-blue-300 via-cyan-300 to-indigo-300">
            <div className="size-24 md:size-28 rounded-full overflow-hidden ring-1 ring-white/60 bg-neutral-100 shadow-xs">
              <img src={img} alt={name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Name */}
          <h3 className="mt-3 text-base md:text-lg font-semibold tracking-tight text-neutral-900 line-clamp-2">
            {name}
          </h3>

          {/* Structured info as colorful chips */}
          <div className="mt-2 grid grid-cols-2 gap-1.5 w-full max-w-xs text-[11px] md:text-xs">
            <div className="inline-flex items-center justify-between gap-2 rounded-lg bg-blue-50/80 text-neutral-800 px-3 py-1 ring-1 ring-blue-100">
              <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />Nom</span>
              <span className="font-medium truncate">{lastName || firstName}</span>
            </div>
            <div className="inline-flex items-center justify-between gap-2 rounded-lg bg-cyan-50/80 text-neutral-800 px-3 py-1 ring-1 ring-cyan-100">
              <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />Prénom</span>
              <span className="font-medium truncate">{firstName}</span>
            </div>
            <div className="inline-flex items-center justify-between gap-2 rounded-lg bg-indigo-50/80 text-neutral-800 px-3 py-1 ring-1 ring-indigo-100">
              <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />Pays</span>
              <span className="font-medium">à remplir</span>
            </div>
            <div className="inline-flex items-center justify-between gap-2 rounded-lg bg-blue-50/80 text-neutral-800 px-3 py-1 ring-1 ring-blue-100">
              <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />Qualité</span>
              <span className="font-medium">à remplir</span>
            </div>
          </div>

          {/* Placeholder note */}
          <p className="mt-3 text-[12px] md:text-sm leading-relaxed text-neutral-600 line-clamp-3">
            À remplir
          </p>

          <div className="mt-auto" />
        </div>
      </div>
    </article>
  )
}

