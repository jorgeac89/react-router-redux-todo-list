import React from 'react';
import { shallow } from 'enzyme';
import List from 'list';
import { todos1To10 } from 'mocks/responses'

describe('List component', () => {
  const ListComponent = List.component;

  it('renders correctly during fetching data', () => {
    expect(shallow(
      <ListComponent
        fetching
      />)).toMatchSnapshot();
  });

  it('renders correctly without elements to display', () => {
    expect(shallow(
      <ListComponent
        todos={[]}
        currentPage={0}
        pageCount={0}
        fetching={false}
        fetched
      />)).toMatchSnapshot();
  });

  it('renders correctly with elements to display', () => {
    expect(shallow(
      <ListComponent
        todos={todos1To10.response}
        currentPage={0}
        pageCount={1}
        fetching={false}
        fetched
      />)).toMatchSnapshot();
  });

  it('renders correctly when an error occurs', () => {
    expect(shallow(
      <ListComponent
        error="Error message."
      />)).toMatchSnapshot();
  });
});
