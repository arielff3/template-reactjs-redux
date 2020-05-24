import styled from 'styled-components';
import Person from '~/assets/Imgs/person_outline_24px.png';

export const Container = styled.header.attrs(props => ({
  bg: props.bg,
}))`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.bg});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 425px) {
    height: 50vh;
  }
  h1 {
    font-size: 64px;
    z-index: 2;
    text-transform: uppercase;
    color: #fff;

    @media screen and (max-width: 768px) {
      font-size: 45px;
    }
    @media screen and (max-width: 425px) {
      font-size: 29px;
    }
  }
  small {
    font-weight: 300;
    font-size: 37px;
    z-index: 2;
    color: #fff;
    @media screen and (max-width: 425px) {
      font-size: 27px;
    }
  }
  &::after {
    content: '';
    position: absolute;
    background: url(${Person}) #f0ce00 no-repeat center center;
    background-size: 100px;
    border-radius: 50%;
    position: absolute;
    margin: auto;
    left: 0px;
    display: ${props => (props.icon === true ? 'static' : 'none')};
    right: 0px;
    bottom: -50px;
    z-index: 3;
    width: 200px;
    height: 200px;
    @media screen and (max-width: 425px) {
      width: 120px;
      height: 120px;
      background-size: 60px;
      bottom: -30px;
    }
  }
`;

export const Overlay = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0, 92, 169, 0.6);
`;
