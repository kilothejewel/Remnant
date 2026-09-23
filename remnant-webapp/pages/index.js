// Product Listing Page
// Placeholder while the real catalog (Supabase-backed) is built out.
// See claude/brand-identity.md and claude/collection-ideas-and-business-recs
// in the Remnant project for the planned catalog structure.

export default function Home() {
  return (
    <div className="rn-page">
      <span className="rn-badge">A remnant chosen by grace</span>
      <h1 className="rn-wordmark">Remnant</h1>
      <p className="rn-tagline">
        Faith-inspired apparel, built for the wild branch grafted in by grace
        (Romans 11:5). The store is being built — check back soon for the
        first collection.
      </p>
      <nav className="rn-nav">
        <a href="/cart">Cart</a>
        <a href="/checkout">Checkout</a>
      </nav>
    </div>
  );
}
