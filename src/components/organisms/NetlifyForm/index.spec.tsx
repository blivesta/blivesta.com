import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NetlifyForm from '.';

describe('NetlifyForm', () => {
  it('snapshot', () => {
    const tree = shallow(<NetlifyForm />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
