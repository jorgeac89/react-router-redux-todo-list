import React from 'react';
import { shallow } from 'enzyme';
import Header from 'common/header';

describe('Header component', () => {
  const HeaderComponent = Header.component;

  it('renders correctly', () => {
    expect(shallow(<HeaderComponent />)).toMatchSnapshot();
  });
});
