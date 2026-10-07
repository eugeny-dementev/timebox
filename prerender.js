import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { basename } from './options.js';
import { seoPages, renderPageHead, renderSitemap } from './seo.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');

(async () => {
  const render = (await import('./dist/server/entry-server.js')).default;
  // pre-render each route...
  for (const { path: url } of seoPages) {
    // URLs always use forward slashes, including during Windows builds.
    const fullUrl = `${basename}${url === '/' ? '/' : url}`;
    const appHtml = render(fullUrl);

    const html = template
      .replace(`<!--app-html-->`, appHtml)
      .replace(`<!--app-head-->`, renderPageHead(fullUrl));

    const filePath = path.resolve(__dirname, 'dist', 'static', `${url === '/' ? 'index' : url.slice(1)}.html`);
    fs.writeFileSync(toAbsolute(filePath), html);
  }
  fs.writeFileSync(toAbsolute('dist/static/sitemap.xml'), renderSitemap());
})();
