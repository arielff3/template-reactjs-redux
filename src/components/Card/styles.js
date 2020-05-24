import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrow from '~/assets/Imgs/arrow.png';

export const LinkSty = styled(Link).attrs(props => ({
  to: props.to,
}))`
  text-decoration: none;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.1);
  width: 600px;
  padding: 5px 40px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;

  @media screen and (max-width: 655px) {
    width: 450px;
  }

  @media screen and (max-width: 425px) {
    width: 310px;
  }

  &:hover {
    background-color: #f0ce00;
  }

  &::after {
    content: '';
    position: absolute;
    background: url(${arrow}) no-repeat center center;
    position: absolute;
    margin: auto;
    right: 20px;
    top: 0px;
    bottom: 0px;
    width: 15px;
    height: 15px;
  }

  img {
    width: 50px;
    margin-right: 20px;
    @media screen and (max-width: 320px) {
      width: 30px;
    }
  }

  h3 {
    font-weight: bold;
    font-size: 20px;
    color: #183883;

    @media screen and (max-width: 425px) {
      font-size: 15px;
    }
  }
`;
