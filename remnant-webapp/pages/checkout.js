// Checkout page
// Placeholder until Stripe Checkout is wired up (needs the `stripe` package
// added to package.json and a real /api/checkout implementation).

export default function Checkout() {
  return (
    <div className="rn-page">
      <span className="rn-badge">Checkout</span>
      <h1 className="rn-wordmark">Checkout</h1>
      <p className="rn-tagline">
        Checkout isn&apos;t live yet — Stripe integration is still to be
        built. Come back once the store is open.
      </p>
      <nav className="rn-nav">
        <a href="/">Home</a>
        <a href="/cart">Cart</a>
      </nav>
    </div>
  );
}
