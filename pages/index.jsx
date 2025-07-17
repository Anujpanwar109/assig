
import { useState } from 'react';
import { StoreProvider } from '../context/StoreContext';
import Header from '../components/Header';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col">
        <Header onCartClick={() => setShowCart(!showCart)} />
        {showCart && <Cart />}
        <div className="flex flex-1">
          <aside className="w-1/4 bg-white p-4">
            <Filters />
          </aside>
          <main className="w-3/4 p-4">
            <ProductList />
          </main>
        </div>
        <Footer />
      </div>
    </StoreProvider>
  );
}

export default App;
