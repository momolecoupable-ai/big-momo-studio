"use client";
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

type Player = { id: number; name: string; nickname: string; category: string; club: string; photo_url: string; slug: string; bio: string; published: boolean; date_of_birth: string; phone: string; height_cm: string | number; weight_kg: string | number; jersey_number: string | number; position: string; strong_foot: string; nationality: string; career: string; playing_style: string; qualities: string; stats: string; honors: string; objectives: string };
const blank: Omit<Player, "id"> = { name: "", nickname: "", category: "", club: "", photo_url: "", slug: "", bio: "", published: true, date_of_birth: "", phone: "", height_cm: "", weight_kg: "", jersey_number: "", position: "", strong_foot: "", nationality: "", career: "", playing_style: "", qualities: "", stats: "", honors: "", objectives: "" };
const inputClass = "w-full border border-white/15 bg-black px-4 py-3 text-white outline-none transition focus:border-lime-400";

export default function AdminDashboard() {
  const [client, setClient] = useState<SupabaseClient | null>(null);
  const [session, setSession] = useState<{ access_token: string; user: { email?: string } } | null>(null);
  const [authorized, setAuthorized] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [form, setForm] = useState(blank);
  const [editing, setEditing] = useState<number | null>(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) return;
    const supabase = createClient(url, key);
    const timer = window.setTimeout(() => setClient(supabase), 0);
    void supabase.auth.getSession().then(({ data }) => { if (data.session) setSession(data.session as typeof session); });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, next) => setSession(next as typeof session));
    return () => { window.clearTimeout(timer); listener.subscription.unsubscribe(); };
  }, []);

  async function request(path: string, init: RequestInit = {}) {
    const response = await fetch(path, { ...init, headers: { ...(init.headers || {}), Authorization: `Bearer ${session?.access_token || ""}` } });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "Une erreur est survenue.");
    return result;
  }
  async function loadPlayers() { try { const result = await request("/api/admin/players"); setPlayers(result.players); } catch (error) { setMessage((error as Error).message); } }
  useEffect(() => {
    if (!session) return;
    let cancelled = false;
    void (async () => {
      try {
        const response = await fetch("/api/admin/players", { headers: { Authorization: `Bearer ${session.access_token}` } });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.error || "Une erreur est survenue.");
        if (!cancelled) { setPlayers(result.players); setAuthorized(true); }
      } catch {
        if (!cancelled) {
          setAuthorized(false);
          setMessage("Ce compte n’est pas autorisé à gérer les profils.");
          await client?.auth.signOut();
        }
      }
    })();
    return () => { cancelled = true; };
  }, [client, session]);

  async function signIn(event: FormEvent) { event.preventDefault(); if (!client) return; setBusy(true); setMessage(""); const { error } = await client.auth.signInWithPassword({ email, password }); setBusy(false); if (error) setMessage("Connexion refusée. Vérifiez l’adresse autorisée et le mot de passe."); }
  async function signOut() { setAuthorized(false); await client?.auth.signOut(); setPlayers([]); setEditing(null); setForm(blank); }
  async function savePlayer(event: FormEvent) {
    event.preventDefault(); setBusy(true); setMessage("");
    try { const payload = { ...form, slug: slugify(form.slug || form.name) }; const result = await request(editing ? `/api/admin/players/${editing}` : "/api/admin/players", { method: editing ? "PATCH" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }); setPlayers((current) => editing ? current.map((player) => player.id === editing ? result.player : player) : [...current, result.player]); setForm(blank); setEditing(null); setMessage("Profil enregistré."); }
    catch (error) { setMessage((error as Error).message); } finally { setBusy(false); }
  }
  async function upload(file?: File) { if (!file) return; if (!file.type.startsWith("image/")) { setMessage("Choisissez un fichier image."); return; } if (file.size > 8 * 1024 * 1024) { setMessage("La photo doit faire 8 Mo maximum."); return; } setBusy(true); setMessage(""); try { const data = new FormData(); data.set("photo", file); const result = await request("/api/admin/upload", { method: "POST", body: data }); setForm((value) => ({ ...value, photo_url: result.url })); setMessage("Photo téléchargée."); } catch (error) { setMessage((error as Error).message); } finally { setBusy(false); } }
  async function removePlayer(player: Player) { if (!window.confirm(`Supprimer le profil de ${player.name} ?`)) return; setBusy(true); try { await request(`/api/admin/players/${player.id}`, { method: "DELETE" }); setPlayers((items) => items.filter((item) => item.id !== player.id)); setMessage("Profil supprimé."); } catch (error) { setMessage((error as Error).message); } finally { setBusy(false); } }
  function editPlayer(player: Player) { setEditing(player.id); setForm({ ...blank, ...player, height_cm: player.height_cm ?? "", weight_kg: player.weight_kg ?? "", jersey_number: player.jersey_number ?? "", date_of_birth: player.date_of_birth || "", phone: player.phone || "" }); window.scrollTo({ top: 0, behavior: "smooth" }); }

  return (
    <main className="min-h-screen bg-black px-5 py-10 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
          <Link href="/" className="text-xl font-black">BIG.MOMO <span className="text-lime-400">STUDIO</span></Link>
          {session && <button onClick={signOut} className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-lime-400">Déconnexion</button>}
        </header>
        {!client && <p className="mb-6 border border-yellow-400/30 bg-yellow-400/5 p-4 text-sm text-yellow-100">La configuration Supabase manque. Complétez .env.local puis relancez le site.</p>}
        {session && !authorized ? (
          <section className="mx-auto max-w-md border border-white/10 bg-zinc-950 p-8 text-center"><p className="text-xs font-black uppercase tracking-[0.4em] text-lime-400">Vérification</p><p className="mt-5 text-white/60">Vérification de l’accès propriétaire…</p></section>
        ) : !session ? (
          <section className="mx-auto max-w-md border border-white/10 bg-zinc-950 p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-lime-400">Espace propriétaire</p>
            <h1 className="mt-5 text-4xl font-black uppercase">Administration</h1>
            <p className="mt-4 leading-7 text-white/50">Connectez-vous avec le compte propriétaire autorisé dans Supabase.</p>
            <form onSubmit={signIn} className="mt-8 space-y-5">
              <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Adresse e-mail<input className={`${inputClass} mt-2 normal-case tracking-normal`} type="email" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Mot de passe<input className={`${inputClass} mt-2 normal-case tracking-normal`} type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} /></label>
              <button disabled={busy || !client} className="w-full bg-lime-400 px-5 py-4 text-sm font-black uppercase tracking-widest text-black disabled:opacity-50">{busy ? "Connexion…" : "Se connecter"}</button>
            </form>
          </section>
        ) : (
          <>
            <div className="mb-10"><p className="text-xs font-black uppercase tracking-[0.4em] text-lime-400">BIG.MOMO STUDIO</p><h1 className="mt-4 text-4xl font-black uppercase md:text-6xl">Gestion des joueurs</h1><p className="mt-4 text-white/50">Connecté : {session.user.email}</p></div>
            <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <form onSubmit={savePlayer} className="h-fit space-y-5 border border-white/10 bg-zinc-950 p-6 md:p-8">
                <h2 className="text-xl font-black uppercase text-lime-400">{editing ? "Modifier le profil" : "Nouveau profil"}</h2>
                {([["name", "Nom"], ["nickname", "Surnom"], ["category", "Catégorie"], ["club", "Club"], ["slug", "Adresse du profil"]] as const).map(([key, label]) => <label key={key} className="block text-xs font-bold uppercase tracking-widest text-white/60">{label}<input className={`${inputClass} mt-2 normal-case tracking-normal`} required={key === "name"} value={form[key]} onChange={(e) => setForm((value) => ({ ...value, [key]: e.target.value }))} /></label>)}
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Date de naissance (privée)<input className={`${inputClass} mt-2`} type="date" value={form.date_of_birth} onChange={(e) => setForm((v) => ({ ...v, date_of_birth: e.target.value }))} /></label>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Téléphone (privé)<input className={`${inputClass} mt-2`} type="tel" value={form.phone} onChange={(e) => setForm((v) => ({ ...v, phone: e.target.value }))} /></label>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Taille (cm)<input className={`${inputClass} mt-2`} type="number" min="100" max="250" value={form.height_cm} onChange={(e) => setForm((v) => ({ ...v, height_cm: e.target.value }))} /></label>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Poids (kg)<input className={`${inputClass} mt-2`} type="number" min="30" max="200" step="0.1" value={form.weight_kg} onChange={(e) => setForm((v) => ({ ...v, weight_kg: e.target.value }))} /></label>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Numéro de maillot<input className={`${inputClass} mt-2`} type="number" min="0" max="99" value={form.jersey_number} onChange={(e) => setForm((v) => ({ ...v, jersey_number: e.target.value }))} /></label>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Poste<input className={`${inputClass} mt-2`} placeholder="Ex. Attaquant" value={form.position} onChange={(e) => setForm((v) => ({ ...v, position: e.target.value }))} /></label>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Pied fort<select className={`${inputClass} mt-2`} value={form.strong_foot} onChange={(e) => setForm((v) => ({ ...v, strong_foot: e.target.value }))}><option value="">À préciser</option><option value="Droit">Droit</option><option value="Gauche">Gauche</option><option value="Ambidextre">Ambidextre</option></select></label>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Nationalité<input className={`${inputClass} mt-2`} value={form.nationality} onChange={(e) => setForm((v) => ({ ...v, nationality: e.target.value }))} /></label>
                </div>
                {([['career','Parcours'],['playing_style','Style de jeu'],['qualities','Points forts'],['stats','Statistiques'],['honors','Palmarès'],['objectives','Objectifs']] as const).map(([key,label]) => <label key={key} className="block text-xs font-bold uppercase tracking-widest text-white/60">{label}<textarea className={`${inputClass} mt-2 min-h-20 normal-case tracking-normal`} value={form[key]} onChange={(e) => setForm((v) => ({ ...v, [key]: e.target.value }))} /></label>)}                <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Présentation<textarea className={`${inputClass} mt-2 min-h-24 normal-case tracking-normal`} value={form.bio} onChange={(e) => setForm((value) => ({ ...value, bio: e.target.value }))} /></label>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Photo du joueur<input className="mt-3 block w-full text-sm text-white/60 file:mr-4 file:border-0 file:bg-lime-400 file:px-4 file:py-3 file:font-bold file:text-black" type="file" accept="image/*" onChange={(e) => void upload(e.target.files?.[0])} /></label>
                {form.photo_url && <div className="flex items-center gap-4"><img src={form.photo_url} alt="Aperçu de la photo" className="h-24 w-20 object-cover"/><span className="break-all text-xs text-white/40">Photo sélectionnée</span></div>}
                <label className="flex items-center gap-3 text-sm text-white/70"><input type="checkbox" checked={form.published} onChange={(e) => setForm((value) => ({ ...value, published: e.target.checked }))} className="accent-lime-400"/> Publier ce profil</label>
                <div className="flex gap-3"><button disabled={busy} className="flex-1 bg-lime-400 px-5 py-4 text-sm font-black uppercase tracking-widest text-black disabled:opacity-50">{busy ? "En cours…" : editing ? "Enregistrer" : "Ajouter le joueur"}</button>{editing && <button type="button" onClick={() => { setEditing(null); setForm(blank); }} className="border border-white/20 px-4 text-sm">Annuler</button>}</div>
              </form>
              <section><div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-black uppercase">Profils ({players.length})</h2><button onClick={() => void loadPlayers()} className="text-xs uppercase tracking-widest text-lime-400">Actualiser</button></div><div className="space-y-3">{players.map((player) => <article key={player.id} className="flex items-center gap-4 border border-white/10 bg-zinc-950 p-4">{player.photo_url ? <img src={player.photo_url} alt="" className="h-16 w-14 object-cover"/> : <div className="h-16 w-14 bg-white/5"/>}<div className="min-w-0 flex-1"><h3 className="truncate font-bold uppercase">{player.name}</h3><p className="mt-1 text-xs text-white/40">/{player.slug} · {player.published ? "Publié" : "Brouillon"}</p></div><button onClick={() => editPlayer(player)} className="text-xs font-bold uppercase text-lime-400">Modifier</button><button onClick={() => void removePlayer(player)} className="text-xs font-bold uppercase text-red-300">Supprimer</button></article>)}{players.length === 0 && <p className="border border-white/10 p-8 text-center text-white/40">Aucun profil dans la base pour l’instant.</p>}</div></section>
            </section>
          </>
        )}
      </div>
      {message && <div role="status" className="fixed bottom-5 left-1/2 w-[min(92vw,38rem)] -translate-x-1/2 border border-lime-400/30 bg-zinc-900 px-5 py-4 text-center text-sm shadow-xl">{message}</div>}
    </main>
  );
}
function slugify(value: string) { return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
