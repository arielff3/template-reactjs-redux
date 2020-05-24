import styled from 'styled-components';
import bg from '~/assets/Imgs/background.jpg';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  position: relative;
  align-items: center;
  margin: 0 !important;
`;

export const Left = styled.div`
  background: url(${bg}) no-repeat center right;
  width: 60%;
  height: 100vh;
  background-size: cover;
  @media screen and (max-width: 1024px) {
    width: 40%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Right = styled.div`
  width: 40%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  img {
    display: block;
    margin: 20px auto;
  }

  a {
    display: block;
    margin-left: 25px;
    text-decoration: none;
  }

  small {
    text-align: center;
    margin-top: 40px;
  }
`;

export const Form = styled.form`
  width: 90%;
  display: block;
  margin: 20px auto 10px auto;

  button {
    border: none;
    height: 44px;
    background-color: #005caa;
    color: #fff;
    border-radius: 0;
    width: 100%;
    text-transform: uppercase;
    position: relative;
    transition: all ease 0.3s;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #fff;
      width: 100%;
    }

    &:hover,
    &:focus,
    &:active,
    &:visited {
      color: #fff;
      background-color: rgba(0, 92, 170, 0.7);
      outline: none;
      transition: all ease 0.3s;
      &:before {
        background-color: rgba(0, 92, 170, 0.7);
        transition: all ease 0.3s;
      }
    }
  }

  fieldset {
    position: relative;
    padding: 0;
    margin: 5px;
    border: none;
    overflow: visible;
    margin-bottom: 20px;

    input {
      box-sizing: border-box;
      width: 100%;
      padding: 12px 10px 8px;
      border: none;
      border-radius: 0;
      box-shadow: none;
      border-bottom: 1px solid #ddd;
      font-size: 120%;
      outline: none;
      cursor: text;
      background: transparent;

      &::-webkit-input-placeholder {
        transition: color 300ms ease;
      }
      &:not(:focus)::-webkit-input-placeholder {
        color: transparent;
      }
    }

    hr {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 2px;
      border: none;
      background: #607d8b;
      font-size: 1px;
      will-change: transform, visibility;
      transition: all 200ms ease-out;
      transform: scaleX(0);
      visibility: hidden;
      z-index: 10;
    }
    input:focus ~ hr {
      transform: scaleX(1);
      visibility: visible;
    }

    p {
      position: absolute;
      top: 10px;
      left: 4px;
      font-size: 120%;
      transform-origin: 0 -150%;
      transition: transform 300ms ease;
      pointer-events: none;
    }
    input:focus ~ p,
    input:valid ~ p {
      transform: scale(0.5);
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
  width: 60%;
  @media screen and (max-width: 1024px) {
    width: 40%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
