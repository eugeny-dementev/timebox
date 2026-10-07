import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { renderPageHead } from '../seo.mjs';

export default function PageMetadata() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const template = document.createElement('template');
    template.innerHTML = renderPageHead(pathname);
    document.head.querySelectorAll('[data-page-meta]').forEach(element => element.remove());
    document.head.append(template.content);
  }, [pathname]);

  return null;
}
