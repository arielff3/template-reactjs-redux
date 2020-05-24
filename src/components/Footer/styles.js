import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  padding: 80px 0 100px 0px;
  align-items: center;
  justify-content: space-around;
  background: #005ca9;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  &::after {
    content: '';
    z-index: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    background-color: #000;
    height: 30px;
  }

  h2 {
    font-weight: bold;
    font-size: 48px;
    color: #fff;
    @media screen and (max-width: 768px) {
      font-size: 38px;
    }
  }

  p {
    font-weight: bold;
    font-size: 22px;
    color: #fff;
    width: 30%;
    @media screen and (max-width: 768px) {
      width: 80%;
      margin-top: 20px;
    }
  }
`;
