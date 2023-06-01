import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = () => {
  return <Helmet title="home" htmlAttributes={{ lang: "pl" }} />;
};

export default SEO;
