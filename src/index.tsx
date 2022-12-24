/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './store/store';
import { initDB } from './db/indexedDB';

const root = document.getElementById('react-root');
initDB();

if (root)
  createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
