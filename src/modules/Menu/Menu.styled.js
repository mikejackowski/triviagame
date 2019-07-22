import styled from 'styled-components'
import { colorTheme } from '../common/colorVariables';

export const MenuWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

export const SettingWrapper = styled.div`
  display: grid;
  width: 100%;
  align-content: center;
  justify-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: grid;
  width: 80%;
  place-items: center;
`;

export const InputWithControlsWrapper = styled(InputWrapper)`
  height: 50%;
  box-sizing: border-box;
  padding: 5px;
  grid-template-columns: 8fr 2fr;
`;

export const GameSetting = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  color: ${colorTheme.activeFont};
  font-size: 2.5em;
  font-weight: bold;
  place-items: center;
  text-transform: uppercase;
`

export const DifficultyButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const PlayerNameInput = styled.input`
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  padding: 10%;
  border: 3px dashed orange;
  background: transparent;
  border-radius: 10px;
  color: ${props => props.theme.activeFont };
  font-size: 3em;
  text-align: center;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${props => props.theme.inactiveFont };
    font-size: 0.9em;
  }

  :-ms-input-placeholder {
    color: ${props => props.theme.inactiveFont };
    font-size: 0.9em;
  }
`;

export const PreviousHighScoreDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;
  padding: 1.5%;
  border: 3px dashed white;
  background-color: orange;
  border-radius: 10px;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
`
