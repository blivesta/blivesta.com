import * as React from 'react';
import styled from 'styled-components';
import Octicon, { Mail } from '@primer/octicons-react';

import Container from '../../atoms/Container';
import Lists from '../../atoms/Lists';

const Wrapper = styled.footer`
  background-repeat: repeat-x;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDEyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMjIyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMjAuMjc3LjA2OWwxMjAuMjA4IDEyMC4yMDhILjA3TDEyMC4yNzcuMDd6Ii8+PHBhdGggZD0iTTM2MC4xMy40MjNsMTE5LjUwMiAxMTkuNS0xMTkuODU1LjM1NC0xMTkuODU0LjM1NHoiLz48L2c+PC9zdmc+');
  background-position: left bottom -2px;
  background-size: 100%;
  padding-bottom: 20vw;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const CopyRight = styled.p`
  width: 100%;
  font-family: ${props => props.theme.fonts.en};
  font-size: ${props => props.theme.fontSizes[0]};
  color: ${props => props.theme.colors.baseText[1]};
  text-align: center;
  margin: 0;
  padding-top: ${props => props.theme.spaces[6]};
`;

const ContactBlock = styled(Flex)`
  padding-bottom: ${props => props.theme.spaces[7]};
  justify-content: center;
`;

const Icon = styled(Octicon)`
  width: 32px;
  margin-right: ${props => props.theme.spaces[1]};
`;

interface FooterProps {
  siteTitle: string;
}

const Footer = ({ siteTitle }: FooterProps) => {
  return (
    <Wrapper>
      <Container>
        <ContactBlock>
          <a href="mailto:design@blivesta.com">
            <Icon icon={Mail} />
          </a>
        </ContactBlock>
        <Flex>
          <Lists
            items={[
              {
                title: 'GitHub',
                linkUrl: 'https://github.com/blivesta',
              },
              {
                title: 'dribbble',
                linkUrl: 'https://dribbble.com/blivesta',
              },
              {
                title: 'Twitter',
                linkUrl: 'https://twitter.com/blivesta',
              },
              {
                title: 'Instagram',
                linkUrl: 'https://instagram.com/blivesta',
              },
            ]}
          />
        </Flex>
        <CopyRight>
          &copy;&nbsp;
          {new Date().getFullYear()}
          &nbsp;
          {siteTitle}
        </CopyRight>
      </Container>
    </Wrapper>
  );
};

export default Footer;
