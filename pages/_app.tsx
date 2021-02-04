import { ApolloProvider } from "@apollo/client";

import Layout from "../components/Layout";
import { useApollo } from "../lib/apollo";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
