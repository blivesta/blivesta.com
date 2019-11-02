import * as React from 'react';

import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import ContentBlock from '../components/molecules/ContentBlock';
import Title from '../components/atoms/Title';
import P from '../components/atoms/P';

const ThanksPage = () => {
  return (
    <Layout>
      <Seo pageTitle="Thank you for contact" pageLocation="/thanks/" />
      <ContentBlock id="thanks" title="Send complete">
        <Title>Thank you for contact</Title>
        <P lang="en">The message has been sent successfully. We will contact you as soon as possible. Thank you.</P>
        <P lang="ja">送信が完了しました。できるだけ早くご連絡いたします。ありがとうございました。</P>
      </ContentBlock>
    </Layout>
  );
};

export default ThanksPage;
