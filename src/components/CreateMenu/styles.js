import styled from 'styled-components';

export const Queries = styled.section`
  display: flex;
  padding: 60px 40px;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 40px;
  }
  @media screen and (max-width: 425px) {
    padding-top: 50px;
  }

  hr {
    width: 90px;
    border: 2px solid #fff100;
    margin-left: 15px;
  }

  .cardContainer {
    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }

  div {
    margin-bottom: 10px;
  }

  h2 {
    font-weight: bold;
    font-size: 38px;
    margin-top: 13px;
    margin-left: 15px;
    @media screen and (max-width: 1024px) {
      float: left;
    }
  }

  .search {
    margin-top: 13px;
    opacity: 0.8;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`;
