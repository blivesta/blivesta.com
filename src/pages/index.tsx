import * as React from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import styled from 'styled-components';

import { responseError } from '../utils/response-error';

import { vars } from '../styles';

import Layout from '../components/templates/layout';

import ContentBlock from '../components/molecules/content-block';
import Repository from '../components/molecules/repository';

import TotalStar from '../components/atoms/total-star';
import SEO from '../components/atoms/seo';
import Li from '../components/atoms/li';
import Ul from '../components/atoms/ul';

const USER = process.env.GATSBY_GITHUB_USER;
const TOKEN = process.env.GATSBY_GITHUB_TOKEN;

const H2 = styled.h2`
  font-family: ${vars.fontFamily.avantGarde};
  text-transform: uppercase;
  font-size: 56px;
  margin-top: 0;
  line-height: 1;
`;

const H3 = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  line-height: 1;
  margin-bottom: 0;
  font-family: ${vars.fontFamily.roboto};
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 32px;
`;

const StyledUl = styled(Ul)`
  flex-wrap: wrap;
  position: relative;
`;

const StyledLi = styled(Li)`
  width: 31%;
  margin-bottom: 4px;
  letter-spacing: 0;

  &:not(:last-child)::after {
    content: '';
    margin-left: 0;
  }
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

    fetchData();
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <ContentBlock id="about" title="About">
        <H2>Design to accelerate growth</H2>
        <Description>
          デザインを戦略的に考え、企業やブランドを成長させるためのお手伝いをしています。リサーチ、コンセプト策定からビジュアルやUI、ソフトウェア・Webサイトの開発全般を行い、運用開始後も分析・提案に取り組んでいます。
        </Description>
        <H3>Capabilities</H3>
        <StyledUl>
          <StyledLi>Research</StyledLi>
          <StyledLi>Strategy</StyledLi>
          <StyledLi>BRAND IDENTITY</StyledLi>
          <StyledLi>HUMAN INTERFACE DESIGN</StyledLi>
          <StyledLi>Web development</StyledLi>
          <StyledLi>GRAPHIC DESIGN</StyledLi>
        </StyledUl>
      </ContentBlock>
      <ContentBlock id="oss" title="Open Source Projects">
        <H2>
          The total of my GutHub stargazers is over{' '}
          <TotalStar data={datas.data.user.repositories.nodes} isLoading={isLoading} />
        </H2>
        <Repository data={datas.data.user.repositories.nodes.slice(0, 4)} isLoading={isLoading} />
        <p>
          <a href="" target="_blank" rel="noopener">
            More Project
          </a>
        </p>
      </ContentBlock>
    </Layout>
  );
};

export default IndexPage;
