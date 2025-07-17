import { createContext, useState, useEffect } from 'react';

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({ category: 'all', price: 1000 });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');

  
  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setCart(parsed);
        }
      } catch (e) {
        console.error("Error parsing cart from localStorage", e);
      }
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to fetch products", err));
  }, []);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  return (
    <StoreContext.Provider value={{
      products,
      cart,
      addToCart,
      removeFromCart,
      filters,
      setFilters,
      searchQuery,
      setSearchQuery,
      searchInput,
      setSearchInput,
      handleSearch,
    }}>
      {children}
    </StoreContext.Provider>
  );
}
