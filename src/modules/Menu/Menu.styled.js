import styled from 'styled-components'
import * as variable from '../Common/colorVariables';
export const MenuWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  background: linear-gradient(45deg, rgba(73,155,234,1) 7%, rgba(62,142,221,1) 39%, rgba(61,140,219,1) 43%, rgba(65,150,240,1) 71%, rgba(3,107,219,1) 100%);
`;

export const SettingWrapper = styled.div`
  width: 100%;
  display: grid;
  align-content: center;
  justify-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 80%;
  display: grid;
  place-items: center;
`;

export const PlayerNameInput = styled.input`
  width: 100%;
  height: fit-content;
  font-size: 3em;
  padding: 10%;
  background: transparent;
  border: 3px dashed orange;
  border-radius: 10px;
  box-sizing: border-box;
  color: ${props => props.theme.activeFont };

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 0.9em;
    color: ${props => props.theme.inactiveFont };
  }
  :-ms-input-placeholder {
    font-size: 0.9em;
    color: ${props => props.theme.inactiveFont };
  }
`;

export const PreviousHighScoreDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
  padding: 1.5%;
  border: 3px dashed white;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 10%;
  background-color: orange;
  color: white;
  box-sizing: border-box;
`