import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import InputItem from '.';

describe('InputItem', () => {
  it('snapshot', () => {
    const tree = shallow(<InputItem title="title">...</InputItem>);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
