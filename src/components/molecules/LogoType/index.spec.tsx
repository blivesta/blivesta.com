import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LogoType from '.';

describe('LogoType', () => {
  it('snapshot', () => {
    const tree = shallow(<LogoType siteTitle="blivesta" />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
