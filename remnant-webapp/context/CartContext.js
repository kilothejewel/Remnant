import { createContext, useContext, useState, useEffect } from 'react';

// The "Brain" of our cart system. 
// We create a context to hold the state so it can be accessed from any component (Header, Product Page, etc.)
// without passing props down manually (prop drilling).
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // State to hold the list of items in the cart.
  // Initialized as an empty array.
  const [cartItems, setCartItems] = useState([]);

  // Persistence Key for LocalStorage
  const CART_STORAGE_KEY = 'remnant_cart';

  // EFFECT 1: Load data on initial mount (hydration)
  // We use useEffect because localStorage is only available in the browser (client-side),
  // not on the server during Next.js Pre-rendering (SSR/SSG).
  useEffect(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
      // Parse the JSON string back into a JavaScript array
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse cart data:", error);
        // If data is corrupted, we might want to reset it or just leave it empty
      }
    }
  }, []);

  // EFFECT 2: Save data whenever cartItems changes
  // This ensures that if the user adds an item or refreshes the page, 
  // the latest state is always saved to localStorage.
  useEffect(() => {
    // We only save if cartItems has been initialized or changed. 
    // Usually, we always want to sync state to storage.
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  // addToCart: Handles logic to either add a new item or increment an existing one.
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If found, return a new array with that specific item's quantity incremented.
        // We use .map() to create a NEW array (immutability) instead of mutating the existing one.
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If not found, append the new product with a starting quantity of 1.
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // removeFromCart: Removes an item completely by ID
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // clearCart: Resets the cart (e.g., after successful checkout)
  const clearCart = () => {
    setCartItems([]);
  };

  // Optional: Get total items count for the cart icon badge
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // The value object contains everything we want to expose to the rest of the app
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom Hook to use the Cart Context easily
// This checks if the hook is used within a Provider to give a helpful error message if not.
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
