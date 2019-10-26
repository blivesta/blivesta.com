import * as React from 'react';
import styled from 'styled-components';

import { media, vars } from '../styles';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import ContentBlock from '../components/molecules/ContentBlock';
import ContentTitle from '../components/atoms/ContentTitle';
import Lists from '../components/atoms/Lists';

const H3 = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  line-height: 1;
  font-family: ${vars.fontFamily.avantGarde};
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-family: ${vars.fontFamily.roboto};
`;

const DescriptionJa = styled(Description)`
  margin-bottom: 48px;
  font-size: 14px;
  line-height: 1.7;
  text-align: justify;
`;

const StyledLists = styled(Lists)`
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  margin-bottom: 48px;

  ${media.md`
    flex-direction: row;
  `}
`;

const Li = styled.li`
  width: 100%;

  ${media.sm`
    width: 100%;
  `}
  ${media.md`
    width: 50%;
  `}
  ${media.lg`
    width: 33.333333%;
  `}
`;

const IndexPage = () => {
  const { description } = useSiteMetadata();

  return (
    <Layout>
      <Seo title={description} location="/" />
      <ContentBlock id="about" title="About">
        <ContentTitle>
          Design to <br />
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
        <StyledLists isNotPipeline>
          <Li>User interface design</Li>
          <Li>User exprerience design</Li>
          <Li>Brand Identity design</Li>
          <Li>Web development</Li>
          <Li>Softwear development</Li>
          <Li>Project/Product management</Li>
        </StyledLists>
      </ContentBlock>
    </Layout>
  );
};

export default IndexPage;
