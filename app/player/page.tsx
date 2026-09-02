export default function SirenhoPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">

          <div className="flex items-baseline">
            <span className="text-2xl font-black tracking-tight">
              BIG.MOMO
            </span>
            <span className="ml-2 text-[10px] font-black tracking-[0.35em] text-lime-400">
              STUDIO
            </span>
          </div>

          <a
            href="/player"
            className="text-sm font-medium text-white/50 transition hover:text-lime-400"
          >
            ← Tous les joueurs
          </a>

        </div>
      </header>


      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">

        {/* Background typography */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="whitespace-nowrap text-[25vw] font-black uppercase leading-none text-white/[0.025]">
            SIRENHO
          </span>
        </div>

        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-lime-400/10 blur-[140px]" />

        <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10">

          {/* TEXT */}
          <div className="order-2 md:order-1">

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.5em] text-lime-400">
              BIG.MOMO STUDIO — PLAYER PROFILE
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-tight md:text-8xl">
              SIRENHO
            </h1>

            <h2 className="mt-4 text-3xl font-black uppercase text-lime-400 md:text-5xl">
              SDB.
            </h2>

            <div className="mt-6 inline-block border border-lime-400/30 px-5 py-2">
              <span className="text-sm font-black uppercase tracking-[0.25em] text-lime-400">
                « KYLIAN MBAPPÉ »
              </span>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
              Sirenho SDB est un jeune profil offensif qui se distingue
              par sa vitesse, son explosivité et sa capacité à faire
              la différence dans les situations de un contre un.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-white/60">
              Son style repose sur la percussion, les changements de rythme
              et les appels qui permettent de créer constamment du danger
              dans le dernier tiers du terrain.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="border border-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/60">
                Attaquant
              </span>

              <span className="border border-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/60">
                Ailier
              </span>

              <span className="border border-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/60">
                Pied gauche
              </span>
            </div>

          </div>


          {/* PHOTO */}
          <div className="relative order-1 flex items-center justify-center md:order-2">

            <div className="absolute h-[450px] w-[450px] rounded-full bg-lime-400/10 blur-[100px]" />

            <div className="relative overflow-hidden border border-white/10">

              <img
                src="/sirenho.jpg"
                alt="Sirenho SDB"
                className="w-full max-w-[600px] object-cover"
              />

            </div>

          </div>

        </div>
      </section>


      {/* PLAYER IDENTITY */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-lime-400">
              01 — PLAYER IDENTITY
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
              Le profil
              <span className="text-lime-400">.</span>
            </h2>
          </div>


          <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">

            <Info
              label="Nom"
              value="Sirenho SDB"
            />

            <Info
              label="Surnom"
              value="Kylian Mbappé"
            />

            <Info
              label="Catégorie"
              value="U17"
            />

            <Info
              label="Club"
              value="Jolof Olympique Club"
            />

            <Info
              label="Poste"
              value="Attaquant / Ailier"
            />

            <Info
              label="Pied fort"
              value="Gauche"
            />

            <Info
              label="Taille"
              value="1m89"
            />

            <Info
              label="Poids"
              value="75 KG"
            />

            <Info
              label="Numéro"
              value="9"
            />

          </div>

        </div>
      </section>


      {/* STYLE DE JEU */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-24 md:px-10">

        <div className="absolute right-0 top-20 text-[20rem] font-black leading-none text-white/[0.02]">
          09
        </div>

        <div className="relative mx-auto max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.5em] text-lime-400">
            02 — STYLE DE JEU
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-tight md:text-7xl">
            Vitesse.
            <br />
            <span className="text-lime-400">Percussion.</span>
            <br />
            Impact.
          </h2>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-white/50">
            Le jeu de Sirenho repose avant tout sur sa capacité à accélérer
            et à provoquer. Lorsqu'il reçoit le ballon dans les zones
            offensives, il cherche rapidement à avancer et à mettre son
            adversaire sous pression.
          </p>

        </div>
      </section>


      {/* QUALITIES */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.5em] text-lime-400">
            03 — QUALITÉS
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
            Ses armes
            <span className="text-lime-400">.</span>
          </h2>


          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">

            <Quality
              number="01"
              title="Vitesse"
              text="Une grande capacité d'accélération qui lui permet de prendre rapidement de la profondeur."
            />

            <Quality
              number="02"
              title="Dribble"
              text="À l'aise dans les duels, il utilise ses changements de direction pour éliminer son adversaire."
            />

            <Quality
              number="03"
              title="Explosivité"
              text="Une capacité à changer de rythme rapidement et à créer des différences sur quelques mètres."
            />

            <Quality
              number="04"
              title="Percussion"
              text="Un joueur qui cherche constamment à avancer et à faire progresser le jeu vers le but."
            />

            <Quality
              number="05"
              title="Appels"
              text="Ses déplacements dans la profondeur lui permettent de créer des espaces et de surprendre les défenses."
            />

            <Quality
              number="06"
              title="Impact offensif"
              text="Son profil lui permet d'apporter du danger depuis plusieurs zones du secteur offensif."
            />

          </div>

        </div>
      </section>


      {/* 1 VS 1 */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-16 md:grid-cols-2">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.5em] text-lime-400">
                04 — ONE VS ONE
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-tight md:text-7xl">
                Provoquer.
                <br />
                <span className="text-lime-400">Éliminer.</span>
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-white/50">
                Dans les situations de duel, Sirenho aime prendre
                l'initiative. Sa vitesse et ses changements de rythme
                lui permettent de rechercher constamment l'espace
                derrière son adversaire.
              </p>

              <p className="mt-6 text-lg leading-8 text-white/50">
                Son profil d'attaquant moderne lui permet également
                d'évoluer sur les côtés et d'attaquer les espaces
                lorsqu'une opportunité se présente.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* MENTALITY */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="border border-white/10 p-8 md:p-16">

            <p className="text-xs font-bold uppercase tracking-[0.5em] text-lime-400">
              05 — MENTALITY
            </p>

            <h2 className="mt-8 max-w-5xl text-4xl font-black uppercase leading-tight md:text-7xl">
              Un joueur qui veut
              <span className="text-lime-400"> faire la différence.</span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
              Au-delà de ses qualités techniques et physiques, Sirenho
              possède un profil tourné vers l'initiative. Son objectif
              est de participer activement aux actions offensives et
              d'apporter une solution lorsque son équipe a besoin
              de créer une différence.
            </p>

          </div>

        </div>
      </section>


      {/* CLUB */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-2">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.5em] text-lime-400">
                06 — CLUB
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
                Jolof
                <br />
                <span className="text-lime-400">
                  Olympique Club.
                </span>
              </h2>

            </div>

            <div className="flex items-end">

              <p className="text-lg leading-8 text-white/50">
                C'est sous les couleurs du Jolof Olympique Club que
                Sirenho poursuit son développement et construit son
                expérience dans le football.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* FINAL */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-32 text-center md:px-10">

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[25vw] font-black text-white/[0.02]">
            SDB
          </span>
        </div>

        <div className="relative">

          <p className="text-xs font-bold uppercase tracking-[0.6em] text-lime-400">
            BIG.MOMO STUDIO
          </p>

          <h2 className="mt-8 text-6xl font-black uppercase md:text-9xl">
            SIRENHO
          </h2>

          <p className="mt-5 text-2xl font-black uppercase text-lime-400 md:text-4xl">
            « KYLIAN MBAPPÉ »
          </p>

          <p className="mx-auto mt-8 max-w-xl text-white/40">
            Speed. Skill. Impact.
          </p>

          <a
            href="/player"
            className="mt-10 inline-block border border-lime-400 px-8 py-4 text-sm font-black uppercase tracking-widest text-lime-400 transition hover:bg-lime-400 hover:text-black"
          >
            Retour aux joueurs
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">

        <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/30">
          BIG.MOMO STUDIO — PLAYER CREATIVE
        </p>

      </footer>

    </main>
  );
}


/* COMPONENT — INFO */
function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-r border-white/10 bg-black p-7 transition hover:bg-white/[0.03]">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-lime-400">
        {label}
      </p>

      <p className="mt-4 text-xl font-black uppercase">
        {value}
      </p>
    </div>
  );
}


/* COMPONENT — QUALITY */
function Quality({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-black p-8 transition duration-300 hover:bg-white/[0.04] md:p-10">

      <div className="flex items-center justify-between">

        <span className="text-sm font-bold text-white/20">
          {number}
        </span>

        <span className="text-xl text-lime-400">
          ↗
        </span>

      </div>

      <h3 className="mt-12 text-3xl font-black uppercase">
        {title}
      </h3>

      <p className="mt-5 leading-7 text-white/40">
        {text}
      </p>

    </div>
  );
}