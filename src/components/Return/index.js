import React from 'react';

import PropTypes from 'prop-types';

import { LinkSty } from './styles';
import arrow from '~/assets/Imgs/arrow2.png';

export default function Return({ to }) {
  return (
    <LinkSty to={to}>
      {' '}
      <div>
        <img src={arrow} alt="seta" />
      </div>{' '}
    </LinkSty>
  );
}

Return.propTypes = {
  to: PropTypes.string.isRequired,
};
