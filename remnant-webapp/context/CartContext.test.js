import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';

// Mock localStorage to ensure our tests don't rely on the browser's actual storage
// and stay isolated.
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: jest.fn(() => {
      store = {};
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('CartContext', () => {
  // Clear mock storage before each test to prevent state pollution
  beforeEach(() => {
    window.localStorage.clear();
    jest.clearAllMocks();
  });

  // Helper wrapper since useCart must be used within CartProvider
  const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

  test('should initialize with an empty cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    
    expect(result.current.cartItems).toEqual([]);
    expect(result.current.cartCount).toBe(0);
  });

  test('should add a new item to the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    const newItem = { id: 1, name: 'Product A', price: 100 };

    act(() => {
      result.current.addToCart(newItem);
    });

    expect(result.current.cartItems).toHaveLength(1);
    expect(result.current.cartItems[0]).toEqual({ ...newItem, quantity: 1 });
    expect(result.current.cartCount).toBe(1);
  });

  test('should increment quantity if item already exists', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    const item = { id: 1, name: 'Product A', price: 100 };

    // Add first time
    act(() => {
      result.current.addToCart(item);
    });

    // Add second time (same ID)
    act(() => {
      result.current.addToCart(item);
    });

    expect(result.current.cartItems).toHaveLength(1); // Still 1 row
    expect(result.current.cartItems[0].quantity).toBe(2);
    expect(result.current.cartCount).toBe(2);
  });

  test('should remove an item from the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const item = { id: 1, name: 'To Remove', price: 50 };

    act(() => {
      result.current.addToCart(item);
    });
    
    // Verify it's added
    expect(result.current.cartItems).toHaveLength(1);

    act(() => {
      result.current.removeFromCart(item.id);
    });

    expect(result.current.cartItems).toHaveLength(0);
    expect(result.current.cartCount).toBe(0);
  });

  test('should clear the cart completely', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({ id: 1, name: 'A', price: 10 });
      result.current.addToCart({ id: 2, name: 'B', price: 20 });
    });

    expect(result.current.cartItems).toHaveLength(2);

    act(() => {
      result.current.clearCart();
    });

    expect(result.current.cartItems).toEqual([]);
    expect(result.current.cartCount).toBe(0);
  });

  test('should persist cart to localStorage', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const item = { id: 99, name: 'Saved Item', price: 99 };

    act(() => {
      result.current.addToCart(item);
    });

    // Verify localStorage.setItem was called
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      'remnant_cart',
      JSON.stringify([{ ...item, quantity: 1 }])
    );
  });

  test('should initialize from localStorage if data exists', () => {
    // Setup initial localStorage state
    const savedCart = [{ id: 5, name: 'Existing', price: 50, quantity: 3 }];
    window.localStorage.getItem.mockReturnValueOnce(JSON.stringify(savedCart));

    const { result } = renderHook(() => useCart(), { wrapper });

    // Note: useEffect logic might be async behavior depending on React version/env, 
    // but in testing-library renderHook usually handles the first effect pass.
    
    expect(result.current.cartItems).toEqual(savedCart);
    expect(result.current.cartCount).toBe(3);
  });
});
