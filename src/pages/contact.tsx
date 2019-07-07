import * as React from 'react';

import Layout from '../components/templates/layout';

import ContentBlock from '../components/molecules/content-block';

import SEO from '../components/atoms/seo';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContentBlock id="contact" title="Contact">
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </ContentBlock>
    </Layout>
  );
};

export default ContactPage;
