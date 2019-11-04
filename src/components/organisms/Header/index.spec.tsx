import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '.';

describe('Header', () => {
  it('snapshot', () => {
    const tree = shallow(<Header siteTitle="blivesta" pageLocation="/" />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
