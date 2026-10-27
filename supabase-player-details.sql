-- Run this migration once in Supabase Dashboard > SQL Editor after the base setup.
-- Public football information stays on players; contact and birth date stay private.
alter table public.players
  add column if not exists height_cm integer,
  add column if not exists weight_kg numeric(5,2),
  add column if not exists jersey_number integer,
  add column if not exists position text,
  add column if not exists strong_foot text,
  add column if not exists nationality text,
  add column if not exists career text,
  add column if not exists playing_style text,
  add column if not exists qualities text,
  add column if not exists stats text,
  add column if not exists honors text,
  add column if not exists objectives text;

create table if not exists public.player_private (
  player_id bigint primary key references public.players(id) on delete cascade,
  phone text,
  date_of_birth date,
  updated_at timestamptz not null default now()
);
alter table public.player_private add column if not exists date_of_birth date;
alter table public.player_private enable row level security;
revoke all on table public.player_private from public, anon, authenticated;
grant all on table public.player_private to service_role;