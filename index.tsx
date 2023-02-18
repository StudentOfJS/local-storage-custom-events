import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from './store';

import App from './App';

createStore<number>({
  initialState: 5,
  storeKey: 'count',
});
createStore<string>({
  initialState: 'Rod',
  storeKey: 'name',
  resetOnUnmount: true,
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
