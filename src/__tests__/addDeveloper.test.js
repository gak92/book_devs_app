import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AddDeveloper from '../components/devs/addDeveloper';
import store from '../store/configStore';

describe('Test Register page', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <AddDeveloper />
      </BrowserRouter>
    </Provider>,
  );
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('Add Developer page has button Add Developer', () => {
    expect(tree.findByText('Add Developer')).toBeTruthy();
  });
});
