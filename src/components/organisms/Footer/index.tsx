import * as React from 'react';
import styled from 'styled-components';
import Octicon, { Mail, Home } from '@primer/octicons-react';
import { Link } from 'gatsby';

import Container from '../../atoms/Container';
import Lists from '../../atoms/Lists';

const Wrapper = styled.footer`
  padding-bottom: 20vw;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    border-bottom: 25vw solid ${props => props.theme.colors.baseText[0]};
    border-right: 25vw solid transparent;
    border-left: 25vw solid transparent;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
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
`;

interface FooterProps {
  siteTitle: string;
  pageLocation: string;
}

const Footer = ({ siteTitle, pageLocation }: FooterProps) => {
  return (
    <Wrapper>
      <Container>
        <ContactBlock>
          {pageLocation === '/' ? (
            <Link to="/contact/">
              <Icon icon={Mail} />
            </Link>
          ) : (
            <Link to="/">
              <Icon icon={Home} />
            </Link>
          )}
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
