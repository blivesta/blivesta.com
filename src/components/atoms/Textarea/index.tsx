import styled from 'styled-components';
import { inputStyle } from '../Input';

const Textarea = styled.textarea`
  ${inputStyle};

  height: 200px;
  padding-top: ${({ theme }) => theme.spaces[2]};
  padding-bottom: ${({ theme }) => theme.spaces[2]};
  margin-bottom: ${({ theme }) => theme.spaces[4]};
  resize: none;
`;

export default Textarea;
