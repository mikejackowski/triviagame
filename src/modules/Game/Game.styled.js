import styled from 'styled-components';
import { colorTheme } from '../common/colorVariables';

export const GameWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 10% 45% 45%;
  padding: 5%;
  align-items: center;
  box-sizing: border-box;
`

export const LoadingWrapper = styled(GameWrapper)`
  grid-template-rows: 1fr;
`
export const CategoryWrapper = styled.div`
  text-align: center;
  font-size: 1.5em;
  text-transform: uppercase;
  font-style: italic;
  color: ${colorTheme.activeFont};
`

export const AnswerButtonWrapper = styled.div`
  display: grid;
  grid-row-gap: 10px;
  width: 100%;
  height: 100%;
  place-items: center;
  box-sizing: border-box;
`