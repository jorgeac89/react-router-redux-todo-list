import React from 'react';
import { shallow } from 'enzyme';
import { IfNot } from 'lib/react-conditionals';

describe('IfNot library', () => {
  const reactElement = <div>React element</div>;

  it('renders the provided React element when the condition is false', () => {
  const shallowRender = shallow(<IfNot check={false}>{reactElement}</IfNot>)
    expect(shallowRender).toMatchSnapshot();
  });

  it('does not renders the provided React element when the condition is true', () => {
  const shallowRender = shallow(<IfNot check>{reactElement}</IfNot>)
    expect(shallowRender).toMatchSnapshot();
  });
});