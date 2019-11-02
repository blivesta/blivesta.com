import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SubTitle from '.';

describe('SubTitle', () => {
  it('snapshot', () => {
    const tree = shallow(<SubTitle>...</SubTitle>);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
