import React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Login from '../components/authentication/login';
import store from '../store/configStore';

describe('Test log in user page', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>,
  );

  it('renders correctly', () => {  
    expect(tree).toMatchSnapshot();
  });

  it('Log in page has submit button', () => {
    expect(tree.findByText('Submit')).toBeTruthy();
  });

  it('Log in page has a sign up link', () => {
    expect(tree.findByText('Sign up')).toBeTruthy();
  });
});
