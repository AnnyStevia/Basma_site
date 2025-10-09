import hero from '../assets/image/herof.jpg'

function LePrix() {
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
    </div>
  )
}

export default LePrix


