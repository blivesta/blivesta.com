import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '.';

describe('Button', () => {
  it('snapshot', () => {
    const tree = shallow(<Button>...</Button>);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
