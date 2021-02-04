import React from "react";

import RenderSections from "../components/RenderSections";
import GetAboutPage from "../graphql/about/GetAboutPage.graphql";
import { initializeApollo } from "../lib/apollo";

function AboutPage({ pageData }) {
  console.log(pageData);
  return <RenderSections sections={pageData.content} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GetAboutPage,
  });

  return {
    props: {
      pageData: data.allRoute[0].page,
    },
  };
}

export default AboutPage;
