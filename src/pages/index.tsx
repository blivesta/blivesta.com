import * as React from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import styled from 'styled-components';

import { responseError } from '../utils/response-error';

import { vars } from '../styles';

import Layout from '../components/templates/layout';

import Container from '../components/atoms/container';
import SEO from '../components/atoms/seo';
import Li from '../components/atoms/li';
import Ul from '../components/atoms/ul';

const USER = process.env.GATSBY_GITHUB_USER;
const TOKEN = process.env.GATSBY_GITHUB_TOKEN;

const Flex = styled.div`
  display: flex;
  padding-bottom: 30vh;
`;

const Left = styled.div`
  width: 80px;
  margin-right: 16px;
  display: flex;
  position: relative;

  h1 {
    display: flex;
    position: absolute;
    top: 0;
    right: 16px;
    white-space: nowrap;
    font-size: 16px;
    transform: rotate(-90deg);
    transform-origin: top right;
    text-transform: uppercase;
    font-family: ${vars.fontFamily.roboto};
    margin: 0;
    letter-spacing: 0.15em;
  }
`;

const Contents = styled.div`
  flex: 1;

  h2 {
    /* font-family: vinyl; */
    font-family: ${vars.fontFamily.avantGarde};
    text-transform: uppercase;
    font-size: 56px;
    margin-top: 0;
    line-height: 1;
  }

  h3 {
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    line-height: 1;
    margin-bottom: 0;
    font-family: ${vars.fontFamily.roboto};
  }

  p {
    margin-top: 0;
    margin-bottom: 32px;
  }
`;

const StyledUl = styled(Ul)`
  flex-wrap: wrap;
`;

const StyledLi = styled(Li)`
  width: 31%;
  margin-bottom: 4px;

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
      <Container id="about">
        <Flex>
          <Left>
            <h1>About</h1>
          </Left>
          <Contents>
            <h2>Design to accelerate growth</h2>
            <p>
              デザインを戦略的に考え、企業やブランドを成長させるためのお手伝いをしています。リサーチ、コンセプト策定からビジュアルやUI、ソフトウェア・Webサイトの開発全般を行い、運用開始後も分析・提案に取り組んでいます。
            </p>
            <h3>Capabilities</h3>
            <StyledUl>
              <StyledLi>Research</StyledLi>
              <StyledLi>Strategy</StyledLi>
              <StyledLi>BRAND IDENTITY</StyledLi>
              <StyledLi>HUMAN INTERFACE DESIGN</StyledLi>
              <StyledLi>Web development</StyledLi>
              <StyledLi>GRAPHIC DESIGN</StyledLi>
            </StyledUl>
          </Contents>
        </Flex>
      </Container>
      <Container id="oss">
        <Flex>
          <Left>
            <h1>Open Source Projects</h1>
          </Left>
          <Contents>
            <h2>
              The total of my GutHub stargazers is over{' '}
              <span>
                {!isLoading
                  ? datas.data.user.repositories.nodes
                      .map((item: any) => {
                        return item.stargazers.totalCount;
                      })
                      .reduce((total: number, data: number) => {
                        return total + data;
                      }, null)
                  : '---'}
              </span>
            </h2>
            <div>
              {isLoading ? (
                <div>Loading ...</div>
              ) : (
                <div>
                  {datas.data.user.repositories.nodes.slice(0, 4).map((item: any, i: number) => {
                    return (
                      <div key={i}>
                        <a href={item.url} target="_blank" rel="noopener">
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                          <p>Star: {item.stargazers.totalCount}</p>
                          <p>Fork: {item.forkCount}</p>
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </Contents>
        </Flex>
        <p>
          <a href="" target="_blank" rel="noopener">
            More Project
          </a>
        </p>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
