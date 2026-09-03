import Link from "next/link";

export default function SirenhoPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">

          <Link
            href="/"
            className="flex items-baseline"
          >
            <span className="text-2xl font-black tracking-tight">
              BIG.MOMO
            </span>

            <span className="ml-2 text-[9px] font-black tracking-[0.35em] text-lime-400">
              STUDIO
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-white/60 transition hover:text-lime-400"
            >
              Home
            </Link>

            <Link
              href="/player"
              className="text-sm font-medium text-lime-400"
            >
              Players
            </Link>

            <Link
              href="/gallery"
              className="text-sm font-medium text-white/60 transition hover:text-lime-400"
            >
              Gallery
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-white/60 transition hover:text-lime-400"
            >
              About
            </Link>
          </nav>

          <Link
            href="/contact"
            className="hidden border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-widest transition duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black md:block"
          >
            Contact ↗
          </Link>

          <Link
            href="/player"
            className="border border-white/20 px-4 py-3 text-xs font-bold uppercase tracking-widest text-white/70 transition hover:border-lime-400 hover:text-lime-400 md:hidden"
          >
            Players
          </Link>

        </div>
      </header>


      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden px-6 pt-20 md:px-10">

        {/* BACKGROUND TEXT */}
        <div className="pointer-events-none absolute right-[-15%] top-[20%] select-none text-[28vw] font-black leading-none text-white/[0.025]">
          09
        </div>

        {/* GREEN GLOW */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[150px]" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 py-24 lg:grid-cols-2">

          {/* PLAYER IMAGE */}
          <div className="relative order-2 mx-auto w-full max-w-xl lg:order-1">

            <div className="absolute -left-4 -top-4 h-20 w-20 border-l border-t border-lime-400/60" />

            <div className="absolute -bottom-4 -right-4 h-20 w-20 border-b border-r border-lime-400/60" />

            <div className="relative overflow-hidden border border-white/10 bg-zinc-950">

              <img
                src="/sirenho.jpg"
                alt="Sirenho SDB"
                className="h-auto w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute left-6 top-6">
                <span className="border border-lime-400/50 bg-black/60 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-lime-400">
                  U17
                </span>
              </div>

              <div className="absolute bottom-6 right-6">
                <span className="text-7xl font-black leading-none text-white/10 md:text-9xl">
                  09
                </span>
              </div>

            </div>
          </div>


          {/* PLAYER INFO */}
          <div className="order-1 lg:order-2">

            <Link
              href="/player"
              className="mb-10 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white/40 transition hover:text-lime-400"
            >
              <span>←</span>
              Retour aux joueurs
            </Link>

            <p className="text-xs font-black uppercase tracking-[0.55em] text-lime-400">
              BIG.MOMO STUDIO — PLAYER
            </p>

            <h1 className="mt-6 text-6xl font-black uppercase leading-[0.8] tracking-[-0.06em] md:text-8xl">
              Sirenho
              <br />
              <span className="text-white">
                SDB.
              </span>
            </h1>

            <p className="mt-6 text-2xl font-black uppercase tracking-wide text-lime-400 md:text-3xl">
              « KYLIAN MBAPPÉ »
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/40">
              Un profil offensif explosif, rapide et ambitieux.
              Sirenho se distingue par sa vitesse, sa capacité
              d’accélération et son impact dans le jeu offensif.
            </p>


            {/* CLUB */}
            <div className="mt-10 border-y border-white/10 py-6">

              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
                Club
              </p>

              <p className="mt-2 text-xl font-bold uppercase">
                Jolof Olympique Club
              </p>

            </div>


            {/* PLAYER STATS */}
            <div className="mt-8 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">

              <Stat
                label="Catégorie"
                value="U17"
              />

              <Stat
                label="Numéro"
                value="09"
              />

              <Stat
                label="Taille"
                value="1.89 m"
              />

              <Stat
                label="Poids"
                value="75 kg"
              />

            </div>


            {/* POSITION */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <Info
                label="Position"
                value="Attaquant / Ailier"
              />

              <Info
                label="Pied"
                value="Gauche"
              />

              <Info
                label="Club"
                value="Jolof Olympique Club"
              />

              <Info
                label="Début au club"
                value="2025"
              />

            </div>

          </div>

        </div>
      </section>


      {/* PROFILE SECTION */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 md:grid-cols-2">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
                01 — PROFILE
              </p>

              <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] md:text-7xl">
                Built
                <br />
                <span className="text-lime-400">
                  different.
                </span>
              </h2>

            </div>

            <div className="flex items-end">

              <p className="text-lg leading-8 text-white/40">
                Sirenho SDB évolue dans un registre offensif basé sur
                la vitesse, les changements de rythme et la percussion.
                Son profil lui permet d’occuper plusieurs positions
                sur le front de l’attaque et de créer constamment
                du danger dans les espaces.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ATTRIBUTES */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            02 — ATTRIBUTES
          </p>

          <h2 className="mt-6 text-5xl font-black uppercase md:text-7xl">
            Player
            <br />
            <span className="text-lime-400">
              identity.
            </span>
          </h2>


          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <Attribute
              number="01"
              title="Speed"
              text="Une grande vitesse d’exécution et une capacité à accélérer rapidement."
            />

            <Attribute
              number="02"
              title="Attack"
              text="Un profil offensif capable de créer des différences dans les derniers mètres."
            />

            <Attribute
              number="03"
              title="Versatility"
              text="Une capacité à évoluer comme attaquant ou sur les côtés."
            />

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32 md:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            BIG.MOMO STUDIO
          </p>

          <h2 className="mt-8 text-6xl font-black uppercase leading-[0.85] md:text-9xl">
            NEXT
            <br />
            <span className="text-lime-400">
              PLAYER.
            </span>
          </h2>

          <p className="mt-10 max-w-xl text-lg leading-8 text-white/40">
            Découvrez les autres profils présentés par
            BIG.MOMO Studio.
          </p>

          <Link
            href="/player"
            className="mt-10 inline-block border border-lime-400 px-8 py-5 text-sm font-black uppercase tracking-widest text-lime-400 transition duration-300 hover:bg-lime-400 hover:text-black"
          >
            Voir tous les joueurs →
          </Link>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.25em] text-white/25 md:flex-row">

          <p>
            © 2026 BIG.MOMO STUDIO
          </p>

          <p>
            SPORTS • CREATIVE • DIGITAL
          </p>

        </div>

      </footer>

    </main>
  );
}


/* STAT */
function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-black px-5 py-6">

      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
        {label}
      </p>

      <p className="mt-2 text-lg font-black uppercase text-lime-400">
        {value}
      </p>

    </div>
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
    <div className="border border-white/10 px-5 py-5">

      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
        {label}
      </p>

      <p className="mt-2 text-sm font-bold uppercase">
        {value}
      </p>

    </div>
  );
}


/* ATTRIBUTE */
function Attribute({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group border border-white/10 p-8 transition duration-300 hover:border-lime-400/50">

      <span className="text-xs font-black tracking-[0.3em] text-lime-400">
        {number}
      </span>

      <h3 className="mt-10 text-3xl font-black uppercase">
        {title}
      </h3>

      <p className="mt-5 text-base leading-7 text-white/40">
        {text}
      </p>

    </div>
  );
}