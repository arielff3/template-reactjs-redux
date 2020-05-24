import styled from 'styled-components';

export const Container = styled.section`
  background-color: #fff;
  padding: 60px 50px;
  margin-top: 20px;
  hr {
    width: 90px;
    border: 2px solid #fff100;
    margin-left: 15px;
    @media screen and (max-width: 425px) {
      margin-left: 0px;
    }
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  h2 {
    font-weight: bold;
    font-size: 32px;
    margin-top: 13px;
    margin-left: 15px;
    margin-bottom: 25px;

    @media screen and (max-width: 425px) {
      margin-left: 0px;
      font-size: 27px;
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;

    @media screen and (max-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 581px) {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-around;

      @media screen and (max-width: 1024px) {
        justify-content: center;
        margin: 20px 0;
      }
      @media screen and (max-width: 425px) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      span {
        font-weight: bold;
        font-size: 18px;
        color: #183883;
      }

      div:first-child {
        background: #f0ce00;
        border-radius: 50%;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
      }

      div:last-child {
        width: 180px;
        @media screen and (min-width: 1000px) {
          width: 105px;
        }
      }

      img {
        padding: 10px;
        width: 55px;
        height: 55px;
      }
    }
  }
`;
