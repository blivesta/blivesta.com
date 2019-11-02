import * as React from 'react';

import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import Thanks from '../components/organisms/Thanks';

const ThanksPage = () => {
  return (
    <Layout>
      <Seo pageTitle="Thank you for contact" pageLocation="/thanks/" />
      <Thanks />
    </Layout>
  );
};

export default ThanksPage;
