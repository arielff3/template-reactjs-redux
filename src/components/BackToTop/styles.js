import styled from 'styled-components';

export const Button = styled.div`
  background-color: #005ca9;
  border-radius: 65px;
  bottom: 14px;
  box-shadow: 2px 3px 19px -2px rgba(0, 0, 0, 0.75);
  color: #fff;
  cursor: pointer;
  height: 40px;
  position: fixed;
  right: 22px;
  width: 40px;
  z-index: 3;
  &::after {
    content: '▲';
    display: flex;
    justify-content: center;
    padding-left: 1px;
    padding-top: 10px;
  }
`;
