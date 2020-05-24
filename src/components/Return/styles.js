import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkSty = styled(Link).attrs(props => ({
  to: props.to,
}))`
  div {
    background: #f0ce00;
    padding: 1px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
  }
`;
