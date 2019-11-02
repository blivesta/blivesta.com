import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import About from '.';

describe('About', () => {
  it('snapshot', () => {
    const tree = shallow(<About />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
