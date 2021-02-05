import { SanityDataProvider } from "../components/context/SanityDataContext";
import ProductsPage from "../components/ProductsPage";
import GetProducts from "../graphql/products/GetProducts.graphql";
import { initializeApollo } from "../lib/apollo";

function HomePage({ products }) {
  return (
    <SanityDataProvider data={products}>
      <ProductsPage />
    </SanityDataProvider>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GetProducts,
  });

  return {
    props: {
      products: data.allProduct,
    },
  };
}

export default HomePage;
