import * as React from 'react';
import styled from 'styled-components';

import useSiteMetadata from '../hooks/useSiteMetadata';
import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import ContentBlock from '../components/molecules/ContentBlock';
import ContentTitle from '../components/atoms/ContentTitle';
import Lists from '../components/atoms/Lists';

const H3 = styled.h3`
  font-family: ${props => props.theme.fonts.avantGarde};
  font-size: ${props => props.theme.fontSizes[3]};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: ${props => props.theme.spaces[3]};
  font-family: ${props => props.theme.fonts.en};
`;

const DescriptionJa = styled(Description)`
  font-size: ${props => props.theme.fontSizes[1]};
  line-height: 1.7;
  text-align: justify;
  margin-bottom: ${props => props.theme.spaces[6]};
`;

const IndexPage = () => {
  const { description } = useSiteMetadata();

  return (
    <Layout>
      <Seo pageTitle={description} pageLocation="/" />
      <ContentBlock id="about" title="About">
        <ContentTitle>
          Design to
          <br />
          accelerate growth
        </ContentTitle>
        <Description>
          We think strategically about design and help companies and brands growth. We conduct research concept
          formulation, visual UI, web application and site development as a whole, and we are also working on analysis,
          proposal and improvement in operation.
        </Description>
        <DescriptionJa>
          デザインを戦略的に考え、企業やブランドをグロースさせるためのお手伝いをしています。リサーチ・コンセプト策定、ビジュアル・UI、Webアプリ・サイト開発を一環して行い、運用でも分析・提案・改善に取り組んでいます。
        </DescriptionJa>
        <H3>Scope of work:</H3>
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
