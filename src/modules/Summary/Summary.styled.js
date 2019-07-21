import styled from 'styled-components';
import { colorTheme } from '../Common/colorVariables';

export const SummaryWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 5px;
  grid-template-rows: auto;
  box-sizing: border-box;
`

export const ScoreWrapper = styled.div`
  display: grid;
  padding: 10px;
  font-size: 2em;
  font-weight: bold;
  place-items: center;
  border-top: 2px dashed gray;
  box-sizing: border-box;
`

export const ScoreDiv = styled.div`
  color: ${colorTheme.activeFont};
  text-align: center;
`
export const ScoreSpan = styled.span`
  color: ${colorTheme.activeFont};
  text-align: center;
`
export const QuestionWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 10% 90%;
  text-align: center;
  border-bottom: 2px dashed gray;

  :last-child {
    border-bottom: none;
  }
`

export const QuestionsWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 2%;
  overflow: auto;
`

export const Answer = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  font-size: 10px;
`

export const Question = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 10%;
  font-size: 1em;
  color: ${colorTheme.activeFont};
`

export const AnswerText = styled.div`
  font-weight: bold;
  color: ${colorTheme.activeFont};
  box-sizing: border-box;
  margin-bottom: 10px;
`