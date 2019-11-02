import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '.';

describe('Footer', () => {
  it('snapshot', () => {
    const tree = shallow(<Footer siteTitle="blivesta" pageLocation="/" />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
