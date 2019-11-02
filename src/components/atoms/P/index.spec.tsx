import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import P from '.';

describe('P', () => {
  it('snapshot', () => {
    const tree = shallow(
      <P>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。</P>,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
