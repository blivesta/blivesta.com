import * as React from 'react';

import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import ContentBlock from '../components/molecules/ContentBlock';
import ContentTitle from '../components/atoms/ContentTitle';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" />
    <ContentBlock id="notFound" title="NOT FOUND">
      <ContentTitle>You just hit a route that doesn&#39;t exist... the sadness.</ContentTitle>
    </ContentBlock>
  </Layout>
);

export default NotFoundPage;
