import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/montserrat'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;

// The production build ships prerendered HTML (see scripts/prerender.mjs): reuse it.
// The dev server serves an empty root, so render from scratch there.
if (root.firstElementChild) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
