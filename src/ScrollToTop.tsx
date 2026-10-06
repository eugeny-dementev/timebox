import { useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    // Let the browser restore the reading position on Back/Forward and reload.
    if (navigationType === 'POP') return;

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, navigationType]);

  return null;
}
