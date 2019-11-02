import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFound from '.';

describe('NotFound', () => {
  it('snapshot', () => {
    const tree = shallow(<NotFound />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
