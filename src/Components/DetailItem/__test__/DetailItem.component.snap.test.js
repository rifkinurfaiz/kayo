import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import DetailItem from '../DetailItem.component';

describe('#DetailItemComponent', () => {
  it('render with font size of amount is 12', () => {
    const props = {
      month: 'January',
      accounts: [{
        id: 'jenius',
        name: 'Jenius',
        amount: 'Rp1000.000'
      }]
    };

    expect(shallow(<DetailItem {...props} />)).toMatchSnapshot();
  });

  it('render with font size of amount is 14', () => {
    const props = {
      month: 'January',
      accounts: [{
        id: 'jenius',
        name: 'Jenius',
        amount: 'Rp1000.000.000.000'
      }]
    };

    expect(shallow(<DetailItem {...props} />)).toMatchSnapshot();
  });
});