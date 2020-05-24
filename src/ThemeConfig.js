import React, { useState, useEffect, useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';
import Proptypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { redeok, darkTheme } from './theme/theme';
import fav from '~/assets/favicon.ico';

export function useTheme() {
  const theme = useContext(ThemeContext);
  return theme || {};
}

function ThemeConfig({ children }) {
  const [temp, setTemp] = useState({});

  useEffect(() => {
    const theme = () => {
      const url = window.location.host;

      switch (url) {
        case 'localhost:3000':
          setTemp(redeok);
          break;

        case '10.0.0.2:3000':
          setTemp(darkTheme);
          break;

        default:
          break;
      }
    };
    theme();
  });

  return (
    <ThemeProvider theme={temp}>
      {children}
      <Helmet>
        <link rel="icon" type="image/png" href={fav} sizes="16x16" />
      </Helmet>
    </ThemeProvider>
  );
}

export default ThemeConfig;

ThemeConfig.propTypes = {
  children: Proptypes.arrayOf(Proptypes.object).isRequired,
};
