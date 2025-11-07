import { useState, type KeyboardEvent, type MouseEvent } from 'react'

import hero from '../assets/image/herof.jpg'
import hommeIcon from '../assets/image/homme.png'
import MahiBinebinePhoto from '../assets/image/jurys/Mahi_Binebine Photo 1.jpeg'
import OusseynouWadePhoto from '../assets/image/jurys/Oussaynou wade.jpg'
import FarahMaakelPhoto from '../assets/image/jurys/Farah Maakal.jpeg'
import KenzaAmroukPhoto from '../assets/image/jurys/Kenza Amrouk.jpg'
import RimLaabiPhoto from '../assets/image/jurys/Rim Laabi.jpeg'

function LePrix() {
  const juryMembers: JuryMember[] = [
    {
      img: MahiBinebinePhoto,
      name: 'Mahi BINEBINE',
      role: 'Artiste peintre et écrivain',
      country: 'Maroc',
      bio: `Né en 1959 à Marrakech, Mahi Binebine s’installe à Paris en 1980 pour y poursuivre ses études de mathématiques qu’il enseigne pendant huit ans, avant de se consacrer à l’écriture et à la peinture. Il s’installe à New York de 1994 à 1999 puis retourne à Paris qu’il quitte en 2002 pour regagner son pays d'origine où il vit et travaille désormais. Ses peintures figurent dans les collections du Guggenheim Museum, du Smithsonian, du Perez Museum, de l’Institut du Monde Arabe et de nombreuses collections publiques et privées. Romancier traduit dans une quinzaine de langues, il co-préside avec Nabil Ayouch les centres culturels « Les Étoiles » de la fondation Ali Zaoua.`,
      social: {
        label: 'Instagram',
        handle: '@mahibinebin',
        url: 'https://www.instagram.com/mahibinebine?igsh=bmJhYnFzMzB2cjJ1',
      },
      theme: {
        frameGradient: 'from-sky-300/90 via-blue-400/85 to-indigo-500/85',
        topGlow: 'from-blue-300/40 via-sky-200/30 to-indigo-400/40',
        bottomGlow: 'from-sky-200/40 via-white/30 to-indigo-300/35',
        avatarGradient: 'from-sky-300/70 via-white/30 to-blue-400/70',
        roleChip: 'from-sky-200/70 via-white/70 to-blue-100/70',
        roleDot: 'bg-blue-500/80',
        toggleOpen: 'bg-sky-200/60 text-blue-700',
        quoteTop: 'text-sky-300/80',
        quoteBottom: 'text-blue-300/80',
        socialDot: 'bg-blue-500/80',
      },
    },
    {
      img: OusseynouWadePhoto,
      name: 'Ousseynou WADE',
      role: 'Consultant en management artistique et commissaire d’exposition',
      country: 'Sénégal',
      bio: `Conseiller aux Affaires culturelles de formation, Ousseynou Wade capitalise une riche expérience en politique culturelle et en management artistique. Après plusieurs années au cabinet du Ministère de la Culture en qualité de conseiller technique, il devient secrétaire général de la Biennale de l’art africain contemporain, pilotant six éditions de Dakar et accompagnant de nombreux artistes du continent et de la diaspora. Directeur des Arts en 2014, il intervient comme expert pour l’Union Européenne et l’Organisation internationale de la Francophonie, contribuant à des missions à Paris, Lisbonne, Abidjan ou Lomé. Commandeur de l’Ordre National du Lion (Sénégal) et Chevalier de l’Ordre des Arts et des Lettres (France), il reste une voix essentielle des politiques culturelles africaines.`,
      theme: {
        baseBg: 'bg-[#20234d]',
        frameGradient: 'from-[#20234d] via-[#20234d] to-[#20234d]',
        topGlow: 'from-[#39408a]/40 via-[#20234d]/30 to-[#2b2f68]/40',
        bottomGlow: 'from-[#39408a]/35 via-[#20234d]/25 to-[#1d1f47]/35',
        avatarGradient: 'from-[#303571]/80 via-white/10 to-[#1f224e]/80',
        roleChip: 'from-white/15 via-white/10 to-white/5',
        roleDot: 'bg-white/80',
        toggleOpen: 'bg-white/20 text-white/90',
        quoteTop: 'text-white/40',
        quoteBottom: 'text-white/30',
        socialDot: 'bg-white/70',
        mode: 'dark',
      },
    },
    {
      img: RimLaabiPhoto,
      name: 'Rim LAÂBI',
      role: 'Artiste plasticienne, commissaire et professeure',
      country: 'Maroc',
      bio: `Artiste plasticienne née en 1973, Rim Laâbi vit et travaille à Rabat après des années entre Athènes et Paris. Docteure en arts plastiques (Paris I – Sorbonne), commissaire d’exposition, conférencière et professeure universitaire, elle enseigne l’histoire des arts et des idées ainsi que les pratiques plastiques à l’Université Mohammed V de Rabat. Sa pratique se nourrit de matériaux récoltés en arpentant terre, ciel et mer, pour créer un univers rhizomique où couleurs, textures et matières dialoguent entre héritages artisanaux et modernité.`,
      social: {
        label: 'Instagram',
        handle: '@rimlaabi9',
        url: 'https://www.instagram.com/rimlaabi9/',
      },
      theme: {
        frameGradient: 'from-indigo-400/90 via-blue-500/85 to-slate-600/85',
        topGlow: 'from-indigo-400/40 via-blue-300/30 to-slate-500/40',
        bottomGlow: 'from-indigo-300/35 via-white/30 to-slate-400/35',
        avatarGradient: 'from-indigo-400/70 via-white/30 to-blue-500/70',
        roleChip: 'from-indigo-200/70 via-white/70 to-blue-100/70',
        roleDot: 'bg-indigo-500/80',
        toggleOpen: 'bg-indigo-200/60 text-indigo-700',
        quoteTop: 'text-indigo-300/80',
        quoteBottom: 'text-blue-300/80',
        socialDot: 'bg-indigo-500/80',
      },
    },
    {
      img: KenzaAmroukPhoto,
      name: 'Kenza AMROUK',
      role: 'Curatrice-chercheuse, conseillère en ingénierie culturelle et éditrice',
      country: 'Maroc',
      bio: `Ancienne directrice manager de la Galerie Chantal Crousel à Paris, Kenza Amrouk est formée en économie, gestion et histoire de l’art. Fondatrice de KAC Art Agency, elle développe des dispositifs de conseil, de production et de diffusion pour l’art contemporain tout en éditant des livres d’artistes avec les Éditions [KA] Art. Co-fondatrice de La Découpe, elle mène en parallèle une pratique curatoriale et d’écriture nourrie par une réflexion anthropologique sur la notion de paysage et son lien avec l’identité humaine, en particulier dans le contexte méditerranéen. Elle publie et organise des expositions entre l’Europe, l’Afrique du Nord et les États-Unis.`,
      social: {
        label: 'Instagram',
        handle: '@kenza_amrouk',
        url: 'https://www.instagram.com/kenza_amrouk/',
      },
      theme: {
        baseBg: 'bg-[#f0e8d9]',
        frameGradient: 'from-[#f0e8d9] via-[#f7f2e7] to-[#f0e8d9]',
        topGlow: 'from-[#f7f2e7]/40 via-[#f0e8d9]/25 to-[#e8dcc8]/35',
        bottomGlow: 'from-[#f7f2e7]/35 via-[#f0e8d9]/25 to-[#e8dcc8]/35',
        avatarGradient: 'from-transparent via-transparent to-transparent',
        roleChip: 'from-white/70 via-white/60 to-white/50',
        roleDot: 'bg-[#db4e30]',
        toggleOpen: 'bg-white/70 text-[#db4e30]',
        quoteTop: 'text-[#db4e30]/40',
        quoteBottom: 'text-[#db4e30]/30',
        socialDot: 'bg-[#db4e30]',
        mode: 'light',
        accentColor: '#db4e30',
        imageOverlay: false,
      },
    },
    {
      img: FarahMaakelPhoto,
      name: 'Farah MAAKEL',
      role: 'Performeuse et curatrice dramaturgique',
      country: 'Maroc',
      bio: `Farah Maakel explore l’inclusion dans les espaces culturels à travers une approche curatoriale dramaturgique qui poétise les questions décoloniales et favorise l’immersion des publics. Diplômée en chorégraphie (ISAC – Bruxelles), en culture postcoloniale et politique internationale (Goldsmiths, Londres) puis en sciences et techniques de l’exposition (La Sorbonne), elle travaille sur les dynamiques de retour de la diaspora au Maroc. Elle a curaté des expositions à Paris avec le Fonds d’Art Contemporain, à Los Angeles dans le jardin de David Horvitz, et intervient à UCLA autour de la peinture et de l’automatisation culturelle.`,
      social: {
        label: 'Instagram',
        handle: '@farah.maakel',
        url: 'https://www.instagram.com/farah.maakel/',
      },
      theme: {
        frameGradient: 'from-cyan-400/90 via-blue-500/85 to-indigo-600/85',
        topGlow: 'from-cyan-400/40 via-blue-300/30 to-indigo-500/40',
        bottomGlow: 'from-cyan-300/35 via-white/30 to-indigo-400/35',
        avatarGradient: 'from-cyan-400/70 via-white/30 to-blue-500/70',
        roleChip: 'from-cyan-200/70 via-white/70 to-blue-100/70',
        roleDot: 'bg-cyan-500/80',
        toggleOpen: 'bg-cyan-200/60 text-blue-700',
        quoteTop: 'text-cyan-300/80',
        quoteBottom: 'text-blue-300/80',
        socialDot: 'bg-cyan-500/80',
      },
    },
    {
      img: hommeIcon,
      name: 'Ilyass ALAMI AFILAL',
      role: 'À remplir',
      country: 'Maroc',
      bio: 'À remplir',
      theme: {
        frameGradient: 'from-slate-400/90 via-blue-500/85 to-slate-700/85',
        topGlow: 'from-slate-400/40 via-blue-300/30 to-slate-600/40',
        bottomGlow: 'from-slate-300/35 via-white/30 to-slate-500/35',
        avatarGradient: 'from-slate-400/70 via-white/30 to-blue-500/70',
        roleChip: 'from-slate-200/70 via-white/70 to-blue-100/70',
        roleDot: 'bg-slate-500/80',
        toggleOpen: 'bg-slate-200/60 text-slate-700',
        quoteTop: 'text-slate-300/80',
        quoteBottom: 'text-blue-300/80',
        socialDot: 'bg-slate-500/80',
      },
    },
  ]
  return (
    <div className="font-serif min-h-screen relative bg-white">
      <section className="relative w-full bg-center bg-cover min-h-[240px] md:min-h-[360px]" style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute inset-0 backdrop-blur-[2px] animate-[fadeIn_600ms_ease-out]" />
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(1400px_700px_at_60%_30%,black,transparent)]" />
        <div className="relative z-10 max-w-4xl mr-auto px-4 md:px-6 py-6 md:py-10 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300/70 bg-white/80 px-3 py-1 text-xs text-neutral-700 shadow-sm animate-[fadeUp_600ms_ease-out_100ms_both] transition-colors duration-300 hover:bg-white">
            <span>BASMA</span>
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            <span>Le Prix</span>
          </div>
          <div className="mt-4 space-y-4 rounded-xl bg-black/50 p-4 md:p-5 shadow-lg animate-[fadeUp_700ms_ease-out_150ms_both]">
            <h1 className="font-serif text-3xl md:text-5xl leading-tight text-white animate-[fadeUp_700ms_ease-out_200ms_both]">
              Le Prix Al-Mada Émergence
            </h1>
            <p className="text-base md:text-lg text-white/90 bg-black px-3 py-2 rounded-md animate-[fadeUp_700ms_ease-out_250ms_both]">
              Un appel à projets qui valorise l’audace, la maîtrise et la singularité des démarches. Visibilité, mentorat et opportunités d’exposition à la clé.
            </p>
            <p className="text-xs md:text-sm text-white/80 animate-[fadeUp_700ms_ease-out_280ms_both]">
              Ouvert aux artistes émergent·e·s et confirmé·e·s, avec un jury attentif aux croisements de pratiques et à la prise de risque.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-indigo-50/60 via-rose-50/50 to-amber-50/50 py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-indigo-400 via-rose-400 to-amber-400" />
            <h2 className="mt-3 font-serif text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Qu'est‑ce que le Prix Al-Mada Émergence ?</h2>
            <p className="mt-3 text-sm md:text-base text-neutral-700">
              Le Prix Almada distingue des démarches artistiques audacieuses et singulières, capables de tisser des liens
              entre techniques, contextes et récits. Il soutient la recherche et la production d’œuvres neuves en offrant un
              accompagnement sur‑mesure: mentorat, mise en réseau et visibilité auprès de partenaires et publics.
            </p>
            <p className="mt-3 text-sm md:text-base text-neutral-700">
              Pensé comme un tremplin, le prix encourage l’expérimentation, la prise de risque et le dialogue entre pratiques.
              Il s’adresse aux artistes émergent·e·s et confirmé·e·s qui souhaitent franchir une étape décisive dans leur parcours.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-tr from-indigo-50/60 via-white to-rose-50/60 py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-indigo-700 via-rose-600 to-amber-600 bg-clip-text text-transparent">Objectifs et critères</h2>
            <p className="mt-3 text-neutral-700">
              Nous cherchons des projets forts et singuliers, portés par une vision claire et un geste maîtrisé. Les critères portent sur l’exigence formelle, la pertinence du propos et la cohérence du parcours.
            </p>
            <p className="mt-3 text-neutral-700">
              Les lauréat·e·s bénéficient d’un accompagnement éditorial, d’un mentorat et d’une mise en réseau avec nos partenaires.
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-transparent [background-image:linear-gradient(white,white),linear-gradient(to_right,theme(colors.indigo.200),theme(colors.rose.200),theme(colors.amber.200))] [background-origin:border-box] [background-clip:padding-box,border-box]">
            <h3 className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-neutral-900">Calendrier</h3>
            <ul className="mt-3 space-y-2 text-neutral-700 text-sm md:text-base">
              <li>– Ouverture de l’appel: prochainement</li>
              <li>– Clôture des candidatures: à confirmer</li>
              <li>– Annonce des lauréat·e·s: à confirmer</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-indigo-50/60 via-rose-50/60 to-amber-50/60 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-transparent [background-image:linear-gradient(white,white),linear-gradient(to_right,theme(colors.indigo.200),theme(colors.rose.200),theme(colors.amber.200))] [background-origin:border-box] [background-clip:padding-box,border-box]">
              <h3 className="font-serif text-lg md:text-xl font-semibold tracking-tight text-neutral-900">Le mot du président</h3>
              <p className="mt-2 text-sm md:text-base text-neutral-700">
                Le Prix Almada célèbre l’audace et la générosité des gestes artistiques. Il s’agit d’ouvrir des voies,
                de soutenir les risques nécessaires et d’accompagner des voix qui font évoluer nos regards.
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-transparent [background-image:linear-gradient(white,white),linear-gradient(to_right,theme(colors.indigo.200),theme(colors.rose.200),theme(colors.amber.200))] [background-origin:border-box] [background-clip:padding-box,border-box]">
              <h3 className="font-serif text-lg md:text-xl font-semibold tracking-tight text-neutral-900">À propos</h3>
              <p className="mt-2 text-sm md:text-base text-neutral-700">
                Pensé comme un tremplin, le prix articule mentorat, production et visibilité. Il favorise les dialogues
                entre pratiques et encourage les trajectoires exigeantes et singulières.
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-transparent [background-image:linear-gradient(white,white),linear-gradient(to_right,theme(colors.indigo.200),theme(colors.rose.200),theme(colors.amber.200))] [background-origin:border-box] [background-clip:padding-box,border-box]">
              <h3 className="font-serif text-lg md:text-xl font-semibold tracking-tight text-neutral-900">Conditions</h3>
              <p className="mt-2 text-sm md:text-base text-neutral-700">
                Ouvert aux artistes majeur·e·s. Dossier: portfolio, note d’intention, CV. Modalités détaillées et calendrier
                précis seront publiés à l’ouverture officielle de l’appel à projets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Le Jury */}
      <section className="w-full bg-gradient-to-b from-rose-50/60 via-white to-amber-50/40 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 shadow-sm animate-[fadeUp_600ms_ease-out_60ms_both]">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              <span className="text-[11px] md:text-xs text-neutral-700 tracking-wide">Sélection • Jury • Transparence</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Le Jury</h2>
            <p className="mt-3 text-neutral-700 animate-[fadeUp_700ms_ease-out_120ms_both]">
              Quatre personnalités réunies pour accompagner et distinguer des démarches exigeantes et singulières.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {juryMembers.map((member) => (
              <JuryCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default LePrix

type SocialLink = {
  label: string
  handle: string
  url: string
}

type JuryTheme = {
  baseBg?: string
  frameGradient: string
  topGlow: string
  bottomGlow: string
  avatarGradient: string
  roleChip: string
  roleDot: string
  toggleOpen: string
  quoteTop: string
  quoteBottom: string
  socialDot: string
  mode?: 'light' | 'dark'
  accentColor?: string
  imageOverlay?: boolean
}

type JuryMember = {
  img: string
  name: string
  role: string
  bio: string
  country: string
  social?: SocialLink
  theme: JuryTheme
}

function JuryCard({ img, name, role, bio, country, social, theme }: JuryMember) {
  const [firstName, ...lastParts] = name.split(' ')
  const lastName = lastParts.join(' ')
  const [isOpen, setIsOpen] = useState(false)
  const contentId = `jury-bio-${name.replace(/\s+/g, '-').toLowerCase()}`
  const preview = bio.length > 260 ? `${bio.slice(0, 260).trim()}…` : bio
  const isDark = theme.mode === 'dark'
  const accentColor = theme.accentColor
  const accentStyle = accentColor ? { color: accentColor } : undefined

  const handleToggle = () => setIsOpen((prev) => !prev)

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleToggle()
    }
  }

  const stopPropagation = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation()
  }

  return (
    <article
      className={`group relative isolate cursor-pointer overflow-hidden rounded-3xl ${
        theme.baseBg ?? 'bg-white/80'
      } font-serif shadow-[0_20px_45px_rgba(15,23,42,0.1)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,23,42,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
        isDark ? 'text-white' : accentColor ? '' : 'text-neutral-900'
      }`}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
    >
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${theme.frameGradient} opacity-45 transition-opacity duration-500 group-hover:opacity-65`} />
      <div
        className={`absolute inset-0 -z-20 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_65%)]'
            : 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_60%)]'
        }`}
      />

      <div className="relative flex flex-col gap-5 p-5 md:p-6">
        <figure className="relative overflow-hidden rounded-[1.9rem]">
          {theme.imageOverlay !== false && (
            <div className={`absolute inset-0 bg-gradient-to-br ${theme.avatarGradient} opacity-60 mix-blend-multiply`} />
          )}
          <img src={img} alt={name} className="h-56 w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]" />
          {theme.imageOverlay !== false && (
            <div className={isDark ? 'absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent' : 'absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent'} />
          )}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
            <div className={`space-y-2 drop-shadow-md ${accentColor ? '' : 'text-white'}`} style={accentStyle}>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ${
                  accentColor ? 'bg-white/80 text-[inherit]' : 'bg-white/30 text-white'
                }`}
                style={accentStyle}
              >
                Jury
              </span>
              <div>
                <h3 className={`text-xl font-semibold tracking-tight ${accentColor ? '' : ''}`} style={accentStyle}>
                  {name}
                </h3>
                <p className={`text-sm font-medium ${accentColor ? '' : 'text-white/90'}`} style={accentStyle}>
                  {role}
                </p>
              </div>
            </div>
            <span
              aria-hidden="true"
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/80 text-sm font-medium shadow-sm transition-all duration-500 ${
                isOpen ? `rotate-45 ${theme.toggleOpen}` : accentColor ? 'text-[inherit]' : 'text-neutral-500'
              }`}
              style={accentStyle}
            >
              +
            </span>
          </div>
        </figure>

        <div
          className={`flex flex-wrap items-center gap-2 text-[11px] font-medium ${
            isDark ? 'text-white/80' : accentColor ? '' : 'text-neutral-600'
          }`}
          style={accentStyle}
        >
          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 shadow-sm ring-1 transition-colors duration-200 ${
              isDark ? 'bg-white/10 ring-white/25 text-white/90' : 'bg-white/75 ring-white/60'
            }`}
            style={accentStyle}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${theme.roleDot}`} />
            {country}
          </span>
          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 shadow-sm ring-1 ${
              isDark ? 'bg-white/10 ring-white/25 text-white/90' : 'bg-white/70 ring-white/60'
            }`}
            style={accentStyle}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${isDark ? 'bg-white/70' : 'bg-neutral-400/80'}`} />
            {lastName || firstName}
          </span>
          {social && (
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              onClick={stopPropagation}
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 shadow-sm ring-1 transition-colors duration-200 ${
                isDark
                  ? 'bg-white/10 text-white/90 ring-white/25 hover:text-sky-200'
                  : accentColor
                  ? 'bg-white/80 ring-white/60 hover:brightness-90'
                  : 'bg-white/80 text-neutral-700 ring-white/60 hover:text-indigo-600'
              }`}
              style={accentStyle}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${theme.socialDot}`} />
              {social.handle}
            </a>
          )}
        </div>

        <p
          className={`text-sm leading-relaxed transition-all duration-500 ${
            isOpen
              ? 'pointer-events-none opacity-0 -translate-y-1'
              : isDark
              ? 'opacity-90 translate-y-0 text-white/85'
              : accentColor
              ? 'opacity-90 translate-y-0'
              : 'opacity-90 translate-y-0 text-neutral-600'
          }`}
          style={accentStyle}
        >
          {preview}
        </p>
        <p
          className={`text-[12px] italic transition-opacity duration-500 ${
            isOpen
              ? 'opacity-0'
              : isDark
              ? 'opacity-85 text-white/65'
              : accentColor
              ? 'opacity-90'
              : 'opacity-90 text-neutral-500'
          }`}
          style={accentStyle}
        >
          Cliquez pour plonger dans son parcours.
        </p>

        <div
          id={contentId}
          className={`relative overflow-hidden rounded-2xl border text-sm leading-relaxed shadow-inner transition-all duration-500 ${
            isDark
              ? isOpen
                ? 'max-h-[640px] border-white/30 bg-white/5 p-5 text-white/85 opacity-100'
                : 'max-h-0 border-white/20 bg-white/0 p-0 text-white/85 opacity-0'
              : isOpen
              ? 'max-h-[640px] border-white/70 bg-white/90 p-5 text-neutral-700 opacity-100'
              : 'max-h-0 border-white/70 bg-white/90 p-0 text-neutral-700 opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          <span className={`absolute -top-6 left-6 text-4xl font-serif ${theme.quoteTop}`} style={accentStyle}>
            “
          </span>
          <span className={`absolute -bottom-6 right-6 text-4xl font-serif ${theme.quoteBottom}`} style={accentStyle}>
            ”
          </span>
          <div className={`relative z-10 whitespace-pre-line ${isDark ? 'text-white/80' : accentColor ? '' : 'text-neutral-700'}`} style={accentStyle}>
            {bio}
          </div>
        </div>
      </div>
    </article>
  )
}


