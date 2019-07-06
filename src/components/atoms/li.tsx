import styled from 'styled-components';

const Li = styled.li`
  margin-right: 12px;
  letter-spacing: 0.15em;
  font-size: 14px;
  text-transform: uppercase;

  &:not(:last-child)::after {
    display: inline-flex;
    content: '|';
    margin-left: 12px;
  }

  a {
    text-decoration: none;
  }
`;

export default Li;
