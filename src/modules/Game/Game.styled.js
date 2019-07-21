import styled from 'styled-components';

export const GameWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 50% 50%;
  padding: 5%;
  align-items: center;
  box-sizing: border-box;
`

export const LoadingWrapper = styled(GameWrapper)`
  grid-template-rows: 1fr;
`

export const AnswerButtonWrapper = styled.div`
  display: grid;
  grid-row-gap: 10px;
  width: 100%;
  height: 100%;
  place-items: center;
  box-sizing: border-box;
`