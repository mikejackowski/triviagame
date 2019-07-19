import styled from 'styled-components';
import { colorTheme } from '../colorVariables';

export const Button = styled.button`
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 5px;
  font-size: 2em;
  font-weight: bold;
  border: 2px dashed white;
  border-radius: 10px;
  background-color: orange;
  justify-self: center;
  text-transform: uppercase;
  color: ${colorTheme.activeFont};

  &:disabled,
   &--disabled {
     color: ${colorTheme.inactiveFont};
     background-color: gray;
     pointer-events: none;
  }
`

