import { renderToString } from 'react-dom/server'
import App from './App.tsx'

// Used at build time by scripts/prerender.mjs to bake the page into dist/index.html
export const render = () => renderToString(<App />)
