import styled from 'styled-components';
import { colorTheme } from '../colorVariables';

export const Button = styled.button`
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 5px;
  font-size:calc(12px + 6.5vw);
  font-weight: bold;
  border: 2px dashed white;
  border-radius: 10px;
  background-color: orange;
  justify-self: center;
  text-transform: uppercase;
  color: white;

  &:disabled,
   &--disabled {
     color: ${colorTheme.inactiveFont};
     background-color: ${colorTheme.disabledBackground};
     pointer-events: none;
  }
`

export const ActionButton = styled(Button)`
  height: 70px;
`

