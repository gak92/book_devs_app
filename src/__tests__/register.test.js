import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Register from '../components/authentication/register';
import store from '../store/configStore';

describe('Test Register page', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  );
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('Register page has Submit button', () => {
    expect(tree.findByText('Submit')).toBeTruthy();
  });

  it('Sign up page has a log in link', () => {
    expect(tree.findByText('Sign in')).toBeTruthy();
  });
});
