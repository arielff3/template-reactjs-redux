import React from 'react';

import PropTypes from 'prop-types';
import { Container } from './styles';

export default function LineBar({ progress }) {
  const progressBaer = progress;
  return (
    <Container className="container">
      <div className="progressbar-container">
        <div
          className="progressbar-complete"
          style={{ width: `${progressBaer}%` }}
        >
          <div className="progressbar-liquid" />
        </div>
      </div>
    </Container>
  );
}

LineBar.propTypes = {
  progress: PropTypes.number,
};

LineBar.defaultProps = {
  progress: 100,
};
