import styled from 'styled-components';
import { inputStyle } from '../Input';

const Textarea = styled.textarea`
  ${inputStyle};

  height: 200px;
  padding-top: ${props => props.theme.spaces[2]};
  padding-bottom: ${props => props.theme.spaces[2]};
  margin-bottom: ${props => props.theme.spaces[4]};
  resize: none;
`;

export default Textarea;
