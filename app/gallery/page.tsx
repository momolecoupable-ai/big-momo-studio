
import Link from "next/link";
import { getSupabaseAdmin } from "../../lib/supabase-admin";

export const dynamic = "force-dynamic";

type Player = {
  id: number;
  name: string | null;
  category: string | null;
  club: string | null;
  photo_url: string | null;
  slug: string | null;
  nickname: string | null;
};

export default async function GalleryPage() {
  const admin = getSupabaseAdmin();

  const { data: players, error } = await admin
    .from("players")
    .select("id, name, category, club, photo_url, slug, nickname")
    .eq("published", true)
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <Link href="/" className="font-black">
            BIG.MOMO <span className="text-lime-400">STUDIO</span>
          </Link>

          <Link
            href="/player"
            className="text-xs font-bold uppercase tracking-widest text-white/60 transition hover:text-lime-400"
          >
            Tous les joueurs
          </Link>
        </header>

        <section className="py-16">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-lime-400">
            BIG.MOMO STUDIO
          </p>

          <h1 className="mt-5 text-5xl font-black uppercase md:text-7xl">
            Notre galerie
          </h1>

          <p className="mt-5 max-w-xl text-white/50">
            Découvrez les talents et les profils accompagnés par le studio.
          </p>
        </section>

        {error ? (
          <p className="text-red-400">
            Impossible de charger la galerie. Vérifiez la connexion Supabase.
          </p>
        ) : !players || players.length === 0 ? (
          <p className="text-white/50">
            Aucun joueur publié pour le moment.
          </p>
        ) : (
          <section className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {players.map((player) => (
              <Link
                key={player.id}
                href={`/player/${player.slug || player.id}`}
                className="group relative block overflow-hidden border border-white/10 bg-zinc-950 transition hover:border-lime-400"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={player.photo_url || "/sirenho.jpg"}
                    alt={player.name || "Joueur"}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6 pt-20">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-lime-400">
                    {player.category || "PLAYER"} · {player.club || "BIG.MOMO"}
                  </p>

                  <h2 className="mt-3 text-2xl font-black uppercase">
                    {player.name || "Joueur"}
                  </h2>

                  {player.nickname && (
                    <p className="mt-2 text-sm font-bold text-white/60">
                      {player.nickname}
                    </p>
                  )}

                  <p className="mt-5 text-[10px] font-black uppercase tracking-widest text-lime-400">
                    Découvrir le profil ↗
                  </p>
                </div>
              </Link>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
