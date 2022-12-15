import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import DisplayAllDevs from '../components/devs/displayAllDevs';
import store from '../store/configStore';

describe('Test Register page', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <DisplayAllDevs />
      </BrowserRouter>
    </Provider>,
  );
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('Developer list page has text Developers listing', () => {
    expect(tree.findByText('Developers listing')).toBeTruthy();
  });

});
