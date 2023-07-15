import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function clickMe(): string {
  return 'asdf';
}

root.render(
  <StrictMode>
    <App
      heading={'ReactJS'}
      paragraph={'React Code '}
      buttonText={'Jai React'}
      buttonClick={function (): string {
        console.log('clciked button in main');
        return '';
      }}
    />
  </StrictMode>
);
