import Link from "next/link";

export default function ContactPage() {
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

        <div className="pointer-events-none absolute right-[-10%] top-20 text-[25vw] font-black leading-none text-white/[0.025]">
          CONTACT
        </div>

        <div className="pointer-events-none absolute left-[-150px] top-40 h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            BIG.MOMO STUDIO
          </p>

          <h1 className="mt-8 text-7xl font-black uppercase leading-[0.8] tracking-[-0.06em] md:text-[130px]">
            LET'S
            <br />
            <span className="text-lime-400">
              TALK.
            </span>
          </h1>

          <p className="mt-12 max-w-2xl text-lg leading-8 text-white/40 md:text-xl">
            Un joueur, une marque, un projet créatif ou simplement
            une idée ? Contactez BIG.MOMO Studio.
          </p>

        </div>
      </section>


      {/* CONTACT INFO */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            01 — GET IN TOUCH
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
            Parlons de votre
            <br />
            <span className="text-lime-400">
              projet.
            </span>
          </h2>


          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">


            {/* WHATSAPP */}
            <a
              href="https://wa.me/221705678818"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black p-8 transition duration-300 hover:bg-white/[0.04] md:p-12"
            >

              <div className="flex items-center justify-between">

                <span className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
                  01
                </span>

                <span className="text-2xl transition group-hover:translate-x-1">
                  ↗
                </span>

              </div>

              <h3 className="mt-14 text-3xl font-black uppercase">
                WhatsApp
              </h3>

              <p className="mt-4 text-white/40">
                +221 70 567 88 18
              </p>

              <p className="mt-8 text-xs font-bold uppercase tracking-widest text-lime-400">
                Nous contacter →
              </p>

            </a>


            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/Bigmomo.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black p-8 transition duration-300 hover:bg-white/[0.04] md:p-12"
            >

              <div className="flex items-center justify-between">

                <span className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
                  02
                </span>

                <span className="text-2xl transition group-hover:translate-x-1">
                  ↗
                </span>

              </div>

              <h3 className="mt-14 text-3xl font-black uppercase">
                Instagram
              </h3>

              <p className="mt-4 text-white/40">
                @Bigmomo.studio
              </p>

              <p className="mt-8 text-xs font-bold uppercase tracking-widest text-lime-400">
                Voir le compte →
              </p>

            </a>

          </div>

        </div>
      </section>


      {/* FORM */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>

            <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
              02 — MESSAGE
            </p>

            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] md:text-7xl">
              Start
              <br />
              something
              <br />
              <span className="text-lime-400">
                great.
              </span>
            </h2>

          </div>


          <form className="space-y-6">

            <div>

              <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-white/40">
                Nom
              </label>

              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-lime-400"
              />

            </div>


            <div>

              <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-white/40">
                Email
              </label>

              <input
                type="email"
                placeholder="Votre email"
                className="w-full border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-lime-400"
              />

            </div>


            <div>

              <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-white/40">
                Votre projet
              </label>

              <textarea
                rows={6}
                placeholder="Parlez-nous de votre projet..."
                className="w-full resize-none border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-lime-400"
              />

            </div>


            <button
              type="button"
              className="w-full border border-lime-400 px-7 py-5 text-sm font-black uppercase tracking-widest text-lime-400 transition hover:bg-lime-400 hover:text-black"
            >
              Envoyer le message →
            </button>

          </form>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-32 text-center md:px-10">

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="whitespace-nowrap text-[25vw] font-black text-white/[0.02]">
            MOMO
          </span>
        </div>

        <div className="relative">

          <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            BIG.MOMO STUDIO
          </p>

          <h2 className="mt-8 text-5xl font-black uppercase md:text-8xl">
            YOUR VISION.
            <br />
            <span className="text-lime-400">
              OUR CREATIVE.
            </span>
          </h2>

          <a
            href="https://wa.me/221705678818"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block border border-lime-400 px-8 py-5 text-sm font-black uppercase tracking-widest text-lime-400 transition hover:bg-lime-400 hover:text-black"
          >
            WhatsApp BIG.MOMO ↗
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