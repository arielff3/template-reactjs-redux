import React from 'react';
import PropTypes from 'prop-types';
import { Container, Overlay } from './styles';

export default function Header({ bg, title, smallText, icon }) {
  return (
    <Container bg={bg} icon={icon}>
      <Overlay />
      <h1>{title}</h1>
      <small>{smallText}</small>
    </Container>
  );
}

Header.propTypes = {
  bg: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  smallText: PropTypes.string,
  icon: PropTypes.bool,
};

Header.defaultProps = {
  smallText: '',
  icon: true,
};
