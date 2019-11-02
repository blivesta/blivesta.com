import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Textarea from '.';

describe('Textarea', () => {
  it('snapshot', () => {
    const tree = shallow(<Textarea />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
