import React from 'react';
import { shallow } from 'enzyme';
import New from 'new';

describe('New component', () => {
  const NewComponent = New.component;

  it('renders correctly without text', () => {
    expect(
      shallow(
        <NewComponent
          todoText=""
          onChangeTodoText={() => {}}
          onAddTodo={() => {}}
        />
      )
    ).toMatchSnapshot();
  });

  it('renders correctly with text', () => {
    expect(
      shallow(
        <NewComponent
          todoText="Example todo"
          onChangeTodoText={() => {}}
          onAddTodo={() => {}}
        />
      )
    ).toMatchSnapshot();
  });
});
