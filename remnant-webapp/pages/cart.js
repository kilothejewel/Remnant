// Shopping Cart Page
// Wired to the real CartContext (already implemented) so items added via
// addToCart() on the product page show up here, with a running total.

import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, cartCount } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="rn-page">
      <span className="rn-badge">Your Cart</span>
      <h1 className="rn-wordmark">Cart</h1>

      {cartCount === 0 ? (
        <p className="rn-tagline">
          Your cart is empty. <a href="/">Browse the shop</a>.
        </p>
      ) : (
        <>
          <div className="rn-cart-list">
            {cartItems.map((item) => (
              <div className="rn-cart-item" key={item.id}>
                <span>
                  {item.name} × {item.quantity} — R{(item.price * item.quantity).toFixed(2)}
                </span>
                <button type="button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <p className="rn-card-price" style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>
            Total: R{total.toFixed(2)}
          </p>
        </>
      )}

      <nav className="rn-nav">
        <a href="/">Home</a>
        <a href="/checkout">Checkout</a>
      </nav>
    </div>
  );
}
