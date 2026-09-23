// Product Details Page — fetches one product from Supabase by slug and
// wires "Add to Cart" into the existing CartContext.

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useCart } from '../../context/CartContext';

export async function getStaticPaths() {
  const { data: products } = await supabase.from('products').select('slug');

  return {
    paths: (products || []).map((p) => ({ params: { slug: p.slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', params.slug)
    .maybeSingle();

  if (error || !product) {
    return { notFound: true, revalidate: 60 };
  }

  return { props: { product }, revalidate: 60 };
}

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price_cents / 100,
    });
    setAdded(true);
  };

  return (
    <div className="rn-page">
      {product.image_url && (
        <img src={product.image_url} alt={product.name} className="rn-product-img" />
      )}
      <span className="rn-badge">{product.collection}</span>
      <h1 className="rn-wordmark" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
        {product.name}
      </h1>
      <p className="rn-tagline">{product.description}</p>
      <p className="rn-card-price" style={{ fontSize: '1.25rem' }}>
        R{(product.price_cents / 100).toFixed(2)}
      </p>
      <button type="button" onClick={handleAdd} className="rn-add-btn">
        {added ? 'Added ✓' : 'Add to Cart'}
      </button>
      <nav className="rn-nav">
        <a href="/">Home</a>
        <a href="/cart">Cart</a>
      </nav>
    </div>
  );
}
