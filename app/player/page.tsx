import Link from "next/link";

const players = [
  {
    name: "Sirenho SDB",
    nickname: "« KYLIAN MBAPPÉ »",
    category: "U17",
    club: "Jolof Olympique Club",
    image: "/sirenho.jpg",
    href: "/player/sirenho",
    description: "Un profil offensif explosif, rapide et ambitieux.",
  },
  {
    name: "Moussa Pogba",
    nickname: "« PAUL POGBA »",
    category: "Senior",
    club: "ASFA",
    image: "/moussa-pogba.jpg",
    href: "/player/moussa",
    description: "Un milieu complet, puissant et présent dans chaque phase du jeu.",
  },
];

export default function PlayersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="flex items-baseline" aria-label="BIG.MOMO Studio, accueil">
            <span className="text-2xl font-black tracking-tight">BIG.MOMO</span>
            <span className="ml-2 text-[9px] font-black tracking-[0.35em] text-lime-400">STUDIO</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
            <NavLink href="/" text="Home" />
            <NavLink href="/player" text="Players" active />
            <NavLink href="/gallery" text="Gallery" />
            <NavLink href="/about" text="About" />
          </nav>

          <Link
            href="/contact"
            className="border border-white/20 px-4 py-3 text-xs font-bold uppercase tracking-widest transition hover:border-lime-400 hover:bg-lime-400 hover:text-black md:px-5"
          >
            Contact <span className="hidden sm:inline">↗</span>
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:px-10 md:pb-32">
        <div className="pointer-events-none absolute right-[-8%] top-28 select-none text-[24vw] font-black leading-none text-white/[0.025]">
          PLAYERS
        </div>
        <div className="pointer-events-none absolute left-1/2 top-44 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-400/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">BIG.MOMO STUDIO</p>
          <h1 className="mt-7 max-w-5xl text-6xl font-black uppercase leading-[0.8] tracking-[-0.06em] md:text-9xl">
            OUR <span className="text-lime-400">PLAYERS.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-8 text-white/50 md:text-xl">
            Des profils sportifs accompagnés par BIG.MOMO Studio, avec une identité pensée pour faire ressortir leur jeu, leur ambition et leur personnalité.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">01 — SELECTED PLAYERS</p>
              <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">Discover the profiles.</h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-6 text-white/40 md:block">Clique sur un profil pour découvrir son univers.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {players.map((player) => (
              <Link
                key={player.href}
                href={player.href}
                className="group relative overflow-hidden border border-white/10 bg-zinc-950 transition hover:border-lime-400/60"
              >
                <div className="relative h-[520px] overflow-hidden md:h-[620px]">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                  <span className="absolute left-6 top-6 border border-lime-400/50 bg-black/60 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-lime-400">
                    {player.category}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/50">{player.club}</p>
                    <h3 className="mt-3 text-4xl font-black uppercase leading-none md:text-6xl">{player.name}</h3>
                    <p className="mt-4 text-lg font-black text-lime-400">{player.nickname}</p>
                    <p className="mt-4 max-w-md text-sm leading-6 text-white/60">{player.description}</p>
                    <span className="mt-7 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-white transition group-hover:text-lime-400">
                      Voir le profil <span className="transition group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">BIG.MOMO STUDIO</p>
            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.85] md:text-7xl">YOUR TURN<br /><span className="text-lime-400">TO STAND OUT.</span></h2>
          </div>
          <Link href="/contact" className="w-fit border border-lime-400 px-7 py-5 text-sm font-black uppercase tracking-widest text-lime-400 transition hover:bg-lime-400 hover:text-black">
            Créer mon profil ↗
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.25em] text-white/25 md:flex-row">
          <p>© 2026 BIG.MOMO STUDIO</p>
          <p>SPORTS • CREATIVE • DIGITAL</p>
        </div>
      </footer>
    </main>
  );
}

function NavLink({ href, text, active = false }: { href: string; text: string; active?: boolean }) {
  return (
    <Link href={href} className={`text-sm font-medium transition ${active ? "text-lime-400" : "text-white/60 hover:text-lime-400"}`}>
      {text}
    </Link>
  );
}
