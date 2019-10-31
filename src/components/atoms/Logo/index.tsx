import * as React from 'react';
import styled from 'styled-components';

const PathLeft = styled.path`
  fill: #fff;
`;

const PathRight = styled.path`
  fill: ${props => props.theme.colors.bg};
`;

const Logo = () => {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <PathLeft d="M0 0h512v512H0z" />
      <PathRight d="M280.448 0L152.545 127.712 280.48 255.424 152 383.712 280.448 512H512V0H280.448zm119.568 440L336 376l64.016-64L464 376l-63.984 64zm0-240L336 136l64.016-64L464 136l-63.984 64z" />
    </svg>
  );
};

export default Logo;
