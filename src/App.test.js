import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';

it('renders without crashing', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>,
  );
});
