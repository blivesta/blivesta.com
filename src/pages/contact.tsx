import * as React from 'react';

import Layout from '../components/templates/Layout';
import Seo from '../components/parts/Seo';
import Contact from '../components/organisms/Contact';

const ContactPage = () => {
  return (
    <Layout>
      <Seo pageTitle="Contact" pageLocation="/contact/" />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
