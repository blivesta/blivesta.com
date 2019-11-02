import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Input from '.';

describe('Input', () => {
  it('snapshot', () => {
    const tree = shallow(<Input />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
