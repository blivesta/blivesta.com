import * as React from 'react';

import Title from '../../atoms/Title';
import ContentBlock from '../../molecules/ContentBlock';

const NotFound = () => {
  return (
    <ContentBlock id="notFound" title="NOT FOUND">
      <Title>
        You just hit a route that doesn&#39;t exist...
        <br />
        the sadness.
      </Title>
    </ContentBlock>
  );
};

export default NotFound;
