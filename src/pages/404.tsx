import * as React from 'react';

import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import NotFound from '../components/organisms/NotFound';

const NotFoundPage = () => (
  <Layout>
    <Seo pageTitle="404 Not found" />
    <NotFound />
  </Layout>
);

export default NotFoundPage;
