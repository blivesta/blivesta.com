import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormItem from '.';

describe('FormItem', () => {
  it('snapshot', () => {
    const tree = shallow(<FormItem title="title">...</FormItem>);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
