import styled from 'styled-components';
import { colorTheme } from '../common/colorVariables';

export const SummaryWrapper = styled.div`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  grid-template-rows: 80% 10% 10%;
`

export const ScoreWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  padding: 10px;
  border-top: 2px dashed gray;
  font-size: 2em;
  font-weight: bold;
  place-items: center;
`

export const ScoreDiv = styled.div`
  color: ${colorTheme.activeFont};
  font-size: 30px;
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
  border-bottom: 2px dashed gray;
  grid-template-columns: 10% 90%;
  text-align: center;

  :last-child {
    border-bottom: none;
  }
`

export const QuestionsWrapper = styled.div`
  display: grid;
  overflow: auto;
  grid-row-gap: 2%;
  grid-template-rows: auto;
`

export const Answer = styled.div`
  display: grid;
  justify-content: center;
  font-size: 10px;
  place-items: center;
`

export const Question = styled.div`
  display: grid;
  color: ${colorTheme.activeFont};
  font-size: 1em;
  grid-row-gap: 10%;
  grid-template-rows: auto;
`

export const AnswerText = styled.div`
  box-sizing: border-box;
  margin-bottom: 10px;
  color: ${colorTheme.activeFont};
  font-weight: bold;
`