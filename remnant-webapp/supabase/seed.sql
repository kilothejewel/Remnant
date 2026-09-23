-- Placeholder catalog data so the site has something to show.
-- Prices are in cents (ZAR). Images are generic placeholders (placehold.co) --
-- swap image_url for real product photos before this goes live for real.
-- Edit/replace freely in Supabase Table Editor once you have real products.

insert into products (slug, name, description, price_cents, image_url, collection, in_stock) values
  ('in-the-beginning', 'In The Beginning Tee', 'Genesis 1:1 back print, rust on black, grafted-branch mark beneath.', 45000, 'https://placehold.co/800x1000/050505/c2410c?text=In+The+Beginning', 'Genesis', true),
  ('let-there-be-light', 'Let There Be Light Tee', 'Genesis 1:3 radiating sunburst chest print.', 45000, 'https://placehold.co/800x1000/050505/c2410c?text=Let+There+Be+Light', 'Genesis', true),
  ('she-ar', E'She\'ar Collar Mark Tee', 'The Hebrew word for "remnant" — a small typographic mark at the collar.', 42000, 'https://placehold.co/800x1000/050505/c2410c?text=She%27ar', 'Remnant Marks', true),
  ('only-the-remnant', 'Only The Remnant Tee', 'Romans 9:27 fragment, back print, minimal, lots of negative space.', 42000, 'https://placehold.co/800x1000/050505/c2410c?text=Only+The+Remnant', 'Remnant Marks', true)
on conflict (slug) do nothing;
