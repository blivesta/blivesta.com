import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import List from '.';

describe('List', () => {
  it('snapshot', () => {
    const tree = shallow(
      <List
        items={[
          {
            title: 'foo',
            linkUrl: 'https://blivesta.com',
          },
          {
            title: 'bar',
          },
          {
            title: 'baz',
          },
        ]}
      />,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
