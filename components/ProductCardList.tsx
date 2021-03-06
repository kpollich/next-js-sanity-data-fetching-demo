import { Product } from "../@types/products";
import { useSanityData } from "./context/SanityDataContext";
import ProductCard from "./ProductCard";

function ProductCardList() {
  const products = useSanityData<Product[]>();

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
      {products.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
}

export default ProductCardList;
