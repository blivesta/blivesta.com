import * as React from 'react';

import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import ContentBlock from '../components/molecules/ContentBlock';
import Title from '../components/atoms/Title';

const NotFoundPage = () => (
  <Layout>
    <Seo pageTitle="404 Not found" />
    <ContentBlock id="notFound" title="NOT FOUND">
      <Title>You just hit a route that doesn&#39;t exist... the sadness.</Title>
    </ContentBlock>
  </Layout>
);

export default NotFoundPage;
