// Product Details Page
// Placeholder until this is wired to Supabase (fetch product by slug).

import { useRouter } from 'next/router';

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="rn-page">
      <span className="rn-badge">Product</span>
      <h1 className="rn-wordmark">Coming Soon</h1>
      <p className="rn-tagline">
        {slug
          ? `The page for "${slug}" isn't built yet — product data isn't connected to Supabase yet.`
          : 'Product pages are not built yet.'}
      </p>
      <nav className="rn-nav">
        <a href="/">Home</a>
        <a href="/cart">Cart</a>
      </nav>
    </div>
  );
}
