import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import media from 'styled-media-query';

import { vars } from '../styles';

import Layout from '../components/templates/layout';
import ContentBlock from '../components/molecules/content-block';
import Lists from '../components/atoms/lists';
import SEO from '../components/atoms/seo';

const H2 = styled.h2`
  font-family: ${vars.fontFamily.avantGarde};
  text-transform: uppercase;
  font-size: 32px;
  margin-top: 0;
  line-height: 1;

  ${media.greaterThan('small')`
    font-size: 56px;
  `}
`;

const H3 = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  line-height: 1;
  font-family: ${vars.fontFamily.roboto};
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
`;

const DescriptionJa = styled(Description)`
  margin-bottom: 48px;
  font-size: 14px;
`;

const StyledLists = styled(Lists)`
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 48px;
`;

const Li = styled.li`
  width: 33.333333%;
`;

const More = styled.p`
  width: 100%;
  font-size: 16px;
  font-family: ${vars.fontFamily.roboto};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  padding-top: 24px;
`;

const IndexPage = () => {
  const [state, setState] = React.useState({ open: false });

  return (
    <Layout>
      <SEO title="Home" />
      <ContentBlock id="about" title="About">
        <H2>
          Design to <br />
          accelerate growth
        </H2>
        <Description>
          We think strategically about design and help companies and brands grow. From research and concept development
          to visual, UI, software and website development in general, we are working on analysis and proposals even
          after the start of operation.
        </Description>
        <DescriptionJa>
          デザインを戦略的に考え、企業やブランドをグロースさせるためのお手伝いをしています。リサーチ、コンセプト策定からビジュアルやUI、ソフトウェア・Webサイトの開発やディレクションを行い、運用開始後も分析・提案に取り組みます。
        </DescriptionJa>
        <H3>Scope of work:</H3>
        <StyledLists isNotPipeline>
          <Li>Human interface design</Li>
          <Li>User exprerience design</Li>
          <Li>Web development</Li>
          <Li>Brand Identity</Li>
          <Li>Project direction</Li>
          <Li>Graphic design</Li>
        </StyledLists>
      </ContentBlock>
    </Layout>
  );
};

export default IndexPage;
