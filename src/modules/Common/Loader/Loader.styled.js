import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 64px;
  height: 40px;
  margin: 0 auto;
`

export const LoaderBubble = styled.div`
  position: absolute;
  top: 20px;
  width: 11px;
  height: 11px;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  background: #424242;
  border-radius: 50%;

  :nth-child(1) {
    left: 6px;
    animation: loaderEllipsisAppear 0.6s infinite;
  }

  :nth-child(2) {
    left: 6px;
    animation: loaderEllipsisMove 0.6s infinite;
  }
:nth-child(3) {
    left: 26px;
    animation: loaderEllipsisMove 0.6s infinite;
  }
:nth-child(4) {
    left: 45px;
    animation: loaderEllipsisDisappear 0.6s infinite;
  }
  @keyframes loaderEllipsisAppear {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

  @keyframes loaderEllipsisDisappear {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(0);
    }
  }

  @keyframes loaderEllipsisMove {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(19px, 0);
    }
}
`





