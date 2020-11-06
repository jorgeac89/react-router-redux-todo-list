import React from 'react';
import { shallow } from 'enzyme';
import BottomBar from 'common/bottom-bar';

describe('Bottom bar component', () => {
  const BottomBarComponent = BottomBar.component;

  it('renders correctly', () => {
    expect(shallow(<BottomBarComponent />)).toMatchSnapshot();
  });
});
