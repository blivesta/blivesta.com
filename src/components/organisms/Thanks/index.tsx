import * as React from 'react';

import Title from '../../atoms/Title';
import P from '../../atoms/P';
import ContentBlock from '../../molecules/ContentBlock';

const Thanks = () => {
  return (
    <ContentBlock id="thanks" title="Send complete">
      <Title>Thank you for contact</Title>
      <P lang="en">The message has been sent successfully. We will contact you as soon as possible. Thank you.</P>
      <P lang="ja">送信が完了しました。できるだけ早くご連絡いたします。ありがとうございました。</P>
    </ContentBlock>
  );
};

export default Thanks;
