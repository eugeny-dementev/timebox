import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { basename } from './options.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');

(async () => {
  const routesToPrerender = fs
    .readdirSync(toAbsolute('src/pages'))
    .map((file) => file.replace(/\.tsx$/, '').toLowerCase())
    .map((path) => path === 'about' ? '/' : path)

  const render = (await import('./dist/server/entry-server.js')).default;
  // pre-render each route...
  for (const url of routesToPrerender) {
    const fullUrl = path.join('/', basename, url);
    const appHtml = render(fullUrl);

    const html = template.replace(`<!--app-html-->`, appHtml);

    const filePath = path.resolve('dist', 'static', `${url === '/' ? 'index' : url}.html`);
    fs.writeFileSync(toAbsolute(filePath), html);
  }
})();
