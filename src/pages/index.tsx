import * as React from 'react';

import useSiteMetadata from '../hooks/useSiteMetadata';
import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import About from '../components/organisms/About';

const IndexPage = () => {
  const { description } = useSiteMetadata();

  return (
    <Layout>
      <Seo pageTitle={description} pageLocation="/" />
      <About />
    </Layout>
  );
};

export default IndexPage;
