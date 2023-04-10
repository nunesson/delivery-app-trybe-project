import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Provider from '../Context/myProvider';

function withRouter(component, history) {
  return (
    <Provider>
      <Router history={ history }>
        {component}
      </Router>
    </Provider>
  );
}

export default function renderWithRouter(
  component,
  {
    history = createMemoryHistory({ initialEntries: ['/'] }),
  } = {},
) {
  return {
    ...render(withRouter(component, history)),
    history,
  };
}
