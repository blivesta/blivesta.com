import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Masthead from '.';

describe('Masthead', () => {
  it('snapshot', () => {
    const tree = shallow(<Masthead siteTitle="blivesta" description="description" />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
