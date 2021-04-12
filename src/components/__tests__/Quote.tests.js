import React from 'react';
import renderer from 'react-test-renderer';
import MainNavbar from '../NavBar';
import Quote from '../Quote';

describe('Renders Quote component', () => {
  it('Should render the navbar and quote components correctly ', () => {
    const tree = renderer
      .create(
        <>
          <MainNavbar />
          <Quote />
        </>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
