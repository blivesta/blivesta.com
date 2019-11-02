import * as React from 'react';

import Title from '../../atoms/Title';
import P from '../../atoms/P';
import ContentBlock from '../../molecules/ContentBlock';
import NetlifyForm from '../NetlifyForm';

const Contact = () => {
  return (
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
  );
};

export default Contact;
