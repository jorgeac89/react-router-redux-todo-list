import React from 'react';
import { shallow } from 'enzyme';
import { If } from 'lib/react-conditionals';

describe('If library', () => {
  const reactElement = <div>React element</div>;

  it('renders the provided React element when the condition is true', () => {
    const shallowRender = shallow(<If check>{reactElement}</If>)
    expect(shallowRender).toMatchSnapshot();
  });

  it('does not renders the provided React element when the condition is false', () => {
    const shallowRender = shallow(<If check={false}>{reactElement}</If>)
    expect(shallowRender).toMatchSnapshot();
  });
});