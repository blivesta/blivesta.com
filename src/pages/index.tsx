import * as React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Octicon, { Mail, MarkGithub } from '@primer/octicons-react';
import media from 'styled-media-query';

import { responseError } from '../utils/response-error';

import { vars } from '../styles';

import Layout from '../components/templates/layout';
import ContentBlock from '../components/molecules/content-block';
import Repository from '../components/molecules/repository';
import Lists from '../components/atoms/lists';
import TotalStar from '../components/atoms/total-star';
import SEO from '../components/atoms/seo';

const USER = process.env.GATSBY_GITHUB_USER;
const TOKEN = process.env.GATSBY_GITHUB_TOKEN;

const Icon = styled(Octicon)`
  width: 18px;
  margin-right: 8px;
`;

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
  const [isLoading, setIsLoading] = React.useState(false);
  const [datas, setDatas] = React.useState({
    data: {
      user: {
        repositories: {
          nodes: [],
        },
      },
    },
  });

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios({
          url: 'https://api.github.com/graphql',
          headers: {
            Authorization: `bearer ${TOKEN}`,
            Accept: 'application/vnd.github.v4.idl',
          },
          method: 'POST',
          data: {
            query: `query { 
            user(login: ${USER}) {
              repositories(first: 50, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction: DESC }) {
                nodes {
                  name
                  description
                  forkCount
                  url
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }`,
          },
        });
        setDatas(result.data);
        setIsLoading(false);
      } catch (error) {
        responseError(error);
      }
    };

    if (datas.data.user.repositories.nodes.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <ContentBlock id="about" title="About">
        <H2>
          Design to <br />
          accelerate growth
        </H2>
        <Description>
          We help companies and brands to grow around design. From research and concept development to visual, UI,
          software and website development in general, we have been working on analysis and proposal even after the
          start of operation.
        </Description>
        <DescriptionJa>
          デザインを戦略的に考え、企業やブランドを成長させるためのお手伝いをしています。リサーチ、コンセプト策定からビジュアルやUI、ソフトウェア・Webサイトの開発全般を行い、運用開始後も分析・提案に取り組んでいます。
        </DescriptionJa>
        <H3>Capabilities</H3>
        <StyledLists isNotPipeline>
          <Li>Human interface design</Li>
          <Li>User exprerience design</Li>
          <Li>Web development</Li>
          <Li>Brand Identity</Li>
          <Li>Project direction</Li>
          <Li>Graphic design</Li>
        </StyledLists>
        <More>
          <Link to="/contact">
            <Icon icon={Mail} />
            CONTACT
          </Link>
        </More>
      </ContentBlock>
      <ContentBlock id="oss" title="Open Source Projects">
        <H2>
          The total of my GitHub stargazers is over{' '}
          <TotalStar data={datas.data.user.repositories.nodes} isLoading={isLoading} />
        </H2>
        <Description>
          The UI component I developed with JavaScript and CSS is released to GitHub with MIT license. Also, client work
          and product front ends are good at development using React. This site uses GatbyJS / TypeScript / styled
          component.
        </Description>
        <DescriptionJa>
          私がJavaScriptやCSSで開発したUIコンポーネントをMITライセンスでGitHubに公開しています。また、クライアントワークやプロダクトのフロントエンドはReactを用いての開発を得意としています。当サイトは、GatbyJS
          / TypeScript / styled componentを使っています。
        </DescriptionJa>
        <Repository data={datas.data.user.repositories.nodes.slice(0, 4)} isLoading={isLoading} />
        <More>
          <a href="https://github.com/blivesta" target="_blank" rel="noopener">
            <Icon icon={MarkGithub} />
            More
          </a>
        </More>
      </ContentBlock>
    </Layout>
  );
};

export default IndexPage;
