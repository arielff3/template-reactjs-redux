import React from 'react';

import { Button } from './styles';

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return <Button onClick={() => scrollToTop()} />;
}
