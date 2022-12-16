import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Reservations from '../components/reservations';
import store from '../store/configStore';

describe('Test Register page', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Reservations />
      </BrowserRouter>
    </Provider>,
  );
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('Developer list page has text Developers listing', () => {
    expect(tree.findByText('reservations')).toBeTruthy();
  });
});
