import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {Provider as TribeProvider} from '@tribeplatform/react-sdk'

import { store } from './app/state/store';
import Routes from './routing';

import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TribeProvider config={{
          accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFQUDo6cnFnaFQ1WmZNajRlIiwibmV0d29ya0lkIjoiRmtNS3F4ZTRMdCIsInRva2VuVHlwZSI6IkxJTUlURUQiLCJlbnRpdHlJZCI6IkZrTUtxeGU0THQiLCJwZXJtaXNzaW9uQ29udGV4dCI6Ik5FVFdPUksiLCJwZXJtaXNzaW9ucyI6WyIqIl0sImlhdCI6MTY2MTE2ODc4MCwiZXhwIjoxNjYzNzYwNzgwfQ.anvoIkNLNs92QCX_73vGgoHA2YcMOuBBqvLWYuQUfHg',
          baseUrl: 'https://app.tribe.so/graphql',
          networkDomain: 'https://creative-axe.tribeplatform.com'
        }}
        >
      <Provider store={store}>
        <Routes />
      </Provider>
    </TribeProvider>
    
  </React.StrictMode>,
);
