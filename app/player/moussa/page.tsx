export default function MoussaPage() {
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

        {/* Grand texte arrière-plan */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="whitespace-nowrap text-[24vw] font-black uppercase leading-none text-white/[0.025]">
            POGBA
          </span>
        </div>

        {/* Lumière */}
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-lime-400/10 blur-[140px]" />

        <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10">

          {/* TEXTE */}
          <div className="order-2 md:order-1">

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.5em] text-lime-400">
              BIG.MOMO STUDIO — PLAYER PROFILE
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-tight md:text-8xl">
              MOUSSA
            </h1>

            <h2 className="mt-4 text-4xl font-black uppercase text-lime-400 md:text-6xl">
              POGBA.
            </h2>

            <div className="mt-6 inline-block border border-lime-400/30 px-5 py-2">
              <span className="text-sm font-black uppercase tracking-[0.25em] text-lime-400">
                « PAUL POGBA »
              </span>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
              Moussa Pogba est un milieu de terrain au profil complet,
              capable de participer à la construction du jeu tout en
              apportant son énergie et son impact dans les différentes
              phases du match.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-white/60">
              Son profil repose sur sa capacité à se rendre disponible,
              à faire circuler le ballon et à accompagner les actions
              offensives de son équipe.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="border border-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/60">
                Milieu
              </span>

              <span className="border border-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/60">
                Pied droit
              </span>

              <span className="border border-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/60">
                Senior
              </span>

            </div>

          </div>


          {/* PHOTO */}
          <div className="relative order-1 flex items-center justify-center md:order-2">

            <div className="absolute h-[450px] w-[450px] rounded-full bg-lime-400/10 blur-[100px]" />

            <div className="relative overflow-hidden border border-white/10">

              <img
                src="/moussa-pogba.jpg"
                alt="Moussa Pogba"
                className="w-full max-w-[600px] object-cover"
              />

            </div>

          </div>

        </div>
      </section>


      {/* IDENTITÉ */}
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
              value="Moussa Pogba"
            />

            <Info
              label="Surnom"
              value="Paul Pogba"
            />

            <Info
              label="Catégorie"
              value="Senior"
            />

            <Info
              label="Club"
              value="ASFA"
            />

            <Info
              label="Poste"
              value="Milieu"
            />

            <Info
              label="Pied fort"
              value="Droit"
            />

            <Info
              label="Taille"
              value="1m90"
            />

            <Info
              label="Poids"
              value="78 KG"
            />

            <Info
              label="Numéro"
              value="6"
            />

          </div>

        </div>
      </section>


      {/* STYLE DE JEU */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-24 md:px-10">

        <div className="absolute right-0 top-10 text-[20rem] font-black leading-none text-white/[0.02]">
          06
        </div>

        <div className="relative mx-auto max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.5em] text-lime-400">
            02 — STYLE DE JEU
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-tight md:text-7xl">
            Contrôle.
            <br />
            <span className="text-lime-400">Puissance.</span>
            <br />
            Impact.
          </h2>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-white/50">
            Moussa Pogba évolue au milieu de terrain avec un profil
            polyvalent. Il cherche à participer au jeu, à offrir des
            solutions à ses partenaires et à maintenir une présence
            importante dans le cœur du jeu.
          </p>

        </div>

      </section>


      {/* QUALITÉS */}
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
              title="Puissance"
              text="Un physique qui lui permet d'imposer sa présence dans les duels et de protéger efficacement le ballon."
            />

            <Quality
              number="02"
              title="Technique"
              text="Une capacité à conserver le ballon et à jouer dans les espaces du milieu de terrain."
            />

            <Quality
              number="03"
              title="Vision"
              text="Une volonté de regarder vers l'avant et de rechercher les meilleures solutions pour faire progresser le jeu."
            />

            <Quality
              number="04"
              title="Volume de jeu"
              text="Un profil capable de participer aux différentes phases du match et de rester impliqué dans le jeu."
            />

            <Quality
              number="05"
              title="Duels"
              text="Son gabarit et son engagement lui permettent de répondre présent dans les confrontations."
            />

            <Quality
              number="06"
              title="Frappe"
              text="Un milieu capable d'apporter une menace supplémentaire lorsqu'il se projette vers l'avant."
            />

          </div>

        </div>
      </section>


      {/* MILIEU DE TERRAIN */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-16 md:grid-cols-2">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.5em] text-lime-400">
                04 — MIDFIELD
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-tight md:text-7xl">
                Au cœur
                <br />
                <span className="text-lime-400">
                  du jeu.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-white/50">
                Dans l'entrejeu, Moussa cherche à être constamment
                disponible pour ses partenaires. Sa présence permet
                de créer une connexion entre les différentes lignes
                de l'équipe.
              </p>

              <p className="mt-6 text-lg leading-8 text-white/50">
                Son profil lui permet également de se projeter lorsque
                l'occasion se présente et d'apporter une solution
                supplémentaire dans les phases offensives.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* MENTALITÉ */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="border border-white/10 p-8 md:p-16">

            <p className="text-xs font-bold uppercase tracking-[0.5em] text-lime-400">
              05 — MENTALITY
            </p>

            <h2 className="mt-8 max-w-5xl text-4xl font-black uppercase leading-tight md:text-7xl">
              Travail.
              <br />
              Discipline.
              <br />
              <span className="text-lime-400">
                Ambition.
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
              Moussa Pogba représente un profil construit autour du
              travail et de l'envie de progresser. Son objectif est
              de continuer à développer son jeu et de prendre une
              place importante dans son équipe.
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
                ASFA
                <br />
                <span className="text-lime-400">
                  FOOTBALL.
                </span>
              </h2>

            </div>

            <div className="flex items-end">

              <p className="text-lg leading-8 text-white/50">
                Moussa Pogba évolue sous les couleurs de l'ASFA,
                où il poursuit son développement et cherche à
                exprimer pleinement ses qualités au milieu de terrain.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="border border-white/10 p-8 md:p-14">

            <p className="text-xs font-bold uppercase tracking-[0.5em] text-lime-400">
              07 — CONTACT
            </p>

            <h2 className="mt-6 text-4xl font-black uppercase md:text-6xl">
              Intéressé par
              <br />
              <span className="text-lime-400">
                le joueur ?
              </span>
            </h2>

            <p className="mt-6 text-lg text-white/50">
              Pour toute demande professionnelle concernant Moussa Pogba,
              contactez BIG.MOMO STUDIO.
            </p>

            <a
              href="tel:+221778126066"
              className="mt-8 inline-block border border-lime-400 px-7 py-4 text-sm font-black uppercase tracking-widest text-lime-400 transition hover:bg-lime-400 hover:text-black"
            >
              +221 77 812 60 66
            </a>

          </div>

        </div>
      </section>


      {/* FINAL */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-32 text-center md:px-10">

        <div className="absolute inset-0 flex items-center justify-center">

          <span className="text-[25vw] font-black text-white/[0.02]">
            06
          </span>

        </div>

        <div className="relative">

          <p className="text-xs font-bold uppercase tracking-[0.6em] text-lime-400">
            BIG.MOMO STUDIO
          </p>

          <h2 className="mt-8 text-6xl font-black uppercase md:text-9xl">
            MOUSSA
          </h2>

          <p className="mt-3 text-5xl font-black uppercase text-lime-400 md:text-7xl">
            POGBA
          </p>

          <p className="mt-5 text-2xl font-black uppercase text-white md:text-3xl">
            « PAUL POGBA »
          </p>

          <p className="mx-auto mt-8 max-w-xl text-white/40">
            Power. Vision. Impact.
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


/* INFO */
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


/* QUALITY */
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