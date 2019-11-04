import * as React from 'react';

import useSiteMetadata from '../hooks/useSiteMetadata';
import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import Masthead from '../components/organisms/Masthead';
import About from '../components/organisms/About';

const IndexPage = () => {
  const { title, description } = useSiteMetadata();

  return (
    <Layout>
      <Seo pageTitle={description} pageLocation="/" />
      <Masthead siteTitle={title} description={description} />
      <About />
    </Layout>
  );
};

export default IndexPage;
