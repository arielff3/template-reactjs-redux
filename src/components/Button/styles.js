import styled from 'styled-components';

export const ButtonSty = styled.button`
  border: none;
  height: 44px;
  background-color: #005caa;
  color: #fff;
  border-radius: 20px;
  width: 100%;
  text-transform: uppercase;
  position: relative;
  transition: all ease 0.3s;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
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
`;
