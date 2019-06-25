import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/templates/layout';
import Image from '../components/image';
import SEO from '../components/atoms/seo';
import Container from '../components/atoms/container';

const IndexPage = () => (
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
  </Layout>
);

export default IndexPage;
