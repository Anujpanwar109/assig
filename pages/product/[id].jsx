import { useRouter } from 'next/router';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

export default function ProductDetailPage() {
  const { products, addToCart } = useContext(StoreContext);
  const router = useRouter();
  const { id } = router.query;

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p className="p-6">Loading product...</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img src={product.image} alt={product.title} className="w-full  md:w-1/2 object-contain" />
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-xl text-blue-600 font-semibold">${product.price}</p>
        <p>{product.description}</p>
        <p className="text-sm text-gray-500">Category: {product.category}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
