import Link from "next/link";

const gallery = [
  {
    title: "SIRENHO SDB",
    category: "PLAYER",
    image: "/sirenho.jpg",
  },
  {
    title: "MOUSSA POGBA",
    category: "PLAYER",
    image: "/moussa-pogba.jpg",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">

          <Link href="/" className="flex items-baseline">
            <span className="text-2xl font-black">
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
      <section className="relative overflow-hidden px-6 pb-24 pt-36 md:px-10">

        <div className="pointer-events-none absolute right-[-100px] top-10 text-[25vw] font-black leading-none text-white/[0.025]">
          GALLERY
        </div>

        <div className="pointer-events-none absolute left-[-200px] top-40 h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            BIG.MOMO STUDIO
          </p>

          <h1 className="mt-8 text-7xl font-black uppercase leading-[0.8] tracking-[-0.06em] md:text-[130px]">
            OUR
            <br />
            <span className="text-lime-400">
              GALLERY.
            </span>
          </h1>

          <p className="mt-12 max-w-2xl text-lg leading-8 text-white/40 md:text-xl">
            Découvrez l'univers visuel de BIG.MOMO Studio à travers
            nos joueurs, nos créations et nos différents projets.
          </p>

        </div>
      </section>


      {/* GALLERY */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex items-end justify-between">

            <div>
              <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
                01 — SELECTED WORK
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
                Featured
              </h2>
            </div>

            <span className="hidden text-8xl font-black text-white/[0.03] md:block">
              02
            </span>

          </div>


          <div className="grid gap-8 md:grid-cols-2">

            {gallery.map((item, index) => (

              <div
                key={item.title}
                className={`group relative overflow-hidden border border-white/10 ${
                  index === 0 ? "md:translate-y-10" : ""
                }`}
              >

                {/* IMAGE */}
                <div className="relative h-[650px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* CATEGORY */}
                  <div className="absolute left-7 top-7">

                    <span className="border border-lime-400/30 bg-black/30 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-lime-400 backdrop-blur-md">
                      {item.category}
                    </span>

                  </div>

                  {/* NUMBER */}
                  <div className="absolute right-5 top-[-10px] text-[180px] font-black leading-none text-white/[0.05]">
                    0{index + 1}
                  </div>

                  {/* TEXT */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">

                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
                      BIG.MOMO STUDIO
                    </p>

                    <h3 className="text-4xl font-black uppercase md:text-6xl">
                      {item.title}
                    </h3>

                    <div className="mt-7 flex items-center justify-between border-t border-white/20 pt-5">

                      <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                        Creative Player Project
                      </p>

                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition duration-300 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black">
                        ↗
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* CREATIVE SECTION */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-32 md:px-10">

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="whitespace-nowrap text-[22vw] font-black text-white/[0.02]">
            CREATE
          </span>
        </div>

        <div className="relative mx-auto max-w-6xl text-center">

          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            02 — CREATIVE DIRECTION
          </p>

          <h2 className="mt-8 text-5xl font-black uppercase leading-[0.9] md:text-8xl">
            Every image
            <br />
            <span className="text-lime-400">
              tells a story.
            </span>
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-white/40">
            BIG.MOMO Studio transforme les profils sportifs en identités
            visuelles fortes. Chaque détail compte : image, typographie,
            lumière et direction artistique.
          </p>

        </div>

      </section>


      {/* SERVICES */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            03 — WHAT WE CREATE
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
            Notre univers
            <span className="text-lime-400">.</span>
          </h2>


          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">

            <Service
              number="01"
              title="Player Cards"
              text="Des affiches premium pensées pour présenter les joueurs et leur identité."
            />

            <Service
              number="02"
              title="Visual Identity"
              text="Une direction artistique cohérente pour donner une véritable identité aux projets."
            />

            <Service
              number="03"
              title="Digital Content"
              text="Des créations adaptées aux réseaux sociaux et aux plateformes digitales."
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
            HAVE A
            <br />
            <span className="text-lime-400">
              PROJECT?
            </span>
          </h2>

          <p className="mt-10 max-w-xl text-lg leading-8 text-white/40">
            Une idée, un joueur ou un projet créatif ?
            Construisons quelque chose de fort ensemble.
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


/* SERVICE COMPONENT */
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
    <div className="bg-black p-8 md:p-10">

      <span className="text-sm font-black text-lime-400">
        {number}
      </span>

      <h3 className="mt-12 text-2xl font-black uppercase">
        {title}
      </h3>

      <p className="mt-5 leading-7 text-white/40">
        {text}
      </p>

    </div>
  );
}