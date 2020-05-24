/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = useSelector(state => state.auth);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/logged" />;
  }

  return <Route {...rest} component={Component} />;
}
RouteWrapper.propTypes = {
  component: PropTypes.func.isRequired,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
