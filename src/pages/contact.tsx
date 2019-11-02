import * as React from 'react';

import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import ContentBlock from '../components/molecules/ContentBlock';
import NetlifyForm from '../components/organisms/NetlifyForm';
import Title from '../components/atoms/Title';
import P from '../components/atoms/P';

const ContactPage = () => {
  return (
    <Layout>
      <Seo pageTitle="Contact" pageLocation="/contact/" />
      <ContentBlock id="contact" title="Contact">
        <Title>Let’s talk.</Title>
        <P lang="en">
          Please share your questions, comments and business inquiries below and we will get back to you as soon as
          possible.
        </P>
        <P lang="ja" last>
          ご質問、ご意見、ビジネスに関するお問い合わせは下記にご記入ください。できるだけ早くご連絡いたします。
        </P>
        <NetlifyForm />
      </ContentBlock>
    </Layout>
  );
};

export default ContactPage;
