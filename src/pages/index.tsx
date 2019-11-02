import * as React from 'react';

import useSiteMetadata from '../hooks/useSiteMetadata';
import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import About from '../components/organisms/About';
import Works from '../components/organisms/Works';

const IndexPage = () => {
  const { description } = useSiteMetadata();

  return (
    <Layout>
      <Seo pageTitle={description} pageLocation="/" />
      <About />
      <Works />
    </Layout>
  );
};

export default IndexPage;
