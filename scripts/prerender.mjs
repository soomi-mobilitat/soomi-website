// Renders the app to static HTML after `vite build`, so the page paints before the JS bundle runs.
// Expects the client build in dist/ and the server build (src/entry-server.tsx) in dist-ssr/.
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const distSsr = path.join(root, 'dist-ssr');
const placeholder = '<!--app-html-->';

const { render } = await import(pathToFileURL(path.join(distSsr, 'entry-server.js')).href);

const indexPath = path.join(dist, 'index.html');
let html = await fs.readFile(indexPath, 'utf8');
if (!html.includes(placeholder)) throw new Error(`${placeholder} not found in dist/index.html`);
html = html.replace(placeholder, render());

// Preload the Latin Montserrat file: otherwise it is only discovered once the CSS is parsed.
// Its name is hashed by Vite, so it can't be written in index.html by hand.
const font = (await fs.readdir(path.join(dist, 'assets'))).find((f) =>
  /^montserrat-latin-wght-normal-.+\.woff2$/.test(f)
);
if (!font) throw new Error('Montserrat latin font not found in dist/assets');
const charset = '<meta charset="UTF-8" />';
if (!html.includes(charset)) throw new Error('charset meta not found in dist/index.html');
html = html.replace(
  charset,
  `${charset}\n    <link rel="preload" as="font" type="font/woff2" href="/assets/${font}" crossorigin />`
);

// Inline the stylesheet: it is small and otherwise blocks the first paint for an extra request.
// Its url()s are absolute (/assets/...), so they keep working from inside index.html.
const cssLink = html.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (!cssLink) throw new Error('Stylesheet link not found in dist/index.html');
const css = await fs.readFile(path.join(dist, cssLink[1]), 'utf8');
html = html.replace(cssLink[0], () => `<style>${css}</style>`);

await fs.writeFile(indexPath, html);
await fs.rm(distSsr, { recursive: true, force: true });
console.log(`Prerendered ${path.relative(root, indexPath)} (${(html.length / 1024).toFixed(1)} kB)`);
