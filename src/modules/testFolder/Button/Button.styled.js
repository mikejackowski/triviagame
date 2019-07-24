import styled from 'styled-components';
import { colorTheme } from '../colorVariables';

export const Button = styled.button`
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 5px;
  border: 2px dashed white;
  background-color: orange;
  border-radius: 10px;
  color: white;
  font-size: 25px;
  font-weight: bold;
  justify-self: center;
  text-transform: uppercase;

  &:disabled,
  &--disabled {
    background-color: ${colorTheme.disabledBackground};
    color: ${colorTheme.inactiveFont};
    pointer-events: none;
  }
`

export const ActionButton = styled(Button)`
  height: 70px;
`

