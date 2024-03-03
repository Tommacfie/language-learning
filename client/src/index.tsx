import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { SERVERADDRESS } from '../config.js';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: SERVERADDRESS,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
