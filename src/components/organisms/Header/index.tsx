import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { media, vars } from '../../../styles';
import ContentBlock from '../../molecules/content-block';
// import Logo from '../../../assets/inline-svg/logo.svg';

const Wrapper = styled.header``;

const H1 = styled.h1`
  font-family: ${vars.fontFamily.avantGarde};
  font-weight: 700;
  font-size: 60px;
  margin-top: -8px;
  margin-bottom: 8px;
  line-height: 1;

  ${media.sm`
    font-size: 96px;
  `}
`;

const P = styled.p`
  font-family: ${vars.fontFamily.roboto};
  margin-bottom: 0;
  font-size: 14px;
  color: #ccc;

  ${media.sm`
    font-size: 20px;
  `}
`;

interface HeaderProps {
  siteTitle: string;
  description: string;
}

const Header = ({ siteTitle, description }: HeaderProps) => {
  return (
    <Wrapper>
      <ContentBlock
        logo={
          <Link to="/">
            {/* <Logo /> */}
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path fill="#FFF" d="M0 0h512v512H0z" />
                <path
                  d="M280.448 0L152.545 127.712 280.48 255.424 152 383.712 280.448 512H512V0H280.448zm119.568 440L336 376l64.016-64L464 376l-63.984 64zm0-240L336 136l64.016-64L464 136l-63.984 64z"
                  fill="#000"
                />
              </g>
            </svg>
          </Link>
        }
      >
        <H1>{siteTitle}</H1>
        <P>{description}</P>
      </ContentBlock>
    </Wrapper>
  );
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
