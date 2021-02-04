import ProductPage from "../../components/ProductPage";
import { initializeApollo } from "../../lib/apollo";
import GetProduct from "../../graphql/products/GetProduct.graphql";

function ProductPageContainer({ product }) {
  const {
    _id,
    title,
    defaultProductVariant,
    mainImage,
    blurb,
    body,
    tags,
    vendor,
    categories,
    slug,
  } = product;

  return (
    <ProductPage
      id={_id}
      title={title}
      defaultProductVariant={defaultProductVariant}
      mainImage={mainImage}
      blurb={blurb}
      body={body}
      tags={tags}
      vendor={vendor}
      categories={categories}
      slug={slug?.current}
    />
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GetProduct,
    variables: {
      slug,
    },
  });

  return {
    props: {
      product: data.allProduct[0],
    },
  };
}

export default ProductPageContainer;
