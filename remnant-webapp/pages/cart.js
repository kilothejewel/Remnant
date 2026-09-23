// Shopping Cart Page
// Wired to the real CartContext (already implemented) so items added via
// addToCart() show up here. Product pages that call addToCart still need
// to be built.

import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, cartCount } = useCart();

  return (
    <div className="rn-page">
      <span className="rn-badge">Your Cart</span>
      <h1 className="rn-wordmark">Cart</h1>

      {cartCount === 0 ? (
        <p className="rn-tagline">
          Your cart is empty. The product catalog isn&apos;t live yet, so
          there&apos;s nothing to add — but the cart itself is already
          working under the hood.
        </p>
      ) : (
        <div className="rn-cart-list">
          {cartItems.map((item) => (
            <div className="rn-cart-item" key={item.id}>
              <span>
                {item.name || item.id} × {item.quantity}
              </span>
              <button type="button" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <nav className="rn-nav">
        <a href="/">Home</a>
        <a href="/checkout">Checkout</a>
      </nav>
    </div>
  );
}
