import * as React from 'react';

import Layout from '../components/templates/layout';

import ContentBlock from '../components/molecules/content-block';

import SEO from '../components/atoms/seo';

const ThanksPage = () => {
  return (
    <Layout>
      <SEO title="Tanks" />
      <ContentBlock id="tanks" title="Thanks">
        Thanks
      </ContentBlock>
    </Layout>
  );
};

export default ThanksPage;
