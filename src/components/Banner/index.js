import React from 'react';

import PropTypes from 'prop-types';

import { Container, Img } from './styles';

export default function Banner({ bg, img, alt }) {
  return (
    <Container bg={bg}>
      <Img img={img} alt={alt} />
    </Container>
  );
}

Banner.propTypes = {
  bg: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
};
