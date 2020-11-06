import React from 'react';
import { shallow } from 'enzyme';
import Error404 from 'error-404';

describe('Error404 component', () => {
  const Error404Component = Error404.component;

  it('renders correctly', () => {
    expect(shallow(<Error404Component />)).toMatchSnapshot();
  });
});
