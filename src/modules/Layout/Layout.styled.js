import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  width: 375px;
  height: 812px;
  grid-template-rows: 1fr 9fr;
  border: 2px dashed gray;
  border-radius: 5px;
  box-sizing: border-box;
`

export const LayoutWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  justify-content: center;
`