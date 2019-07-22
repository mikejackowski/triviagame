import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  width: 375px;
  height: 812px;
  box-sizing: border-box;
  border: 2px dashed gray;
  border-radius: 5px;
  grid-template-rows: 10% 90%;
`

export const LayoutWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  justify-content: center;
`

export const ErrorWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  justify-content: center;
  grid-template-rows: 90% 10%;
`

export const ErrorMsg = styled.div`
  display: grid;
  color: red;
  font-size: 2.5em;
  place-items: center;
  text-align: center;
`