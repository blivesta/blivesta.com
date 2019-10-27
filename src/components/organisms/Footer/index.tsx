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

const StyledList = styled(Lists)`
  & li {
    font-size: ${props => props.theme.fontSizes[0]};
    padding-right: ${props => props.theme.spaces[1]};

    &:last-child {
      padding-right: 0;
    }

    ${props => props.theme.media.sm`
      font-size: ${props => props.theme.fontSizes[1]};
      padding-right: ${props => props.theme.spaces[2]};
    `}
  }
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
          <StyledList>
            <li>
              <a href="https://github.com/blivesta" target="_blank" rel="noopener">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/blivesta" target="_blank" rel="noopener">
                dribbble
              </a>
            </li>
            <li>
              <a href="https://twitter.com/blivesta" target="_blank" rel="noopener">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com/blivesta" target="_blank" rel="noopener">
                Instagram
              </a>
            </li>
          </StyledList>
        </Flex>
        <CopyRight>
          &copy; {new Date().getFullYear()} {siteTitle}
        </CopyRight>
      </Container>
    </Wrapper>
  );
};

export default Footer;
