import React from 'react';

import PropTypes from 'prop-types';
import { ButtonSty } from './styles';

export default function Button({ children, type, onClick, className }) {
  return (
    <ButtonSty className={className} onClick={onClick} type={type}>
      {children}
    </ButtonSty>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};
