"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">

          {/* LOGO */}
          <Link
            href="/"
            className="animate-fade-in flex items-baseline"
          >
            <span className="text-2xl font-black tracking-tight">
              BIG.MOMO
            </span>

            <span className="ml-2 text-[9px] font-black tracking-[0.35em] text-lime-400">
              STUDIO
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-8 md:flex">

            <NavLink href="/" text="Home" />
            <NavLink href="/player" text="Players" />
            <NavLink href="/gallery" text="Gallery" />
            <NavLink href="/about" text="About" />

          </nav>

          {/* DESKTOP CONTACT */}
          <Link
            href="/contact"
            className="hidden border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-widest transition duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black md:block"
          >
            Contact ↗
          </Link>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center border border-white/10 md:hidden"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5">

              <span
                className={`block h-[2px] w-6 bg-white transition duration-300 ${
                  menuOpen
                    ? "translate-y-[4px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`block h-[2px] w-6 bg-white transition duration-300 ${
                  menuOpen
                    ? "-rotate-45"
                    : ""
                }`}
              />

            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`absolute left-0 right-0 top-20 border-b border-white/10 bg-black transition-all duration-300 md:hidden ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0"
          }`}
        >

          <nav className="flex flex-col px-6 py-8">

            <MobileLink
              href="/"
              text="Home"
              closeMenu={() => setMenuOpen(false)}
            />

            <MobileLink
              href="/player"
              text="Players"
              closeMenu={() => setMenuOpen(false)}
            />

            <MobileLink
              href="/gallery"
              text="Gallery"
              closeMenu={() => setMenuOpen(false)}
            />

            <MobileLink
              href="/about"
              text="About"
              closeMenu={() => setMenuOpen(false)}
            />

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 border border-lime-400 px-6 py-5 text-center text-sm font-black uppercase tracking-widest text-lime-400 transition hover:bg-lime-400 hover:text-black"
            >
              Contact ↗
            </Link>

          </nav>
        </div>
      </header>


      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 md:px-10">

        {/* BACKGROUND TEXT */}
        <div className="animate-fade-in pointer-events-none absolute right-[-10%] top-[25%] text-[25vw] font-black leading-none text-white/[0.025]">
          MOMO
        </div>

        {/* GLOW */}
        <div className="animate-glow pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[160px]" />

        <div className="relative mx-auto w-full max-w-7xl">

          <p className="animate-fade-up text-xs font-black uppercase tracking-[0.55em] text-lime-400">
            BIG.MOMO STUDIO
          </p>

          <h1 className="animate-fade-up delay-100 mt-8 max-w-6xl text-7xl font-black uppercase leading-[0.78] tracking-[-0.07em] md:text-[150px]">
            WE
            <br />
            <span className="text-lime-400">
              CREATE.
            </span>
          </h1>

          <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <p className="animate-fade-up delay-200 max-w-xl text-lg leading-8 text-white/40 md:text-xl">
              Une identité visuelle pensée pour les joueurs,
              les marques et les projets qui veulent se démarquer.
            </p>

            <Link
              href="/player"
              className="animate-fade-up delay-300 group flex w-fit items-center gap-4 border border-white/20 px-7 py-5 text-sm font-black uppercase tracking-widest transition duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
            >
              Découvrir nos joueurs

              <span className="transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>
      </section>


      {/* INTRO */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10">

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div className="animate-fade-up">

            <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
              01 — ABOUT THE STUDIO
            </p>

            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] md:text-7xl">
              More than
              <br />
              <span className="text-lime-400">
                an image.
              </span>
            </h2>

          </div>

          <div className="animate-fade-up delay-200 flex items-end">

            <p className="text-lg leading-8 text-white/40">
              BIG.MOMO Studio crée des expériences visuelles fortes
              autour du sport et de la créativité. Notre objectif est
              de transformer chaque profil en une véritable identité.
            </p>

          </div>

        </div>
      </section>


      {/* PLAYERS */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="flex items-end justify-between">

            <div className="animate-fade-up">

              <p className="text-xs font-black uppercase tracking-[0.5em] text-lime-400">
                02 — PLAYERS
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
                Our
                <br />
                <span className="text-lime-400">
                  players.
                </span>
              </h2>

            </div>

            <Link
              href="/player"
              className="hidden text-sm font-bold uppercase tracking-widest text-white/40 transition hover:text-lime-400 md:block"
            >
              Voir tous les joueurs →
            </Link>

          </div>


          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {/* SIRENHO */}
            <Link
              href="/player/sirenho"
              className="animate-fade-up group relative overflow-hidden border border-white/10"
            >

              <div className="relative h-[600px]">

                <img
                  src="/sirenho.jpg"
                  alt="Sirenho SDB"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute left-7 top-7">

                  <span className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
                    U17
                  </span>

                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">

                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Jolof Olympique Club
                  </p>

                  <h3 className="mt-3 text-5xl font-black uppercase">
                    Sirenho SDB
                  </h3>

                  <p className="mt-3 text-xl font-bold text-lime-400">
                    « KYLIAN MBAPPÉ »
                  </p>

                  <p className="mt-6 text-xs uppercase tracking-widest text-white/40">
                    Voir le profil →
                  </p>

                </div>

              </div>

            </Link>


            {/* MOUSSA */}
            <Link
              href="/player/moussa"
              className="animate-fade-up delay-200 group relative overflow-hidden border border-white/10"
            >

              <div className="relative h-[600px]">

                <img
                  src="/moussa-pogba.jpg"
                  alt="Moussa Pogba"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute left-7 top-7">

                  <span className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
                    SENIOR
                  </span>

                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">

                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    ASFA
                  </p>

                  <h3 className="mt-3 text-5xl font-black uppercase">
                    Moussa Pogba
                  </h3>

                  <p className="mt-3 text-xl font-bold text-lime-400">
                    « PAUL POGBA »
                  </p>

                  <p className="mt-6 text-xs uppercase tracking-widest text-white/40">
                    Voir le profil →
                  </p>

                </div>

              </div>

            </Link>

          </div>

        </div>
      </section>


      {/* GALLERY */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-32 md:px-10">

        <div className="pointer-events-none absolute right-[-10%] top-20 text-[25vw] font-black text-white/[0.02]">
          VISUAL
        </div>

        <div className="relative mx-auto max-w-7xl">

          <p className="animate-fade-up text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            03 — GALLERY
          </p>

          <h2 className="animate-fade-up delay-100 mt-6 text-5xl font-black uppercase md:text-8xl">
            Visual
            <br />
            <span className="text-lime-400">
              stories.
            </span>
          </h2>

          <p className="animate-fade-up delay-200 mt-8 max-w-2xl text-lg leading-8 text-white/40">
            Découvrez notre univers créatif et les différents projets
            réalisés par BIG.MOMO Studio.
          </p>

          <Link
            href="/gallery"
            className="animate-fade-up delay-300 mt-10 inline-block border border-white/20 px-7 py-5 text-sm font-black uppercase tracking-widest transition duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
          >
            Ouvrir la galerie →
          </Link>

        </div>
      </section>


      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32 md:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="animate-fade-up text-xs font-black uppercase tracking-[0.5em] text-lime-400">
            BIG.MOMO STUDIO
          </p>

          <h2 className="animate-fade-up delay-100 mt-8 text-6xl font-black uppercase leading-[0.85] md:text-9xl">
            LET'S
            <br />
            <span className="text-lime-400">
              CREATE.
            </span>
          </h2>

          <p className="animate-fade-up delay-200 mt-10 max-w-xl text-lg leading-8 text-white/40">
            Tu as un joueur, une marque ou un projet ?
            Parlons-en et construisons quelque chose de fort.
          </p>

          <Link
            href="/contact"
            className="animate-fade-up delay-300 mt-10 inline-block border border-lime-400 px-8 py-5 text-sm font-black uppercase tracking-widest text-lime-400 transition duration-300 hover:bg-lime-400 hover:text-black"
          >
            Contacter BIG.MOMO ↗
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


/* DESKTOP LINK */
function NavLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-white/60 transition duration-300 hover:text-lime-400"
    >
      {text}
    </Link>
  );
}


/* MOBILE LINK */
function MobileLink({
  href,
  text,
  closeMenu,
}: {
  href: string;
  text: string;
  closeMenu: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={closeMenu}
      className="border-b border-white/10 py-5 text-2xl font-black uppercase transition duration-300 hover:text-lime-400"
    >
      {text}
    </Link>
  );
}