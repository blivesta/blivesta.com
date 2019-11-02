import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Logo from '.';

describe('Logo', () => {
  it('snapshot', () => {
    const tree = shallow(<Logo />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
