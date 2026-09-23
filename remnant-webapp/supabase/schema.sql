-- Remnant product catalog schema.
-- Run this once in Supabase: Dashboard -> SQL Editor -> New query -> paste -> Run.

create extension if not exists "pgcrypto";

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  price_cents integer not null,
  image_url text,
  collection text,
  in_stock boolean not null default true,
  created_at timestamptz not null default now()
);

-- Anon key (used by the site) can only read products, never write.
alter table products enable row level security;

drop policy if exists "Public read access" on products;
create policy "Public read access"
  on products for select
  using (true);
