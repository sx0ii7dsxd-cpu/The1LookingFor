import { StrictMode } from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('box'));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
