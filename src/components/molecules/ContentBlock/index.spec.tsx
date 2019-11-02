import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ContentBlock from '.';

describe('ContentBlock', () => {
  it('snapshot', () => {
    const tree = shallow(<ContentBlock>...</ContentBlock>);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
