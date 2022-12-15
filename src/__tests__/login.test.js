import React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Login from '../components/authentication/login';
import store from '../store/configStore';

describe('Test log in user', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  // it('Log in page has submit button', () => {
  //   const login = render(
  //     <>
  //       <Provider store={store}>
  //         <BrowserRouter>
  //           <Login />
  //         </BrowserRouter>
  //       </Provider>
  //     </>,
  //   );

  //   expect(login.findByText('Submit')).toBeTruthy();
  // });

  // it('Log in page has a sign up link', () => {
  //   const login = render(
  //     <>
  //       <Provider store={store}>
  //         <BrowserRouter>
  //           <Login />
  //         </BrowserRouter>
  //       </Provider>
  //     </>,
  //   );

  //   expect(login.findByText('Sign up')).toBeTruthy();
  // });
});
