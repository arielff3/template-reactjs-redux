import styled from 'styled-components';

export const Container = styled.div`
  .nav {
    z-index: 10;
    height: auto;
    width: 100%;
    background-color: #005ca9;
    position: relative;
    padding: 0px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-header {
      display: inline;

      .nav-title {
        display: inline-block;
        color: #fff;
        padding: 10px 10px 10px 10px;
        width: 280px;
      }
    }
    .nav-btn {
      display: none;
    }

    .nav-links {
      display: inline;
      float: right;
      font-size: 18px;

      a {
        display: inline-flex;
        padding: 1px 20px;
        text-decoration: none;
        border-radius: 30px;
        font-weight: bold;
        font-size: 16px;
        line-height: 21px;
        color: #fff;
        transition: 0.7s;
        margin-right: 10px;
        @media screen and (max-width: 500px) {
          margin: 4px 0px;
        }
      }

      .back {
        display: inline-flex;
        border: none;
        padding: 1px 20px;
        text-decoration: none;
        background: #f0ce00;
        border-radius: 30px;
        font-weight: bold;
        font-size: 16px;
        line-height: 21px;
        color: #183883;
        transition: 0.7s;
        margin-right: 20px;
        &:hover {
          background-color: #f0ce00;
        }
        @media screen and (max-width: 500px) {
          margin: 10px 0px;
        }
      }
      div {
        display: inline-flex;
        align-items: center;
        flex-direction: column;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        span {
          font-weight: bold;
          font-size: 18px;
          text-transform: uppercase;
        }
      }
    }

    #nav-check {
      display: none;
    }

    @media (max-width: 1145px) {
      .nav-btn {
        display: inline-block;
        position: absolute;
        right: 0px;
        top: 14px;
      }
      .nav-btn > label {
        display: inline-block;
        width: 50px;
        height: 50px;
        padding: 13px;
      }
      .nav-btn > label:hover,
      .nav #nav-check:checked ~ .nav-btn > label {
        background-color: #054e8c;
      }
      .nav-btn > label > span {
        display: block;
        width: 25px;
        height: 10px;
        border-top: 2px solid #eee;
      }
      .nav-links {
        position: absolute;
        display: flex;
        width: 100%;
        background-color: #333;
        height: 0px;
        transition: all 0.3s ease-in;
        overflow-y: hidden;
        top: 82px;
        padding: 20px;
        left: 0px;
        flex-direction: column;
        align-items: center;
        a {
          width: 30%;
          margin: 0;
          margin-bottom: 10px;
          justify-content: center;
          @media screen and (max-width: 500px) {
            width: 50%;
          }
        }
      }
      #nav-check:not(:checked) ~ .nav-links {
        height: 0px;
        padding: 0px;
      }
      #nav-check:checked ~ .nav-links {
        height: calc(100vh - 50px);
        overflow-y: auto;
      }
    }
  }
`;
