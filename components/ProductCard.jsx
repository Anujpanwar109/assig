
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import Link from 'next/link';


const ProductCard = ({ product }) => {
  const { addToCart } = useContext(StoreContext);

  const handleAddToCart = (e) => {
    e.stopPropagation(); // prevent link click
    e.preventDefault();  // prevent navigation
    addToCart(product);
  };

  return (
    <Link href={`/product/${product.id}`} passHref>
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-2" />
      <h3 className="font-semibold text-sm mb-1">{product.title}</h3>
      <p className="text-blue-600 font-bold mb-2">${product.price}</p>
      <button
        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
    </Link>
  );
};

export default ProductCard;

