import * as React from 'react';

import ContentBlock from '../../molecules/ContentBlock';
import Title from '../../atoms/Title';
import SubTitle from '../../atoms/SubTitle';
import Lists from '../../atoms/Lists';
import P from '../../atoms/P';

const About = () => {
  return (
    <ContentBlock id="about" title="About">
      <Title>
        Design to
        <br />
        accelerate growth
      </Title>
      <P lang="en">
        We think strategically about design and help companies and brands growth. We conduct research concept
        formulation, visual UI, web application and site development as a whole, and we are also working on analysis,
        proposal and improvement in operation.
      </P>
      <P lang="ja" last justify>
        デザインを戦略的に考え、企業やブランドをグロースさせるためのお手伝いをしています。リサーチ・コンセプト策定、ビジュアル・UI、Webアプリ・サイト開発を一環して行い、運用でも分析・提案・改善に取り組んでいます。
      </P>
      <SubTitle>Capabilitties:</SubTitle>
      <Lists
        isNotPipeline
        items={[
          {
            title: 'User interface design',
          },
          {
            title: 'User experience design',
          },
          {
            title: 'Brand Identity design',
          },
          {
            title: 'Web development',
          },
          {
            title: 'Software development',
          },
          {
            title: 'Project/Product management',
          },
        ]}
      />
    </ContentBlock>
  );
};

export default About;
