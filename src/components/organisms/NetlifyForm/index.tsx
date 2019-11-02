import * as React from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Textarea from '../../atoms/Textarea';
import FormItem from '../../molecules/FormItem';

const Form = styled.form`
  padding-right: ${props => props.theme.spaces[6]};

  ${props => props.theme.media.sm`
    padding-right: 0;
  `}
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.theme.media.sm`
    flex-direction: row;
    margin-bottom: ${props.theme.spaces[3]};
  `}
`;

const Column = styled.div`
  width: 100%;

  ${props => props.theme.media.sm`
    &:first-child {
      padding-right: ${props.theme.spaces[4]};
    }
    &:last-child {
      padding-left: ${props.theme.spaces[4]};
    }
  `}
`;

const ButtonBox = styled.div`
  text-align: center;
`;

const NetlifyForm = () => {
  return (
    <Form name="contact" method="POST" action="thanks" data-netlify="true" data-netlify-honeypot="bot-field">
      <Input type="hidden" name="form-name" value="contact" />
      <Input type="hidden" name="bot-field" />
      <Row>
        <Column>
          <FormItem title="Name" htmlFor="name" required>
            <Input type="text" id="name" name="name" required aria-required />
          </FormItem>
        </Column>
        <Column>
          <FormItem title="Company" htmlFor="company">
            <Input type="text" id="company" name="company" />
          </FormItem>
        </Column>
      </Row>
      <Row>
        <Column>
          <FormItem title="Email" htmlFor="email" required>
            <Input
              type="email"
              id="email"
              name="email"
              pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
              required
              aria-required
            />
          </FormItem>
        </Column>
        <Column>
          <FormItem title="Phone" htmlFor="phone">
            <Input type="tel" id="phone" name="phone" />
          </FormItem>
        </Column>
      </Row>
      <FormItem title="Message" htmlFor="meaasage" required>
        <Textarea id="meaasage" name="meaasage" required aria-required />
      </FormItem>
      <ButtonBox>
        <Button type="submit">Submit</Button>
      </ButtonBox>
    </Form>
  );
};

export default NetlifyForm;
