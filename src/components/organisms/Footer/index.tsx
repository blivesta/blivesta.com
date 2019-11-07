import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import IconMail from '../../../assets/icons/mail.svg';
import IconHome from '../../../assets/icons/home.svg';
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

  & svg {
    fill: ${({ theme }) => theme.colors.baseText[0]};
    width: 32px;
    height: 32px;
    margin-top: -4px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const CopyRight = styled.p`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  color: ${({ theme }) => theme.colors.baseText[1]};
  text-align: center;
  margin: 0;
  padding-top: ${({ theme }) => theme.spaces[6]};
`;

const ContactBlock = styled(Flex)`
  padding-bottom: ${({ theme }) => theme.spaces[7]};
  justify-content: center;
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
            <Link to="/contact/" title="contact">
              <IconMail />
            </Link>
          ) : (
            <Link to="/" title="home">
              <IconHome />
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
