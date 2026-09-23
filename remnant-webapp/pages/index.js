// Product Listing Page — pulls live products from Supabase.

import Link from 'next/link';
import { supabase } from '../lib/supabaseClient';

export async function getStaticProps() {
  const { data: products, error } = await supabase
    .from('products')
    .select('id, slug, name, price_cents, image_url, collection')
    .eq('in_stock', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to load products:', error.message);
  }

  return {
    props: { products: products || [] },
    revalidate: 60,
  };
}

export default function Home({ products }) {
  return (
    <div>
      <header className="rn-page" style={{ minHeight: '46vh' }}>
        <span className="rn-badge">A remnant chosen by grace</span>
        <h1 className="rn-wordmark">Remnant</h1>
        <p className="rn-tagline">
          Faith-inspired apparel, built for the wild branch grafted in by
          grace (Romans 11:5).
        </p>
      </header>

      <main className="rn-grid">
        {products.length === 0 ? (
          <p className="rn-tagline" style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            No products yet — check back soon.
          </p>
        ) : (
          products.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`} className="rn-card">
              <img src={product.image_url} alt={product.name} className="rn-card-img" />
              <div className="rn-card-body">
                <p className="rn-card-collection">{product.collection}</p>
                <h3 className="rn-card-name">{product.name}</h3>
                <p className="rn-card-price">R{(product.price_cents / 100).toFixed(2)}</p>
              </div>
            </Link>
          ))
        )}
      </main>

      <nav className="rn-nav" style={{ marginBottom: '3rem' }}>
        <a href="/cart">Cart</a>
        <a href="/checkout">Checkout</a>
      </nav>
    </div>
  );
}
