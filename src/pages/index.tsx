import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/templates/layout';
import SEO from '../components/atoms/seo';
import Container from '../components/atoms/container';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        user(login: "blivesta") {
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
      }
    }
  `);

  const githubData = data.github.user.repositories.nodes;
  const totalStar = githubData
    .map((item: any) => {
      return item.stargazers.totalCount;
    })
    .reduce((total: number, data: number) => {
      return total + data;
    });

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
        <h2>The total of my GutHub stargazers is over {totalStar}</h2>
        <div>
          {githubData.slice(0, 8).map((item: any, i: number) => {
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
        <p>
          <a href="" target="_blank" rel="noopener">
            More Project
          </a>
        </p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
