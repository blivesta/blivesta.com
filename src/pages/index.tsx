import * as React from 'react';
import axios from 'axios';
import { Link } from 'gatsby';

import { responseError } from '../utils/response-error';

import Layout from '../components/templates/layout';
import SEO from '../components/atoms/seo';
import Container from '../components/atoms/container';

const USER = process.env.GATSBY_GITHUB_USER;
const TOKEN = process.env.GATSBY_GITHUB_TOKEN;

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
      <Container>
        <h1>About</h1>
        <h2>Design to accelerate growth</h2>
        <p>
          デザインを戦略的に考え、企業やブランドを成長させるためのお手伝いをしています。リサーチ、コンセプト策定からビジュアルやUI、ソフトウェア・Webサイトの開発全般を行い、運用開始後も分析・提案に取り組んでいます。
        </p>
        <h3>Capabilities</h3>
        <ul>
          <li>Research</li>
          <li>Strategy</li>
          <li>BRAND IDENTITY</li>
          <li>HUMAN INTERFACE DESIGN</li>
          <li>Web development</li>
          <li>GRAPHIC DESIGN</li>
        </ul>
      </Container>
      <Container>
        <h1>Open Source Projects</h1>
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
              {datas.data.user.repositories.nodes.slice(0, 8).map((item: any, i: number) => {
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
