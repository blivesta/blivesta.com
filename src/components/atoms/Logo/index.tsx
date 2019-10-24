import * as React from 'react';

interface LogoProps {}

const Logo = (props: LogoProps) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <path fill="#FFF" d="M0 0h512v512H0z" />
      <path
        d="M280.448 0L152.545 127.712 280.48 255.424 152 383.712 280.448 512H512V0H280.448zm119.568 440L336 376l64.016-64L464 376l-63.984 64zm0-240L336 136l64.016-64L464 136l-63.984 64z"
        fill="#000"
      />
    </g>
  </svg>
);

export default Logo;