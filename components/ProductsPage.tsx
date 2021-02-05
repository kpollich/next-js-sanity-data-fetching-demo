import ProductCardList from "./ProductCardList";

function ProductsPage() {
  return (
    <div className="container mx-auto px-6">
      <h3 className="text-gray-700 text-2xl font-medium">Juices</h3>
      <span className="mt-3 text-sm text-gray-500">The Juicy bits.</span>
      <ProductCardList />
    </div>
  );
}

export default ProductsPage;
