import * as React from 'react';
import styled, { css } from 'styled-components';

import Layout from '../components/templates/layout';

import ContentBlock from '../components/molecules/content-block';

import Button from '../components/atoms/button';

import SEO from '../components/atoms/seo';

const inputStyle = css`
  width: 100%;
  font-size: 16px;
  color: #fff;
  background: #000;
  outline: none;
  box-shadow: none;
  padding-bottom: 4px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #777;

  &:focus {
    border-bottom: 1px solid #fff;
  }
`;

const Item = styled.p``;

const Label = styled.label`
  display: flex;
`;

const Title = styled.div`
  width: 100px;
`;

const Form = styled.div`
  flex: 1;
  max-width: 320px;
`;

const Input = styled.input`
  ${inputStyle}
`;

const Textarea = styled.textarea`
  ${inputStyle}
  height: 100px;
  resize: none;
  margin-bottom: 24px;
`;

const ButtonBox = styled.div`
  padding-left: 100px;
`;

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContentBlock id="contact" title="Contact">
        <form name="contact" method="POST" action="thanks" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <Item>
            <Label>
              <Title>Name *</Title>
              <Form>
                <Input type="text" id="name" name="name" required />
              </Form>
            </Label>
          </Item>
          <Item>
            <Label>
              <Title>Email *</Title>
              <Form>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                  required
                />
              </Form>
            </Label>
          </Item>
          <Item>
            <Label>
              <Title>Message *</Title>
              <Form>
                <Textarea id="meaasage" name="meaasage" required></Textarea>
              </Form>
            </Label>
          </Item>
          <Item>
            <ButtonBox>
              <Button type="submit">Send</Button>
            </ButtonBox>
          </Item>
        </form>
      </ContentBlock>
    </Layout>
  );
};

export default ContactPage;
