import { CartProvider } from '../context/CartContext';

// This is the custom App component in Next.js.
// It initializes pages. We use it to wrap our entire application 
// with the CartProvider so the cart state is accessible everywhere.

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
