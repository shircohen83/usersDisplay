import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import store from './configure-store'; // Correct the import statement
import { Container } from './container';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Container />
  </Provider>
);


