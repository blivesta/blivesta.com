import * as React from 'react';

import Layout from '../components/templates/layout';

import ContentBlock from '../components/molecules/content-block';

import SEO from '../components/atoms/seo';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContentBlock id="contact" title="Contact">
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <p>
            <label>
              Your Name:{' '}
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="お名前"
                required
                // autocomplete="name"
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:{' '}
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder=""
                pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                required
                // autocomplete="email"
              />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea id="meaasage" name="meaasage" required></textarea>
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
