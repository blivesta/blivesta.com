import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Contact from '.';

describe('Contact', () => {
  it('snapshot', () => {
    const tree = shallow(<Contact />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
