import React from 'react';

import Proptypes from 'prop-types';

import { Container, LinkSty } from './styles';

export default function Card({ icon, title, router }) {
  return (
    <LinkSty to={router}>
      <Container>
        <img src={icon} alt="icon" />
        <h3>{title}</h3>
      </Container>
    </LinkSty>
  );
}

Card.propTypes = {
  icon: Proptypes.node.isRequired,
  title: Proptypes.string.isRequired,
  router: Proptypes.string,
};

Card.defaultProps = {
  router: '',
};
