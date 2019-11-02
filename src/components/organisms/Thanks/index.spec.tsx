import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Thanks from '.';

describe('Thanks', () => {
  it('snapshot', () => {
    const tree = shallow(<Thanks />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
