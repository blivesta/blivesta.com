import * as React from 'react';

import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import ContentBlock from '../components/molecules/ContentBlock';
import NetlifyForm from '../components/organisms/NetlifyForm';
import Title from '../components/atoms/Title';

const ContactPage = () => {
  return (
    <Layout>
      <Seo pageTitle="Contact" pageLocation="/contact" />
      <ContentBlock id="contact" title="Contact">
        <Title>
          We look forward
          <br />
          to your inquiry
        </Title>
        <NetlifyForm />
      </ContentBlock>
    </Layout>
  );
};

export default ContactPage;
