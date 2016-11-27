import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import BulletGraph from '../src/BulletGraph';

describe("BulletGraph", function() {
  it("renders correctly", function() {
    const bullet = shallow(<BulletGraph />);
    expect(bullet.find('rect')).to.have.length(3);
    expect(bullet.find('line')).to.have.length(2);
  });
});
