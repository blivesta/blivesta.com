import * as React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { media, vars } from '../styles';
import Layout from '../components/templates/layout';
import SEO from '../components/parts/seo';
import ContentBlock from '../components/molecules/content-block';
import ContentTitle from '../components/atoms/content-title';
import Lists from '../components/atoms/lists';

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
`;

const StyledLists = styled(Lists)`
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  margin-bottom: 48px;

  ${media.md`
    flex-direction: row;
  `}

  & li {
    ${media.sm`
      width: 100%;
    `}
    ${media.md`
      width: 50%;
    `}
    ${media.lg`
      width: 33.333333%;
    `}
  }
`;

const Li = styled.li`
  width: 100%;

  ${media.sm`
    width: 33.333333%;
  `}
`;

interface IndexPageProps {
  description: string;
  title: string;
  lang: string;
  meta: any[];
}

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `,
  );

  return (
    <Layout>
      <SEO title={site.siteMetadata.description} location="/" />
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
