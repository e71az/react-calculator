import React from 'react';
import renderer from 'react-test-renderer';
import MainNavbar from '../components/NavBar';
import App from '../components/App';

describe('Renders App component', () => {
  it('Should render the navbar and app components correctly ', () => {
    const tree = renderer
      .create(
        <>
          <MainNavbar />
          <App />
        </>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
