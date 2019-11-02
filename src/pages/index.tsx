import * as React from 'react';
// import styled from 'styled-components';

import useSiteMetadata from '../hooks/useSiteMetadata';
import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import ContentBlock from '../components/molecules/ContentBlock';
import Title from '../components/atoms/Title';
import SubTitle from '../components/atoms/SubTitle';
import Lists from '../components/atoms/Lists';
import P from '../components/atoms/P';

const IndexPage = () => {
  const { description } = useSiteMetadata();

  return (
    <Layout>
      <Seo pageTitle={description} pageLocation="/" />
      <ContentBlock id="about" title="About">
        <Title>
          Design to
          <br />
          accelerate growth
        </Title>
        <P lang="en">
          We think strategically about design and help companies and brands growth. We conduct research concept
          formulation, visual UI, web application and site development as a whole, and we are also working on analysis,
          proposal and improvement in operation.
        </P>
        <P lang="ja" last justify>
          デザインを戦略的に考え、企業やブランドをグロースさせるためのお手伝いをしています。リサーチ・コンセプト策定、ビジュアル・UI、Webアプリ・サイト開発を一環して行い、運用でも分析・提案・改善に取り組んでいます。
        </P>
        <SubTitle>Capabilitties:</SubTitle>
        <Lists
          isNotPipeline
          items={[
            {
              title: 'User interface design',
            },
            {
              title: 'User exprerience design',
            },
            {
              title: 'Brand Identity design',
            },
            {
              title: 'Web development',
            },
            {
              title: 'Softwear development',
            },
            {
              title: 'Project/Product management',
            },
          ]}
        />
      </ContentBlock>
    </Layout>
  );
};

export default IndexPage;
