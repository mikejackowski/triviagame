import styled from 'styled-components';
import { colorTheme } from '../common/colorVariables';

export const GameWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  align-items: center;
  padding: 5%;
  grid-template-rows: 10% 45% 45%;
`

export const LoadingWrapper = styled(GameWrapper)`
  grid-template-rows: 1fr;
`
export const CategoryWrapper = styled.div`
  color: ${colorTheme.activeFont};
  font-size: 1.5em;
  font-style: italic;
  text-align: center;
  text-transform: uppercase;
`

export const AnswerButtonWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  grid-row-gap: 10px;
  place-items: center;
`