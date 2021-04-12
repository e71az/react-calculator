import React from 'react';
import renderer from 'react-test-renderer';
import MainNavbar from '../NavBar';
import Home from '../Home';

describe('Renders Home component', () => {
  it('Should render the navbar and home components correctly ', () => {
    const tree = renderer
      .create(
        <>
          <MainNavbar />
          <Home />
        </>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
