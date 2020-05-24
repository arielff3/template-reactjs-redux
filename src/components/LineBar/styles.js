import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .progressbar-container {
    position: relative;
    width: 100%;
    height: 30px;
    border: 2px solid #e5e5e5;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .progressbar-complete {
      position: absolute;
      left: 0;
      top: 0px;
      height: 100%;
      background-color: #005ca9;
      border-radius: 10px;
      animation: g 2500ms infinite ease-in-out;
      z-index: 2;
    }
    .progress {
      z-index: 2;
    }
  }
`;
