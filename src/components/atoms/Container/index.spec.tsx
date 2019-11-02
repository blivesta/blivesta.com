import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Container from '.';

describe('Container', () => {
  it('snapshot', () => {
    const tree = shallow(<Container>...</Container>);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
