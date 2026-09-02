import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">

          <Link href="/" className="flex items-baseline">
            <span className="text-2xl font-black tracking-tight">
              BIG.MOMO
            </span>

            <span className="ml-2 text-[9px] font-black tracking-[0.35em] text-lime-400">
              STUDIO
            </span>
          </Link>

          <Link
            href="/"
            className="text-sm text-white/50 transition hover:text-lime-400"
          >
            ← Accueil
          </Link>

        </div>
      </header>


      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden px-6 md:px-10">

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="whitespace-nowrap text-[25vw] font-black leading-none text-white/[0.025]">
            ABOUT
          </span>
        </div>

        <div className="pointer-events-none absolute left-[-150px] top-1/3 h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[150px]" />

        <div className="relative mx-auto w-full max-w-7xl">

          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            BIG.MOMO STUDIO
          </p>

          <h1 className="mt-8 max-w-6xl text-7xl font-black uppercase leading-[0.78] tracking-[-0.06em] md:text-[140px]">
            WE ARE
            <br />
            <span className="text-lime-400">
              BIG.MOMO.
            </span>
          </h1>

          <div className="mt-12 flex max-w-3xl items-end">
            <p className="text-xl leading-9 text-white/40 md:text-2xl">
              Un studio créatif dédié à l'image, au sport et aux
              projets qui veulent construire une identité forte.
            </p>
          </div>

        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10">

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>

            <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
              01 — WHO WE ARE
            </p>

            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] md:text-7xl">
              Créer.
              <br />
              Construire.
              <br />
              <span className="text-lime-400">
                Marquer.
              </span>
            </h2>

          </div>

          <div className="flex items-end">

            <div>

              <p className="text-lg leading-8 text-white/50">
                BIG.MOMO Studio est un univers créatif qui met l'image
                au centre de chaque projet. Nous travaillons autour du
                sport, des joueurs, des marques et du contenu digital.
              </p>

              <p className="mt-6 text-lg leading-8 text-white/50">
                Notre approche consiste à transformer une simple idée
                en une identité visuelle reconnaissable, moderne et
                cohérente.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* VISION */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-32 md:px-10">

        <div className="absolute right-[-5%] top-20 text-[25vw] font-black leading-none text-white/[0.02]">
          VISION
        </div>

        <div className="relative mx-auto max-w-7xl">

          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            02 — OUR VISION
          </p>

          <h2 className="mt-8 max-w-5xl text-5xl font-black uppercase leading-[0.9] md:text-8xl">
            L'image n'est
            <br />
            pas seulement
            <br />
            <span className="text-lime-400">
              une image.
            </span>
          </h2>

          <p className="mt-12 max-w-3xl text-lg leading-8 text-white/40 md:text-xl">
            Une bonne identité peut changer la manière dont un joueur,
            une marque ou un projet est perçu. C'est pourquoi chaque
            création BIG.MOMO est pensée pour avoir une vraie personnalité.
          </p>

        </div>
      </section>


      {/* SERVICES */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            03 — WHAT WE DO
          </p>

          <h2 className="mt-6 text-5xl font-black uppercase md:text-7xl">
            Nos services
            <span className="text-lime-400">.</span>
          </h2>


          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">

            <Service
              number="01"
              title="Player Branding"
              text="Création d'identités visuelles pour les joueurs : affiches, profils, contenus et présentation professionnelle."
            />

            <Service
              number="02"
              title="Creative Design"
              text="Des visuels modernes et premium adaptés aux réseaux sociaux, campagnes et projets créatifs."
            />

            <Service
              number="03"
              title="Digital Content"
              text="Création de contenus pensés pour les plateformes digitales et les réseaux sociaux."
            />

            <Service
              number="04"
              title="Visual Direction"
              text="Une direction artistique cohérente pour donner une vraie personnalité à chaque projet."
            />

          </div>

        </div>
      </section>


      {/* VALUES */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            04 — OUR VALUES
          </p>

          <h2 className="mt-6 text-5xl font-black uppercase md:text-7xl">
            Notre
            <br />
            <span className="text-lime-400">
              mindset.
            </span>
          </h2>


          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <Value
              number="01"
              title="Ambition"
              text="Toujours chercher à faire mieux et à repousser les limites de chaque projet."
            />

            <Value
              number="02"
              title="Identité"
              text="Créer quelque chose qui possède une personnalité propre et qui peut être reconnu."
            />

            <Value
              number="03"
              title="Excellence"
              text="Accorder de l'importance aux détails pour obtenir un résultat propre et professionnel."
            />

          </div>

        </div>
      </section>


      {/* SPORT */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-32 md:px-10">

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="text-[28vw] font-black text-white/[0.02]">
            SPORT
          </span>
        </div>

        <div className="relative mx-auto max-w-7xl">

          <div className="grid gap-16 md:grid-cols-2">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
                05 — SPORT
              </p>

              <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] md:text-8xl">
                Built for
                <br />
                <span className="text-lime-400">
                  athletes.
                </span>
              </h2>

            </div>

            <div className="flex items-end">

              <div>

                <p className="text-lg leading-8 text-white/50">
                  Le sport occupe une place importante dans l'univers
                  BIG.MOMO. Nous voulons donner aux joueurs une image
                  qui reflète leur personnalité, leur travail et leurs
                  ambitions.
                </p>

                <Link
                  href="/player"
                  className="mt-8 inline-block border border-white/20 px-7 py-4 text-sm font-black uppercase tracking-widest transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
                >
                  Découvrir les joueurs →
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* MANIFESTO */}
      <section className="border-t border-white/10 px-6 py-32 md:px-10">

        <div className="mx-auto max-w-6xl text-center">

          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            06 — MANIFESTO
          </p>

          <h2 className="mt-10 text-5xl font-black uppercase leading-[0.85] md:text-8xl">
            Don't follow
            <br />
            <span className="text-lime-400">
              the ordinary.
            </span>
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-white/40">
            BIG.MOMO Studio existe pour créer des images qui attirent
            l'attention, racontent une histoire et restent dans les mémoires.
          </p>

        </div>
      </section>


      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32 md:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            BIG.MOMO STUDIO
          </p>

          <h2 className="mt-8 text-6xl font-black uppercase leading-[0.85] md:text-9xl">
            LET'S
            <br />
            <span className="text-lime-400">
              CREATE.
            </span>
          </h2>

          <p className="mt-10 max-w-xl text-lg leading-8 text-white/40">
            Un joueur. Une marque. Une idée.
            <br />
            Faisons-en quelque chose de grand.
          </p>

          <a
            href="https://wa.me/221778126066"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block border border-lime-400 px-8 py-5 text-sm font-black uppercase tracking-widest text-lime-400 transition hover:bg-lime-400 hover:text-black"
          >
            Contact BIG.MOMO ↗
          </a>

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


/* SERVICE */
function Service({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-black p-8 transition duration-300 hover:bg-white/[0.03] md:p-12">

      <span className="text-sm font-black text-lime-400">
        {number}
      </span>

      <h3 className="mt-12 text-3xl font-black uppercase">
        {title}
      </h3>

      <p className="mt-5 max-w-xl leading-7 text-white/40">
        {text}
      </p>

    </div>
  );
}


/* VALUE */
function Value({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-white/10 p-8 transition duration-300 hover:border-lime-400/30 md:p-10">

      <span className="text-sm font-black text-lime-400">
        {number}
      </span>

      <h3 className="mt-10 text-3xl font-black uppercase">
        {title}
      </h3>

      <p className="mt-5 leading-7 text-white/40">
        {text}
      </p>

    </div>
  );
}