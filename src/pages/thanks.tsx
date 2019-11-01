import * as React from 'react';

import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import ContentBlock from '../components/molecules/ContentBlock';
import Title from '../components/atoms/Title';

const ThanksPage = () => {
  return (
    <Layout>
      <Seo pageTitle="Thanks" pageLocation="/thanks/" />
      <ContentBlock id="thanks" title="Thanks">
        <Title>Thanks</Title>
      </ContentBlock>
    </Layout>
  );
};

export default ThanksPage;
