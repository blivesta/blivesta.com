import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Title from '.';

describe('Title', () => {
  it('snapshot', () => {
    const tree = shallow(<Title>...</Title>);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
