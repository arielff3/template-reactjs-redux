import styled from 'styled-components';

export const Container = styled.section`
  background: url(${props => props.bg}) no-repeat;
  height: 30vh;
  width: 100%;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    z-index: 0;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: rgba(0, 92, 169, 0.6);
  }
`;

export const Img = styled.img.attrs(props => ({
  src: props.img,
}))`
  z-index: 3;
  position: relative;
  width: 500px;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 400px;
  }
  @media screen and (max-width: 425px) {
    width: 320px;
  }
`;
